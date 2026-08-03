"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiBaseUrl = void 0;
const getApiBaseUrl = () => {
    if (process.env.CODESPACE_NAME) {
        return `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`;
    }
    return process.env.API_BASE_URL || 'http://localhost:8000';
};
exports.getApiBaseUrl = getApiBaseUrl;
