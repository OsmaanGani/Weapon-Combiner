// scripts/weapon_combiner.ts
import * as Minecraft from "@minecraft/server";

// scripts/data/COMBINED_WEAPONS.ts
var COMBINED_WEAPONS = [
  {
    typeId: "minecraft:amethyst_shard",
    weapon: "amy",
    displayItem: "Ame",
    index: "1",
    addable: "Sword, Axe, Hammer, Scythe, Mace[Addons]"
  },
  {
    typeId: "minecraft:nether_star",
    weapon: "bea",
    displayItem: "Net",
    index: "2",
    addable: "Sword, Axe, Hammer, Scythe, Mace[Addons]"
  },
  {
    typeId: "minecraft:oak_leaves",
    weapon: "cam",
    displayItem: "Oak",
    index: "3",
    addable: "Sword"
  },
  {
    typeId: "minecraft:crying_obsidian",
    weapon: "cry",
    displayItem: "Cry",
    index: "4",
    addable: "Sword, Axe, Hammer, Mace[Addons]"
  },
  {
    typeId: "minecraft:echo_shard",
    weapon: "deep",
    displayItem: "Ech",
    index: "5",
    addable: "Sword, Axe, Hammer, Mace[Addons]"
  },
  {
    typeId: "minecraft:ochre_froglight",
    weapon: "froglight",
    displayItem: "Frg",
    index: "6",
    addable: "Sword"
  },
  {
    typeId: "minecraft:pearlescent_froglight",
    weapon: "froglight",
    displayItem: "Frg",
    index: "6",
    addable: "Sword, Axe, Hammer, Mace[Addons]"
  },
  {
    typeId: "minecraft:verdant_froglight",
    weapon: "froglight",
    displayItem: "Frg",
    index: "6",
    addable: "Sword"
  },
  {
    typeId: "minecraft:enchanted_golden_apple",
    weapon: "god",
    displayItem: "Ega",
    index: "7",
    addable: "Sword, Axe, Scythe, Hammer"
  },
  {
    typeId: "minecraft:magma",
    weapon: "magma",
    displayItem: "Mag",
    index: "8",
    addable: "Sword, Axe, Scythe, Hammer, Mace[Addons]"
  },
  {
    typeId: "minecraft:rabbit_foot",
    weapon: "rabbit",
    displayItem: "Rab",
    index: "9",
    addable: "Sword, Axe, Scythe"
  },
  {
    typeId: "minecraft:redstone",
    weapon: "redstone",
    displayItem: "Red",
    index: "10",
    addable: "Sword, Axe, Hammer, Mace[Addons]"
  },
  {
    typeId: "minecraft:heart_of_the_sea",
    weapon: "sea",
    displayItem: "Sea",
    index: "11",
    addable: "Axe"
  },
  {
    typeId: "minecraft:tnt",
    weapon: "tnt",
    displayItem: "Tnt",
    index: "12",
    addable: "Sword"
  },
  {
    typeId: "minecraft:totem_of_undying",
    weapon: "totem",
    displayItem: "Tot",
    index: "13",
    addable: "Sword, Axe, Scythe, Hammer, Mace[Addons]"
  },
  {
    typeId: "minecraft:wither_rose",
    weapon: "wither",
    displayItem: "Wit",
    index: "14",
    addable: "Sword, Axe, Scythe"
  },
  {
    typeId: "minecraft:ominous_bottle",
    weapon: "raid",
    displayItem: "Rai",
    index: "15",
    addable: "Sword, Axe"
  },
  {
    typeId: "minecraft:blaze_powder",
    weapon: "blaze",
    displayItem: "Bla",
    index: "16",
    addable: "Sword, Axe, Scythe, Hammer"
  },
  {
    typeId: "minecraft:spore_blossom",
    weapon: "spore",
    displayItem: "Spo",
    index: "17",
    addable: "Sword, Scythe"
  },
  {
    typeId: "minecraft:clock",
    weapon: "clock",
    displayItem: "Clk",
    index: "18",
    addable: "Sword, Scythe, Hammer"
  },
  {
    typeId: "minecraft:soul_sand",
    weapon: "soul",
    displayItem: "Sou",
    index: "19",
    addable: "Sword, Scythe, Mace[Addons]"
  }
];

// scripts/data/CHANGEABLE_WEAPONS.ts
var CHANGEABLE_WEAPONS = [
  { typeId: "minecraft:iron_sword", itemTag: "is" },
  { typeId: "minecraft:diamond_sword", itemTag: "ds" },
  { typeId: "minecraft:netherite_sword", itemTag: "ns" },
  { typeId: "minecraft:iron_axe", itemTag: "ia" },
  { typeId: "minecraft:diamond_axe", itemTag: "da" },
  { typeId: "minecraft:netherite_axe", itemTag: "na" },
  { typeId: "bey:default_dh", itemTag: "dh" },
  { typeId: "bey:default_ih", itemTag: "ih" },
  { typeId: "bey:default_nh", itemTag: "nh" },
  { typeId: "bey:default_dsc", itemTag: "dsc" },
  { typeId: "bey:default_isc", itemTag: "isc" },
  { typeId: "bey:defaut_nsc", itemTag: "nsc" },
  { typeId: "bey:default_dm", itemTag: "dm" },
  { typeId: "bey:default_im", itemTag: "im" },
  { typeId: "bey:default_nm", itemTag: "nm" }
];

