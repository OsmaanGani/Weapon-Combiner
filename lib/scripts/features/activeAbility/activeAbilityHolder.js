import { world, system, EntityDamageCause, } from "@minecraft/server";
export class activeAbilities {
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
                    if (effect != undefined) {
                        entity.addEffect(effect, 200, { amplifier: amplifier });
                    }
                    if (setFire != 0) {
                        entity.setOnFire(setFire);
                    }
                    if (dash == true) {
                        system.runTimeout(() => {
                            let { x, y, z } = p.getViewDirection();
                            p.applyKnockback(x, z, 3, 0.1);
                        }, 2);
                    }
                }
            });
        };
    }
}
activeAbilities._unleashSouls = (p) => {
    const inv = p.getComponent("inventory");
    let soulCount = 0;
    let container = inv.container;
    if (container) {
        for (let i = 0; i < container.size; i++) {
            const item = container.getItem(i);
            if ((item === null || item === void 0 ? void 0 : item.typeId) === "beyond:soul") {
                soulCount += item.amount;
            }
        }
    }
    if (!soulCount) {
        p.runCommand(`tellraw @s {"rawtext":[{"text":"§l§4You don't have §dSOULS"}]}`);
        return;
    }
    const hp = p.getComponent("health");
    hp.setCurrentValue(Math.min(hp.currentValue + Math.floor(soulCount * 2.5), hp.defaultValue));
    p.runCommand(`/clear @s beyond:soul 0 1`);
    world.playSound("beacon.activate", p.location);
};
activeAbilities._poisonToRegen = (p) => {
    if (p.getEffect("minecraft:wither") || p.getEffect("minecraft:poison") || p.getEffect("fatal_poison")) {
        p.addEffect("regeneration", 200, { amplifier: 2 });
        p.runCommand(`/effect @s wither 0 0`);
        p.runCommand(`/effect @s poison 0 0`);
        p.runCommand(`/effect @s fatal_poison 0 0`);
    }
    else {
        p.runCommand(`tellraw @s {"rawtext":[{"text":"§2You don't have §dPoison or Wither"}]}`);
    }
};
activeAbilities._selfSacrifice = (p) => {
    p.applyDamage(6);
    p.addEffect("speed", 100, { amplifier: 2 });
    p.addEffect("strength", 100, { amplifier: 0 });
};
activeAbilities._wardenSpirits = (p) => {
    const replaceableBlocks = ["grass_block", "stone", "andesite", "granite", "diorite", "gravel"];
    p.dimension.playSound(`entity.warden.attack`, p.location);
    for (let i = 1; i <= 18; i++) {
        p.dimension.playSound("mob.warden.attack", p.location, { volume: 10, pitch: 0.9 });
        p.runCommand(`execute at @s positioned ^ ^1.5 ^${i * 2} run particle minecraft:sonic_explosion ~~~`);
        system.runTimeout(() => {
            p.getEntitiesFromViewDirection({ maxDistance: 28 }).forEach((entity) => {
                const e = entity.entity;
                const viewDir = e.getViewDirection();
                e.applyKnockback(viewDir.x, viewDir.y, 0.6, 0.6);
                e.applyDamage(15, { cause: EntityDamageCause.selfDestruct });
                for (let x = -3; x <= 3; x++) {
                    for (let z = -3; z <= 3; z++) {
                        if (Math.random() < 0.06) {
                            replaceableBlocks.forEach((blockType) => {
                                e.runCommand(`fill ~${x} ~-4 ~${z} ~${x} ~3 ~${z} minecraft:sculk replace minecraft:${blockType}`);
                            });
                            if (Math.random() < 0.005) {
                                e.runCommand(`fill ~${x} ~-2 ~${z} ~${x} ~ ~${z} minecraft:sculk_sensor replace air`);
                            }
                        }
                    }
                }
            });
        });
    }
};
activeAbilities._bounceFoes = (p) => {
    p.dimension.getEntities({ location: p.location, maxDistance: 5 }).forEach((entity) => {
        if (entity.id === p.id)
            return;
        let { x, y, z } = entity.location;
        entity.applyKnockback(x, y, 0, 1.3);
        p.runCommand(`playsound mob.slime.jump @s ~ ~ ~ 1 1`);
    });
};
activeAbilities._divineLightning = (p) => {
    p.dimension.getEntities({ maxDistance: 8, location: p.location }).forEach((entity) => {
        if (entity.nameTag !== p.nameTag && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
            p.dimension.spawnEntity("bey:radius_entity", p.location);
            entity.dimension.spawnEntity("lightning_bolt", entity.location);
        }
        p;
    });
};
activeAbilities._doubleJump = (p) => {
    let { x, y, z } = p.location;
    if (!p.isOnGround) {
        p.applyKnockback(x, y, 0, 0.9);
    }
    p.runCommand(`playsound mob.slime.jump @s ~ ~ ~ 1 1`);
};
activeAbilities._createExplosions = (p) => {
    p.dimension.spawnEntity("tnt", p.location);
    p.onScreenDisplay.setTitle("§l§4RUN !!!!!");
};
activeAbilities._curseEntities = (p) => {
    p.dimension.getEntities({ maxDistance: 5, location: p.location }).forEach((entity) => {
        p.dimension.spawnEntity("bey:radius_entity", p.location);
        if (entity.id !== p.id && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
            entity.addTag(`Cursed`);
            entity.setDynamicProperty(`Cursed`, 1);
        }
    });
};
//# sourceMappingURL=activeAbilityHolder.js.map