const express = require("express");
const { redirect } = require("express/lib/response");
const router = express.Router();
const scheduleController = require("./scheduleController");

/*************************** GET methods ***************************/
//render tables
router.get("/", scheduleController.renderTables);

/*************************** POST methods ***************************/

/*************************** PUT methods ***************************/

/*************************** DELETE methods ***************************/

module.exports = router;