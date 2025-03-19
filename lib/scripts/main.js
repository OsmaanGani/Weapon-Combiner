import { WeaponCombiner } from "./weapon_combiner";
import { weapon_passive } from "./weapon_ability_passive";
import { weapon_onhit } from "./weapon_ability_onhit";
import { weapon_active } from "./weapon_ability_active";
import { weapon_onhurt } from "./weapon_ability_onhurt";
import { weapon_cooldown } from "./weapon_combiner_cooldown";
function initialize() {
    new WeaponCombiner();
}
weapon_passive();
weapon_onhit();
weapon_active();
weapon_onhurt();
weapon_cooldown();
initialize();
//# sourceMappingURL=main.js.map