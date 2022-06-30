const ToDoList = require("../models/ToDoList");

const get_list = (req, res, next) => {
  ToDoList.find({}, null, { sort: { created_at: -1 } }, function (err, data) {
    if (err) next;
    res.json(data);
  });
};

const create_list = async (req, res, next) => {
  const reqBody = req.body;
  let newList = new ToDoList({
    title: reqBody.title,
    description: reqBody.description,
  });
  newList
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch(next);
  res.send("Success");
};

const delete_list = (req, res, next) => {
  ToDoList.findOneAndRemove({ _id: req.params.id }, function (err, data) {
    if (err) next;
    res.send("deleted");
  });
};

const update_list = (req, res, next) => {
  ToDoList.findByIdAndUpdate(
    req.body._id,
    {
      title: req.body.title,
      description: req.body.description,
    },
    function (err, data) {
      if (err) next;
      res.send("updated");
    }
  );
};

const check_list = (req, res, next) => {
  ToDoList.findByIdAndUpdate(
    req.body._id,
    {
      checked_date: req.body.checked_date,
    },
    function (err, data) {
      if (err) next;
      res.send("checked");
    }
  );
};

module.exports = {
  get_list,
  create_list,
  delete_list,
  update_list,
  check_list,
};
