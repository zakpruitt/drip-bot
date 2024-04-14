"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const echoCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('echo')
        .setDescription('Echoes the input back to you.')
        .addStringOption(option => option.setName('input')
        .setDescription('The input to echo back')
        .setRequired(true))
        .toJSON(),
    execute: async (interaction) => {
        const input = interaction.options.get('input', true).value;
        if (typeof input === 'string')
            await interaction.reply(input);
        else
            await interaction.reply('The input must be a string.');
    }
};
exports.default = echoCommand;
//# sourceMappingURL=echo.js.map