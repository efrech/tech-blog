const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");


router.use("/", homeRoutes);
// finish the other needed routes with router.use()

module.exports = router;