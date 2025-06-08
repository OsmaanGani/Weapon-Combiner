import { Entity, ItemStack, Player, world } from "@minecraft/server";
import { ActiveAbility } from "../features/activeAbility/activeAbility";

export class itemUseHandler {
  static itemUseHandler(itemStack: ItemStack, source: Player) {
    ActiveAbility.run(source, itemStack);
  }
}
