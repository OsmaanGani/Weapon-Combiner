import { WeaponCombiner } from "./weapon_combiner";
import { weapon_passive } from "./weapon_ability_passive";
import { weapon_onhurt } from "./weapon_ability_onhurt";
import { Player, system, world } from "@minecraft/server";
import { itemUseHandler } from "./handelers/itemUse";
import { entityHitEntityHandler } from "./handelers/entityHitEntity";
import { runInterval } from "./handelers/runInterval";
world.afterEvents.itemUse.subscribe(({ source, itemStack }) => {
    itemUseHandler.itemUseHandler(itemStack, source);
});
world.afterEvents.entityHitEntity.subscribe(({ damagingEntity, hitEntity }) => {
    if (damagingEntity instanceof Player) {
        entityHitEntityHandler.entityHitEntityHandler(damagingEntity, hitEntity);
    }
});
system.runInterval(() => {
    runInterval.runInterval();
});
weapon_passive();
weapon_onhurt();
function initialize() {
    new WeaponCombiner();
}
initialize();
//# sourceMappingURL=main.js.map