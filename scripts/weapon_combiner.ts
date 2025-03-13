import * as Minecraft from "@minecraft/server";

export const WEAPON_ABILITIES = [
  // AMY
  { weaponTag: "amy", abilityLore: "§r§d[Passive] REGEN Buff When Holding", abilityIndex: 0 },
  { weaponTag: "amy", abilityLore: "§r§d[Active] Interact To Get A HEALTH BOOST", abilityIndex: 1 },
  { weaponTag: "amy", abilityLore: "§r§d[On-Hit] WEAK Foes On Hit", abilityIndex: 2 },
  { weaponTag: "amy", abilityLore: "§r§d[On-Hurt] AoE WEAKNESS On Hurt", abilityIndex: 3 },

  // BEA
  { weaponTag: "bea", abilityLore: "§r§d[Passive] SPEED Buff When Holding", abilityIndex: 0 },
  { weaponTag: "bea", abilityLore: "§r§d[Active] Interact To Get A COMBINED BUFF", abilityIndex: 1 },
  { weaponTag: "bea", abilityLore: "§r§d[On-Hit] STUN Foes On Hit", abilityIndex: 2 },
  { weaponTag: "bea", abilityLore: "§r§d[On-Hurt] Summon LIGHTNING On Hurt", abilityIndex: 3 },

  // CAM
  { weaponTag: "cam", abilityLore: "§r§d[Passive] Small SPEED Buff When Holding", abilityIndex: 0 },
  { weaponTag: "cam", abilityLore: "§r§d[Active] Interact To Go INVISIBLE for a while", abilityIndex: 1 },
  { weaponTag: "cam", abilityLore: "§r§d[On-Hit] Effect Foes With DARKNESS", abilityIndex: 2 },
  { weaponTag: "cam", abilityLore: "§r§d[On-Hurt] Blind Nearby Foes", abilityIndex: 3 },

  // CRY
  { weaponTag: "cry", abilityLore: "§r§d[Passive] POISON AND WITHER Removal", abilityIndex: 0 },
  { weaponTag: "cry", abilityLore: "§r§d[Active] Interact To Get Buff For a SACRIFICE", abilityIndex: 1 },
  { weaponTag: "cry", abilityLore: "§r§d[On-Hit] Effect Foes With FATAL POISON", abilityIndex: 2 },
  { weaponTag: "cry", abilityLore: "§r§d[On-Hurt] Apply Slow & Resistance", abilityIndex: 3 },

  // DEEP
  { weaponTag: "deep", abilityLore: "§r§d[Passive] Small RESISTANCE Buff When Holding", abilityIndex: 0 },
  { weaponTag: "deep", abilityLore: "§r§d[Active] Interact To Summon WARDEN SPIRITS", abilityIndex: 1 },
  { weaponTag: "deep", abilityLore: "§r§d[On-Hit] Cause BLINDNESS On Hit", abilityIndex: 2 },
  { weaponTag: "deep", abilityLore: "§r§d[On-Hurt] Apply KNOCKBACK on Hit", abilityIndex: 3 },

  // FROGLIGHT
  { weaponTag: "froglight", abilityLore: "§r§d[Passive] Small JUMPBOOST Buff", abilityIndex: 0 },
  { weaponTag: "froglight", abilityLore: "§r§d[Active] Interact To BOUNCE foes", abilityIndex: 1 },
  { weaponTag: "froglight", abilityLore: "§r§d[On-Hit] Cause LEVITATION On Hit", abilityIndex: 2 },
  { weaponTag: "froglight", abilityLore: "§r§d[On-Hurt] Leap Upwards Instantly", abilityIndex: 3 },

  // GOD
  { weaponTag: "god", abilityLore: "§r§d[Passive] IMMUNITY to ALL Debuffs When Holding", abilityIndex: 0 },
  { weaponTag: "god", abilityLore: "§r§d[Active] Interact To Summon DIVINE LIGHTNING", abilityIndex: 1 },
  { weaponTag: "god", abilityLore: "§r§d[On-Hit] Gain INVINCIBILITY (2s) On Hit", abilityIndex: 2 },
  { weaponTag: "god", abilityLore: "§r§d[On-Hurt] SMITE Nearby Undead Enemies", abilityIndex: 3 },

  // MAGMA
  { weaponTag: "magma", abilityLore: "§r§d[Passive] FIRE Resistance When Holding", abilityIndex: 0 },
  { weaponTag: "magma", abilityLore: "§r§d[Active] Interact To Summon FIREBALLS", abilityIndex: 1 },
  { weaponTag: "magma", abilityLore: "§r§d[On-Hit] Set Foes On FIRE", abilityIndex: 2 },
  { weaponTag: "magma", abilityLore: "§r§d[On-Hurt] Set Nearby Foes on FIRE", abilityIndex: 3 },

  // RABBIT
  { weaponTag: "rabbit", abilityLore: "§r§d[Passive] JUMP Boost When Holding", abilityIndex: 0 },
  { weaponTag: "rabbit", abilityLore: "§r§d[Active] Interact To Double Your JUMP HEIGHT", abilityIndex: 1 },
  { weaponTag: "rabbit", abilityLore: "§r§d[On-Hit] BOUNCE on hit", abilityIndex: 2 },
  { weaponTag: "rabbit", abilityLore: "§r§d[On-Hurt] Gain SPEED Boost", abilityIndex: 3 },

  // REDSTONE
  { weaponTag: "redstone", abilityLore: "§r§d[Passive] High Speed Buff when hurt [cd 4sec]", abilityIndex: 0 },
  { weaponTag: "redstone", abilityLore: "§r§d[Active] Interact To BOOST Mining Speed", abilityIndex: 1 },
  { weaponTag: "redstone", abilityLore: "§r§d[On-Hit] STRENGTH buff on hit", abilityIndex: 2 },
  { weaponTag: "redstone", abilityLore: "§r§d[On-Hurt] Gain SPEED Boost", abilityIndex: 3 },

  // SEA
  { weaponTag: "sea", abilityLore: "§r§d[Passive] SWIMMING buff When Holding", abilityIndex: 0 },
  { weaponTag: "sea", abilityLore: "§r§d[Active] Interact for WATER BREATHING", abilityIndex: 1 },
  { weaponTag: "sea", abilityLore: "§r§d[On-Hit] SLOW Foes on hit", abilityIndex: 2 },
  { weaponTag: "sea", abilityLore: "§r§d[On-Hurt] Summon RESISTANCE Buff", abilityIndex: 3 },

  // TNT
  { weaponTag: "tnt", abilityLore: "§r§d[Passive] EXPLOSION Resistance When Holding", abilityIndex: 0 },
  { weaponTag: "tnt", abilityLore: "§r§d[Active] Interact To Create EXPLOSIONS", abilityIndex: 1 },
  { weaponTag: "tnt", abilityLore: "§r§d[On-Hit] Detonate A SMALL EXPLOSION", abilityIndex: 2 },
  { weaponTag: "tnt", abilityLore: "§r§d[On-Hurt] Summon BLINDNESS FIELD", abilityIndex: 3 },

  // TOTEM
  { weaponTag: "totem", abilityLore: "§r§d[Passive] ABSORPTION buff When Holding", abilityIndex: 0 },
  { weaponTag: "totem", abilityLore: "§r§d[Active] Interact replaces HUNGER for HEALING", abilityIndex: 1 },
  { weaponTag: "totem", abilityLore: "§r§d[On-Hit] Instantly HEAL Self On Hit", abilityIndex: 2 },
  { weaponTag: "totem", abilityLore: "§r§d[On-Hurt] Summon RESISTANCE Buff", abilityIndex: 3 },

  // WITHER
  { weaponTag: "wither", abilityLore: "§r§d[Passive] WITHER Resistance When Holding", abilityIndex: 0 },
  { weaponTag: "wither", abilityLore: "§r§d[Active] WITHER mobs around you", abilityIndex: 1 },
  { weaponTag: "wither", abilityLore: "§r§d[On-Hit] Inflict WITHER Effect", abilityIndex: 2 },
  { weaponTag: "wither", abilityLore: "§r§d[On-Hurt] Summon AoE WITHER", abilityIndex: 3 },
];

