import ActionType from '../constants/action-type';

export function addToDo(description) {
  return {
    type: ActionType.ADD_TODO,
    payload: { description }
  };
}

export function toggleStatus(id) {
  return {
    type: ActionType.TOGGLE_STATUS,
    payload: { id }
  };
}

export function markForDeletion(id) {
  return {
    type: ActionType.MARK_FOR_DELETION,
    payload: { id }
  };
}

export function removeToDo(id) {
  return {
    type: ActionType.REMOVE_TODO,
    payload: { id }
  };
}

export function filterToDos(criteria) {
  return {
    type: ActionType.FILTER_TODOS,
    payload: { criteria }
  };
}
