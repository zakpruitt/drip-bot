import {CommandInteraction, SlashCommandBuilder} from 'discord.js';

export interface CommandInterface {
    data: ReturnType<SlashCommandBuilder['toJSON']>;

    execute(interaction: CommandInteraction): Promise<void>;
}