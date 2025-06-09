import { EquipmentSlot } from "@minecraft/server";
import { OnHitAbilities } from "./onHitAbilityHolder";
export class OnHitAbility {
    static run(player, hurtEntity) {
        var _a;
        const heldItem = player.getComponent(`equippable`).getEquipment(EquipmentSlot.Mainhand);
        if (heldItem == undefined)
            return;
        const lore = (_a = heldItem === null || heldItem === void 0 ? void 0 : heldItem.getLore()) !== null && _a !== void 0 ? _a : [];
        const entry = OnHitAbility._abilities.find((a) => lore.some((line) => line === a.tag));
        if (!entry)
            return;
        entry.exec(player, hurtEntity, heldItem);
        this._startCooldown(player, entry.cooldown);
    }
    static _cooldownReady(p) {
        var _a;
        return ((_a = p.getDynamicProperty("on_hit_cooldown")) !== null && _a !== void 0 ? _a : 0) === 0;
    }
    static _startCooldown(p, time) {
        p.setDynamicProperty("on_hit_cooldown", time);
    }
}
OnHitAbility._abilities = [
    { tag: "§r§d[On-Hit] Steal A PORTION of Enemy Health", exec: OnHitAbilities._stealHealth(0.05), cooldown: 100 },
    {
        tag: "§r§d[On-Hit] Infect Hurt With Weakness",
        exec: OnHitAbilities._simpleEffectsHurtEntity("weakness", 2, 100),
        cooldown: 1,
    },
    { tag: "§r§d[On-Hit] Poison The Enemy", exec: () => { }, cooldown: 100 },
    { tag: "§r§d[On-Hit] WEAK Foes On Hit", exec: () => { }, cooldown: 100 },
    { tag: "§r§d[On-Hit] STUN Foes On Hit", exec: () => { }, cooldown: 1 },
    { tag: "§r§d[On-Hit] Effect Foes With DARKNESS", exec: () => { }, cooldown: 100 },
    { tag: "§r§d[On-Hit] Effect Foes With FATAL POISON", exec: () => { }, cooldown: 100 },
    { tag: "§r§d[On-Hit] Cause BLINDNESS On Hit", exec: () => { }, cooldown: 100 },
    { tag: "§r§d[On-Hit] Cause VOID DAMAGE On Hit", exec: () => { }, cooldown: 1 },
    { tag: "§r§d[On-Hit] Cause LEVITATION On Hit", exec: () => { }, cooldown: 1 },
    { tag: "§r§d[On-Hit] Gain INVINCIBILITY (2s) On Hit", exec: () => { }, cooldown: 1 },
    { tag: "§r§d[On-Hit] Set Foes On FIRE", exec: () => { }, cooldown: 100 },
    { tag: "§r§d[On-Hit] BOUNCE on hit", exec: () => { }, cooldown: 1 },
    { tag: "§r§d[On-Hit] STRENGTH buff on hit", exec: () => { }, cooldown: 1 },
    { tag: "§r§d[On-Hit] SLOW Foes on hit", exec: () => { }, cooldown: 100 },
    { tag: "§r§d[On-Hit] Detonate A SMALL EXPLOSION", exec: () => { }, cooldown: 1 },
    { tag: "§r§d[On-Hit] Instantly HEAL Self On Hit", exec: () => { }, cooldown: 1 },
    { tag: "§r§d[On-Hit] Inflict WITHER Effect", exec: () => { }, cooldown: 100 },
    { tag: "§r§d[On-Hit] 40% Chance to burn the enemy", exec: () => { }, cooldown: 140 },
    { tag: "§r§d[On-Hit] Curse The Enemy", exec: () => { }, cooldown: 1 },
];
//# sourceMappingURL=onHitAbility.js.map