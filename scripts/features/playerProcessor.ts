import { Player, world, Entity, system } from "@minecraft/server";

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
      Hit: { time: Number(player.getDynamicProperty("on_hit_cooldown") ?? 0), max: 3 },
    };

    // Generate action bar text
    const actionBarText: string = Object.entries(cooldowns)
      .filter(([_, data]) => data.time > 0)
      .map(([name, data]) => `§6${name}: §d${data.max - Math.floor(data.time / 20)}s`)
      .join(" §7| ");

    // Display action bar text
    player.onScreenDisplay.setActionBar(actionBarText);
  }
}