// scripts/data/WEAPON_ABILITIES.ts
var WEAPON_ABILITIES = [
  // AMY
  { weaponTag: "amy", abilityLore: "\xA7r\xA7d[Passive] REGEN Buff When Holding", abilityIndex: 0 },
  { weaponTag: "amy", abilityLore: "\xA7r\xA7d[Active] Interact To Get A HEALTH BOOST", abilityIndex: 1 },
  { weaponTag: "amy", abilityLore: "\xA7r\xA7d[On-Hit] WEAK Foes On Hit", abilityIndex: 2 },
  { weaponTag: "amy", abilityLore: "\xA7r\xA7d[On-Hurt] AoE WEAKNESS On Hurt", abilityIndex: 3 },
  // BEA
  { weaponTag: "bea", abilityLore: "\xA7r\xA7d[Passive] SPEED Buff When Holding", abilityIndex: 0 },
  { weaponTag: "bea", abilityLore: "\xA7r\xA7d[Active] Interact To Get A COMBINED BUFF", abilityIndex: 1 },
  { weaponTag: "bea", abilityLore: "\xA7r\xA7d[On-Hit] STUN Foes On Hit", abilityIndex: 2 },
  { weaponTag: "bea", abilityLore: "\xA7r\xA7d[On-Hurt] Summon LIGHTNING On Hurt", abilityIndex: 3 },
  // CAM
  { weaponTag: "cam", abilityLore: "\xA7r\xA7d[Passive] Small SPEED Buff When Holding", abilityIndex: 0 },
  { weaponTag: "cam", abilityLore: "\xA7r\xA7d[Active] Interact To Go INVISIBLE for a while", abilityIndex: 1 },
  { weaponTag: "cam", abilityLore: "\xA7r\xA7d[On-Hit] Effect Foes With DARKNESS", abilityIndex: 2 },
  { weaponTag: "cam", abilityLore: "\xA7r\xA7d[On-Hurt] Blind Nearby Foes", abilityIndex: 3 },
  // CRY
  { weaponTag: "cry", abilityLore: "\xA7r\xA7d[Passive] POISON AND WITHER Removal", abilityIndex: 0 },
  { weaponTag: "cry", abilityLore: "\xA7r\xA7d[Active] Interact To Get Buff For a SACRIFICE", abilityIndex: 1 },
  { weaponTag: "cry", abilityLore: "\xA7r\xA7d[On-Hit] Effect Foes With FATAL POISON", abilityIndex: 2 },
  { weaponTag: "cry", abilityLore: "\xA7r\xA7d[On-Hurt] Apply Slow & Resistance", abilityIndex: 3 },
  // DEEP
  { weaponTag: "deep", abilityLore: "\xA7r\xA7d[Passive] Small RESISTANCE Buff When Holding", abilityIndex: 0 },
  { weaponTag: "deep", abilityLore: "\xA7r\xA7d[Active] Interact To Summon WARDEN SPIRITS", abilityIndex: 1 },
  { weaponTag: "deep", abilityLore: "\xA7r\xA7d[On-Hit] Cause BLINDNESS On Hit", abilityIndex: 2 },
  { weaponTag: "deep", abilityLore: "\xA7r\xA7d[On-Hurt] Apply KNOCKBACK on Hit", abilityIndex: 3 },
  // FROGLIGHT
  { weaponTag: "froglight", abilityLore: "\xA7r\xA7d[Passive] Small JUMPBOOST Buff", abilityIndex: 0 },
  { weaponTag: "froglight", abilityLore: "\xA7r\xA7d[Active] Interact To BOUNCE foes", abilityIndex: 1 },
  { weaponTag: "froglight", abilityLore: "\xA7r\xA7d[On-Hit] Cause LEVITATION On Hit", abilityIndex: 2 },
  { weaponTag: "froglight", abilityLore: "\xA7r\xA7d[On-Hurt] Leap Upwards Instantly", abilityIndex: 3 },
  // GOD
  { weaponTag: "god", abilityLore: "\xA7r\xA7d[Passive] IMMUNITY to ALL Debuffs When Holding", abilityIndex: 0 },
  { weaponTag: "god", abilityLore: "\xA7r\xA7d[Active] Interact To Summon DIVINE LIGHTNING", abilityIndex: 1 },
  { weaponTag: "god", abilityLore: "\xA7r\xA7d[On-Hit] Gain INVINCIBILITY (2s) On Hit", abilityIndex: 2 },
  { weaponTag: "god", abilityLore: "\xA7r\xA7d[On-Hurt] SMITE Nearby Undead Enemies", abilityIndex: 3 },
  // MAGMA
  { weaponTag: "magma", abilityLore: "\xA7r\xA7d[Passive] FIRE Resistance When Holding", abilityIndex: 0 },
  { weaponTag: "magma", abilityLore: "\xA7r\xA7d[Active] Interact To Summon FIREBALLS", abilityIndex: 1 },
  { weaponTag: "magma", abilityLore: "\xA7r\xA7d[On-Hit] Set Foes On FIRE", abilityIndex: 2 },
  { weaponTag: "magma", abilityLore: "\xA7r\xA7d[On-Hurt] Set Nearby Foes on FIRE", abilityIndex: 3 },
  // RABBIT
  { weaponTag: "rabbit", abilityLore: "\xA7r\xA7d[Passive] JUMP Boost When Holding", abilityIndex: 0 },
  { weaponTag: "rabbit", abilityLore: "\xA7r\xA7d[Active] Interact To Double Your JUMP HEIGHT", abilityIndex: 1 },
  { weaponTag: "rabbit", abilityLore: "\xA7r\xA7d[On-Hit] BOUNCE on hit", abilityIndex: 2 },
  { weaponTag: "rabbit", abilityLore: "\xA7r\xA7d[On-Hurt] Gain SPEED Boost", abilityIndex: 3 },
  // REDSTONE
  { weaponTag: "redstone", abilityLore: "\xA7r\xA7d[Passive] High Speed Buff when hurt [cd 4sec]", abilityIndex: 0 },
  { weaponTag: "redstone", abilityLore: "\xA7r\xA7d[Active] Interact To BOOST Mining Speed", abilityIndex: 1 },
  { weaponTag: "redstone", abilityLore: "\xA7r\xA7d[On-Hit] STRENGTH buff on hit", abilityIndex: 2 },
  { weaponTag: "redstone", abilityLore: "\xA7r\xA7d[On-Hurt] Gain SPEED Boost", abilityIndex: 3 },
  // SEA
  { weaponTag: "sea", abilityLore: "\xA7r\xA7d[Passive] SWIMMING buff When Holding", abilityIndex: 0 },
  { weaponTag: "sea", abilityLore: "\xA7r\xA7d[Active] Interact for WATER BREATHING", abilityIndex: 1 },
  { weaponTag: "sea", abilityLore: "\xA7r\xA7d[On-Hit] SLOW Foes on hit", abilityIndex: 2 },
  { weaponTag: "sea", abilityLore: "\xA7r\xA7d[On-Hurt] Summon RESISTANCE Buff", abilityIndex: 3 },
  // TNT
  { weaponTag: "tnt", abilityLore: "\xA7r\xA7d[Passive] EXPLOSION Resistance When Holding", abilityIndex: 0 },
  { weaponTag: "tnt", abilityLore: "\xA7r\xA7d[Active] Interact To Create EXPLOSIONS", abilityIndex: 1 },
  { weaponTag: "tnt", abilityLore: "\xA7r\xA7d[On-Hit] Detonate A SMALL EXPLOSION", abilityIndex: 2 },
  { weaponTag: "tnt", abilityLore: "\xA7r\xA7d[On-Hurt] Summon BLINDNESS FIELD", abilityIndex: 3 },
  // TOTEM
  { weaponTag: "totem", abilityLore: "\xA7r\xA7d[Passive] ABSORPTION buff When Holding", abilityIndex: 0 },
  { weaponTag: "totem", abilityLore: "\xA7r\xA7d[Active] Interact replaces HUNGER for HEALING", abilityIndex: 1 },
  { weaponTag: "totem", abilityLore: "\xA7r\xA7d[On-Hit] Instantly HEAL Self On Hit", abilityIndex: 2 },
  { weaponTag: "totem", abilityLore: "\xA7r\xA7d[On-Hurt] Summon RESISTANCE Buff", abilityIndex: 3 },
  // WITHER
  { weaponTag: "wither", abilityLore: "\xA7r\xA7d[Passive] WITHER Resistance When Holding", abilityIndex: 0 },
  { weaponTag: "wither", abilityLore: "\xA7r\xA7d[Active] WITHER mobs around you", abilityIndex: 1 },
  { weaponTag: "wither", abilityLore: "\xA7r\xA7d[On-Hit] Inflict WITHER Effect", abilityIndex: 2 },
  { weaponTag: "wither", abilityLore: "\xA7r\xA7d[On-Hurt] Summon AoE WITHER", abilityIndex: 3 },
  // BLAZE
  { weaponTag: "blaze", abilityLore: "\xA7r\xA7d[Passive] SPEED buff When Holding", abilityIndex: 0 },
  { weaponTag: "blaze", abilityLore: "\xA7r\xA7d[Active] DASH and set mobs on fire around you", abilityIndex: 1 },
  { weaponTag: "blaze", abilityLore: "\xA7r\xA7d[On-Hit] 40% Chance to burn the enemy", abilityIndex: 2 },
  { weaponTag: "blaze", abilityLore: "\xA7r\xA7d[On-Hurt] 80% Chace to burn the attacker", abilityIndex: 3 },
  // RAID
  { weaponTag: "raid", abilityLore: "\xA7r\xA7d[Passive] Extra Damage To Illager Type Mobs", abilityIndex: 0 },
  { weaponTag: "raid", abilityLore: "\xA7r\xA7d[Active] Curse Entities Around", abilityIndex: 1 },
  { weaponTag: "raid", abilityLore: "\xA7r\xA7d[On-Hit] Curse The Enemy", abilityIndex: 2 },
  { weaponTag: "raid", abilityLore: "\xA7r\xA7d[On-Hurt] Curse The Attacker", abilityIndex: 3 },
  // SPORE
  { weaponTag: "spore", abilityLore: "\xA7r\xA7d[Passive] Increased Damage While Poisoned", abilityIndex: 0 },
  { weaponTag: "spore", abilityLore: "\xA7r\xA7d[Active] Turn Poison Into Pleasure", abilityIndex: 1 },
  { weaponTag: "spore", abilityLore: "\xA7r\xA7d[On-Hit] Poison The Enemy", abilityIndex: 2 },
  { weaponTag: "spore", abilityLore: "\xA7r\xA7d[On-Hurt] AoE Poison Where you are hurt", abilityIndex: 3 },
  // CLOCK
  { weaponTag: "clock", abilityLore: "\xA7r\xA7d[Passive] SLOW Nearby Enemies Over Time", abilityIndex: 0 },
  { weaponTag: "clock", abilityLore: "\xA7r\xA7d[Active] Interact To Freeze Entities Briefly", abilityIndex: 1 },
  { weaponTag: "clock", abilityLore: "\xA7r\xA7d[On-Hit] Infect Hurt With Weakness", abilityIndex: 2 },
  { weaponTag: "clock", abilityLore: "\xA7r\xA7d[On-Hurt] Rewind A Portion Of Taken Damage", abilityIndex: 3 },
  // SOUL
  { weaponTag: "soul", abilityLore: "\xA7r\xA7d[Passive] Drop SOULS from defeated enemies", abilityIndex: 0 },
  { weaponTag: "soul", abilityLore: "\xA7r\xA7d[Active] Interact To UNLEASH Stored SOULS as HEALTH", abilityIndex: 1 },
  { weaponTag: "soul", abilityLore: "\xA7r\xA7d[On-Hit] Steal A PORTION of Enemy Health", abilityIndex: 2 },
  { weaponTag: "soul", abilityLore: "\xA7r\xA7d[On-Hurt] Drop SOULS from getting hurt", abilityIndex: 3 }
];

