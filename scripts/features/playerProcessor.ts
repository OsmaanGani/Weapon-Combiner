import { Player, world, Entity, system, EntityDamageCause } from "@minecraft/server";

export class playerProcessor {
  static activeAbilityCooldown(player: Player) {
    let weaponInteract = player.getDynamicProperty("interact_cooldown") ?? 0;
    if (typeof weaponInteract == `number`) {
      if (weaponInteract !== 0) {
        player.setDynamicProperty("interact_cooldown", weaponInteract + 10);
      }

      if (weaponInteract > 600) {
        player.setDynamicProperty("interact_cooldown", 0);
      }
    }
    player.dimension.getEntities().forEach((entity: Entity) => {
      if (entity.typeId === "bey:radius_entity") {
        system.runTimeout(() => {
          entity.runCommand(`/tp @s ~ 100 ~`);
        }, 17);
        system.runTimeout(() => {
          entity.runCommand(`/kill @s`);
        }, 20);
      }
    });
  }

  static cooldownDisplay(player: Player) {
    const cooldowns: { [key: string]: { time: number; max: number } } = {
      Hurt: { time: Number(player.getDynamicProperty("on_hurt_cooldown") ?? 0), max: 20 },
      Interact: { time: Number(player.getDynamicProperty("interact_cooldown") ?? 0), max: 30 },
      Hit: { time: Number(player.getDynamicProperty("on_hit_cooldown") ?? 0), max: 10 },
    };

    // Generate action bar text
    const actionBarText: string = Object.entries(cooldowns)
      .filter(([_, data]) => data.time > 0)
      .map(([name, data]) => `§6${name}: §d${data.max - Math.floor(data.time / 20)}s`)
      .join(" §7| ");

    // Display action bar text
    player.onScreenDisplay.setActionBar(actionBarText);
  }

  static cursedEntity(player: Player) {
    player.dimension.getEntities().forEach((entity) => {
      let curseMeter = entity.getDynamicProperty(`Cursed`) || 0;
      if (typeof curseMeter != `number`) return;
      if (entity.hasTag(`Cursed`)) {
        if (curseMeter > 0) entity.setDynamicProperty(`Cursed`, curseMeter + 1);
        if (curseMeter % 3 == 1) {
          entity.dimension.spawnParticle("bey:raid_curse", entity.location);
        }
        if (curseMeter > 60) {
          entity.setDynamicProperty(`Cursed`, 0);
          entity.applyDamage(10, { cause: EntityDamageCause.suicide });
        }
      }
    });
  }

  static onHitCooldown(player: Player) {
    let onHitCooldown = player.getDynamicProperty(`on_hit_cooldown`) as number;
    if (onHitCooldown === undefined) {
      player.setDynamicProperty(`on_hit_cooldown`, 0);
    }
    if (onHitCooldown > 0) {
      player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
    }
    if (onHitCooldown > 200) {
      player.setDynamicProperty(`on_hit_cooldown`, 0);
    }
  }
}
