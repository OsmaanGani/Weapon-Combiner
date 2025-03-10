import * as Minecraft from "@minecraft/server";
export function weapon_onhurt() {
    Minecraft.system.runInterval(() => {
        Minecraft.world.getAllPlayers().forEach((player) => {
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
    Minecraft.world.afterEvents.entityHitEntity.subscribe((event) => {
        let player = event.hitEntity;
        if (!player || player.typeId !== "minecraft:player")
            return;
        let hurtingEntity = event.damagingEntity;
        let onHurtCooldown = player.getDynamicProperty("on_hurt_cooldown") || 0;
        let playerHeld = player.getComponent(`equippable`).getEquipment(Minecraft.EquipmentSlot.Mainhand);
        if (playerHeld == undefined)
            return;
        let currentLore = playerHeld.getLore();
        if (!currentLore)
            return;
        switch (true) {
            case currentLore.some((line) => line === "§r§d[On-Hurt] AoE WEAKNESS On Hurt") && onHurtCooldown === 0:
                player.dimension.spawnEntity("bey:radius_entity", player.location);
                player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
                    if (entity.nameTag != player.nameTag) {
                        entity.addEffect(`weakness`, 60, { amplifier: 1 });
                    }
                });
                player.setDynamicProperty("on_hurt_cooldown", 300);
                break;
            case currentLore.some((line) => line === "§r§d[On-Hurt] Summon LIGHTNING On Hurt") &&
                onHurtCooldown === 0:
                player.dimension.spawnEntity("bey:radius_entity", player.location);
                player.addEffect(`fire_resistance`, 60, { amplifier: 1 });
                hurtingEntity.runCommand(`/summon lightning_bolt ~~~`);
                player.setDynamicProperty("on_hurt_cooldown", 1);
                break;
            case currentLore.some((line) => line === "§r§d[On-Hurt] Blind Nearby Foes") && onHurtCooldown === 0:
                player.dimension.spawnEntity("bey:radius_entity", player.location);
                player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
                    if (entity.nameTag != player.nameTag) {
                        entity.addEffect(`blindness`, 60, { amplifier: 1 });
                    }
                });
                player.setDynamicProperty("on_hurt_cooldown", 1);
                break;
            case currentLore.some((line) => line === "§r§d[On-Hurt] Apply Slow & Resistance") && onHurtCooldown === 0:
                player.dimension.spawnEntity("bey:radius_entity", player.location);
                player.addEffect(`slowness`, 60, { amplifier: 1 }), player.addEffect(`resistance`, 60, { amplifier: 2 });
                player.setDynamicProperty("on_hurt_cooldown", 1);
                break;
            case currentLore.some((line) => line === "§r§d[On-Hurt] Apply KNOCKBACK on Hit") && onHurtCooldown === 0:
                player.dimension.spawnEntity("bey:radius_entity", player.location);
                player.runCommand(`/scriptevent beyond:knockback`);
                player.setDynamicProperty("on_hurt_cooldown", 1);
                break;
            case currentLore.some((line) => line === "§r§d[On-Hurt] Leap Upwards Instantly") && onHurtCooldown === 0:
                player.dimension.spawnEntity("bey:radius_entity", player.location);
                let { x, y, z } = player.getViewDirection();
                player.applyKnockback(x, y, 0, 0.6);
                player.setDynamicProperty("on_hurt_cooldown", 1);
                break;
            case currentLore.some((line) => line === "§r§d[On-Hurt] SMITE Nearby Undead Enemies") &&
                onHurtCooldown === 0:
                player.dimension.spawnEntity("bey:radius_entity", player.location);
                const KILLABLE_UNDEAD = [
                    "minecraft:zombie",
                    "minecraft:skeleton",
                    "minecraft:creeper",
                    "minecraft:zombified_pigmen",
                    "minecraft:wither_skeleton",
                ];
                player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
                    if (KILLABLE_UNDEAD.includes(entity.typeId)) {
                        entity.runCommand(`/kill @s`);
                    }
                });
                player.setDynamicProperty("on_hurt_cooldown", 1);
                break;
            case currentLore.some((line) => line === "§r§d[On-Hurt] Set Nearby Foes on FIRE") && onHurtCooldown === 0:
                player.dimension.spawnEntity("bey:radius_entity", player.location);
                player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
                    if (entity.nameTag != player.nameTag) {
                        entity.setOnFire(3);
                    }
                });
                player.setDynamicProperty("on_hurt_cooldown", 200);
                break;
            case currentLore.some((line) => line === "§r§d[On-Hurt] Gain SPEED Boost" && onHurtCooldown === 0):
                player.dimension.spawnEntity("bey:radius_entity", player.location);
                player.addEffect(`speed`, 30, { amplifier: 1 });
                player.setDynamicProperty("on_hurt_cooldown", 200);
                break;
            case currentLore.some((line) => line === "§r§d[On-Hurt] Summon RESISTANCE Buff") && onHurtCooldown === 0:
                player.dimension.spawnEntity("bey:radius_entity", player.location);
                player.addEffect(`resistance`, 30, { amplifier: 1 });
                player.setDynamicProperty("on_hurt_cooldown", 200);
                break;
            case currentLore.some((line) => line === "§r§d[On-Hurt] Summon BLINDNESS FIELD") && onHurtCooldown === 0:
                player.dimension.spawnEntity("bey:radius_entity", player.location);
                player.dimension.getEntities({ maxDistance: 3, location: player.location }).forEach((entity) => {
                    if (entity.nameTag != player.nameTag) {
                        entity.addEffect(`blindness`, 20, { amplifier: 1 });
                    }
                });
                player.setDynamicProperty("on_hurt_cooldown", 1);
                break;
            case currentLore.some((line) => line === "§r§d[On-Hurt] Summon AoE WITHER") && onHurtCooldown === 0:
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
//# sourceMappingURL=weapon_ability_onhurt.js.map