// scripts/weapon_combiner.ts
var WeaponCombiner = class {
  constructor() {
    this.initialize();
  }
  initialize() {
    Minecraft.world.sendMessage("Weapon Combiner Initialized");
    Minecraft.system.runInterval(() => {
      Minecraft.world.getAllPlayers().forEach((player) => {
        player.dimension.getEntities().forEach((entity) => {
          if (entity.typeId.includes(`bey:weapon_combiner_display`)) {
            const underBlock = entity.dimension.getBlock({
              x: Math.floor(entity.location.x),
              y: Math.floor(entity.location.y) - 1,
              z: Math.floor(entity.location.z)
            });
            if (underBlock && underBlock.typeId !== "bey:materia_conflux" || entity.hasTag(`gonnaDie`)) {
              entity.teleport({ x: 100, y: 20, z: 100 });
              Minecraft.system.runTimeout(() => {
                entity.kill();
              }, 4);
            }
            if (player.hasTag(`doOnce`)) {
              Minecraft.system.runTimeout(() => {
                player.removeTag(`doOnce`);
              }, 10);
            }
          }
        });
      });
    });
    Minecraft.world.beforeEvents.worldInitialize.subscribe((initEvent) => {
      initEvent.blockComponentRegistry.registerCustomComponent("bey:materia_conflux_function", {
        onPlayerInteract: (event) => {
          let player = event.player;
          const block = event.block;
          if (!player)
            return;
          let playerHeld = player.getComponent("equippable").getEquipment(
            Minecraft.EquipmentSlot.Mainhand
          );
          let { x, y, z } = block.location;
          COMBINED_WEAPONS.forEach((key) => {
            let entitiesAbove = block.dimension.getEntities().filter((entity) => {
              let pos = entity.location;
              return Math.floor(pos.x) === x && Math.floor(pos.y) === y + 1 && Math.floor(pos.z) === z;
            });
            if (entitiesAbove.length == 0) {
              if (playerHeld && playerHeld.typeId === key.typeId) {
                block.setPermutation(block.permutation.withState("bey:materia_conflux", 1));
                block.dimension.spawnParticle("minecraft:totem_particle", { x, y: y + 1, z });
                Minecraft.world.playSound("bey_place_sound", block.location, { volume: 10, pitch: 0.3 });
                player.sendMessage(`\xA7dCurrent \xA76\xA7lMaterial\xA7r \xA7dCan Be Combined With a \xA76\xA7l${key.addable}`);
                let entity = block.dimension.spawnEntity("bey:weapon_combiner_display", { x, y: y + 1, z });
                if (entity) {
                  entity.triggerEvent(`bey:var${key.displayItem}`);
                  entity.addTag(`${key.index}`);
                }
                player.runCommand(`/clear @s ${key.typeId} 0 1`);
              }
            }
            if (entitiesAbove.length != 0) {
              entitiesAbove.forEach((entity) => {
                let index = entity.getTags()[0];
                COMBINED_WEAPONS.forEach((key2) => {
                  if (key2.index == index) {
                    if (playerHeld == void 0 && !player.hasTag(`doOnce`)) {
                      player.sendMessage(`\xA7dCurrent \xA76\xA7lMaterial\xA7r \xA7dCan Be Combined With a \xA76\xA7l${key2.addable}`);
                      player.addTag(`doOnce`);
                    }
                  }
                });
              });
            }
          });
          CHANGEABLE_WEAPONS.forEach((weapon) => {
            if (playerHeld && playerHeld.typeId == weapon.typeId) {
              let { x: x2, y: y2, z: z2 } = block.location;
              let randomIndex = Math.floor(Math.random() * COMBINED_WEAPONS.length);
              Minecraft.world.sendMessage(`${randomIndex}`);
              let entitiesAbove = block.dimension.getEntities().filter((entity) => {
                let pos = entity.location;
                return Math.floor(pos.x) === x2 && Math.floor(pos.y) === y2 + 1 && Math.floor(pos.z) === z2;
              });
              entitiesAbove.forEach((entity) => {
                const index = entity.getTags()[0];
                const currentLore = playerHeld.getLore();
                const combinedWeapon = COMBINED_WEAPONS.find((w) => w.index == index);
                if (!combinedWeapon)
                  return;
                const matchingAbilities = WEAPON_ABILITIES.filter((a) => a.weaponTag === combinedWeapon.weapon);
                const hasMatchingLore = matchingAbilities.some((a) => currentLore.includes(a.abilityLore));
                if (!hasMatchingLore) {
                  player.runCommand(
                    `/replaceitem entity @s slot.weapon.mainhand 0 bey:${combinedWeapon.weapon}_${weapon.itemTag}`
                  );
                  block.dimension.spawnParticle("minecraft:totem_particle", { x: x2, y: y2 + 1, z: z2 });
                  Minecraft.world.playSound(`bey_place_sound`, block.location, { volume: 10, pitch: 0.3 });
                  entitiesAbove.forEach((e) => e.addTag(`gonnaDie`));
                  if (matchingAbilities.length > 0) {
                    let randomAbility = matchingAbilities[Math.floor(Math.random() * matchingAbilities.length)];
                    const inventory = player.getComponent("minecraft:inventory").container;
                    const selectedSlotIndex = player.selectedSlotIndex;
                    if (!inventory)
                      return;
                    const item = inventory.getItem(selectedSlotIndex);
                    if (!item)
                      return;
                    Minecraft.system.runTimeout(() => {
                      item.setLore([randomAbility.abilityLore]);
                      inventory.setItem(selectedSlotIndex, item);
                    });
                  }
                }
              });
            }
            COMBINED_WEAPONS.forEach((abilityWeapon) => {
              let entitiesAbove = block.dimension.getEntities().filter((entity) => {
                let pos = entity.location;
                return Math.floor(pos.x) === x && Math.floor(pos.y) === y + 1 && Math.floor(pos.z) === z;
              });
              entitiesAbove.forEach((entity) => {
                let index = entity.getTags()[0];
                if (abilityWeapon && playerHeld?.typeId.split(":")[1].split("_")[0] == abilityWeapon.weapon && index == abilityWeapon.index && playerHeld?.typeId.split(":")[0] == "bey") {
                  let customTag = playerHeld.typeId.split(":")[1].split("_")[0];
                  const inventory = player.getComponent("minecraft:inventory").container;
                  const selectedSlotIndex = player.selectedSlotIndex;
                  if (!inventory)
                    return;
                  const item = inventory.getItem(selectedSlotIndex);
                  if (!item)
                    return;
                  let currentLore = item.getLore() || [];
                  const abilitiesForWeapon = WEAPON_ABILITIES.filter((a) => a.weaponTag === customTag);
                  const availableAbilities = abilitiesForWeapon.filter(
                    (ability) => !currentLore.includes(ability.abilityLore)
                  );
                  if (availableAbilities.length > 0) {
                    let randomAbility = availableAbilities[Math.floor(Math.random() * availableAbilities.length)];
                    Minecraft.system.runTimeout(() => {
                      currentLore.push(randomAbility.abilityLore);
                      item.setLore(currentLore);
                      inventory.setItem(selectedSlotIndex, item);
                      block.setPermutation(block.permutation.withState("bey:materia_conflux", 0));
                      block.dimension.spawnParticle("minecraft:totem_particle", { x, y: y + 1, z });
                      entity.addTag(`gonnaDie`);
                      Minecraft.world.playSound(`bey_place_sound`, block.location, { volume: 10, pitch: 0.3 });
                    });
                  }
                }
              });
            });
          });
        }
      });
    });
  }
};

