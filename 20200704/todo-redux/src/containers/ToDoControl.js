import { connect } from 'react-redux';

import { addToDo, filterToDos } from '../store/actions';
import { ToDoForm } from '../components/ToDoForm';

export default connect(null, mapDispatchToProps)(ToDoForm);

function mapDispatchToProps(dispatch) {
  return {
    onAddToDo: description => dispatch(addToDo(description)),
    onFilterToDos: criteria => dispatch(filterToDos(criteria))
  };
}
