import { world, system } from "@minecraft/server";
export function weapon_cooldown() {
    system.runInterval(() => {
        world.getAllPlayers().forEach((player) => {
            var _a, _b, _c;
            const cooldowns = {
                Hurt: { time: Number((_a = player.getDynamicProperty("on_hurt_cooldown")) !== null && _a !== void 0 ? _a : 0), max: 20 },
                Interact: { time: Number((_b = player.getDynamicProperty("interact_cooldown")) !== null && _b !== void 0 ? _b : 0), max: 30 },
                Hit: { time: Number((_c = player.getDynamicProperty("on_hit_cooldown")) !== null && _c !== void 0 ? _c : 0), max: 3 },
            };
            // Generate action bar text
            const actionBarText = Object.entries(cooldowns)
                .filter(([_, data]) => data.time > 0)
                .map(([name, data]) => `§6${name}: §d${data.max - Math.floor(data.time / 20)}s`)
                .join(" §7| ");
            // Display action bar text
            player.onScreenDisplay.setActionBar(actionBarText);
        });
    });
}
//# sourceMappingURL=weapon_combiner_cooldown.js.map