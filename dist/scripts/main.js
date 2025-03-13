// scripts/weapon_combiner.ts
import * as Minecraft from "@minecraft/server";
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
  { weaponTag: "wither", abilityLore: "\xA7r\xA7d[On-Hurt] Summon AoE WITHER", abilityIndex: 3 }
];
function weapon_combiner() {
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
    { typeId: "minecraft:wither_rose", weapon: "wither", displayItem: "Wit", index: "14" }
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
    { typeId: "bey:default_nm", itemTag: "nm" }
  ];
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
        if (!player)
          return;
        let playerHeld = player.getComponent("equippable").getEquipment(
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
            let { x: x2, y: y2, z: z2 } = block.location;
            let entitiesAbove = block.dimension.getEntities().filter((entity) => {
              let pos = entity.location;
              return Math.floor(pos.x) === x2 && Math.floor(pos.y) === y2 + 1 && Math.floor(pos.z) === z2;
            });
            entitiesAbove.forEach((entity) => {
              let index = entity.getTags()[0];
              let currentLore = playerHeld.getLore();
              let combinedWeapon = COMBINED_WEAPONS.find((weapon2) => weapon2.index === index);
              if (!combinedWeapon)
                return;
              let matchingAbilities = WEAPON_ABILITIES.filter((ability) => ability.weaponTag === combinedWeapon.weapon);
              let hasMatchingLore = matchingAbilities.some((ability) => currentLore.includes(ability.abilityLore));
              if (!hasMatchingLore) {
                player.runCommand(
                  `/replaceitem entity @s slot.weapon.mainhand 0 bey:${combinedWeapon.weapon}_${weapon.itemTag}`
                );
                block.dimension.runCommand(`/particle minecraft:totem_particle ${x2} ${y2 + 1} ${z2}`);
                Minecraft.world.playSound(`bey_place_sound`, block.location, { volume: 10, pitch: 0.3 });
                entitiesAbove.forEach((entity2) => entity2.addTag(`gonnaDie`));
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
              if (playerHeld?.typeId.split(":")[1].split("_")[0] == abilityWeapon.weapon && index == abilityWeapon.index && playerHeld?.typeId.split(":")[0] == "bey") {
                let customTag = playerHeld.typeId.split(":")[1].split("_")[0];
                const inventory = player.getComponent("minecraft:inventory").container;
                const selectedSlotIndex = player.selectedSlotIndex;
                if (inventory == void 0)
                  return;
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
      }
    });
  });
}

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
          break;
        }
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

