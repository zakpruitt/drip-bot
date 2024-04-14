"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guildId = exports.clientId = exports.applicationForumWebhookId = exports.applicationForumId = exports.token = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getEnvVar(key) {
    const value = process.env[key];
    if (value === undefined) {
        throw new Error(`Environment variable ${key} is not set.`);
    }
    return value;
}
exports.token = getEnvVar('DISCORD_BOT_TOKEN');
exports.applicationForumId = getEnvVar('APPLICATION_FORUM_ID');
exports.applicationForumWebhookId = getEnvVar('APPLICATION_FORUM_WEBHOOK_ID');
exports.clientId = getEnvVar('DISCORD_CLIENT_ID');
exports.guildId = getEnvVar('DISCORD_GUILD_ID');
//# sourceMappingURL=env.js.map