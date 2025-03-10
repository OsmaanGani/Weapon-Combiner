import * as Minecraft from "@minecraft/server";
export function weapon_passive() {
    Minecraft.system.runInterval(() => {
        Minecraft.world.getAllPlayers().forEach((player) => {
            let playerHeld = player.getComponent(`equippable`).getEquipment(Minecraft.EquipmentSlot.Mainhand);
            if (playerHeld == undefined)
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
                    case currentLore && currentLore.some((line) => line === "§r§d[Passive] REGEN Buff When Holding"):
                        player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
                        if (passiveCooldown == 1) {
                            player.addEffect(`regeneration`, 20, { amplifier: 2 });
                        }
                        break;
                    case currentLore && currentLore.some((line) => line === "§r§d[Passive] SPEED Buff When Holding"):
                        player.addEffect(`speed`, 20, { amplifier: 1 });
                        break;
                    case currentLore &&
                        currentLore.some((line) => line === "§r§d[Passive] Small SPEED Buff When Holding"):
                        player.addEffect(`speed`, 20, { amplifier: 0 });
                        break;
                    case currentLore && currentLore.some((line) => line === "§r§d[Passive] POISON AND WITHER Removal"):
                        player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
                        if (passiveCooldown == 1) {
                            player.runCommand(`/effect @s wither 0 0 true`);
                            player.runCommand(`/effect @s poison 0 0 true`);
                        }
                        break;
                    case currentLore &&
                        currentLore.some((line) => line === "§r§d[Passive] Small RESISTANCE Buff When Holding"):
                        player.addEffect(`resistance`, 20, { amplifier: 1 });
                        break;
                    case currentLore && currentLore.some((line) => line === "§r§d[Passive] Small JUMPBOOST Buff"):
                        player.addEffect(`jump_boost`, 20, { amplifier: 0 });
                        break;
                    case currentLore &&
                        currentLore.some((line) => line === "§r§d[Passive] IMMUNITY to ALL Debuffs When Holding"):
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
                    case currentLore && currentLore.some((line) => line === "§r§d[Passive] FIRE Resistance When Holding"):
                        player.addEffect(`fire_resistance`, 20, { amplifier: 0 });
                        break;
                    case currentLore && currentLore.some((line) => line === "§r§d[Passive] DAMAGE ENDERMAN around you"):
                        player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
                        player.dimension.getEntities({ maxDistance: 6, location: player.location }).forEach((entity) => {
                            if (entity.typeId == "minecraft:enderman") {
                                if (passiveCooldown == 1) {
                                    entity.runCommand(`/damage @s 15`);
                                }
                            }
                        });
                        break;
                    case currentLore && currentLore.some((line) => line === "§r§d[Passive] JUMP Boost When Holding"):
                        player.addEffect(`jump_boost`, 20, { amplifier: 1 });
                        break;
                    case currentLore && currentLore.some((line) => line === "§r§d[Passive] SWIMMING buff When Holding"):
                        if (player.isSwimming) {
                            player.applyKnockback(x, z, 0.6, 0);
                        }
                        break;
                    case currentLore &&
                        currentLore.some((line) => line === "§r§d[Passive] EXPLOSION Resistance When Holding"):
                        player.addEffect(`resistance`, 20, { amplifier: 3 });
                        break;
                    case currentLore && currentLore.some((line) => line === "§r§d[Passive] ABSORPTION buff When Holding"):
                        player.setDynamicProperty(`passive_ability_cooldown`, passiveCooldown + 1);
                        if (passiveCooldown == 1) {
                            player.addEffect(`absorption`, 20, { amplifier: 1 });
                        }
                        break;
                    case currentLore &&
                        currentLore.some((line) => line === "§r§d[Passive] WITHER Resistance When Holding"):
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
    Minecraft.world.afterEvents.entityHitEntity.subscribe((event) => {
        let player = event.hitEntity;
        if (player.typeId != "minecraft:player")
            return;
        let hurtEntity = event.damagingEntity;
        let playerHeld = player.getComponent(`equippable`).getEquipment(Minecraft.EquipmentSlot.Mainhand);
        if (playerHeld == undefined)
            return;
        let currentLore = playerHeld.getLore();
        let passivekncok = player.getDynamicProperty(`passive_ability_knock`);
        let speedkncok = player.getDynamicProperty(`passive_ability_speed`);
        if (player.typeId != "minecraft:player")
            return;
        switch (true) {
            case currentLore &&
                currentLore.some((line) => line === "§r§d[Passive] KNOCK foes that hit you [cd 8sec]"):
                if (playerHeld && passivekncok == 0) {
                    player.runCommand(`/scriptevent beyond:knockback`);
                    player.setDynamicProperty(`passive_ability_knock`, passivekncok + 1);
                }
                break;
            case currentLore &&
                currentLore.some((line) => line === "§r§d[Passive] High Speed Buff when hurt [cd 4sec]"):
                if (playerHeld && speedkncok == 0) {
                    player.setDynamicProperty(`passive_ability_speed`, speedkncok + 1);
                    player.addEffect(`speed`, 40, { amplifier: 3 });
                    break;
                }
        }
    });
    //Script-Events
    Minecraft.system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity: player }) => {
        if (!player || id !== "beyond:knockback")
            return;
        const entities = player.dimension.getEntities({ location: player.location, maxDistance: 6 });
        for (const entity of entities) {
            if (entity.id === player.id)
                continue;
            const { x, z } = Vector.subtract(entity.location, player.location);
            entity === null || entity === void 0 ? void 0 : entity.applyKnockback(x, z, 3, 0.8);
        }
    });
}
export class Vector {
    static multiply(vectorA, value) {
        return {
            x: vectorA.x * (typeof value === "number" ? value : value.x),
            y: vectorA.y * (typeof value === "number" ? value : value.y),
            z: vectorA.z * (typeof value === "number" ? value : value.z),
        };
    }
    static add(vectorA, vectorB) {
        var _a, _b, _c;
        return {
            x: vectorA.x + ((_a = vectorB.x) !== null && _a !== void 0 ? _a : 0),
            y: vectorA.y + ((_b = vectorB.y) !== null && _b !== void 0 ? _b : 0),
            z: vectorA.z + ((_c = vectorB.z) !== null && _c !== void 0 ? _c : 0),
        };
    }
    static subtract(vectorA, vectorB) {
        var _a, _b, _c;
        return {
            x: vectorA.x - ((_a = vectorB.x) !== null && _a !== void 0 ? _a : 0),
            y: vectorA.y - ((_b = vectorB.y) !== null && _b !== void 0 ? _b : 0),
            z: vectorA.z - ((_c = vectorB.z) !== null && _c !== void 0 ? _c : 0),
        };
    }
    static distance(vectorA, vectorB) {
        return Math.sqrt(Math.pow(vectorA.x - vectorB.x, 2) + Math.pow(vectorA.y - vectorB.y, 2) + Math.pow(vectorA.z - vectorB.z, 2));
    }
}
//# sourceMappingURL=weapon_ability_passive.js.map