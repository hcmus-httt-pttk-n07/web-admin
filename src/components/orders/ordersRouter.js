const express = require("express");
const { redirect } = require("express/lib/response");
const router = express.Router();
const ordersController = require("./ordersController");

/*************************** GET methods ***************************/
//render tables
router.get("/", ordersController.renderTables);

/*************************** POST methods ***************************/

/*************************** PUT methods ***************************/

/*************************** DELETE methods ***************************/

module.exports = router;