export function weapon_combiner() {
  const COMBINED_WEAPONS = [
    { typeId: "minecraft:amethyst_shard", weapon: "amy", displayItem: "Ame", index: "1" },
    { typeId: "minecraft:nether_star", weapon: "bea", displayItem: "Net", index: "2" },
    { typeId: "minecraft:oak_leaves", weapon: "cam", displayItem: "Oak", index: "3" },
    { typeId: "minecraft:crying_obsidian", weapon: "cry", displayItem: "Cry", index: "4" },
    { typeId: "minecraft:echo_shard", weapon: "deep", displayItem: "Ech", index: "5" },
    { typeId: "minecraft:ochre_froglight", weapon: "froglight", displayItem: "Frg", index: "6" },
    { typeId: "minecraft:pearlescent_froglight", weapon: "froglight", displayItem: "Frg", index: "6" },
    { typeId: "minecraft:verdant_froglight", weapon: "froglight", displayItem: "Frg", index: "6" },
    { typeId: "minecraft:enchanted_golden_apple", weapon: "god", displayItem: "Ega", index: "7" },
    { typeId: "minecraft:magma", weapon: "magma", displayItem: "Mag", index: "8" },
    { typeId: "minecraft:rabbit_foot", weapon: "rabbit", displayItem: "Rab", index: "9" },
    { typeId: "minecraft:redstone", weapon: "redstone", displayItem: "Red", index: "10" },
    { typeId: "minecraft:heart_of_the_sea", weapon: "sea", displayItem: "Sea", index: "11" },
    { typeId: "minecraft:tnt", weapon: "tnt", displayItem: "Tnt", index: "12" },
    { typeId: "minecraft:totem_of_undying", weapon: "totem", displayItem: "Tot", index: "13" },
    { typeId: "minecraft:wither_rose", weapon: "wither", displayItem: "Wit", index: "14" },
  ];

  const CHANGEABLE_WEAPONS = [
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
    { typeId: "bey:default_nm", itemTag: "nm" },
  ];

  Minecraft.system.runInterval(() => {
    Minecraft.world.getAllPlayers().forEach((player) => {
      player.dimension.getEntities().forEach((entity) => {
        if (entity.typeId.includes(`bey:weapon_combiner_display`)) {
          const underBlock = entity.dimension.getBlock({
            x: Math.floor(entity.location.x),
            y: Math.floor(entity.location.y) - 1,
            z: Math.floor(entity.location.z),
          });
          if ((underBlock && underBlock.typeId !== "bey:materia_conflux") || entity.hasTag(`gonnaDie`)) {
            entity.runCommand(`/tp @s 100 100 100`);
            Minecraft.system.runTimeout(() => {
              entity.runCommand(`/kill @s`);
            }, 4);
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
        if (!player) return;

        let playerHeld = (player.getComponent("equippable") as Minecraft.EntityEquippableComponent).getEquipment(
          Minecraft.EquipmentSlot.Mainhand
        );
        Minecraft.world.sendMessage(`${playerHeld?.typeId}`);
        let { x, y, z } = block.location;

        COMBINED_WEAPONS.forEach((key) => {
          let entitiesAbove = block.dimension.getEntities().filter((entity) => {
            let pos = entity.location;
            return Math.floor(pos.x) === x && Math.floor(pos.y) === y + 1 && Math.floor(pos.z) === z;
          });

          if (entitiesAbove.length == 0) {
            if (playerHeld && playerHeld.typeId === key.typeId) {
              block.setPermutation(block.permutation.withState("bey:materia_conflux", 1));
              block.dimension.runCommand(`/particle minecraft:totem_particle ${x} ${y + 1} ${z}`);
              Minecraft.world.playSound("bey_place_sound", block.location, { volume: 10, pitch: 0.3 });

              let entity = block.dimension.spawnEntity("bey:weapon_combiner_display", { x, y: y + 1, z });
              if (entity) {
                entity.triggerEvent(`bey:var${key.displayItem}`);
                entity.addTag(`${key.index}`);
              }

              player.runCommand(`/clear @s ${key.typeId} 0 1`);
            }
          }
        });

        CHANGEABLE_WEAPONS.forEach((weapon) => {
          if (playerHeld && playerHeld.typeId == weapon.typeId) {
            let { x, y, z } = block.location;

            let entitiesAbove = block.dimension.getEntities().filter((entity) => {
              let pos = entity.location;
              return Math.floor(pos.x) === x && Math.floor(pos.y) === y + 1 && Math.floor(pos.z) === z;
            });

            entitiesAbove.forEach((entity) => {
              let index = entity.getTags()[0];
              let currentLore = playerHeld.getLore();

              let combinedWeapon = COMBINED_WEAPONS.find((weapon) => weapon.index === index);
              if (!combinedWeapon) return;

              let matchingAbilities = WEAPON_ABILITIES.filter((ability) => ability.weaponTag === combinedWeapon.weapon);
              let hasMatchingLore = matchingAbilities.some((ability) => currentLore.includes(ability.abilityLore));

              if (!hasMatchingLore) {
                player.runCommand(
                  `/replaceitem entity @s slot.weapon.mainhand 0 bey:${combinedWeapon.weapon}_${weapon.itemTag}`
                );
                block.dimension.runCommand(`/particle minecraft:totem_particle ${x} ${y + 1} ${z}`);
                Minecraft.world.playSound(`bey_place_sound`, block.location, { volume: 10, pitch: 0.3 });
                entitiesAbove.forEach((entity) => entity.addTag(`gonnaDie`));
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
              if (
                playerHeld?.typeId.split(":")[1].split("_")[0] == abilityWeapon.weapon &&
                index == abilityWeapon.index &&
                playerHeld?.typeId.split(":")[0] == "bey"
              ) {
                let customTag = playerHeld.typeId.split(":")[1].split("_")[0];
                const inventory = (player.getComponent("minecraft:inventory") as Minecraft.EntityInventoryComponent)
                  .container;
                const selectedSlotIndex = player.selectedSlotIndex;
                if (inventory == undefined) return;
                const item = inventory.getItem(selectedSlotIndex);

                if (!item) {
                  return;
                }

                let currentLore = item.getLore() || [];
                const abilitiesForWeapon = WEAPON_ABILITIES.filter((a) => a.weaponTag === customTag);
                const nextAbility = abilitiesForWeapon.find((ability) => !currentLore.includes(ability.abilityLore));

                if (nextAbility) {
                  Minecraft.system.runTimeout(() => {
                    currentLore.push(nextAbility.abilityLore);
                    item.setLore(currentLore);
                    inventory.setItem(selectedSlotIndex, item);

                    block.setPermutation(block.permutation.withState("bey:materia_conflux", 0));
                    block.dimension.runCommand(`/particle minecraft:totem_particle ${x} ${y + 1} ${z}`);
                    entity.addTag(`gonnaDie`);
                    Minecraft.world.playSound(`bey_place_sound`, block.location, { volume: 10, pitch: 0.3 });
                  });
                } else {
                }
              }
            });
          });
        });
      },
    });
  });
}
