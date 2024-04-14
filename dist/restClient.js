"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = void 0;
const discord_js_1 = require("discord.js");
const env_1 = require("./config/env");
const commandHandler_1 = require("./commandHandler");
const rest = new discord_js_1.REST({ version: '10' }).setToken(env_1.token);
async function registerCommands() {
    const commandData = Array.from(commandHandler_1.commands.values()).map(cmd => cmd.data);
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(discord_js_1.Routes.applicationGuildCommands(env_1.clientId, env_1.guildId), { body: commandData });
        console.log('Successfully reloaded application (/) commands.');
    }
    catch (error) {
        console.error('Failed to refresh application (/) commands:', error);
    }
}
exports.registerCommands = registerCommands;
//# sourceMappingURL=restClient.js.map