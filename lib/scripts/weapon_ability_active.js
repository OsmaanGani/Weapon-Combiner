import * as Minecraft from "@minecraft/server";
export function weapon_active() {
    Minecraft.system.runInterval(() => {
        Minecraft.world.getAllPlayers().forEach((player) => {
            var _a;
            let weaponInteract = (_a = player.getDynamicProperty("interact_cooldown")) !== null && _a !== void 0 ? _a : 0;
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
                    Minecraft.system.runTimeout(() => {
                        entity.runCommand(`/tp @s ~ 100 ~`);
                    }, 17);
                    Minecraft.system.runTimeout(() => {
                        entity.runCommand(`/kill @s`);
                    }, 20);
                }
            });
        });
    });
    Minecraft.world.afterEvents.itemUse.subscribe((event) => {
        let player = event.source;
        let { x, y, z } = player.getViewDirection();
        let playerHeld = player.getComponent(`equippable`).getEquipment(Minecraft.EquipmentSlot.Mainhand);
        if (playerHeld === undefined)
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
                case currentLore.some((line) => line === "§r§d[Active] Turn Poison Into Pleasure"):
                    if (player.getEffect("minecraft:wither") ||
                        player.getEffect("minecraft:poison") ||
                        player.getEffect("fatal_poison")) {
                        player.addEffect(`regeneration`, 200, { amplifier: 2 });
                        player.runCommand(`/effect @s wither 0 0`);
                        player.runCommand(`/effect @s poison 0 0`);
                        player.runCommand(`/effect @s fatal_poison 0 0`);
                        player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    }
                    else {
                        player.runCommand(`/tellraw @p {"rawtext":[{"text":"§2You dont have §dPoison or Wither Effect"}]}`);
                    }
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact To Get A HEALTH BOOST"):
                    player.addEffect("absorption", 80, { amplifier: 3 });
                    player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact To Get A COMBINED BUFF"):
                    player.addEffect("speed", 100, { amplifier: 2 });
                    player.addEffect("regeneration", 100, { amplifier: 2 });
                    player.addEffect("jump_boost", 100, { amplifier: 2 });
                    player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact To Go INVISIBLE for a while"):
                    player.addEffect("invisibility", 80, { amplifier: 1 });
                    player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact To Get Buff For a SACRIFICE"):
                    player.runCommand(`/damage @s 6`);
                    player.addEffect("speed", 100, { amplifier: 2 });
                    player.addEffect("strength", 100, { amplifier: 0 });
                    player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact To Summon WARDEN SPIRITS"):
                    const replaceableBlocks = ["grass_block", "stone", "andesite", "granite", "diorite", "gravel"];
                    for (let i = 1; i <= 18; i++) {
                        player.playSound("mob.warden.attack", { volume: 10, pitch: 0.9, location: player.location });
                        player.runCommand(`execute at @s positioned ^ ^1.5 ^${i * 2} run particle minecraft:sonic_explosion ~~~`);
                        Minecraft.system.runTimeout(() => {
                            player.getEntitiesFromViewDirection({ maxDistance: 28 }).forEach((entity) => {
                                let viewDir = entity.entity.getViewDirection();
                                entity.entity.applyKnockback(viewDir.x, viewDir.y, 0.6, 0.6);
                                entity.entity.runCommand(`/damage @s 15 entity_attack entity ${player.nameTag}`);
                                for (let x = -3; x <= 3; x++) {
                                    for (let z = -3; z <= 3; z++) {
                                        if (Math.random() < 0.06) {
                                            replaceableBlocks.forEach((blockType) => {
                                                entity.entity.runCommand(`fill ~${x} ~-4 ~${z} ~${x} ~3 ~${z} minecraft:sculk replace minecraft:${blockType}`);
                                                if (Math.random() < 0.005) {
                                                    entity.entity.runCommand(`fill ~${x} ~-2 ~${z} ~${x} ~ ~${z} minecraft:sculk_sensor replace air`);
                                                }
                                                if (Math.random() < 0.005) {
                                                    entity.entity.runCommand(`fill ~${x} ~-2 ~${z} ~${x} ~ ~${z} minecraft:sculk_catalyst replace air`);
                                                }
                                                if (Math.random() < 0.002) {
                                                    entity.entity.runCommand(`fill ~${x} ~-2 ~${z} ~${x} ~ ~${z} minecraft:sculk_shrieker replace air`);
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
                case currentLore.some((line) => line === "§r§d[Active] Interact To DASH forward"):
                    player.applyKnockback(x, z, 3, 0.1);
                    player.setDynamicProperty("interact_cooldown", weaponInteract + 400);
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact To BOUNCE foes"):
                    player.dimension
                        .getEntities({ maxDistance: 4, location: player.location })
                        .forEach((entity) => {
                        if (entity.nameTag !== player.nameTag &&
                            entity.typeId !== "minecraft:wolf" &&
                            entity.typeId !== "minecraft:cat") {
                            player.dimension.spawnEntity("bey:radius_entity", player.location);
                            entity.applyKnockback(x, y, 0, 1.3);
                        }
                        player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    });
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact To Summon DIVINE LIGHTNING"):
                    player.dimension
                        .getEntities({ maxDistance: 8, location: player.location })
                        .forEach((entity) => {
                        if (entity.nameTag !== player.nameTag &&
                            entity.typeId !== "minecraft:wolf" &&
                            entity.typeId !== "minecraft:cat") {
                            player.dimension.spawnEntity("bey:radius_entity", player.location);
                            entity.dimension.spawnEntity("lightning_bolt", entity.location);
                        }
                        player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    });
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact To Summon FIREBALLS"):
                    player.dimension
                        .getEntities({ maxDistance: 5, location: player.location })
                        .forEach((entity) => {
                        player.dimension.spawnEntity("bey:radius_entity", player.location);
                        if (entity.nameTag !== player.nameTag &&
                            entity.typeId !== "minecraft:wolf" &&
                            entity.typeId !== "minecraft:cat") {
                            entity.setOnFire(3);
                        }
                        player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    });
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact To Double Your JUMP HEIGHT"):
                    if (!player.isOnGround) {
                        player.applyKnockback(x, y, 0, 0.9);
                        player.setDynamicProperty("interact_cooldown", weaponInteract + 500);
                    }
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact To BOOST Mining Speed"):
                    player.addEffect("haste", 300, { amplifier: 2 });
                    player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact for WATER BREATHING"):
                    player.addEffect("water_breathing", 300, { amplifier: 2 });
                    player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact To Create EXPLOSIONS"):
                    player.dimension.spawnEntity("tnt", player.location);
                    player.onScreenDisplay.setTitle("§l§4RUN !!!!!");
                    player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Interact replaces HUNGER for HEALING"):
                    player.addEffect("instant_health", 20, { amplifier: 20 });
                    player.addEffect("hunger", 130, { amplifier: 254 });
                    player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    break;
                case currentLore.some((line) => line === "§r§d[Active] WITHER mobs around you"):
                    player.dimension
                        .getEntities({ maxDistance: 5, location: player.location })
                        .forEach((entity) => {
                        player.dimension.spawnEntity("bey:radius_entity", player.location);
                        if (entity.nameTag !== player.nameTag &&
                            entity.typeId !== "minecraft:wolf" &&
                            entity.typeId !== "minecraft:cat") {
                            entity.addEffect("wither", 80, { amplifier: 3 });
                        }
                        player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    });
                    break;
                case currentLore.some((line) => line === "§r§d[Active] DASH and set mobs on fire around you"):
                    player.applyKnockback(x, z, 5, 0);
                    Minecraft.system.runTimeout(() => {
                        player.dimension
                            .getEntities({ maxDistance: 5, location: player.location })
                            .forEach((entity) => {
                            player.dimension.spawnEntity("bey:radius_entity", player.location);
                            if (entity.nameTag !== player.nameTag &&
                                entity.typeId !== "minecraft:wolf" &&
                                entity.typeId !== "minecraft:cat") {
                                entity.setOnFire(2);
                            }
                            player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                        });
                    }, 5);
                    break;
                case currentLore.some((line) => line === "§r§d[Active] Curse Entities Around"):
                    player.dimension
                        .getEntities({ maxDistance: 5, location: player.location })
                        .forEach((entity) => {
                        player.dimension.spawnEntity("bey:radius_entity", player.location);
                        if (entity.nameTag !== player.nameTag &&
                            entity.typeId !== "minecraft:wolf" &&
                            entity.typeId !== "minecraft:cat") {
                            entity.addTag(`Cursed`);
                            entity.setDynamicProperty(`Cursed`, 1);
                        }
                        player.setDynamicProperty("interact_cooldown", weaponInteract + 1);
                    });
                    break;
            }
        }
    });
}
//# sourceMappingURL=weapon_ability_active.js.map