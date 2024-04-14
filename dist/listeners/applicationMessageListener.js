"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../config/env");
const applicationTagIds_1 = __importDefault(require("../config/applicationTagIds"));
const applicationMessageListener = {
    eventName: 'messageCreate',
    name: 'applicationMessageListener',
    execute: async (client, ...args) => {
        const message = args[0];
        const thread = await client.channels.fetch(message.channelId); // TODO: switch to message.thread
        if (message.author.bot)
            return;
        if (!thread?.isThread() || thread.parentId != env_1.applicationForumId)
            return;
        if (thread.appliedTags.includes(applicationTagIds_1.default["new"])) {
            await thread.send("Discussion detected in a new applicant's thread. Marking this thread as 'In-Review'.");
            await thread.setAppliedTags([applicationTagIds_1.default["in-review"]]);
        }
    }
};
exports.default = applicationMessageListener;
//# sourceMappingURL=applicationMessageListener.js.map