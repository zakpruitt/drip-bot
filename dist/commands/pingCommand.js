"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const pingCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!')
        .toJSON(),
    execute: async (interaction) => {
        await interaction.reply('Pong!');
    }
};
exports.default = pingCommand;
//# sourceMappingURL=pingCommand.js.map