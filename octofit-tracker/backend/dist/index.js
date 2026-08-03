"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const api_1 = require("./config/api");
const port = Number(process.env.PORT || 8000);
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
const apiBaseUrl = (0, api_1.getApiBaseUrl)();
console.log(`MongoDB URI configured for ${mongoUri}`);
console.log(`API base URL configured for ${apiBaseUrl}`);
app_1.default.listen(port, '0.0.0.0', () => {
    console.log(`Backend listening on port ${port}`);
});
