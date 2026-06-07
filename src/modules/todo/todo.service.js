import { TodoModel } from "../../models/todo.model";

export function createTodo(todoData) {
    const newTodo = new TodoModel(todoData);
    return newTodo.save();
}
