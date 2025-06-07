import { system } from "@minecraft/server";
export class playerProcessor {
    static activeAbilityCooldown(player) {
        var _a;
        let weaponInteract = (_a = player.getDynamicProperty("interact_cooldown")) !== null && _a !== void 0 ? _a : 0;
        if (typeof weaponInteract == `number`) {
            if (weaponInteract !== 0) {
                player.setDynamicProperty("interact_cooldown", weaponInteract + 10);
            }
            if (weaponInteract > 600) {
                player.setDynamicProperty("interact_cooldown", 0);
            }
        }
        player.dimension.getEntities().forEach((entity) => {
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
//# sourceMappingURL=playerProcessor.js.map