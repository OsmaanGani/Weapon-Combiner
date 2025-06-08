import { world, system } from "@minecraft/server";
import { playerProcessor } from "../features/playerProcessor";

export class runInterval {
  static runInterval() {
    world.getAllPlayers().forEach((player) => {
      playerProcessor.activeAbilityCooldown(player);
      playerProcessor.cooldownDisplay(player);
    });
  }
}
