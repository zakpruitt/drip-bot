"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const env_1 = require("../config/env");
const applicationTagIds_1 = __importDefault(require("../config/applicationTagIds"));
const acceptApplicantCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('accept-applicant')
        .setDescription('Accept an application and extend the trial period.')
        .setDefaultMemberPermissions(discord_js_1.PermissionsBitField.Flags.ManageThreads)
        .setDMPermission(false)
        .toJSON(),
    execute: async (interaction) => {
        if (!interaction.channel?.isThread()) {
            await interaction.reply({
                content: 'This command can only be used within application threads.',
                ephemeral: true
            });
            return;
        }
        const applicationThread = interaction.channel;
        if (applicationThread.parentId !== env_1.applicationForumId) {
            await interaction.reply({
                content: 'This command can only be used within application threads.',
                ephemeral: true
            });
            return;
        }
        await interaction.reply({ content: 'This application has been accepted for a trial period.' });
        await applicationThread.setAppliedTags([applicationTagIds_1.default["trial extended"], applicationTagIds_1.default["closed"]]);
        await applicationThread.setLocked(true);
        await applicationThread.setArchived(true);
    }
};
exports.default = acceptApplicantCommand;
//# sourceMappingURL=acceptApplicantCommand.js.map