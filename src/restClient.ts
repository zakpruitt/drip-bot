import { REST, Routes } from 'discord.js';
import { token, clientId, guildId } from './config/env';
import { commands } from './commandHandler';

const rest = new REST({ version: '10' }).setToken(token);

export async function registerCommands() {
    const commandData = Array.from(commands.values()).map(cmd => cmd.data);
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commandData }
        );
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error('Failed to refresh application (/) commands:', error);
    }
}
