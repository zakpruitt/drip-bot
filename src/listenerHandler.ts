import {Client} from 'discord.js';
import {ListenerInterface} from "./listeners/listener.interface";
import applicationMessageListener from "./listeners/applicationMessageListener";

export const listeners = new Array<ListenerInterface>();

listeners.push(applicationMessageListener);

export function setupListeners(client: Client) {
    listeners.forEach((listener) => {
        client.on(listener.eventName, (...args) => listener.execute(client, ...args));
    });
}
