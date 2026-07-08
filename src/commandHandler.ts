import {Collection, Interaction} from 'discord.js';
import {CommandInterface} from "./commands/command.interface";
import pingCommand from "./commands/pingCommand";
import acceptApplicantCommand from "./commands/acceptApplicantCommand";
import denyApplicantCommand from "./commands/denyApplicantCommand";
import awakenCommand from "./commands/awakenCommand";
import screechCommand from "./commands/screechCommand";

export const commands = new Collection<string, CommandInterface>();

commands.set(pingCommand.data.name, pingCommand);
commands.set(denyApplicantCommand.data.name, denyApplicantCommand);
commands.set(acceptApplicantCommand.data.name, acceptApplicantCommand);
commands.set(awakenCommand.data.name, awakenCommand);
commands.set(screechCommand.data.name, screechCommand);

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