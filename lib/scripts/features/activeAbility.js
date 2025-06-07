import { world, system, EntityDamageCause, } from "@minecraft/server";
export class ActiveAbility {
    static run(player, held) {
        var _a;
        const lore = (_a = held.getLore()) !== null && _a !== void 0 ? _a : [];
        const entry = ActiveAbility._abilities.find((a) => lore.some((line) => line === a.tag));
        if (!entry)
            return;
        if (!ActiveAbility._cooldownReady(player))
            return;
        entry.exec(player, held);
        ActiveAbility._startCooldown(player, entry.cooldown);
    }
    static _simpleHealthBoost(amplifier) {
        return (p) => {
            p.addEffect("absorption", 80, { amplifier: amplifier });
            world.playSound("beacon.power_select", p.location);
        };
    }
    static _cooldownReady(p) {
        var _a;
        return ((_a = p.getDynamicProperty("interact_cooldown")) !== null && _a !== void 0 ? _a : 0) === 0;
    }
    static _startCooldown(p, time) {
        p.setDynamicProperty("interact_cooldown", time);
    }
}
ActiveAbility._unleashSouls = (p) => {
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
ActiveAbility._freezeEntities = (p) => {
    p.dimension.getEntities({ location: p.location, maxDistance: 4 }).forEach((e) => {
        if (e.id == p.id)
            return;
        e.addEffect("slowness", 100, { amplifier: 3 });
        p.dimension.spawnEntity("bey:radius_entity", p.location);
    });
};
ActiveAbility._poisonToRegen = (p) => {
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
ActiveAbility._combinedBuff = (p) => {
    p.addEffect("regeneration", 200, { amplifier: 2 });
    p.addEffect("speed", 200, { amplifier: 2 });
    p.addEffect("jump_boost", 200, { amplifier: 2 });
};
ActiveAbility._invisibility = (p) => {
    p.addEffect("invisibility", 80, { amplifier: 1 });
};
ActiveAbility._selfSacrifice = (p) => {
    p.applyDamage(6);
    p.addEffect("speed", 100, { amplifier: 2 });
    p.addEffect("strength", 100, { amplifier: 0 });
};
ActiveAbility._wardenSpirits = (p) => {
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
ActiveAbility._dashForward = (p) => {
    let { x, y, z } = p.getViewDirection();
    p.applyKnockback(x, z, 3, 0.1);
};
ActiveAbility._bounceFoes = (p) => {
    p.dimension.getEntities({ location: p.location, maxDistance: 5 }).forEach((entity) => {
        if (entity.id === p.id)
            return;
        let { x, y, z } = entity.location;
        entity.applyKnockback(x, y, 0, 1.3);
        p.runCommand(`playsound mob.slime.jump @s ~ ~ ~ 1 1`);
    });
};
// Summon DIVINE LIGHTNING: summon lightning at player's look direction
ActiveAbility._divineLightning = (p) => {
    p.dimension.getEntities({ maxDistance: 8, location: p.location }).forEach((entity) => {
        if (entity.nameTag !== p.nameTag && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
            p.dimension.spawnEntity("bey:radius_entity", p.location);
            entity.dimension.spawnEntity("lightning_bolt", entity.location);
        }
        p;
    });
};
ActiveAbility._summonFireballs = (p) => {
    p.dimension.getEntities({ maxDistance: 5, location: p.location }).forEach((entity) => {
        p.dimension.spawnEntity("bey:radius_entity", p.location);
        if (entity.nameTag !== p.nameTag && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
            entity.setOnFire(3);
        }
    });
};
ActiveAbility._doubleJump = (p) => {
    let { x, y, z } = p.location;
    if (!p.isOnGround) {
        p.applyKnockback(x, y, 0, 0.9);
    }
    p.runCommand(`playsound mob.slime.jump @s ~ ~ ~ 1 1`);
};
ActiveAbility._miningHaste = (p) => {
    p.addEffect("haste", 200, { amplifier: 1 });
    p.runCommand(`playsound random.levelup @s ~ ~ ~ 1 1`);
};
ActiveAbility._waterBreathing = (p) => {
    p.addEffect("water_breathing", 200, { amplifier: 0 });
    p.runCommand(`playsound minecraft:entity.player.levelup @s ~ ~ ~ 1 1`);
};
ActiveAbility._createExplosions = (p) => {
    p.dimension.spawnEntity("tnt", p.location);
    p.onScreenDisplay.setTitle("§l§4RUN !!!!!");
};
ActiveAbility._hungerToHealing = (p) => {
    p.addEffect("instant_health", 20, { amplifier: 20 });
    p.addEffect("hunger", 130, { amplifier: 254 });
};
ActiveAbility._witherAura = (p) => {
    p.dimension.getEntities({ maxDistance: 5, location: p.location }).forEach((entity) => {
        p.dimension.spawnEntity("bey:radius_entity", p.location);
        if (entity.nameTag !== p.nameTag && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
            entity.addEffect("wither", 80, { amplifier: 3 });
        }
    });
};
ActiveAbility._dashFire = (p) => {
    const { x, y, z } = p.getViewDirection();
    p.applyKnockback(x, z, 5, 0);
    system.runTimeout(() => {
        p.dimension.getEntities({ maxDistance: 5, location: p.location }).forEach((entity) => {
            p.dimension.spawnEntity("bey:radius_entity", p.location);
            if (entity.nameTag !== p.nameTag && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
                entity.setOnFire(2);
            }
        });
    }, 5);
};
ActiveAbility._curseEntities = (p) => {
    p.dimension.getEntities({ maxDistance: 5, location: p.location }).forEach((entity) => {
        p.dimension.spawnEntity("bey:radius_entity", p.location);
        if (entity.id !== p.id && entity.typeId !== "minecraft:wolf" && entity.typeId !== "minecraft:cat") {
            entity.addTag(`Cursed`);
            entity.setDynamicProperty(`Cursed`, 1);
        }
    });
};
ActiveAbility._abilities = [
    {
        tag: "§r§d[Active] Interact To UNLEASH Stored SOULS as HEALTH",
        exec: ActiveAbility._unleashSouls,
        cooldown: 200,
    },
    { tag: "§r§d[Active] Interact To Freeze Entities Briefly", exec: ActiveAbility._freezeEntities, cooldown: 1 },
    { tag: "§r§d[Active] Turn Poison Into Pleasure", exec: ActiveAbility._poisonToRegen, cooldown: 1 },
    { tag: "§r§d[Active] Interact To Get A HEALTH BOOST", exec: ActiveAbility._simpleHealthBoost(3), cooldown: 1 },
    { tag: "§r§d[Active] Interact To Get A COMBINED BUFF", exec: ActiveAbility._combinedBuff, cooldown: 1 },
    { tag: "§r§d[Active] Interact To Go INVISIBLE for a while", exec: ActiveAbility._invisibility, cooldown: 1 },
    { tag: "§r§d[Active] Interact To Get Buff For a SACRIFICE", exec: ActiveAbility._selfSacrifice, cooldown: 1 },
    { tag: "§r§d[Active] Interact To Summon WARDEN SPIRITS", exec: ActiveAbility._wardenSpirits, cooldown: 1 },
    { tag: "§r§d[Active] Interact To DASH forward", exec: ActiveAbility._dashForward, cooldown: 400 },
    { tag: "§r§d[Active] Interact To BOUNCE foes", exec: ActiveAbility._bounceFoes, cooldown: 1 },
    { tag: "§r§d[Active] Interact To Summon DIVINE LIGHTNING", exec: ActiveAbility._divineLightning, cooldown: 1 },
    { tag: "§r§d[Active] Interact To Summon FIREBALLS", exec: ActiveAbility._summonFireballs, cooldown: 1 },
    { tag: "§r§d[Active] Interact To Double Your JUMP HEIGHT", exec: ActiveAbility._doubleJump, cooldown: 500 },
    { tag: "§r§d[Active] Interact To BOOST Mining Speed", exec: ActiveAbility._miningHaste, cooldown: 1 },
    { tag: "§r§d[Active] Interact for WATER BREATHING", exec: ActiveAbility._waterBreathing, cooldown: 1 },
    { tag: "§r§d[Active] Interact To Create EXPLOSIONS", exec: ActiveAbility._createExplosions, cooldown: 1 },
    { tag: "§r§d[Active] Interact replaces HUNGER for HEALING", exec: ActiveAbility._hungerToHealing, cooldown: 1 },
    { tag: "§r§d[Active] WITHER mobs around you", exec: ActiveAbility._witherAura, cooldown: 1 },
    { tag: "§r§d[Active] DASH and set mobs on fire around you", exec: ActiveAbility._dashFire, cooldown: 1 },
    { tag: "§r§d[Active] Curse Entities Around", exec: ActiveAbility._curseEntities, cooldown: 1 },
];
//# sourceMappingURL=activeAbility.js.map