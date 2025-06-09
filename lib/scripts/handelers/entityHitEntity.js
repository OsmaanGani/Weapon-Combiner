import { OnHitAbility } from "../features/ohHitAbility/onHitAbility";
export class entityHitEntityHandler {
    static entityHitEntityHandler(damagingEntity, hitEntity) {
        OnHitAbility.run(damagingEntity, hitEntity);
    }
}
//# sourceMappingURL=entityHitEntity.js.map