// scripts/weapon_ability_onhit.ts
import * as Minecraft3 from "@minecraft/server";
function weapon_onhit() {
  Minecraft3.system.runInterval(() => {
    Minecraft3.world.getAllPlayers().forEach((player) => {
      let onHitCooldown = player.getDynamicProperty(`on_hit_cooldown`);
      if (onHitCooldown === void 0) {
        player.setDynamicProperty(`on_hit_cooldown`, 0);
      }
      if (onHitCooldown > 0) {
        player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
      }
      if (onHitCooldown > 60) {
        player.setDynamicProperty(`on_hit_cooldown`, 0);
      }
    });
  });
  Minecraft3.world.afterEvents.entityHitEntity.subscribe((event) => {
    let player = event.damagingEntity;
    if (player.typeId !== "minecraft:player")
      return;
    let hurtEntity = event.hitEntity;
    let onHitCooldown = player.getDynamicProperty(`on_hit_cooldown`);
    let { x, y, z } = player.getViewDirection();
    let playerHeld = player.getComponent(`equippable`).getEquipment(
      Minecraft3.EquipmentSlot.Mainhand
    );
    if (playerHeld === void 0)
      return;
    let currentLore = playerHeld.getLore();
    if (onHitCooldown === 0) {
      switch (true) {
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] WEAK Foes On Hit")):
          hurtEntity.addEffect(`weakness`, 60, { amplifier: 4 });
          Minecraft3.world.playSound(`break.amethyst_block`, hurtEntity.location);
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] STUN Foes On Hit")):
          hurtEntity.addEffect(`slowness`, 30, { amplifier: 4 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] Effect Foes With DARKNESS")):
          hurtEntity.addEffect(`darkness`, 50, { amplifier: 4 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] Effect Foes With FATAL POISON")):
          hurtEntity.addEffect(`fatal_poison`, 50, { amplifier: 4 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] Cause BLINDNESS On Hit")):
          hurtEntity.addEffect(`blindness`, 40, { amplifier: 4 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] Cause VOID DAMAGE On Hit")):
          Minecraft3.system.runTimeout(() => {
            hurtEntity.runCommand(`/damage @s 4 void entity ${player.nameTag}`);
          }, 9);
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] Cause LEVITATION On Hit")):
          hurtEntity.addEffect(`levitation`, 20, { amplifier: 2 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] Gain INVINCIBILITY (2s) On Hit")):
          player.addEffect(`resistance`, 40, { amplifier: 200 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] Set Foes On FIRE")):
          hurtEntity.setOnFire(4);
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] BOUNCE on hit")):
          player.applyKnockback(x, y, 0, 1);
          Minecraft3.system.runTimeout(() => {
            player.addEffect(`slow_falling`, 40, { amplifier: 2 });
          }, 17);
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] STRENGTH buff on hit")):
          player.addEffect(`strength`, 30, { amplifier: 0 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] SLOW Foes on hit")):
          hurtEntity.addEffect(`slowness`, 60, { amplifier: 2 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] Detonate A SMALL EXPLOSION")):
          player.runCommand(`/scriptevent beyond:knockback`);
          hurtEntity.dimension.spawnParticle(`minecraft:camera_shoot_explosion`, player.location);
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] Instantly HEAL Self On Hit")):
          player.addEffect(`instant_health`, 1, { amplifier: 0 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
        case (currentLore && currentLore.some((line) => line === "\xA7r\xA7d[On-Hit] Inflict WITHER Effect")):
          hurtEntity.addEffect(`wither`, 60, { amplifier: 0 });
          player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
          break;
      }
    }
  });
  Minecraft3.system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity: player }) => {
    if (!player || id !== "beyond:knockback")
      return;
    const entities = player.dimension.getEntities({ location: player.location, maxDistance: 3 });
    for (const entity of entities) {
      if (entity.id === player.id)
        continue;
      const { x, z } = Vector2.subtract(entity.location, player.location);
      entity?.applyKnockback(x, z, 0.4, 0.6);
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

// scripts/weapon_ability_active.ts
import * as Minecraft4 from "@minecraft/server";
function weapon_active() {
  Minecraft4.system.runInterval(() => {
    Minecraft4.world.getAllPlayers().forEach((player) => {
      let weaponInteract = player.getDynamicProperty("interact_cooldown") ?? 0;
      if (typeof weaponInteract == `number`) {
        if (weaponInteract !== 0) {
          player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
        }
        if (weaponInteract > 600) {
          player.setDynamicProperty("interact_cooldown", 0);
        }
      }
      player.dimension.getEntities().forEach((entity) => {
        if (entity.typeId === "bey:radius_entity") {
          Minecraft4.system.runTimeout(() => {
            entity.runCommand(`/tp @s ~ 100 ~`);
          }, 17);
          Minecraft4.system.runTimeout(() => {
            entity.runCommand(`/kill @s`);
          }, 20);
        }
      });
    });
  });
  Minecraft4.world.afterEvents.itemUse.subscribe((event) => {
    let player = event.source;
    let { x, y, z } = player.getViewDirection();
    let playerHeld = player.getComponent(`equippable`).getEquipment(
      Minecraft4.EquipmentSlot.Mainhand
    );
    if (playerHeld === void 0)
      return;
    let currentLore = playerHeld.getLore();
    let weaponInteract = player.getDynamicProperty("interact_cooldown");
    if (!weaponInteract) {
      player.setDynamicProperty("interact_cooldown", 0);
    }
    if (!currentLore)
      return;
    if (weaponInteract === 0) {
      switch (true) {
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To Get A HEALTH BOOST"):
          player.addEffect("absorption", 80, { amplifier: 3 });
          player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To Get A COMBINED BUFF"):
          player.addEffect("speed", 100, { amplifier: 2 });
          player.addEffect("regeneration", 100, { amplifier: 2 });
          player.addEffect("jump_boost", 100, { amplifier: 2 });
          player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To Go INVISIBLE for a while"):
          player.addEffect("invisibility", 80, { amplifier: 1 });
          player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To Get Buff For a SACRIFICE"):
          player.runCommand(`/damage @s 6`);
          player.addEffect("speed", 100, { amplifier: 2 });
          player.addEffect("strength", 100, { amplifier: 0 });
          player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To Summon WARDEN SPIRITS"):
          const replaceableBlocks = ["grass_block", "stone", "andesite", "granite", "diorite", "gravel"];
          for (let i = 1; i <= 18; i++) {
            player.playSound("mob.warden.attack", { volume: 10, pitch: 0.9, location: player.location });
            player.runCommand(`execute at @s positioned ^ ^1.5 ^${i * 2} run particle minecraft:sonic_explosion ~~~`);
            Minecraft4.system.runTimeout(() => {
              player.getEntitiesFromViewDirection({ maxDistance: 28 }).forEach((entity) => {
                let viewDir = entity.entity.getViewDirection();
                entity.entity.applyKnockback(viewDir.x, viewDir.y, 0.6, 0.6);
                entity.entity.runCommand(`/damage @s 15 entity_attack entity ${player.nameTag}`);
                for (let x2 = -3; x2 <= 3; x2++) {
                  for (let z2 = -3; z2 <= 3; z2++) {
                    if (Math.random() < 0.06) {
                      replaceableBlocks.forEach((blockType) => {
                        entity.entity.runCommand(
                          `fill ~${x2} ~-4 ~${z2} ~${x2} ~3 ~${z2} minecraft:sculk replace minecraft:${blockType}`
                        );
                        if (Math.random() < 5e-3) {
                          entity.entity.runCommand(
                            `fill ~${x2} ~-2 ~${z2} ~${x2} ~ ~${z2} minecraft:sculk_sensor replace air`
                          );
                        }
                        if (Math.random() < 5e-3) {
                          entity.entity.runCommand(
                            `fill ~${x2} ~-2 ~${z2} ~${x2} ~ ~${z2} minecraft:sculk_catalyst replace air`
                          );
                        }
                        if (Math.random() < 2e-3) {
                          entity.entity.runCommand(
                            `fill ~${x2} ~-2 ~${z2} ~${x2} ~ ~${z2} minecraft:sculk_shrieker replace air`
                          );
                        }
                      });
                    }
                  }
                }
              });
            });
          }
          player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To DASH forward"):
          player.applyKnockback(x, z, 3, 0.1);
          player.setDynamicProperty("interact_cooldown", weaponInteract + 400);
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To BOUNCE foes"):
          player.dimension.getEntities({ maxDistance: 4, location: player.location }).forEach((entity) => {
            if (entity.nameTag !== player.nameTag && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
              player.dimension.spawnEntity("bey:radius_entity", player.location);
              entity.applyKnockback(x, y, 0, 1.3);
            }
            player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          });
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To Summon DIVINE LIGHTNING"):
          player.dimension.getEntities({ maxDistance: 8, location: player.location }).forEach((entity) => {
            if (entity.nameTag !== player.nameTag && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
              player.dimension.spawnEntity("bey:radius_entity", player.location);
              entity.dimension.spawnEntity("lightning_bolt", entity.location);
            }
            player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          });
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To Summon FIREBALLS"):
          player.dimension.getEntities({ maxDistance: 5, location: player.location }).forEach((entity) => {
            player.dimension.spawnEntity("bey:radius_entity", player.location);
            if (entity.nameTag !== player.nameTag && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
              entity.setOnFire(3);
            }
            player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          });
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To Double Your JUMP HEIGHT"):
          if (!player.isOnGround) {
            player.applyKnockback(x, y, 0, 0.9);
            player.setDynamicProperty("interact_cooldown", weaponInteract + 500);
          }
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To BOOST Mining Speed"):
          player.addEffect("haste", 300, { amplifier: 2 });
          player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact for WATER BREATHING"):
          player.addEffect("water_breathing", 300, { amplifier: 2 });
          player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact To Create EXPLOSIONS"):
          player.dimension.spawnEntity("tnt", player.location);
          player.onScreenDisplay.setTitle("\xA7l\xA74RUN !!!!!");
          player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] Interact replaces HUNGER for HEALING"):
          player.addEffect("instant_health", 20, { amplifier: 20 });
          player.addEffect("hunger", 130, { amplifier: 254 });
          player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          break;
        case currentLore.some((line) => line === "\xA7r\xA7d[Active] WITHER mobs around you"):
          player.dimension.getEntities({ maxDistance: 5, location: player.location }).forEach((entity) => {
            player.dimension.spawnEntity("bey:radius_entity", player.location);
            if (entity.nameTag !== player.nameTag && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
              entity.addEffect("wither", 80, { amplifier: 3 });
            }
            player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
          });
          break;
      }
    }
  });
}

// scripts/weapon_ability_onhurt.ts
import * as Minecraft5 from "@minecraft/server";
function weapon_onhurt() {
  Minecraft5.system.runInterval(() => {
    Minecraft5.world.getAllPlayers().forEach((player) => {
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
  Minecraft5.world.afterEvents.entityHitEntity.subscribe((event) => {
    let player = event.hitEntity;
    if (!player || player.typeId !== "minecraft:player")
      return;
    let hurtingEntity = event.damagingEntity;
    let onHurtCooldown = player.getDynamicProperty("on_hurt_cooldown") || 0;
    let playerHeld = player.getComponent(`equippable`).getEquipment(
      Minecraft5.EquipmentSlot.Mainhand
    );
    if (playerHeld == void 0)
      return;
    let currentLore = playerHeld.getLore();
    if (!currentLore)
      return;
    switch (true) {
      case (currentLore.some((line) => line === "\xA7r\xA7d[On-Hurt] AoE WEAKNESS On Hurt") && onHurtCooldown === 0):
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
    }
  });
  Minecraft5.system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity: player }) => {
    if (!player || id !== "beyond:knockback")
      return;
    const entities = player.dimension.getEntities({ location: player.location, maxDistance: 6 });
    for (const entity of entities) {
      if (entity.id === player.id)
        continue;
      const { x, z } = Vector3.subtract(entity.location, player.location);
      entity?.applyKnockback(x, z, 3, 0.8);
    }
  });
}
var Vector3 = class {
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

// scripts/weapon_combiner_cooldown.ts
import { world as world6, system as system6 } from "@minecraft/server";
function weapon_cooldown() {
  system6.runInterval(() => {
    world6.getAllPlayers().forEach((player) => {
      const cooldowns = {
        Hurt: { time: Number(player.getDynamicProperty("on_hurt_cooldown") ?? 0), max: 20 },
        Interact: { time: Number(player.getDynamicProperty("interact_cooldown") ?? 0), max: 30 },
        Hit: { time: Number(player.getDynamicProperty("on_hit_cooldown") ?? 0), max: 3 }
      };
      const actionBarText = Object.entries(cooldowns).filter(([_, data]) => data.time > 0).map(([name, data]) => `\xA76${name}: \xA7d${data.max - Math.floor(data.time / 20)}s`).join(" \xA77| ");
      player.onScreenDisplay.setActionBar(actionBarText);
    });
  });
}

// scripts/main.ts
weapon_combiner();
weapon_passive();
weapon_onhit();
weapon_active();
weapon_onhurt();
weapon_cooldown();

//# sourceMappingURL=../debug/main.js.map
