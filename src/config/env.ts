import dotenv from 'dotenv';
import {Snowflake} from 'discord.js';

dotenv.config();

function getEnvVar(key: string): string {
    const value = process.env[key];
    if (value === undefined) {
        throw new Error(`Environment variable ${key} is not set.`);
    }
    return value;
}

export const token: string = getEnvVar('DISCORD_BOT_TOKEN');
export const applicationForumId: string = getEnvVar('APPLICATION_FORUM_ID');
export const applicationForumWebhookId: string = getEnvVar('APPLICATION_FORUM_WEBHOOK_ID')
export const clientId: Snowflake = getEnvVar('DISCORD_CLIENT_ID') as Snowflake;
export const guildId: Snowflake = getEnvVar('DISCORD_GUILD_ID') as Snowflake;