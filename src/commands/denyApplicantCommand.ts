import {SlashCommandBuilder, CommandInteraction, PermissionsBitField, ThreadChannel} from 'discord.js';
import { CommandInterface } from './command.interface';
import { applicationForumId } from '../config/env';
import applicationTagIds from "../config/applicationTagIds";

const denyApplicantCommand: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName('decline')
        .setDescription('Decline an application and close the thread.')
        .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageThreads)
        .setDMPermission(false)
        .toJSON(),
    execute: async (interaction: CommandInteraction): Promise<void> => {
        if (!interaction.channel?.isThread()) {
            await interaction.reply({ content: 'This command can only be used within application threads.', ephemeral: true });
            return;
        }
        const applicationThread = interaction.channel as ThreadChannel;
        if (applicationThread.parentId != applicationForumId) {
            await interaction.reply({ content: 'This command can only be used within application threads.', ephemeral: true });
            return;
        }

        await interaction.reply({ content: 'This application has been denied.' });
        await applicationThread.setAppliedTags([applicationTagIds["denied"], applicationTagIds["closed"]]);
        await applicationThread.setLocked(true);
        await applicationThread.setArchived(true);
    }
};

export default denyApplicantCommand;
