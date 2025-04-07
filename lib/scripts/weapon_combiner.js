import * as Minecraft from "@minecraft/server";
import { COMBINED_WEAPONS } from "./data/COMBINED_WEAPONS";
import { CHANGEABLE_WEAPONS } from "./data/CHANGEABLE_WEAPONS";
import { WEAPON_ABILITIES } from "./data/WEAPON_ABILITIES";
export class WeaponCombiner {
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
                            z: Math.floor(entity.location.z),
                        });
                        if ((underBlock && underBlock.typeId !== "bey:materia_conflux") || entity.hasTag(`gonnaDie`)) {
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
                                block.dimension.spawnParticle("minecraft:totem_particle", { x, y: y + 1, z });
                                Minecraft.world.playSound("bey_place_sound", block.location, { volume: 10, pitch: 0.3 });
                                player.sendMessage(`§dCurrent §6§lMaterial§r §dCan Be Combined With a §6§l${key.addable}`);
                                let entity = block.dimension.spawnEntity("bey:weapon_combiner_display", { x, y: y + 1, z });
                                if (entity) {
                                    entity.triggerEvent(`bey:var${key.displayItem}`);
                                    entity.addTag(`${key.index}`);
                                }
                                //eslint-disable-next-line
                                player.runCommand(`/clear @s ${key.typeId} 0 1`);
                            }
                        }
                        if (entitiesAbove.length != 0) {
                            entitiesAbove.forEach((entity) => {
                                let index = entity.getTags()[0];
                                COMBINED_WEAPONS.forEach((key) => {
                                    if (key.index == index) {
                                        if (playerHeld == undefined && !player.hasTag(`doOnce`)) {
                                            player.sendMessage(`§dCurrent §6§lMaterial§r §dCan Be Combined With a §6§l${key.addable}`);
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
                                const index = entity.getTags()[0];
                                const currentLore = playerHeld.getLore();
                                const combinedWeapon = COMBINED_WEAPONS.find((w) => w.index == index);
                                if (!combinedWeapon)
                                    return;
                                const matchingAbilities = WEAPON_ABILITIES.filter((a) => a.weaponTag === combinedWeapon.weapon);
                                const hasMatchingLore = matchingAbilities.some((a) => currentLore.includes(a.abilityLore));
                                if (!hasMatchingLore) {
                                    //eslint-disable-next-line
                                    player.runCommand(`/replaceitem entity @s slot.weapon.mainhand 0 bey:${combinedWeapon.weapon}_${weapon.itemTag}`);
                                    block.dimension.spawnParticle("minecraft:totem_particle", { x, y: y + 1, z });
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
                                if (abilityWeapon &&
                                    (playerHeld === null || playerHeld === void 0 ? void 0 : playerHeld.typeId.split(":")[1].split("_")[0]) == abilityWeapon.weapon &&
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
                                    const abilitiesForWeapon = WEAPON_ABILITIES.filter((a) => a.weaponTag === customTag);
                                    const availableAbilities = abilitiesForWeapon.filter((ability) => !currentLore.includes(ability.abilityLore));
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
                },
            });
        });
    }
}
//# sourceMappingURL=weapon_combiner.js.map