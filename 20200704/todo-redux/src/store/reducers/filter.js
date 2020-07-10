import ActionType from '../constants/action-type';
import FilterCriteria from '../constants/filter-criteria';

function filter(state = { criteria: FilterCriteria.ALL }, action) {
  switch (action.type) {
    case ActionType.FILTER_TODOS:
      return {
        criteria: action.payload.criteria
      };

    default:
      return state;
  }
}

export default filter;
