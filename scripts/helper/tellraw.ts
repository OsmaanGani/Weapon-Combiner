import { Player } from "@minecraft/server";

export function tellraw(player: Player, text: string) {
  player.runCommand(`/tellraw @a {"rawtext":[{"text":"${text}"}]}`);
}