// scripts/weapon_ability_passive.ts
import * as Minecraft2 from "@minecraft/server";
function weapon_passive() {
  Minecraft2.system.runInterval(() => {
    Minecraft2.world.getAllPlayers().forEach((player) => {
      let playerHeld = player.getComponent(`equippable`).getEquipment(
        Minecraft2.EquipmentSlot.Mainhand
      );
      if (playerHeld == void 0)
        return;
      let currentLore = playerHeld.getLore();
      let passiveCooldown = player.getDynamicProperty(`passive_ability_cooldown`) || 0;
      let passivekncok = player.getDynamicProperty(`passive_ability_knock`) || 0;
      let passiveSpeed = player.getDynamicProperty(`passive_ability_speed`) || 0;
      let { x, y, z } = player.getViewDirection();
      if (!passiveCooldown) {
        player.setDynamicProperty(`passive_ability_cooldown`, 0);
      }
      if (!passivekncok) {
        player.setDynamicProperty(`passive_ability_knock`, 0);
      }
      if (!passiveSpeed) {
        player.setDynamicProperty(`passive_ability_speed`, 0);
      }
      if (typeof passivekncok == `number` && passivekncok > 0) {
        player.setDynamicProperty(`passive_ability_knock`, passivekncok + 1);
      }
      if (typeof passiveSpeed == `number` && passiveSpeed > 0) {
        player.setDynamicProperty(`passive_ability_speed`, passiveSpeed + 1);
      }
      if (typeof passiveCooldown == `number`) {
        switch (true) {
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] REGEN Buff When Holding")):
            player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
            if (passiveCooldown == 1) {
              player.addEffect(`regeneration`, 20, { amplifier: 2 });
            }
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] SPEED Buff When Holding")):
            player.addEffect(`speed`, 20, { amplifier: 1 });
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] Small SPEED Buff When Holding")):
            player.addEffect(`speed`, 20, { amplifier: 0 });
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] POISON AND WITHER Removal")):
            player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
            if (passiveCooldown == 1) {
              player.runCommand(`/effect @s wither 0 0 true`);
              player.runCommand(`/effect @s poison 0 0 true`);
            }
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] Small RESISTANCE Buff When Holding")):
            player.addEffect(`resistance`, 20, { amplifier: 1 });
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] Small JUMPBOOST Buff")):
            player.addEffect(`jump_boost`, 20, { amplifier: 0 });
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] IMMUNITY to ALL Debuffs When Holding")):
            player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
            if (passiveCooldown == 1) {
              player.runCommand(`/effect @s wither 0 0 true`);
              player.runCommand(`/effect @s poison 0 0 true`);
              player.runCommand(`/effect @s blindness 0 0 true`);
              player.runCommand(`/effect @s darkness 0 0 true`);
              player.runCommand(`/effect @s hunger 0 0 true`);
              player.runCommand(`/effect @s mining_fatigue 0 0 true`);
              player.runCommand(`/effect @s nausea 0 0 true`);
              player.runCommand(`/effect @s slowness 0 0 true`);
              player.runCommand(`/effect @s weakness 0 0 true`);
            }
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] FIRE Resistance When Holding")):
            player.addEffect(`fire_resistance`, 20, { amplifier: 0 });
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] DAMAGE ENDERMAN around you")):
            player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
            player.dimension.getEntities({ maxDistance: 6, location: player.location }).forEach((entity) => {
              if (entity.typeId == "minecraft:enderman") {
                if (passiveCooldown == 1) {
                  entity.runCommand(`/damage @s 15`);
                }
              }
            });
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] JUMP Boost When Holding")):
            player.addEffect(`jump_boost`, 20, { amplifier: 1 });
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] SWIMMING buff When Holding")):
            if (player.isSwimming) {
              player.applyKnockback(x, z, 0.6, 0);
            }
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] EXPLOSION Resistance When Holding")):
            player.addEffect(`resistance`, 20, { amplifier: 3 });
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] ABSORPTION buff When Holding")):
            player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
            if (passiveCooldown == 1) {
              player.addEffect(`absorption`, 20, { amplifier: 1 });
            }
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] WITHER Resistance When Holding")):
            if (passiveCooldown == 1) {
              player.runCommand(`/effect @s wither 0 0 true`);
            }
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] SPEED buff When Holding")):
            player.addEffect(`speed`, 20, { amplifier: 2 });
            break;
          case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] SLOW Nearby Enemies Over Time")):
            player.dimension.getEntities({ maxDistance: 4, location: player.location }).forEach((enity) => {
              if (enity.nameTag != player.name) {
                enity.addEffect(`slowness`, 8, { amplifier: 0 });
              }
            });
            break;
        }
      }
      if (typeof passiveCooldown == `number` && typeof passiveSpeed == `number` && typeof passivekncok == `number`) {
        if (passiveCooldown > 30) {
          player.setDynamicProperty(`passive_ability_cooldown`, 0);
        }
        if (passiveSpeed > 80) {
          player.setDynamicProperty(`passive_ability_speed`, 0);
        }
        if (passivekncok > 160) {
          player.setDynamicProperty(`passive_ability_knock`, 0);
        }
      }
    });
  });
  Minecraft2.world.afterEvents.entityHitEntity.subscribe((event) => {
    let player = event.hitEntity;
    if (player.typeId != "minecraft:player")
      return;
    let hurtEntity = event.damagingEntity;
    let playerHeld = player.getComponent(`equippable`).getEquipment(
      Minecraft2.EquipmentSlot.Mainhand
    );
    if (playerHeld == void 0)
      return;
    let currentLore = playerHeld.getLore();
    let passivekncok = player.getDynamicProperty(`passive_ability_knock`);
    let speedkncok = player.getDynamicProperty(`passive_ability_speed`);
    if (player.typeId != "minecraft:player")
      return;
    switch (true) {
      case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] KNOCK foes that hit you [cd 8sec]")):
        if (playerHeld && passivekncok == 0) {
          player.runCommand(`/scriptevent beyond:knockback`);
          player.setDynamicProperty(`passive_ability_knock`, passivekncok + 1);
        }
        break;
      case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] High Speed Buff when hurt [cd 4sec]")):
        if (playerHeld && speedkncok == 0) {
          player.setDynamicProperty(`passive_ability_speed`, speedkncok + 1);
          player.addEffect(`speed`, 40, { amplifier: 3 });
        }
        break;
    }
  });
  Minecraft2.world.afterEvents.entityHitEntity.subscribe((event) => {
    let player = event.damagingEntity;
    if (player.typeId != "minecraft:player")
      return;
    let hurtEntity = event.hitEntity;
    let playerHeld = player.getComponent(`equippable`).getEquipment(
      Minecraft2.EquipmentSlot.Mainhand
    );
    if (playerHeld == void 0)
      return;
    let currentLore = playerHeld.getLore();
    if (player.typeId != "minecraft:player")
      return;
    switch (true) {
      case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] Increased Damage While Poisoned")):
        if (player.getEffect("minecraft:wither") || player.getEffect("minecraft:poison") || player.getEffect("fatal_poison")) {
          hurtEntity.applyDamage(7, { cause: Minecraft2.EntityDamageCause.suicide });
        }
        break;
      case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] Extra Damage To Illager Type Mobs")):
        const ILLAGER_MOBS = [
          "minecraft:pillager",
          "minecraft:evocation_illager",
          "minecraft:vindicator",
          "minecraft:ravager",
          "minecraft:witch"
        ];
        if (hurtEntity && ILLAGER_MOBS.includes(hurtEntity.typeId)) {
          hurtEntity.applyDamage(6, { cause: Minecraft2.EntityDamageCause.suicide });
        }
        break;
    }
  });
  Minecraft2.world.afterEvents.entityDie.subscribe((event) => {
    let player = event.damageSource.damagingEntity;
    let deadEntity = event.deadEntity;
    if (player == void 0)
      return;
    let playerHeld = player.getComponent(`equippable`).getEquipment(
      Minecraft2.EquipmentSlot.Mainhand
    );
    if (playerHeld == void 0)
      return;
    let currentLore = playerHeld.getLore();
    switch (true) {
      case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[Passive] Drop SOULS from defeated enemies")):
        const item = new Minecraft2.ItemStack(`beyond:soul`, 1);
        if (Math.random() <= 0.5) {
          deadEntity.dimension.spawnItem(item, deadEntity.location);
        }
        break;
    }
  });
  Minecraft2.system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity: player }) => {
    if (!player || id !== "beyond:knockback")
      return;
    const entities = player.dimension.getEntities({ location: player.location, maxDistance: 6 });
    for (const entity of entities) {
      if (entity.id === player.id)
        continue;
      const { x, z } = Vector.subtract(entity.location, player.location);
      entity?.applyKnockback(x, z, 3, 0.8);
    }
  });
}
var Vector = class {
  static multiply(vectorA, value) {
    return {
      x: vectorA.x * (typeof value === "number" ? value : value.x),
      y: vectorA.y * (typeof value === "number" ? value : value.y),
      z: vectorA.z * (typeof value === "number" ? value : value.z)
    };
  }
  static add(vectorA, vectorB) {
    return {
      x: vectorA.x + (vectorB.x ?? 0),
      y: vectorA.y + (vectorB.y ?? 0),
      z: vectorA.z + (vectorB.z ?? 0)
    };
  }
  static subtract(vectorA, vectorB) {
    return {
      x: vectorA.x - (vectorB.x ?? 0),
      y: vectorA.y - (vectorB.y ?? 0),
      z: vectorA.z - (vectorB.z ?? 0)
    };
  }
  static distance(vectorA, vectorB) {
    return Math.sqrt(
      Math.pow(vectorA.x - vectorB.x, 2) + Math.pow(vectorA.y - vectorB.y, 2) + Math.pow(vectorA.z - vectorB.z, 2)
    );
  }
};

