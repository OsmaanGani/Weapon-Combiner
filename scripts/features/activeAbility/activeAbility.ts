import { Player, Entity, ItemStack } from "@minecraft/server";
import { activeAbilities } from "./activeAbilityHolder";

type AbilityFn = (player: Player, held: ItemStack) => void;
export class ActiveAbility {
  static run(player: Player, held: ItemStack) {
    const lore = held.getLore() ?? [];
    const entry = ActiveAbility._abilities.find((a) => lore.some((line) => line === a.tag));
    if (!entry) return;
    if (!ActiveAbility._cooldownReady(player)) return;

    entry.exec(player, held);
    ActiveAbility._startCooldown(player, entry.cooldown);
  }

  private static _abilities: { tag: string; exec: AbilityFn; cooldown: number }[] = [
    {
      tag: "§r§d[Active] Interact To UNLEASH Stored SOULS as HEALTH",
      exec: activeAbilities._unleashSouls,
      cooldown: 200,
    },
    {
      tag: "§r§d[Active] Interact To Freeze Entities Briefly",
      exec: activeAbilities._simpleAreaAttack(6, `slowness`, 6, 0, false),
      cooldown: 1,
    },
    { tag: "§r§d[Active] Turn Poison Into Pleasure", exec: activeAbilities._poisonToRegen, cooldown: 1 },
    {
      tag: "§r§d[Active] Interact To Get A HEALTH BOOST",
      exec: activeAbilities._simpleEffects(`absorption`, 3, `null`, 0, `null`, 0),
      cooldown: 1,
    },
    {
      tag: "§r§d[Active] Interact To Get A COMBINED BUFF",
      exec: activeAbilities._simpleEffects(`regeneration`, 0, `jump_boost`, 0, `speed`, 0),
      cooldown: 1,
    },
    {
      tag: "§r§d[Active] Interact To Go INVISIBLE for a while",
      exec: activeAbilities._simpleEffects(`invisibility`, 0, `null`, 0, `null`, 0),
      cooldown: 1,
    },
    { tag: "§r§d[Active] Interact To Get Buff For a SACRIFICE", exec: activeAbilities._selfSacrifice, cooldown: 1 },
    { tag: "§r§d[Active] Interact To Summon WARDEN SPIRITS", exec: activeAbilities._wardenSpirits, cooldown: 1 },
    {
      tag: "§r§d[Active] Interact To DASH forward",
      exec: activeAbilities._simpleAreaAttack(0, `null`, 0, 0, true),
      cooldown: 400,
    },
    { tag: "§r§d[Active] Interact To BOUNCE foes", exec: activeAbilities._bounceFoes, cooldown: 1 },
    { tag: "§r§d[Active] Interact To Summon DIVINE LIGHTNING", exec: activeAbilities._divineLightning, cooldown: 1 },
    {
      tag: "§r§d[Active] Interact To Summon FIREBALLS",
      exec: activeAbilities._simpleAreaAttack(6, `null`, 0, 6, false),
      cooldown: 1,
    },
    { tag: "§r§d[Active] Interact To Double Your JUMP HEIGHT", exec: activeAbilities._doubleJump, cooldown: 500 },
    {
      tag: "§r§d[Active] Interact To BOOST Mining Speed",
      exec: activeAbilities._simpleEffects(`haste`, 2, `null`, 0, `null`, 0),
      cooldown: 1,
    },
    {
      tag: "§r§d[Active] Interact for WATER BREATHING",
      exec: activeAbilities._simpleEffects(`water_breathing`, 2, `null`, 0, `null`, 0),
      cooldown: 1,
    },
    { tag: "§r§d[Active] Interact To Create EXPLOSIONS", exec: activeAbilities._createExplosions, cooldown: 1 },
    {
      tag: "§r§d[Active] Interact replaces HUNGER for HEALING",
      exec: activeAbilities._simpleEffects(`regeneration`, 6, `hunger`, 254, `null`, 0),
      cooldown: 1,
    },
    {
      tag: "§r§d[Active] WITHER mobs around you",
      exec: activeAbilities._simpleAreaAttack(6, `wither`, 5, 0, false),
      cooldown: 1,
    },
    {
      tag: "§r§d[Active] DASH and set mobs on fire around you",
      exec: activeAbilities._simpleAreaAttack(6, `null`, 0, 6, true),
      cooldown: 1,
    },
    { tag: "§r§d[Active] Curse Entities Around", exec: activeAbilities._curseEntities, cooldown: 1 },
  ];

  private static _cooldownReady(p: Entity) {
    return (p.getDynamicProperty("interact_cooldown") ?? 0) === 0;
  }
  private static _startCooldown(p: Entity, time: number) {
    p.setDynamicProperty("interact_cooldown", time);
  }
}
