import { tellraw } from "../../helper/tellraw";
export class OnHitAbilities {
    static _simpleEffectsHurtEntity(effect, amplifier, duration) {
        return (player, hurtEntity, held) => {
            hurtEntity.addEffect(effect, duration, { amplifier: amplifier });
        };
    }
    static _simpleEffectsPlayer(effect, amplifier, duration) {
        return (player, hurtEntity, held) => {
            player.addEffect(effect, duration, { amplifier: amplifier });
        };
    }
    static _stealHealth(percentage) {
        return (player, hurtEntity, held) => {
            const hurtEntityHealth = hurtEntity.getComponent(`health`).currentValue;
            const playerHealth = player.getComponent(`health`).currentValue;
            player.getComponent(`health`).setCurrentValue(playerHealth + hurtEntityHealth * percentage);
            tellraw(player, `§l§4[!]§rOn That Hit You Gained §l§4${(hurtEntityHealth * percentage).toFixed(1)}§r health. Bigger Target Gives More §l§4Health`);
        };
    }
}
//# sourceMappingURL=onHitAbilityHolder.js.map