// scripts/weapon_ability_onhurt.ts
import * as Minecraft3 from "@minecraft/server";
function weapon_onhurt() {
  Minecraft3.system.runInterval(() => {
    Minecraft3.world.getAllPlayers().forEach((player) => {
      let onHurtCooldown = player.getDynamicProperty(`on_hurt_cooldown`);
      if (!onHurtCooldown) {
        player.setDynamicProperty(`on_hurt_cooldown`, 0);
      }
      if (typeof onHurtCooldown === "number") {
        if (onHurtCooldown > 0) {
          player.setDynamicProperty(`on_hurt_cooldown`, onHurtCooldown + 1);
        }
        if (onHurtCooldown > 400) {
          player.setDynamicProperty(`on_hurt_cooldown`, 0);
        }
      }
    });
  });
  Minecraft3.world.afterEvents.entityHurt.subscribe((event) => {
    let damage = event.damage;
    let player = event.hurtEntity;
    if (player == void 0)
      return;
    if (player.typeId !== "minecraft:player")
      return;
    let onHurtCooldown = player.getDynamicProperty("on_hurt_cooldown") || 0;
    let playerHeld = player.getComponent(`equippable`).getEquipment(
      Minecraft3.EquipmentSlot.Mainhand
    );
    if (playerHeld == void 0)
      return;
    let currentLore = playerHeld.getLore();
    if (!currentLore)
      return;
    switch (true) {
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Rewind A Portion Of Taken Damage") && onHurtCooldown === 0): {
        let playerHealth = player.getComponent("health");
        const damageToAdd = [];
        let remaining = damage;
        while (remaining > 0) {
          if (remaining >= 2) {
            damageToAdd.push(2);
            remaining -= 2;
          } else {
            damageToAdd.push(remaining);
            remaining = 0;
          }
        }
        damageToAdd.forEach((damage2, index) => {
          Minecraft3.system.runTimeout(() => {
            playerHealth.setCurrentValue(playerHealth.currentValue + damage2);
          }, 15 * index);
        });
        player.setDynamicProperty("on_hurt_cooldown", 1);
        break;
      }
    }
  });
  Minecraft3.world.afterEvents.entityHitEntity.subscribe((event) => {
    let player = event.hitEntity;
    if (!player || player.typeId !== "minecraft:player")
      return;
    let hurtingEntity = event.damagingEntity;
    let onHurtCooldown = player.getDynamicProperty("on_hurt_cooldown") || 0;
    let playerHeld = player.getComponent(`equippable`).getEquipment(
      Minecraft3.EquipmentSlot.Mainhand
    );
    if (playerHeld == void 0)
      return;
    let currentLore = playerHeld.getLore();
    if (!currentLore)
      return;
    switch (true) {
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Drop SOULS from getting hurt") && onHurtCooldown === 0):
        let newItem = new Minecraft3.ItemStack("bey:soiled_soul", 1);
        if (Math.random() <= 0.2) {
          player.dimension.spawnItem(newItem, player.location);
        }
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] AoE Poison Where you are hurt") && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
          if (entity.nameTag != player.nameTag) {
            entity.addEffect(`poison`, 60, { amplifier: 2 });
          }
        });
        player.setDynamicProperty("on_hurt_cooldown", 300);
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
          if (entity.nameTag != player.nameTag) {
            entity.addEffect(`weakness`, 60, { amplifier: 1 });
          }
        });
        player.setDynamicProperty("on_hurt_cooldown", 300);
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Summon LIGHTNING On Hurt") && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        player.addEffect(`fire_resistance`, 60, { amplifier: 1 });
        hurtingEntity.runCommand(`/summon lightning_bolt ~~~`);
        player.setDynamicProperty("on_hurt_cooldown", 1);
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Blind Nearby Foes") && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
          if (entity.nameTag != player.nameTag) {
            entity.addEffect(`blindness`, 60, { amplifier: 1 });
          }
        });
        player.setDynamicProperty("on_hurt_cooldown", 1);
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Apply Slow & Resistance") && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        player.addEffect(`slowness`, 60, { amplifier: 1 }), player.addEffect(`resistance`, 60, { amplifier: 2 });
        player.setDynamicProperty("on_hurt_cooldown", 1);
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Apply KNOCKBACK on Hit") && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        player.runCommand(`/scriptevent beyond:knockback`);
        player.setDynamicProperty("on_hurt_cooldown", 1);
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Leap Upwards Instantly") && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        let { x, y, z } = player.getViewDirection();
        player.applyKnockback(x, y, 0, 0.6);
        player.setDynamicProperty("on_hurt_cooldown", 1);
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] SMITE Nearby Undead Enemies") && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        const KILLABLE_UNDEAD = [
          "minecraft:zombie",
          "minecraft:skeleton",
          "minecraft:creeper",
          "minecraft:zombified_pigmen",
          "minecraft:wither_skeleton"
        ];
        player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
          if (KILLABLE_UNDEAD.includes(entity.typeId)) {
            entity.runCommand(`/kill @s`);
          }
        });
        player.setDynamicProperty("on_hurt_cooldown", 1);
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Set Nearby Foes on FIRE") && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
          if (entity.nameTag != player.nameTag) {
            entity.setOnFire(3);
          }
        });
        player.setDynamicProperty("on_hurt_cooldown", 200);
        break;
      case currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Gain SPEED Boost" && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        player.addEffect(`speed`, 30, { amplifier: 1 });
        player.setDynamicProperty("on_hurt_cooldown", 200);
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Summon RESISTANCE Buff") && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        player.addEffect(`resistance`, 30, { amplifier: 1 });
        player.setDynamicProperty("on_hurt_cooldown", 200);
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Summon BLINDNESS FIELD") && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
          if (entity.nameTag != player.nameTag) {
            entity.addEffect(`blindness`, 20, { amplifier: 1 });
          }
        });
        player.setDynamicProperty("on_hurt_cooldown", 1);
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Summon AoE WITHER") && onHurtCooldown === 0):
        player.dimension.spawnEntity("bey:radius_entity", player.location);
        player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
          if (entity.nameTag != player.nameTag) {
            entity.addEffect(`wither`, 60, { amplifier: 100 });
          }
        });
        player.setDynamicProperty("on_hurt_cooldown", 1);
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] 40% Chace to burn the attacker") && onHurtCooldown === 0):
        let randomX = Math.random();
        if (randomX <= 0.4) {
          hurtingEntity.setOnFire(5);
          player.setDynamicProperty("on_hurt_cooldown", 1);
        }
        break;
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] Curse The Attacker") && onHurtCooldown === 0):
        hurtingEntity.addTag(`Cursed`);
        hurtingEntity.setDynamicProperty(`Cursed`, 1);
        player.setDynamicProperty("on_hurt_cooldown", 1);
        break;
    }
  });
  Minecraft3.system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity: player }) => {
    if (!player || id !== "beyond:knockback")
      return;
    const entities = player.dimension.getEntities({ location: player.location, maxDistance: 6 });
    for (const entity of entities) {
      if (entity.id === player.id)
        continue;
      const { x, z } = Vector2.subtract(entity.location, player.location);
      entity?.applyKnockback(x, z, 3, 0.8);
    }
  });
}
var Vector2 = class {
  static multiply(vectorA, value) {
    return {
      x: vectorA.x * (typeof value === "number" ? value : value.x),
      y: vectorA.y * (typeof value === "number" ? value : value.y),
      z: vectorA.z * (typeof value === "number" ? value : value.z)
    };
  }
  static add(vectorA, vectorB) {
    return {
      x: vectorA.x + (vectorB.x ?? 0),
      y: vectorA.y + (vectorB.y ?? 0),
      z: vectorA.z + (vectorB.z ?? 0)
    };
  }
  static subtract(vectorA, vectorB) {
    return {
      x: vectorA.x - (vectorB.x ?? 0),
      y: vectorA.y - (vectorB.y ?? 0),
      z: vectorA.z - (vectorB.z ?? 0)
    };
  }
  static distance(vectorA, vectorB) {
    return Math.sqrt(
      Math.pow(vectorA.x - vectorB.x, 2) + Math.pow(vectorA.y - vectorB.y, 2) + Math.pow(vectorA.z - vectorB.z, 2)
    );
  }
};

