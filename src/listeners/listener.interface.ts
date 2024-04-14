import {Client} from 'discord.js';

export interface ListenerInterface {
    eventName: string;
    name: string;
    execute: (client: Client, ...args: any[]) => void;
}
