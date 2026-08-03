"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkouts = exports.getLeaderboard = exports.getTeams = exports.getActivities = exports.getUsers = void 0;
const users = [
    { id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
    { id: 2, name: 'Grace Hopper', email: 'grace@example.com' },
];
const activities = [
    { id: 1, type: 'Running', durationMinutes: 30, date: '2026-08-01' },
    { id: 2, type: 'Strength', durationMinutes: 45, date: '2026-08-02' },
];
const teams = [
    { id: 1, name: 'Team Octopus', members: 8, description: 'A fast-moving crew with big goals.' },
    { id: 2, name: 'Wave Runners', members: 12, description: 'Committed to daily progress and community.' },
];
const leaderboard = [
    { id: 1, rank: 1, name: 'Ada Lovelace', score: 1200 },
    { id: 2, rank: 2, name: 'Grace Hopper', score: 1150 },
];
const workouts = [
    { id: 1, title: 'Morning HIIT', type: 'Cardio', durationMinutes: 25, description: 'Short high-intensity interval session.' },
    { id: 2, title: 'Strength Builder', type: 'Strength', durationMinutes: 40, description: 'Full body strength training workout.' },
];
const getUsers = (_req, res) => {
    res.json(users);
};
exports.getUsers = getUsers;
const getActivities = (_req, res) => {
    res.json(activities);
};
exports.getActivities = getActivities;
const getTeams = (_req, res) => {
    res.json(teams);
};
exports.getTeams = getTeams;
const getLeaderboard = (_req, res) => {
    res.json(leaderboard);
};
exports.getLeaderboard = getLeaderboard;
const getWorkouts = (_req, res) => {
    res.json(workouts);
};
exports.getWorkouts = getWorkouts;
