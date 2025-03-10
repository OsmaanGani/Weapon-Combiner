import * as Minecraft from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

export function weapon_onhit() {
  Minecraft.system.runInterval(() => {
    Minecraft.world.getAllPlayers().forEach((player: Minecraft.Player) => {
      let onHitCooldown = player.getDynamicProperty(`on_hit_cooldown`) as number;
      if (onHitCooldown === undefined) {
        player.setDynamicProperty(`on_hit_cooldown`, 0);
      }
      if (onHitCooldown > 0) {
        player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
      }
      if (onHitCooldown > 60) {
        player.setDynamicProperty(`on_hit_cooldown`, 0);
      }
    });
  });

  Minecraft.world.afterEvents.entityHitEntity.subscribe((event) => {
    let player = event.damagingEntity as Minecraft.Player;
    if (player.typeId !== "minecraft:player") return;

    let hurtEntity = event.hitEntity as Minecraft.Entity;
    let onHitCooldown = player.getDynamicProperty(`on_hit_cooldown`) as number;
    let { x, y, z } = player.getViewDirection();

    let playerHeld = (player.getComponent(`equippable`) as Minecraft.EntityEquippableComponent).getEquipment(
      Minecraft.EquipmentSlot.Mainhand
    );
    if (playerHeld === undefined) return;
    let currentLore = playerHeld.getLore();

    if (onHitCooldown === 0) {
      switch (true) {
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] WEAK Foes On Hit"):
          hurtEntity.addEffect(`weakness`, 60, { amplifier: 4 });
          Minecraft.world.playSound(`break.amethyst_block`, hurtEntity.location);
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] STUN Foes On Hit"):
          hurtEntity.addEffect(`slowness`, 30, { amplifier: 4 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] Effect Foes With DARKNESS"):
          hurtEntity.addEffect(`darkness`, 50, { amplifier: 4 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] Effect Foes With FATAL POISON"):
          hurtEntity.addEffect(`fatal_poison`, 50, { amplifier: 4 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] Cause BLINDNESS On Hit"):
          hurtEntity.addEffect(`blindness`, 40, { amplifier: 4 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] Cause VOID DAMAGE On Hit"):
          Minecraft.system.runTimeout(() => {
            hurtEntity.runCommand(`/damage @s 4 void entity ${player.nameTag}`);
          }, 9);
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] Cause LEVITATION On Hit"):
          hurtEntity.addEffect(`levitation`, 20, { amplifier: 2 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] Gain INVINCIBILITY (2s) On Hit"):
          player.addEffect(`resistance`, 40, { amplifier: 200 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] Set Foes On FIRE"):
          hurtEntity.setOnFire(4);
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] BOUNCE on hit"):
          player.applyKnockback(x, y, 0, 1);
          Minecraft.system.runTimeout(() => {
            player.addEffect(`slow_falling`, 40, { amplifier: 2 });
          }, 17);
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] STRENGTH buff on hit"):
          player.addEffect(`strength`, 30, { amplifier: 0 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] SLOW Foes on hit"):
          hurtEntity.addEffect(`slowness`, 60, { amplifier: 2 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] Detonate A SMALL EXPLOSION"):
          player.runCommand(`/scriptevent beyond:knockback`);
          hurtEntity.dimension.spawnParticle(`minecraft:camera_shoot_explosion`, player.location);
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] Instantly HEAL Self On Hit"):
          player.addEffect(`instant_health`, 1, { amplifier: 0 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case currentLore && currentLore.some((line: string) => line === "§r§d[On-Hit] Inflict WITHER Effect"):
          hurtEntity.addEffect(`wither`, 60, { amplifier: 0 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
      }
    }
  });

  //Script-Events
  Minecraft.system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity: player }) => {
    if (!player || id !== "beyond:knockback") return;

    const entities = player.dimension.getEntities({ location: player.location, maxDistance: 3 });

    for (const entity of entities) {
      if (entity.id === player.id) continue;
      const { x, z } = Vector.subtract(entity.location, player.location);
      entity?.applyKnockback(x, z, 0.4, 0.6);
    }
  });
}

export class Vector {
  static multiply(vectorA: Minecraft.Vector3, value: number | Minecraft.Vector3): Minecraft.Vector3 {
    return {
      x: vectorA.x * (typeof value === "number" ? value : value.x),
      y: vectorA.y * (typeof value === "number" ? value : value.y),
      z: vectorA.z * (typeof value === "number" ? value : value.z),
    };
  }

  static add(vectorA: Minecraft.Vector3, vectorB: Minecraft.Vector3): Minecraft.Vector3 {
    return {
      x: vectorA.x + (vectorB.x ?? 0),
      y: vectorA.y + (vectorB.y ?? 0),
      z: vectorA.z + (vectorB.z ?? 0),
    };
  }

  static subtract(vectorA: Minecraft.Vector3, vectorB: Minecraft.Vector3): Minecraft.Vector3 {
    return {
      x: vectorA.x - (vectorB.x ?? 0),
      y: vectorA.y - (vectorB.y ?? 0),
      z: vectorA.z - (vectorB.z ?? 0),
    };
  }

  static distance(vectorA: Minecraft.Vector3, vectorB: Minecraft.Vector3): number {
    return Math.sqrt(
      Math.pow(vectorA.x - vectorB.x, 2) + Math.pow(vectorA.y - vectorB.y, 2) + Math.pow(vectorA.z - vectorB.z, 2)
    );
  }
}
