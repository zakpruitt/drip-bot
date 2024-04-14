"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCommand = exports.commands = void 0;
const discord_js_1 = require("discord.js");
const pingCommand_1 = __importDefault(require("./commands/pingCommand"));
const acceptApplicantCommand_1 = __importDefault(require("./commands/acceptApplicantCommand"));
const denyApplicantCommand_1 = __importDefault(require("./commands/denyApplicantCommand"));
exports.commands = new discord_js_1.Collection();
exports.commands.set(pingCommand_1.default.data.name, pingCommand_1.default);
exports.commands.set(denyApplicantCommand_1.default.data.name, denyApplicantCommand_1.default);
exports.commands.set(acceptApplicantCommand_1.default.data.name, acceptApplicantCommand_1.default);
async function handleCommand(interaction) {
    if (interaction.isCommand()) {
        const command = exports.commands.get(interaction.commandName);
        if (!command)
            return;
        try {
            await command.execute(interaction);
        }
        catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true
            });
        }
    }
}
exports.handleCommand = handleCommand;
//# sourceMappingURL=commandHandler.js.map