import * as Minecraft from "@minecraft/server";

export function weapon_passive() {
  Minecraft.system.runInterval(() => {
    Minecraft.world.getAllPlayers().forEach((player) => {
      let playerHeld = (player.getComponent(`equippable`) as Minecraft.EntityEquippableComponent).getEquipment(
        Minecraft.EquipmentSlot.Mainhand
      );
      if (playerHeld == undefined) return;
      let currentLore = playerHeld.getLore();
      let passiveCooldown = player.getDynamicProperty(`passive_ability_cooldown`) || 0;
      let passivekncok = player.getDynamicProperty(`passive_ability_knock`) || 0;
      let passiveSpeed = player.getDynamicProperty(`passive_ability_speed`) || 0;
      let { x, y, z } = player.getViewDirection();

      if (!passiveCooldown) {
        player.setDynamicProperty(`passive_ability_cooldown`, 0);
      }
      if (!passivekncok) {
        player.setDynamicProperty(`passive_ability_knock`, 0);
      }
      if (!passiveSpeed) {
        player.setDynamicProperty(`passive_ability_speed`, 0);
      }
      if (typeof passivekncok == `number` && passivekncok > 0) {
        player.setDynamicProperty(`passive_ability_knock`, passivekncok + 1);
      }
      if (typeof passiveSpeed == `number` && passiveSpeed > 0) {
        player.setDynamicProperty(`passive_ability_speed`, passiveSpeed + 1);
      }

      if (typeof passiveCooldown == `number`) {
        switch (true) {
          case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] REGEN Buff When Holding"):
            player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
            if (passiveCooldown == 1) {
              player.addEffect(`regeneration`, 20, { amplifier: 2 });
            }
            break;
          case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] SPEED Buff When Holding"):
            player.addEffect(`speed`, 20, { amplifier: 1 });
            break;
          case currentLore &&
            currentLore.some((line: string) => line === "§r§d[Passive] Small SPEED Buff When Holding"):
            player.addEffect(`speed`, 20, { amplifier: 0 });
            break;
          case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] POISON AND WITHER Removal"):
            player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
            if (passiveCooldown == 1) {
              player.runCommand(`/effect @s wither 0 0 true`);
              player.runCommand(`/effect @s poison 0 0 true`);
            }
            break;
          case currentLore &&
            currentLore.some((line: string) => line === "§r§d[Passive] Small RESISTANCE Buff When Holding"):
            player.addEffect(`resistance`, 20, { amplifier: 1 });
            break;
          case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] Small JUMPBOOST Buff"):
            player.addEffect(`jump_boost`, 20, { amplifier: 0 });
            break;
          case currentLore &&
            currentLore.some((line: string) => line === "§r§d[Passive] IMMUNITY to ALL Debuffs When Holding"):
            player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
            if (passiveCooldown == 1) {
              player.runCommand(`/effect @s wither 0 0 true`);
              player.runCommand(`/effect @s poison 0 0 true`);
              player.runCommand(`/effect @s blindness 0 0 true`);
              player.runCommand(`/effect @s darkness 0 0 true`);
              player.runCommand(`/effect @s hunger 0 0 true`);
              player.runCommand(`/effect @s mining_fatigue 0 0 true`);
              player.runCommand(`/effect @s nausea 0 0 true`);
              player.runCommand(`/effect @s slowness 0 0 true`);
              player.runCommand(`/effect @s weakness 0 0 true`);
            }
            break;
          case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] FIRE Resistance When Holding"):
            player.addEffect(`fire_resistance`, 20, { amplifier: 0 });
            break;
          case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] DAMAGE ENDERMAN around you"):
            player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
            player.dimension.getEntities({ maxDistance: 6, location: player.location }).forEach((entity) => {
              if (entity.typeId == "minecraft:enderman") {
                if (passiveCooldown == 1) {
                  entity.runCommand(`/damage @s 15`);
                }
              }
            });
            break;
          case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] JUMP Boost When Holding"):
            player.addEffect(`jump_boost`, 20, { amplifier: 1 });
            break;
          case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] SWIMMING buff When Holding"):
            if (player.isSwimming) {
              player.applyKnockback(x, z, 0.6, 0);
            }
            break;
          case currentLore &&
            currentLore.some((line: string) => line === "§r§d[Passive] EXPLOSION Resistance When Holding"):
            player.addEffect(`resistance`, 20, { amplifier: 3 });
            break;
          case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] ABSORPTION buff When Holding"):
            player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
            if (passiveCooldown == 1) {
              player.addEffect(`absorption`, 20, { amplifier: 1 });
            }
            break;
          case currentLore &&
            currentLore.some((line: string) => line === "§r§d[Passive] WITHER Resistance When Holding"):
            if (passiveCooldown == 1) {
              player.runCommand(`/effect @s wither 0 0 true`);
            }
            break;

          case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] SPEED buff When Holding"):
            player.addEffect(`speed`, 20, { amplifier: 2 });
            break;
          case currentLore &&
            currentLore.some((line: string) => line === "§r§d[Passive] SLOW Nearby Enemies Over Time"):
            player.dimension.getEntities({ maxDistance: 4, location: player.location }).forEach((enity) => {
              if (enity.nameTag != player.name) {
                enity.addEffect(`slowness`, 8, { amplifier: 0 });
              }
            });
            break;
        }
      }
      if (typeof passiveCooldown == `number` && typeof passiveSpeed == `number` && typeof passivekncok == `number`) {
        if (passiveCooldown > 30) {
          player.setDynamicProperty(`passive_ability_cooldown`, 0);
        }
        if (passiveSpeed > 80) {
          player.setDynamicProperty(`passive_ability_speed`, 0);
        }
        if (passivekncok > 160) {
          player.setDynamicProperty(`passive_ability_knock`, 0);
        }
      }
    });
  });

  Minecraft.world.afterEvents.entityHitEntity.subscribe((event) => {
    let player = event.hitEntity;
    if (player.typeId != "minecraft:player") return;

    let hurtEntity = event.damagingEntity;
    let playerHeld = (player.getComponent(`equippable`) as Minecraft.EntityEquippableComponent).getEquipment(
      Minecraft.EquipmentSlot.Mainhand
    );
    if (playerHeld == undefined) return;
    let currentLore = playerHeld.getLore();

    let passivekncok = player.getDynamicProperty(`passive_ability_knock`);
    let speedkncok = player.getDynamicProperty(`passive_ability_speed`);

    if (player.typeId != "minecraft:player") return;

    switch (true) {
      case currentLore &&
        currentLore.some((line: string) => line === "§r§d[Passive] KNOCK foes that hit you [cd 8sec]"):
        if (playerHeld && passivekncok == 0) {
          player.runCommand(`/scriptevent beyond:knockback`);
          player.setDynamicProperty(`passive_ability_knock`, passivekncok + 1);
        }
        break;
      case currentLore &&
        currentLore.some((line: string) => line === "§r§d[Passive] High Speed Buff when hurt [cd 4sec]"):
        if (playerHeld && speedkncok == 0) {
          player.setDynamicProperty(`passive_ability_speed`, speedkncok + 1);
          player.addEffect(`speed`, 40, { amplifier: 3 });
        }
        break;
    }
  });
  Minecraft.world.afterEvents.entityHitEntity.subscribe((event) => {
    let player = event.damagingEntity;
    if (player.typeId != "minecraft:player") return;

    let hurtEntity = event.hitEntity;
    let playerHeld = (player.getComponent(`equippable`) as Minecraft.EntityEquippableComponent).getEquipment(
      Minecraft.EquipmentSlot.Mainhand
    );
    if (playerHeld == undefined) return;
    let currentLore = playerHeld.getLore();

    if (player.typeId != "minecraft:player") return;

    switch (true) {
      case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] Increased Damage While Poisoned"):
        if (
          player.getEffect("minecraft:wither") ||
          player.getEffect("minecraft:poison") ||
          player.getEffect("fatal_poison")
        ) {
          hurtEntity.applyDamage(7, { cause: Minecraft.EntityDamageCause.suicide });
        }
        break;
      case currentLore &&
        currentLore.some((line: string) => line === "§r§d[Passive] Extra Damage To Illager Type Mobs"):
        const ILLAGER_MOBS = [
          "minecraft:pillager",
          "minecraft:evocation_illager",
          "minecraft:vindicator",
          "minecraft:ravager",
          "minecraft:witch",
        ];

        if (hurtEntity && ILLAGER_MOBS.includes(hurtEntity.typeId)) {
          hurtEntity.applyDamage(6, { cause: Minecraft.EntityDamageCause.suicide });
        }
        break;
    }
  });

  Minecraft.world.afterEvents.entityDie.subscribe((event) => {
    let player = event.damageSource.damagingEntity;
    let deadEntity = event.deadEntity;

    if (player == undefined) return;

    let playerHeld = (player.getComponent(`equippable`) as Minecraft.EntityEquippableComponent).getEquipment(
      Minecraft.EquipmentSlot.Mainhand
    );
    if (playerHeld == undefined) return;
    let currentLore = playerHeld.getLore();

    switch (true) {
      case currentLore && currentLore.some((line: string) => line === "§r§d[Passive] Drop SOULS from defeated enemies"):
        const item = new Minecraft.ItemStack(`beyond:soul`, 1);
        if (Math.random() <= 0.5) {
          deadEntity.dimension.spawnItem(item, deadEntity.location);
        }
        break;
    }
  });

  //Script-Events
  Minecraft.system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity: player }) => {
    if (!player || id !== "beyond:knockback") return;

    const entities = player.dimension.getEntities({ location: player.location, maxDistance: 6 });

    for (const entity of entities) {
      if (entity.id === player.id) continue;
      const { x, z } = Vector.subtract(entity.location, player.location);
      entity?.applyKnockback(x, z, 3, 0.8);
    }
  });
}

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export class Vector {
  static multiply(vectorA: Vector3D, value: number | Vector3D): Vector3D {
    return {
      x: vectorA.x * (typeof value === "number" ? value : value.x),
      y: vectorA.y * (typeof value === "number" ? value : value.y),
      z: vectorA.z * (typeof value === "number" ? value : value.z),
    };
  }

  static add(vectorA: Vector3D, vectorB: Vector3D): Vector3D {
    return {
      x: vectorA.x + (vectorB.x ?? 0),
      y: vectorA.y + (vectorB.y ?? 0),
      z: vectorA.z + (vectorB.z ?? 0),
    };
  }

  static subtract(vectorA: Vector3D, vectorB: Vector3D): Vector3D {
    return {
      x: vectorA.x - (vectorB.x ?? 0),
      y: vectorA.y - (vectorB.y ?? 0),
      z: vectorA.z - (vectorB.z ?? 0),
    };
  }

  static distance(vectorA: Vector3D, vectorB: Vector3D): number {
    return Math.sqrt(
      Math.pow(vectorA.x - vectorB.x, 2) + Math.pow(vectorA.y - vectorB.y, 2) + Math.pow(vectorA.z - vectorB.z, 2)
    );
  }
}
