import {SlashCommandBuilder, CommandInteraction, TextChannel} from 'discord.js';
import {CommandInterface} from './command.interface';

const AUTHORIZED_USER_ID = '217147550027874314';
const TARGET_GUILD_ID = '1144321700926861362';
const TARGET_CHANNEL_ID = '1150167993054146570';

const screechCommand: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName('screech')
        .setDescription('...')
        .setDMPermission(false)
        .toJSON(),
    execute: async (interaction: CommandInteraction): Promise<void> => {
        if (interaction.user.id !== AUTHORIZED_USER_ID) {
            await interaction.reply({
                content: 'You lack aspectual power...',
                ephemeral: true
            });
            return;
        }

        const guild = interaction.client.guilds.cache.get(TARGET_GUILD_ID);
        const channel = guild?.channels.cache.get(TARGET_CHANNEL_ID);

        if (!channel || !(channel instanceof TextChannel)) {
            await interaction.reply({
                content: 'Could not locate the target channel.',
                ephemeral: true
            });
            return;
        }

        await channel.send('@everyone You hear a distant screech as cracks begin to form in the ground...');
        await interaction.reply({
            content: 'The ritual is complete.',
            ephemeral: true
        });
    }
};

export default screechCommand;
