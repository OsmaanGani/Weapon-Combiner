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
}
