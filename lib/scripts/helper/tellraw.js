export function tellraw(player, text) {
    player.runCommand(`/tellraw @a {"rawtext":[{"text":"${text}"}]}`);
}
//# sourceMappingURL=tellraw.js.map