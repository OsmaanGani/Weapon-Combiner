import { world } from "@minecraft/server";
import { playerProcessor } from "../features/playerProcessor";
export class runInterval {
    static runInterval() {
        world.getAllPlayers().forEach((player) => {
            playerProcessor.activeAbilityCooldown(player);
        });
    }
}
//# sourceMappingURL=runInterval.js.map