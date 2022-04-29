const express = require("express");
const { redirect } = require("express/lib/response");
const router = express.Router();
const vaccineController = require("./vaccineController");

/*************************** GET methods ***************************/
//render tables
router.get("/", vaccineController.renderTables);

/*************************** POST methods ***************************/

/*************************** PUT methods ***************************/

/*************************** DELETE methods ***************************/

module.exports = router;