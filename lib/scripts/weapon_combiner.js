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
    // BLAZE
    { weaponTag: "blaze", abilityLore: "§r§d[Passive] SPEED buff When Holding", abilityIndex: 0 },
    { weaponTag: "blaze", abilityLore: "§r§d[Active] DASH and set mobs on fire around you", abilityIndex: 1 },
    { weaponTag: "blaze", abilityLore: "§r§d[On-Hit] 40% Chance to burn the enemy", abilityIndex: 2 },
    { weaponTag: "blaze", abilityLore: "§r§d[On-Hurt] 80% Chace to burn the attacker", abilityIndex: 3 },
    // RAID
    { weaponTag: "raid", abilityLore: "§r§d[Passive] Extra Damage To Illager Type Mobs", abilityIndex: 0 },
    { weaponTag: "raid", abilityLore: "§r§d[Active] Curse Entities Around", abilityIndex: 1 },
    { weaponTag: "raid", abilityLore: "§r§d[On-Hit] Curse The Enemy", abilityIndex: 2 },
    { weaponTag: "raid", abilityLore: "§r§d[On-Hurt] Curse The Attacker", abilityIndex: 3 },
];
export function weapon_combiner() {
    const COMBINED_WEAPONS = [
        {
            typeId: "minecraft:amethyst_shard",
            weapon: "amy",
            displayItem: "Ame",
            index: "1",
            addable: "Sword, Axe, Hammer, Scythe, Mace[Addons]",
        },
        {
            typeId: "minecraft:nether_star",
            weapon: "bea",
            displayItem: "Net",
            index: "2",
            addable: "Sword, Axe, Hammer, Scythe, Mace[Addons]",
        },
        {
            typeId: "minecraft:oak_leaves",
            weapon: "cam",
            displayItem: "Oak",
            index: "3",
            addable: "Sword",
        },
        {
            typeId: "minecraft:crying_obsidian",
            weapon: "cry",
            displayItem: "Cry",
            index: "4",
            addable: "Sword, Axe, Hammer, Mace[Addons]",
        },
        {
            typeId: "minecraft:echo_shard",
            weapon: "deep",
            displayItem: "Ech",
            index: "5",
            addable: "Sword, Axe, Hammer, Mace[Addons]",
        },
        {
            typeId: "minecraft:ochre_froglight",
            weapon: "froglight",
            displayItem: "Frg",
            index: "6",
            addable: "Sword",
        },
        {
            typeId: "minecraft:pearlescent_froglight",
            weapon: "froglight",
            displayItem: "Frg",
            index: "6",
            addable: "Sword, Axe, Hammer, Mace[Addons]",
        },
        {
            typeId: "minecraft:verdant_froglight",
            weapon: "froglight",
            displayItem: "Frg",
            index: "6",
            addable: "Sword",
        },
        {
            typeId: "minecraft:enchanted_golden_apple",
            weapon: "god",
            displayItem: "Ega",
            index: "7",
            addable: "Sword, Axe, Scythe, Hammer",
        },
        {
            typeId: "minecraft:magma",
            weapon: "magma",
            displayItem: "Mag",
            index: "8",
            addable: "Sword, Axe, Scythe, Hammer, Mace[Addons]",
        },
        {
            typeId: "minecraft:rabbit_foot",
            weapon: "rabbit",
            displayItem: "Rab",
            index: "9",
            addable: "Sword, Axe, Scythe",
        },
        {
            typeId: "minecraft:redstone",
            weapon: "redstone",
            displayItem: "Red",
            index: "10",
            addable: "Sword, Axe, Hammer, Mace[Addons]",
        },
        {
            typeId: "minecraft:heart_of_the_sea",
            weapon: "sea",
            displayItem: "Sea",
            index: "11",
            addable: "Axe",
        },
        {
            typeId: "minecraft:tnt",
            weapon: "tnt",
            displayItem: "Tnt",
            index: "12",
            addable: "Sword",
        },
        {
            typeId: "minecraft:totem_of_undying",
            weapon: "totem",
            displayItem: "Tot",
            index: "13",
            addable: "Sword, Axe, Scythe, Hammer, Mace[Addons]",
        },
        {
            typeId: "minecraft:wither_rose",
            weapon: "wither",
            displayItem: "Wit",
            index: "14",
            addable: "Sword, Axe, Scythe",
        },
        {
            typeId: "minecraft:ominous_bottle",
            weapon: "raid",
            displayItem: "Rai",
            index: "15",
            addable: "Sword, Axe",
        },
        {
            typeId: "minecraft:blaze_powder",
            weapon: "blaze",
            displayItem: "Bla",
            index: "16",
            addable: "Sword, Axe, Scythe, Hammer",
        },
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
                        entity.runCommand(`/tp @s 100 20 100`);
                        Minecraft.system.runTimeout(() => {
                            entity.runCommand(`/kill @s`);
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
                let playerHeld = player.getComponent("equippable").getEquipment(Minecraft.EquipmentSlot.Mainhand);
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
                            player.runCommand(`/tellraw @a {"rawtext":[{"text":"§dCurrent §6§lMaterial§r §dCan Be Combined With a §6§l${key.addable}"}]}`);
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
                            COMBINED_WEAPONS.forEach((key) => {
                                if (key.index == index) {
                                    if (playerHeld == undefined && !player.hasTag(`doOnce`)) {
                                        player.runCommand(`/tellraw @a {"rawtext":[{"text":"§dCurrent §6§lMaterial§r §dCan Be Combined With a §6§l${key.addable}"}]}`);
                                        player.addTag(`doOnce`);
                                    }
                                }
                            });
                        });
                    }
                });
                CHANGEABLE_WEAPONS.forEach((weapon) => {
                    if (playerHeld && playerHeld.typeId == weapon.typeId) {
                        let { x, y, z } = block.location;
                        let randomIndex = Math.floor(Math.random() * COMBINED_WEAPONS.length);
                        Minecraft.world.sendMessage(`${randomIndex}`);
                        let entitiesAbove = block.dimension.getEntities().filter((entity) => {
                            let pos = entity.location;
                            return Math.floor(pos.x) === x && Math.floor(pos.y) === y + 1 && Math.floor(pos.z) === z;
                        });
                        entitiesAbove.forEach((entity) => {
                            let index = entity.getTags()[0];
                            let currentLore = playerHeld.getLore();
                            let combinedWeapon = COMBINED_WEAPONS.find((w) => w.index == index);
                            if (!combinedWeapon)
                                return;
                            let matchingAbilities = WEAPON_ABILITIES.filter((a) => a.weaponTag === combinedWeapon.weapon);
                            let hasMatchingLore = matchingAbilities.some((a) => currentLore.includes(a.abilityLore));
                            if (!hasMatchingLore) {
                                player.runCommand(`/replaceitem entity @s slot.weapon.mainhand 0 bey:${combinedWeapon.weapon}_${weapon.itemTag}`);
                                block.dimension.runCommand(`/particle minecraft:totem_particle ${x} ${y + 1} ${z}`);
                                Minecraft.world.playSound(`bey_place_sound`, block.location, { volume: 10, pitch: 0.3 });
                                entitiesAbove.forEach((e) => e.addTag(`gonnaDie`));
                                if (matchingAbilities.length > 0) {
                                    let randomAbility = matchingAbilities[Math.floor(Math.random() * matchingAbilities.length)];
                                    const inventory = player.getComponent("minecraft:inventory")
                                        .container;
                                    const selectedSlotIndex = player.selectedSlotIndex;
                                    if (!inventory)
                                        return;
                                    const item = inventory.getItem(selectedSlotIndex);
                                    if (!item)
                                        return;
                                    Minecraft.system.runTimeout(() => {
                                        item.setLore([randomAbility.abilityLore]); // ✅ Directly assigning a random ability
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
                            if ((playerHeld === null || playerHeld === void 0 ? void 0 : playerHeld.typeId.split(":")[1].split("_")[0]) == abilityWeapon.weapon &&
                                index == abilityWeapon.index &&
                                (playerHeld === null || playerHeld === void 0 ? void 0 : playerHeld.typeId.split(":")[0]) == "bey") {
                                let customTag = playerHeld.typeId.split(":")[1].split("_")[0];
                                const inventory = player.getComponent("minecraft:inventory")
                                    .container;
                                const selectedSlotIndex = player.selectedSlotIndex;
                                if (!inventory)
                                    return;
                                const item = inventory.getItem(selectedSlotIndex);
                                if (!item)
                                    return;
                                let currentLore = item.getLore() || [];
                                // ✅ Get all available abilities for this weapon
                                const abilitiesForWeapon = WEAPON_ABILITIES.filter((a) => a.weaponTag === customTag);
                                // ✅ Filter out already applied abilities
                                const availableAbilities = abilitiesForWeapon.filter((ability) => !currentLore.includes(ability.abilityLore));
                                // ✅ Randomly select an ability if there are any available
                                if (availableAbilities.length > 0) {
                                    let randomAbility = availableAbilities[Math.floor(Math.random() * availableAbilities.length)];
                                    Minecraft.system.runTimeout(() => {
                                        currentLore.push(randomAbility.abilityLore);
                                        item.setLore(currentLore);
                                        inventory.setItem(selectedSlotIndex, item);
                                        block.setPermutation(block.permutation.withState("bey:materia_conflux", 0));
                                        block.dimension.runCommand(`/particle minecraft:totem_particle ${x} ${y + 1} ${z}`);
                                        entity.addTag(`gonnaDie`);
                                        Minecraft.world.playSound(`bey_place_sound`, block.location, { volume: 10, pitch: 0.3 });
                                    });
                                }
                            }
                        });
                    });
                });
            },
        });
    });
}
//# sourceMappingURL=weapon_combiner.js.map