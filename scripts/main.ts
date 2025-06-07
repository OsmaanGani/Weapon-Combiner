import { WeaponCombiner } from "./weapon_combiner";
import { weapon_passive } from "./weapon_ability_passive";
import { weapon_onhit } from "./weapon_ability_onhit";
import { weapon_onhurt } from "./weapon_ability_onhurt";
import { weapon_cooldown } from "./weapon_combiner_cooldown";
import { system, world } from "@minecraft/server";
import { itemUseHandler } from "./handelers/itemUse";
import { runInterval } from "./handelers/runInterval";

world.afterEvents.itemUse.subscribe(({ source, itemStack }) => {
  itemUseHandler.itemUseHandler(itemStack, source);
});

system.runInterval(() => {
  runInterval.runInterval();
});

weapon_passive();
weapon_onhit();
weapon_onhurt();
weapon_cooldown();
function initialize() {
  new WeaponCombiner();
}

initialize();
