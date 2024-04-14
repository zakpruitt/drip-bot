"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupListeners = exports.listeners = void 0;
const applicationMessageListener_1 = __importDefault(require("./listeners/applicationMessageListener"));
exports.listeners = new Array();
exports.listeners.push(applicationMessageListener_1.default);
function setupListeners(client) {
    exports.listeners.forEach((listener) => {
        client.on(listener.eventName, (...args) => listener.execute(client, ...args));
    });
}
exports.setupListeners = setupListeners;
//# sourceMappingURL=listenerHandler.js.map