// scripts/main.ts
import { Player as Player4, system as system7, world as world7 } from "@minecraft/server";

// scripts/features/activeAbility/activeAbilityHolder.ts
import {
  world as world4,
  system as system4,
  EntityDamageCause as EntityDamageCause2
} from "@minecraft/server";
var activeAbilities = class {
  static {
    this._unleashSouls = (p) => {
      const inv = p.getComponent("inventory");
      let soulCount = 0;
      let container = inv.container;
      if (container) {
        for (let i = 0; i < container.size; i++) {
          const item = container.getItem(i);
          if (item?.typeId === "beyond:soul") {
            soulCount += item.amount;
          }
        }
      }
      if (!soulCount) {
        p.runCommand(`tellraw @s {"rawtext":[{"text":"\xA7l\xA74You don't have \xA7dSOULS"}]}`);
        return;
      }
      const hp = p.getComponent("health");
      hp.setCurrentValue(Math.min(hp.currentValue + Math.floor(soulCount * 2.5), hp.defaultValue));
      p.runCommand(`/clear @s beyond:soul 0 1`);
      world4.playSound("beacon.activate", p.location);
    };
  }
  static {
    this._poisonToRegen = (p) => {
      if (p.getEffect("minecraft:wither") || p.getEffect("minecraft:poison") || p.getEffect("fatal_poison")) {
        p.addEffect("regeneration", 200, { amplifier: 2 });
        p.runCommand(`/effect @s wither 0 0`);
        p.runCommand(`/effect @s poison 0 0`);
        p.runCommand(`/effect @s fatal_poison 0 0`);
      } else {
        p.runCommand(`tellraw @s {"rawtext":[{"text":"\xA72You don't have \xA7dPoison or Wither"}]}`);
      }
    };
  }
  static {
    this._selfSacrifice = (p) => {
      p.applyDamage(6);
      p.addEffect("speed", 100, { amplifier: 2 });
      p.addEffect("strength", 100, { amplifier: 0 });
    };
  }
  static {
    this._wardenSpirits = (p) => {
      const replaceableBlocks = ["grass_block", "stone", "andesite", "granite", "diorite", "gravel"];
      p.dimension.playSound(`entity.warden.attack`, p.location);
      for (let i = 1; i <= 18; i++) {
        p.dimension.playSound("mob.warden.attack", p.location, { volume: 10, pitch: 0.9 });
        p.runCommand(`execute at @s positioned ^ ^1.5 ^${i * 2} run particle minecraft:sonic_explosion ~~~`);
        system4.runTimeout(() => {
          p.getEntitiesFromViewDirection({ maxDistance: 28 }).forEach((entity) => {
            const e = entity.entity;
            const viewDir = e.getViewDirection();
            e.applyKnockback(viewDir.x, viewDir.y, 0.6, 0.6);
            e.applyDamage(15, { cause: EntityDamageCause2.selfDestruct });
            for (let x = -3; x <= 3; x++) {
              for (let z = -3; z <= 3; z++) {
                if (Math.random() < 0.06) {
                  replaceableBlocks.forEach((blockType) => {
                    e.runCommand(`fill ~${x} ~-4 ~${z} ~${x} ~3 ~${z} minecraft:sculk replace minecraft:${blockType}`);
                  });
                  if (Math.random() < 5e-3) {
                    e.runCommand(`fill ~${x} ~-2 ~${z} ~${x} ~ ~${z} minecraft:sculk_sensor replace air`);
                  }
                }
              }
            }
          });
        });
      }
    };
  }
  static {
    this._bounceFoes = (p) => {
      p.dimension.getEntities({ location: p.location, maxDistance: 5 }).forEach((entity) => {
        if (entity.id === p.id)
          return;
        let { x, y, z } = entity.location;
        entity.applyKnockback(x, y, 0, 1.3);
        p.runCommand(`playsound mob.slime.jump @s ~ ~ ~ 1 1`);
      });
    };
  }
  static {
    this._divineLightning = (p) => {
      p.dimension.getEntities({ maxDistance: 8, location: p.location }).forEach((entity) => {
        if (entity.nameTag !== p.nameTag && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
          p.dimension.spawnEntity("bey:radius_entity", p.location);
          entity.dimension.spawnEntity("lightning_bolt", entity.location);
        }
        p;
      });
    };
  }
  static {
    this._doubleJump = (p) => {
      let { x, y, z } = p.location;
      if (!p.isOnGround) {
        p.applyKnockback(x, y, 0, 0.9);
      }
      p.runCommand(`playsound mob.slime.jump @s ~ ~ ~ 1 1`);
    };
  }
  static {
    this._createExplosions = (p) => {
      p.dimension.spawnEntity("tnt", p.location);
      p.onScreenDisplay.setTitle("\xA7l\xA74RUN !!!!!");
    };
  }
  static {
    this._curseEntities = (p) => {
      p.dimension.getEntities({ maxDistance: 5, location: p.location }).forEach((entity) => {
        p.dimension.spawnEntity("bey:radius_entity", p.location);
        if (entity.id !== p.id && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
          entity.addTag(`Cursed`);
          entity.setDynamicProperty(`Cursed`, 1);
        }
      });
    };
  }
  static _simpleEffects(effect1, amplifier1, effect2, amplifier2, effect3, amplifier3) {
    return (p) => {
      if (effect1 == `null`)
        return;
      p.addEffect(effect1, 200, { amplifier: amplifier1 });
      if (effect2 == `null`)
        return;
      p.addEffect(effect2, 200, { amplifier: amplifier2 });
      if (effect3 == `null`)
        return;
      p.addEffect(effect3, 200, { amplifier: amplifier3 });
    };
  }
  static _simpleAreaAttack(range, effect, amplifier, setFire, dash) {
    return (p) => {
      p.dimension.getEntities({ maxDistance: range, location: p.location }).forEach((entity) => {
        p.dimension.spawnEntity("bey:radius_entity", p.location);
        if (entity.nameTag !== p.nameTag && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
          if (entity.id === p.id)
            return;
          if (effect != void 0) {
            entity.addEffect(effect, 200, { amplifier });
          }
          if (setFire != 0) {
            entity.setOnFire(setFire);
          }
          if (dash == true) {
            system4.runTimeout(() => {
              let { x, y, z } = p.getViewDirection();
              p.applyKnockback(x, z, 3, 0.1);
            }, 2);
          }
        }
      });
    };
  }
};

