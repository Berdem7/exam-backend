const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const ToDoListController = require("../controller/ToDoListController");

router.get("/list", ToDoListController.get_list);
router.post("/list", jsonParser, ToDoListController.create_list);
router.delete("/list/:id", ToDoListController.delete_list);
router.put("/list/:id", jsonParser, ToDoListController.update_list);
router.put("/list/check/:id", jsonParser, ToDoListController.check_list);

module.exports = router;
