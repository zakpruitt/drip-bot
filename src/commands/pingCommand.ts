import { SlashCommandBuilder, CommandInteraction } from 'discord.js';
import { CommandInterface } from './command.interface';

const pingCommand: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!')
        .toJSON(),
    execute: async (interaction: CommandInteraction): Promise<void> => {
        await interaction.reply('Pong!');
    }
};

export default pingCommand;