// scripts/features/activeAbility/activeAbility.ts
var ActiveAbility = class _ActiveAbility {
  static run(player, held) {
    const lore = held.getLore() ?? [];
    const entry = _ActiveAbility._abilities.find((a) => lore.some((line) => line === a.tag));
    if (!entry)
      return;
    if (!_ActiveAbility._cooldownReady(player))
      return;
    entry.exec(player, held);
    _ActiveAbility._startCooldown(player, entry.cooldown);
  }
  static {
    this._abilities = [
      {
        tag: "\xA7r\xA7d[Active] Interact To UNLEASH Stored SOULS as HEALTH",
        exec: activeAbilities._unleashSouls,
        cooldown: 200
      },
      {
        tag: "\xA7r\xA7d[Active] Interact To Freeze Entities Briefly",
        exec: activeAbilities._simpleAreaAttack(6, `slowness`, 6, 0, false),
        cooldown: 1
      },
      { tag: "\xA7r\xA7d[Active] Turn Poison Into Pleasure", exec: activeAbilities._poisonToRegen, cooldown: 1 },
      {
        tag: "\xA7r\xA7d[Active] Interact To Get A HEALTH BOOST",
        exec: activeAbilities._simpleEffects(`absorption`, 3, `null`, 0, `null`, 0),
        cooldown: 1
      },
      {
        tag: "\xA7r\xA7d[Active] Interact To Get A COMBINED BUFF",
        exec: activeAbilities._simpleEffects(`regeneration`, 0, `jump_boost`, 0, `speed`, 0),
        cooldown: 1
      },
      {
        tag: "\xA7r\xA7d[Active] Interact To Go INVISIBLE for a while",
        exec: activeAbilities._simpleEffects(`invisibility`, 0, `null`, 0, `null`, 0),
        cooldown: 1
      },
      { tag: "\xA7r\xA7d[Active] Interact To Get Buff For a SACRIFICE", exec: activeAbilities._selfSacrifice, cooldown: 1 },
      { tag: "\xA7r\xA7d[Active] Interact To Summon WARDEN SPIRITS", exec: activeAbilities._wardenSpirits, cooldown: 1 },
      {
        tag: "\xA7r\xA7d[Active] Interact To DASH forward",
        exec: activeAbilities._simpleAreaAttack(0, `null`, 0, 0, true),
        cooldown: 400
      },
      { tag: "\xA7r\xA7d[Active] Interact To BOUNCE foes", exec: activeAbilities._bounceFoes, cooldown: 1 },
      { tag: "\xA7r\xA7d[Active] Interact To Summon DIVINE LIGHTNING", exec: activeAbilities._divineLightning, cooldown: 1 },
      {
        tag: "\xA7r\xA7d[Active] Interact To Summon FIREBALLS",
        exec: activeAbilities._simpleAreaAttack(6, `null`, 0, 6, false),
        cooldown: 1
      },
      { tag: "\xA7r\xA7d[Active] Interact To Double Your JUMP HEIGHT", exec: activeAbilities._doubleJump, cooldown: 500 },
      {
        tag: "\xA7r\xA7d[Active] Interact To BOOST Mining Speed",
        exec: activeAbilities._simpleEffects(`haste`, 2, `null`, 0, `null`, 0),
        cooldown: 1
      },
      {
        tag: "\xA7r\xA7d[Active] Interact for WATER BREATHING",
        exec: activeAbilities._simpleEffects(`water_breathing`, 2, `null`, 0, `null`, 0),
        cooldown: 1
      },
      { tag: "\xA7r\xA7d[Active] Interact To Create EXPLOSIONS", exec: activeAbilities._createExplosions, cooldown: 1 },
      {
        tag: "\xA7r\xA7d[Active] Interact replaces HUNGER for HEALING",
        exec: activeAbilities._simpleEffects(`regeneration`, 6, `hunger`, 254, `null`, 0),
        cooldown: 1
      },
      {
        tag: "\xA7r\xA7d[Active] WITHER mobs around you",
        exec: activeAbilities._simpleAreaAttack(6, `wither`, 5, 0, false),
        cooldown: 1
      },
      {
        tag: "\xA7r\xA7d[Active] DASH and set mobs on fire around you",
        exec: activeAbilities._simpleAreaAttack(6, `null`, 0, 6, true),
        cooldown: 1
      },
      { tag: "\xA7r\xA7d[Active] Curse Entities Around", exec: activeAbilities._curseEntities, cooldown: 1 }
    ];
  }
  static _cooldownReady(p) {
    return (p.getDynamicProperty("interact_cooldown") ?? 0) === 0;
  }
  static _startCooldown(p, time) {
    p.setDynamicProperty("interact_cooldown", time);
  }
};

// scripts/handelers/itemUse.ts
var itemUseHandler = class {
  static itemUseHandler(itemStack, source) {
    ActiveAbility.run(source, itemStack);
  }
};

// scripts/features/ohHitAbility/onHitAbility.ts
import { EquipmentSlot as EquipmentSlot4 } from "@minecraft/server";

// scripts/helper/tellraw.ts
function tellraw(player, text) {
  player.runCommand(`/tellraw @a {"rawtext":[{"text":"${text}"}]}`);
}

// scripts/features/ohHitAbility/onHitAbilityHolder.ts
var OnHitAbilities = class {
  static _simpleEffectsHurtEntity(effect, amplifier, duration) {
    return (player, hurtEntity, held) => {
      hurtEntity.addEffect(effect, duration, { amplifier });
    };
  }
  static _simpleEffectsPlayer(effect, amplifier, duration) {
    return (player, hurtEntity, held) => {
      player.addEffect(effect, duration, { amplifier });
    };
  }
  static _stealHealth(percentage) {
    return (player, hurtEntity, held) => {
      const hurtEntityHealth = hurtEntity.getComponent(`health`).currentValue;
      const playerHealth = player.getComponent(`health`).currentValue;
      player.getComponent(`health`).setCurrentValue(
        playerHealth + hurtEntityHealth * percentage
      );
      tellraw(
        player,
        `\xA7l\xA74[!]\xA7rOn That Hit You Gained \xA7l\xA74${(hurtEntityHealth * percentage).toFixed(
          1
        )}\xA7r health. Bigger Target Gives More \xA7l\xA74Health`
      );
    };
  }
};

