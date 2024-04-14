import {ListenerInterface} from "./listener.interface";
import {Client, Message} from "discord.js";
import {applicationForumId} from "../config/env";
import applicationTagIds from "../config/applicationTagIds";

const applicationMessageListener: ListenerInterface = {
    eventName: 'messageCreate',
    name: 'applicationMessageListener',
    execute: async (client: Client, ...args: any[]) => {
        const message: Message = args[0] as Message;
        const thread = await client.channels.fetch(message.channelId); // TODO: switch to message.thread
        if (message.author.bot) return;
        if (!thread?.isThread() || thread.parentId != applicationForumId) return;

        if (thread.appliedTags.includes(applicationTagIds["new"])) {
            await thread.send("Discussion detected in a new applicant's thread. Marking this thread as 'In-Review'.")
            await thread.setAppliedTags([applicationTagIds["in-review"]]);
        }
    }
};

export default applicationMessageListener;
