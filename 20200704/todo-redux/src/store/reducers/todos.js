import ActionType from '../constants/action-type';
import ToDoStatus from '../constants/todo-status';

function todos(state = [], action) {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [
        ...state,
        {
          id: getNextId(state),
          description: action.payload.description,
          status: ToDoStatus.UNCOMPLETED,
          markedForDeletion: false
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

    case ActionType.MARK_FOR_DELETION:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }

        return {
          ...todo,
          markedForDeletion: true
        };
      });

    case ActionType.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    default:
      return state;
  }

  function getNextId(todos) {
    if (todos.length === 0) {
      return 1;
    }

    let ids = todos.map(todo => todo.id);

    return Math.max(...ids) + 1;
  }
}

export default todos;