// scripts/features/ohHitAbility/onHitAbility.ts
var OnHitAbility = class _OnHitAbility {
  static run(player, hurtEntity) {
    const heldItem = player.getComponent(`equippable`).getEquipment(
      EquipmentSlot4.Mainhand
    );
    if (heldItem == void 0)
      return;
    const lore = heldItem?.getLore() ?? [];
    const entry = _OnHitAbility._abilities.find((a) => lore.some((line) => line === a.tag));
    if (!entry)
      return;
    entry.exec(player, hurtEntity, heldItem);
    this._startCooldown(player, entry.cooldown);
  }
  static {
    this._abilities = [
      { tag: "\xA7r\xA7d[On-Hit] Steal A PORTION of Enemy Health", exec: OnHitAbilities._stealHealth(0.05), cooldown: 100 },
      {
        tag: "\xA7r\xA7d[On-Hit] Infect Hurt With Weakness",
        exec: OnHitAbilities._simpleEffectsHurtEntity("weakness", 2, 100),
        cooldown: 1
      },
      { tag: "\xA7r\xA7d[On-Hit] Poison The Enemy", exec: () => {
      }, cooldown: 100 },
      { tag: "\xA7r\xA7d[On-Hit] WEAK Foes On Hit", exec: () => {
      }, cooldown: 100 },
      { tag: "\xA7r\xA7d[On-Hit] STUN Foes On Hit", exec: () => {
      }, cooldown: 1 },
      { tag: "\xA7r\xA7d[On-Hit] Effect Foes With DARKNESS", exec: () => {
      }, cooldown: 100 },
      { tag: "\xA7r\xA7d[On-Hit] Effect Foes With FATAL POISON", exec: () => {
      }, cooldown: 100 },
      { tag: "\xA7r\xA7d[On-Hit] Cause BLINDNESS On Hit", exec: () => {
      }, cooldown: 100 },
      { tag: "\xA7r\xA7d[On-Hit] Cause VOID DAMAGE On Hit", exec: () => {
      }, cooldown: 1 },
      { tag: "\xA7r\xA7d[On-Hit] Cause LEVITATION On Hit", exec: () => {
      }, cooldown: 1 },
      { tag: "\xA7r\xA7d[On-Hit] Gain INVINCIBILITY (2s) On Hit", exec: () => {
      }, cooldown: 1 },
      { tag: "\xA7r\xA7d[On-Hit] Set Foes On FIRE", exec: () => {
      }, cooldown: 100 },
      { tag: "\xA7r\xA7d[On-Hit] BOUNCE on hit", exec: () => {
      }, cooldown: 1 },
      { tag: "\xA7r\xA7d[On-Hit] STRENGTH buff on hit", exec: () => {
      }, cooldown: 1 },
      { tag: "\xA7r\xA7d[On-Hit] SLOW Foes on hit", exec: () => {
      }, cooldown: 100 },
      { tag: "\xA7r\xA7d[On-Hit] Detonate A SMALL EXPLOSION", exec: () => {
      }, cooldown: 1 },
      { tag: "\xA7r\xA7d[On-Hit] Instantly HEAL Self On Hit", exec: () => {
      }, cooldown: 1 },
      { tag: "\xA7r\xA7d[On-Hit] Inflict WITHER Effect", exec: () => {
      }, cooldown: 100 },
      { tag: "\xA7r\xA7d[On-Hit] 40% Chance to burn the enemy", exec: () => {
      }, cooldown: 140 },
      { tag: "\xA7r\xA7d[On-Hit] Curse The Enemy", exec: () => {
      }, cooldown: 1 }
    ];
  }
  static _cooldownReady(p) {
    return (p.getDynamicProperty("on_hit_cooldown") ?? 0) === 0;
  }
  static _startCooldown(p, time) {
    p.setDynamicProperty("on_hit_cooldown", time);
  }
};

// scripts/handelers/entityHitEntity.ts
var entityHitEntityHandler = class {
  static entityHitEntityHandler(damagingEntity, hitEntity) {
    OnHitAbility.run(damagingEntity, hitEntity);
  }
};

// scripts/handelers/runInterval.ts
import { world as world6 } from "@minecraft/server";

// scripts/features/playerProcessor.ts
import { system as system5, EntityDamageCause as EntityDamageCause3 } from "@minecraft/server";
var playerProcessor = class {
  static activeAbilityCooldown(player) {
    let weaponInteract = player.getDynamicProperty("interact_cooldown") ?? 0;
    if (typeof weaponInteract == `number`) {
      if (weaponInteract !== 0) {
        player.setDynamicProperty("interact_cooldown", weaponInteract + 10);
      }
      if (weaponInteract > 600) {
        player.setDynamicProperty("interact_cooldown", 0);
      }
    }
    player.dimension.getEntities().forEach((entity) => {
      if (entity.typeId === "bey:radius_entity") {
        system5.runTimeout(() => {
          entity.runCommand(`/tp @s ~ 100 ~`);
        }, 17);
        system5.runTimeout(() => {
          entity.runCommand(`/kill @s`);
        }, 20);
      }
    });
  }
  static cooldownDisplay(player) {
    const cooldowns = {
      Hurt: { time: Number(player.getDynamicProperty("on_hurt_cooldown") ?? 0), max: 20 },
      Interact: { time: Number(player.getDynamicProperty("interact_cooldown") ?? 0), max: 30 },
      Hit: { time: Number(player.getDynamicProperty("on_hit_cooldown") ?? 0), max: 10 }
    };
    const actionBarText = Object.entries(cooldowns).filter(([_, data]) => data.time > 0).map(([name, data]) => `\xA76${name}: \xA7d${data.max - Math.floor(data.time / 20)}s`).join(" \xA77| ");
    player.onScreenDisplay.setActionBar(actionBarText);
  }
  static cursedEntity(player) {
    player.dimension.getEntities().forEach((entity) => {
      let curseMeter = entity.getDynamicProperty(`Cursed`) || 0;
      if (typeof curseMeter != `number`)
        return;
      if (entity.hasTag(`Cursed`)) {
        if (curseMeter > 0)
          entity.setDynamicProperty(`Cursed`, curseMeter + 1);
        if (curseMeter % 3 == 1) {
          entity.dimension.spawnParticle("bey:raid_curse", entity.location);
        }
        if (curseMeter > 60) {
          entity.setDynamicProperty(`Cursed`, 0);
          entity.applyDamage(10, { cause: EntityDamageCause3.suicide });
        }
      }
    });
  }
  static onHitCooldown(player) {
    let onHitCooldown = player.getDynamicProperty(`on_hit_cooldown`);
    if (onHitCooldown === void 0) {
      player.setDynamicProperty(`on_hit_cooldown`, 0);
    }
    if (onHitCooldown > 0) {
      player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
    }
    if (onHitCooldown > 200) {
      player.setDynamicProperty(`on_hit_cooldown`, 0);
    }
  }
};

// scripts/handelers/runInterval.ts
var runInterval = class {
  static runInterval() {
    world6.getAllPlayers().forEach((player) => {
      playerProcessor.activeAbilityCooldown(player);
      playerProcessor.onHitCooldown(player);
      playerProcessor.cooldownDisplay(player);
      playerProcessor.cursedEntity(player);
    });
  }
};

// scripts/main.ts
world7.afterEvents.itemUse.subscribe(({ source, itemStack }) => {
  itemUseHandler.itemUseHandler(itemStack, source);
});
world7.afterEvents.entityHitEntity.subscribe(({ damagingEntity, hitEntity }) => {
  if (damagingEntity instanceof Player4) {
    entityHitEntityHandler.entityHitEntityHandler(damagingEntity, hitEntity);
  }
});
system7.runInterval(() => {
  runInterval.runInterval();
});
weapon_passive();
weapon_onhurt();
function initialize() {
  new WeaponCombiner();
}
initialize();

//# sourceMappingURL=../debug/main.js.map
