"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const env_1 = require("./config/env");
const commandHandler_1 = require("./commandHandler");
const restClient_1 = require("./restClient");
const listenerHandler_1 = require("./listenerHandler");
const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMessages] });
client.on('ready', async () => {
    if (!client.user) {
        console.error('The client is ready but the user is not accessible.');
        return;
    }
    console.log(`Logged in as ${client.user.tag}!`);
    await (0, restClient_1.registerCommands)();
});
client.on('interactionCreate', commandHandler_1.handleCommand);
(0, listenerHandler_1.setupListeners)(client);
client.login(env_1.token)
    .then(() => console.log('Logged in successfully!'))
    .catch(err => console.error('Failed to login:', err));
//# sourceMappingURL=bot.js.map