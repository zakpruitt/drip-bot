import {Collection, Interaction} from 'discord.js';
import {CommandInterface} from "./commands/command.interface";
import pingCommand from "./commands/pingCommand";
import acceptApplicantCommand from "./commands/acceptApplicantCommand";
import denyApplicantCommand from "./commands/denyApplicantCommand";

export const commands = new Collection<string, CommandInterface>();

commands.set(pingCommand.data.name, pingCommand);
commands.set(denyApplicantCommand.data.name, denyApplicantCommand);
commands.set(acceptApplicantCommand.data.name, acceptApplicantCommand);

export async function handleCommand(interaction: Interaction) {
    if (interaction.isCommand()) {
        const command = commands.get(interaction.commandName);
        if (!command) return;
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true
            });
        }
    }
}