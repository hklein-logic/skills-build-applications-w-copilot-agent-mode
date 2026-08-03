"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiController_1 = require("../controllers/apiController");
const router = (0, express_1.Router)();
router.get('/api/users', apiController_1.getUsers);
router.get('/api/activities', apiController_1.getActivities);
exports.default = router;
