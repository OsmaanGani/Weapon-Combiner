import { system, EntityDamageCause } from "@minecraft/server";
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
    static cooldownDisplay(player) {
        var _a, _b, _c;
        const cooldowns = {
            Hurt: { time: Number((_a = player.getDynamicProperty("on_hurt_cooldown")) !== null && _a !== void 0 ? _a : 0), max: 20 },
            Interact: { time: Number((_b = player.getDynamicProperty("interact_cooldown")) !== null && _b !== void 0 ? _b : 0), max: 30 },
            Hit: { time: Number((_c = player.getDynamicProperty("on_hit_cooldown")) !== null && _c !== void 0 ? _c : 0), max: 10 },
        };
        // Generate action bar text
        const actionBarText = Object.entries(cooldowns)
            .filter(([_, data]) => data.time > 0)
            .map(([name, data]) => `§6${name}: §d${data.max - Math.floor(data.time / 20)}s`)
            .join(" §7| ");
        // Display action bar text
        player.onScreenDisplay.setActionBar(actionBarText);
    }
    static cursedEntity(player) {
        player.dimension.getEntities().forEach((entity) => {
            let curseMeter = entity.getDynamicProperty(`Cursed`) || 0;
            if (typeof curseMeter != `number`)
                return;
            if (entity.hasTag(`Cursed`)) {
                if (curseMeter > 0)
                    entity.setDynamicProperty(`Cursed`, curseMeter + 1);
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
    static onHitCooldown(player) {
        let onHitCooldown = player.getDynamicProperty(`on_hit_cooldown`);
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
//# sourceMappingURL=playerProcessor.js.map