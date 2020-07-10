import { connect } from 'react-redux';

import FilterCriteria from '../store/constants/filter-criteria';
import { toggleStatus, markForDeletion, removeToDo } from '../store/actions';
import { ToDoList } from '../components/ToDoList';

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

function mapDispatchToProps(dispatch) {
  return {
    onToggleStatus: id => dispatch(toggleStatus(id)),
    onMarkForDeletion: id => dispatch(markForDeletion(id)),
    onRemoveToDo: id => dispatch(removeToDo(id))
  };
}

function mapStateToProps(state) {
  return {
    todos: filter(state.todos, state.filter.criteria)
  };
}

function filter(todos, criteria) {
  if (criteria === FilterCriteria.ALL) {
    return todos;
  }

  return todos.filter(todo => todo.status === criteria);
}
