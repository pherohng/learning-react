import { ActionType } from "../../constants";

const filter = (state, action) => {
  switch (action.type) {
    case ActionType.FILTER_TODOS:
      return {
        criteria: action.payload.criteria
      };

    default:
      return state;
  }
};

export default filter;
