import * as Minecraft from "@minecraft/server";
export function weapon_onhit() {
    Minecraft.system.runInterval(() => {
        Minecraft.world.getAllPlayers().forEach((player) => {
            let onHitCooldown = player.getDynamicProperty(`on_hit_cooldown`);
            if (onHitCooldown === undefined) {
                player.setDynamicProperty(`on_hit_cooldown`, 0);
            }
            if (onHitCooldown > 0) {
                player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
            }
            if (onHitCooldown > 60) {
                player.setDynamicProperty(`on_hit_cooldown`, 0);
            }
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
                        entity.applyDamage(10, { cause: Minecraft.EntityDamageCause.suicide });
                    }
                }
            });
        });
    });
    Minecraft.world.afterEvents.entityHitEntity.subscribe((event) => {
        let player = event.damagingEntity;
        if (player.typeId !== "minecraft:player")
            return;
        let hurtEntity = event.hitEntity;
        let onHitCooldown = player.getDynamicProperty(`on_hit_cooldown`);
        let { x, y, z } = player.getViewDirection();
        let playerHeld = player.getComponent(`equippable`).getEquipment(Minecraft.EquipmentSlot.Mainhand);
        if (playerHeld === undefined)
            return;
        let currentLore = playerHeld.getLore();
        if (onHitCooldown === 0) {
            switch (true) {
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] WEAK Foes On Hit"):
                    hurtEntity.addEffect(`weakness`, 60, { amplifier: 4 });
                    Minecraft.world.playSound(`break.amethyst_block`, hurtEntity.location);
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] STUN Foes On Hit"):
                    hurtEntity.addEffect(`slowness`, 30, { amplifier: 4 });
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] Effect Foes With DARKNESS"):
                    hurtEntity.addEffect(`darkness`, 50, { amplifier: 4 });
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] Effect Foes With FATAL POISON"):
                    hurtEntity.addEffect(`fatal_poison`, 50, { amplifier: 4 });
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] Cause BLINDNESS On Hit"):
                    hurtEntity.addEffect(`blindness`, 40, { amplifier: 4 });
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] Cause VOID DAMAGE On Hit"):
                    Minecraft.system.runTimeout(() => {
                        hurtEntity.runCommand(`/damage @s 4 void entity ${player.nameTag}`);
                    }, 9);
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] Cause LEVITATION On Hit"):
                    hurtEntity.addEffect(`levitation`, 20, { amplifier: 2 });
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] Gain INVINCIBILITY (2s) On Hit"):
                    player.addEffect(`resistance`, 40, { amplifier: 200 });
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] Set Foes On FIRE"):
                    hurtEntity.setOnFire(4);
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] BOUNCE on hit"):
                    player.applyKnockback(x, y, 0, 1);
                    Minecraft.system.runTimeout(() => {
                        player.addEffect(`slow_falling`, 40, { amplifier: 2 });
                    }, 17);
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] STRENGTH buff on hit"):
                    player.addEffect(`strength`, 30, { amplifier: 0 });
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] SLOW Foes on hit"):
                    hurtEntity.addEffect(`slowness`, 60, { amplifier: 2 });
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] Detonate A SMALL EXPLOSION"):
                    player.runCommand(`/scriptevent beyond:knockback`);
                    hurtEntity.dimension.spawnParticle(`minecraft:camera_shoot_explosion`, player.location);
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] Instantly HEAL Self On Hit"):
                    player.addEffect(`instant_health`, 1, { amplifier: 0 });
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] Inflict WITHER Effect"):
                    hurtEntity.addEffect(`wither`, 60, { amplifier: 0 });
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hurt] 80% Chace to burn the attacker"):
                    let randomX = Math.random();
                    if (randomX <= 0.8) {
                        hurtEntity.setOnFire(5);
                    }
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
                case currentLore && currentLore.some((line) => line === "§r§d[On-Hit] Curse The Enemy"):
                    hurtEntity.addTag(`Cursed`);
                    hurtEntity.setDynamicProperty(`Cursed`, 1);
                    player.setDynamicProperty(`on_hit_cooldown`, onHitCooldown + 1);
                    break;
            }
        }
    });
    //Script-Events
    Minecraft.system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity: player }) => {
        if (!player || id !== "beyond:knockback")
            return;
        const entities = player.dimension.getEntities({ location: player.location, maxDistance: 3 });
        for (const entity of entities) {
            if (entity.id === player.id)
                continue;
            const { x, z } = Vector.subtract(entity.location, player.location);
            entity === null || entity === void 0 ? void 0 : entity.applyKnockback(x, z, 0.4, 0.6);
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
//# sourceMappingURL=weapon_ability_onhit.js.map