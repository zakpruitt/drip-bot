import { SlashCommandBuilder, CommandInteraction, PermissionsBitField, ThreadChannel } from 'discord.js';
import { CommandInterface } from './command.interface';
import { applicationForumId } from '../config/env';
import applicationTagIds from "../config/applicationTagIds";

const acceptApplicantCommand: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName('accept-trial')
        .setDescription('Accept an application and extend the trial period.')
        .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageThreads)
        .setDMPermission(false)
        .toJSON(),
    execute: async (interaction: CommandInteraction): Promise<void> => {
        if (!interaction.channel?.isThread()) {
            await interaction.reply({ content: 'This command can only be used within application threads.', ephemeral: true });
            return;
        }
        const applicationThread = interaction.channel as ThreadChannel;
        if (applicationThread.parentId !== applicationForumId) {
            await interaction.reply({ content: 'This command can only be used within application threads.', ephemeral: true });
            return;
        }

        await interaction.reply({ content: 'This application has been accepted for a trial period.' });
        await applicationThread.setAppliedTags([applicationTagIds["trial extended"], applicationTagIds["closed"]]);
        await applicationThread.setLocked(true);
        await applicationThread.setArchived(true);
    }
};

export default acceptApplicantCommand;
