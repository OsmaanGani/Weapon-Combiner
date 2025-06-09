import { Player, Entity, ItemStack, EntityHealthComponent } from "@minecraft/server";
import { tellraw } from "../../helper/tellraw";

type AbilityFn = (player: Player, hurtEntity: Entity, held: ItemStack) => void;
export class OnHitAbilities {
  static _simpleEffectsHurtEntity(effect: string, amplifier: number, duration: number): AbilityFn {
    return (player, hurtEntity, held) => {
      hurtEntity.addEffect(effect, duration, { amplifier: amplifier });
    };
  }

  static _simpleEffectsPlayer(effect: string, amplifier: number, duration: number): AbilityFn {
    return (player, hurtEntity, held) => {
      player.addEffect(effect, duration, { amplifier: amplifier });
    };
  }

  static _stealHealth(percentage: number): AbilityFn {
    return (player, hurtEntity, held) => {
      const hurtEntityHealth = (hurtEntity.getComponent(`health`) as EntityHealthComponent).currentValue;
      const playerHealth = (player.getComponent(`health`) as EntityHealthComponent).currentValue;

      (player.getComponent(`health`) as EntityHealthComponent).setCurrentValue(
        playerHealth + hurtEntityHealth * percentage
      );
      tellraw(
        player,
        `§l§4[!]§rOn That Hit You Gained §l§4${(hurtEntityHealth * percentage).toFixed(
          1
        )}§r health. Bigger Target Gives More §l§4Health`
      );
    };
  }
}
