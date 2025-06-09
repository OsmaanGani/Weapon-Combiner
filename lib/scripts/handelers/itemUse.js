import { ActiveAbility } from "../features/activeAbility/activeAbility";
export class itemUseHandler {
    static itemUseHandler(itemStack, source) {
        ActiveAbility.run(source, itemStack);
    }
}
//# sourceMappingURL=itemUse.js.map