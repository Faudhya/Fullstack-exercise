const router = require("express").Router();
const { eventControllers } = require("../controllers");

router.post("/create", eventControllers.createEvent);

module.exports = router;
