import mongoose from "mongoose";

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    contnet: {
        type: String,
        default: "",
    },
    status: {
        type: String,
        enum: ["in-progress", "completed", "backlog", "canceled"],
    },
});
export const TodoModel = mongoose.model("todo", TodoSchema);
