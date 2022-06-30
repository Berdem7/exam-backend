const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToDoListSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Enter the title"],
    },
    description: {
      type: String,
      required: [true, "Enter the description"],
      unique: true,
    },
    checked_date: {
      type: Date,
      default: undefined,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("ToDoList", ToDoListSchema);
