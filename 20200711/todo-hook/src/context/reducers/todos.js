import { ToDoStatus, ActionType } from "../../constants";

const nextId = (todos) => {
  if (todos.length === 0) {
    return 1;
  }

  let ids = todos.map(todo => todo.id);

  return Math.max(...ids) + 1;
}

const todos = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [
        ...state,
        {
          id: nextId(state),
          description: action.payload.description,
          status: ToDoStatus.UNCOMPLETED
        }
      ];

    case ActionType.TOGGLE_STATUS:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          status: todo.status === ToDoStatus.COMPLETED ? ToDoStatus.UNCOMPLETED : ToDoStatus.COMPLETED
        };
      });

    case ActionType.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todos;
