import { Entity, Player, world } from "@minecraft/server";
import { OnHitAbility } from "../features/ohHitAbility/onHitAbility";

export class entityHitEntityHandler {
  static entityHitEntityHandler(damagingEntity: Player, hitEntity: Entity) {
    OnHitAbility.run(damagingEntity, hitEntity);
  }
}
