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
    Minecraft.system.runInterval(() => {
        Minecraft.world.getAllPlayers().forEach((player) => {
            player.dimension.getEntities().forEach((entity) => {
                if (entity.typeId.includes(`display_item`)) {
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
    Minecraft.world.afterEvents.itemUseOn.subscribe((event) => {
        const player = event.source;
        const block = event.block;
        if (block.permutation.matches(`bey:materia_conflux`)) {
            let playerHeld = player.getComponent(`equippable`).getEquipment(Minecraft.EquipmentSlot.Mainhand);
            const state = block.permutation.getState("bey:materia_conflux");
            let { x, y, z } = block.location;
            if (state === undefined)
                return;
            const COMBINED_WEAPONS = [
                { typeId: "minecraft:amethyst_shard", weapon: "amy", displayItem: "amethyst", index: 1 },
                { typeId: "minecraft:nether_star", weapon: "bea", displayItem: "beacon", index: 2 },
                { typeId: "minecraft:oak_leaves", weapon: "cam", displayItem: "camafluge", index: 3 },
                { typeId: "minecraft:crying_obsidian", weapon: "cry", displayItem: "crying", index: 4 },
                { typeId: "minecraft:echo_shard", weapon: "deep", displayItem: "deep", index: 5 },
                { typeId: "minecraft:ender_eye", weapon: "ender", displayItem: "ender", index: 6 },
                { typeId: "minecraft:ochre_froglight", weapon: "froglight", displayItem: "froglight", index: 7 },
                { typeId: "minecraft:pearlescent_froglight", weapon: "froglight", displayItem: "froglight", index: 7 },
                { typeId: "minecraft:verdant_froglight", weapon: "froglight", displayItem: "froglight", index: 7 },
                { typeId: "minecraft:enchanted_golden_apple", weapon: "god", displayItem: "god", index: 8 },
                { typeId: "minecraft:magma", weapon: "magma", displayItem: "magma", index: 9 },
                { typeId: "minecraft:rabbit_foot", weapon: "rabbit", displayItem: "rabbit", index: 10 },
                { typeId: "minecraft:redstone", weapon: "redstone", displayItem: "redstone", index: 11 },
                { typeId: "minecraft:heart_of_the_sea", weapon: "sea", displayItem: "sea", index: 12 },
                { typeId: "minecraft:tnt", weapon: "tnt", displayItem: "tnt", index: 13 },
                { typeId: "minecraft:totem_of_undying", weapon: "totem", displayItem: "totem", index: 14 },
                { typeId: "minecraft:wither_rose", weapon: "wither", displayItem: "wither", index: 15 },
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
            const randomIndex = Math.floor(Math.random() * 4);
            if (playerHeld == undefined)
                return;
            let customTag = playerHeld.typeId.split(":")[1].split("_")[0];
            COMBINED_WEAPONS.forEach((key) => {
                if (playerHeld && playerHeld.typeId === key.typeId && state === 0) {
                    block.setPermutation(block.permutation.withState("bey:materia_conflux", key.index));
                    block.dimension.runCommand(`/particle minecraft:totem_particle ${x} ${y + 1} ${z}`);
                    Minecraft.world.playSound(`bey_place_sound`, block.location, { volume: 10, pitch: 0.3 });
                    block.dimension.runCommand(`/summon bey:display_item_${key.displayItem} ${x} ${y + 1} ${z}`);
                    player.runCommand(`/clear @s ${key.typeId} 0 1`);
                }
                const weaponKey = CHANGEABLE_WEAPONS.find((w) => playerHeld && playerHeld.typeId === w.typeId);
                if (weaponKey && state === key.index) {
                    player.runCommand(`/replaceitem entity @s slot.weapon.mainhand 0 bey:${key.weapon}_${weaponKey.itemTag}`);
                    block.setPermutation(block.permutation.withState("bey:materia_conflux", 0));
                    block.dimension.runCommand(`/particle minecraft:totem_particle ${x} ${y + 1} ${z}`);
                    block.dimension.runCommand(`/tag @e[type=bey:display_item_${key.displayItem}, x=${x},y=${y + 1},z=${z}] add gonnaDie`);
                    Minecraft.world.playSound(`bey_place_sound`, block.location, { volume: 10, pitch: 0.3 });
                    for (const abilityKey of WEAPON_ABILITIES) {
                        if (abilityKey.weaponTag === key.weapon) {
                            if (randomIndex === abilityKey.abilityIndex) {
                                const inventory = player.getComponent("minecraft:inventory")
                                    .container;
                                if (inventory == undefined)
                                    return;
                                const selectedSlotIndex = player.selectedSlotIndex;
                                const item = inventory.getItem(selectedSlotIndex);
                                if (!item) {
                                    break;
                                }
                                Minecraft.system.runTimeout(() => {
                                    item.setLore([`${abilityKey.abilityLore}`]);
                                    inventory.setItem(selectedSlotIndex, item);
                                });
                                break;
                            }
                        }
                    }
                }
                if (playerHeld && playerHeld.typeId.split(":")[1].split("_")[0] === key.weapon && state === key.index) {
                    const inventory = player.getComponent("minecraft:inventory")
                        .container;
                    const selectedSlotIndex = player.selectedSlotIndex;
                    if (inventory == undefined)
                        return;
                    const item = inventory.getItem(selectedSlotIndex);
                    if (!item) {
                        return;
                    }
                    let currentLore = item.getLore() || [];
                    if (currentLore.length >= 6) {
                        return; // Prevent adding more lores
                    }
                    const abilitiesForWeapon = WEAPON_ABILITIES.filter((a) => a.weaponTag === customTag);
                    const nextAbility = abilitiesForWeapon.find((ability) => !currentLore.includes(ability.abilityLore));
                    if (nextAbility) {
                        Minecraft.system.runTimeout(() => {
                            currentLore.push(nextAbility.abilityLore);
                            item.setLore(currentLore);
                            inventory.setItem(selectedSlotIndex, item);
                            block.setPermutation(block.permutation.withState("bey:materia_conflux", 0));
                            block.dimension.runCommand(`/particle minecraft:totem_particle ${x} ${y + 1} ${z}`);
                            block.dimension.runCommand(`/tag @e[type=bey:display_item_${key.displayItem}, x=${x},y=${y + 1},z=${z}] add gonnaDie`);
                            Minecraft.world.playSound(`bey_place_sound`, block.location, { volume: 10, pitch: 0.3 });
                        });
                    }
                }
                if (playerHeld === undefined && state === key.index) {
                    block.setPermutation(block.permutation.withState("bey:materia_conflux", 0));
                    block.dimension.runCommand(`/tag @e[type=bey:display_item_${key.displayItem}, x=${x},y=${y + 1},z=${z}] add gonnaDie`);
                    Minecraft.system.runTimeout(() => {
                        player.dimension.runCommand(`/give @s ${key.typeId}`);
                    }, 2);
                }
            });
        }
    });
}
//# sourceMappingURL=weapon_combiner.js.map