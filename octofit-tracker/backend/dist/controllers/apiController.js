"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivities = exports.getUsers = void 0;
const users = [
    { id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
    { id: 2, name: 'Grace Hopper', email: 'grace@example.com' },
];
const activities = [
    { id: 1, type: 'Running', durationMinutes: 30, date: '2026-08-01' },
    { id: 2, type: 'Strength', durationMinutes: 45, date: '2026-08-02' },
];
const getUsers = (_req, res) => {
    res.json(users);
};
exports.getUsers = getUsers;
const getActivities = (_req, res) => {
    res.json(activities);
};
exports.getActivities = getActivities;
