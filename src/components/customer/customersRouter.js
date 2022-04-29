const express = require("express");
const { redirect } = require("express/lib/response");
const router = express.Router();
const customersController = require("./customersController");

/*************************** GET methods ***************************/
//render tables
router.get("/", customersController.renderTables);

/*************************** POST methods ***************************/

/*************************** PUT methods ***************************/

/*************************** DELETE methods ***************************/

module.exports = router;