import { world, system, Player } from "@minecraft/server";

export function weapon_cooldown(): void {
  system.runInterval(() => {
    world.getAllPlayers().forEach((player: Player) => {
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
    });
  });
}
