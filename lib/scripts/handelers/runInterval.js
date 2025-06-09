import { world } from "@minecraft/server";
import { playerProcessor } from "../features/playerProcessor";
export class runInterval {
    static runInterval() {
        world.getAllPlayers().forEach((player) => {
            playerProcessor.activeAbilityCooldown(player);
            playerProcessor.onHitCooldown(player);
            playerProcessor.cooldownDisplay(player);
            playerProcessor.cursedEntity(player);
        });
    }
}
//# sourceMappingURL=runInterval.js.map