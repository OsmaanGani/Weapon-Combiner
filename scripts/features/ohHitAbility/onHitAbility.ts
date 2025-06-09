import { Player, Entity, ItemStack, EntityEquippableComponent, EquipmentSlot } from "@minecraft/server";
import { OnHitAbilities } from "./onHitAbilityHolder";

type AbilityFn = (player: Player, hurtEntity: Entity, held: ItemStack) => void;

export class OnHitAbility {
  static run(player: Player, hurtEntity: Entity) {
    const heldItem = (player.getComponent(`equippable`) as EntityEquippableComponent).getEquipment(
      EquipmentSlot.Mainhand
    );
    if (heldItem == undefined) return;

    const lore = heldItem?.getLore() ?? [];
    const entry = OnHitAbility._abilities.find((a) => lore.some((line) => line === a.tag));
    if (!entry) return;

    entry.exec(player, hurtEntity, heldItem);
    this._startCooldown(player, entry.cooldown);
  }

  private static _abilities: { tag: string; exec: AbilityFn; cooldown: number }[] = [
    { tag: "§r§d[On-Hit] Steal A PORTION of Enemy Health", exec: OnHitAbilities._stealHealth(0.05), cooldown: 100 },
    {
      tag: "§r§d[On-Hit] Infect Hurt With Weakness",
      exec: OnHitAbilities._simpleEffectsHurtEntity("weakness", 2, 100),
      cooldown: 1,
    },
    { tag: "§r§d[On-Hit] Poison The Enemy", exec: () => {}, cooldown: 100 },
    { tag: "§r§d[On-Hit] WEAK Foes On Hit", exec: () => {}, cooldown: 100 },
    { tag: "§r§d[On-Hit] STUN Foes On Hit", exec: () => {}, cooldown: 1 },
    { tag: "§r§d[On-Hit] Effect Foes With DARKNESS", exec: () => {}, cooldown: 100 },
    { tag: "§r§d[On-Hit] Effect Foes With FATAL POISON", exec: () => {}, cooldown: 100 },
    { tag: "§r§d[On-Hit] Cause BLINDNESS On Hit", exec: () => {}, cooldown: 100 },
    { tag: "§r§d[On-Hit] Cause VOID DAMAGE On Hit", exec: () => {}, cooldown: 1 },
    { tag: "§r§d[On-Hit] Cause LEVITATION On Hit", exec: () => {}, cooldown: 1 },
    { tag: "§r§d[On-Hit] Gain INVINCIBILITY (2s) On Hit", exec: () => {}, cooldown: 1 },
    { tag: "§r§d[On-Hit] Set Foes On FIRE", exec: () => {}, cooldown: 100 },
    { tag: "§r§d[On-Hit] BOUNCE on hit", exec: () => {}, cooldown: 1 },
    { tag: "§r§d[On-Hit] STRENGTH buff on hit", exec: () => {}, cooldown: 1 },
    { tag: "§r§d[On-Hit] SLOW Foes on hit", exec: () => {}, cooldown: 100 },
    { tag: "§r§d[On-Hit] Detonate A SMALL EXPLOSION", exec: () => {}, cooldown: 1 },
    { tag: "§r§d[On-Hit] Instantly HEAL Self On Hit", exec: () => {}, cooldown: 1 },
    { tag: "§r§d[On-Hit] Inflict WITHER Effect", exec: () => {}, cooldown: 100 },
    { tag: "§r§d[On-Hit] 40% Chance to burn the enemy", exec: () => {}, cooldown: 140 },
    { tag: "§r§d[On-Hit] Curse The Enemy", exec: () => {}, cooldown: 1 },
  ];
  private static _cooldownReady(p: Entity) {
    return (p.getDynamicProperty("on_hit_cooldown") ?? 0) === 0;
  }
  private static _startCooldown(p: Entity, time: number) {
    p.setDynamicProperty("on_hit_cooldown", time);
  }
}
