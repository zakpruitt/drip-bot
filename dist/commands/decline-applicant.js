"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const env_1 = require("../config/env");
const declineApplicantCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('decline')
        .setDescription('Decline an application and close the thread.')
        .setDefaultMemberPermissions(discord_js_1.PermissionsBitField.Flags.ManageThreads)
        .setDMPermission(false)
        .toJSON(),
    execute: async (interaction) => {
        if (interaction.channelId !== env_1.applicationForumId || !interaction.channel?.isThread()) {
            await interaction.reply({ content: 'This command can only be used within application threads.', ephemeral: true });
            return;
        }
        const b = interaction.channel.appliedTags;
        await interaction.reply({ content: 'Application has been declined, the thread is now closed.' });
        // You will need to implement the lock and close functionality, and tag updates as per your application logic
    }
};
exports.default = declineApplicantCommand;
//# sourceMappingURL=decline-applicant.js.map