import { Client, GatewayIntentBits } from 'discord.js';
import { token } from './config/env';
import { handleCommand } from "./commandHandler";
import { registerCommands } from './restClient';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', async () => {
    if (!client.user) {
        console.error('The client is ready but the user is not accessible.');
        return;
    }
    console.log(`Logged in as ${client.user.tag}!`);
    await registerCommands();
});

client.on('interactionCreate', handleCommand);

client.login(token)
    .then(() => console.log('Logged in successfully!'))
    .catch(err => console.error('Failed to login:', err));
