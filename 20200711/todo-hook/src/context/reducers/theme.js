import { ActionType } from "../../constants";

const theme = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_THEME:
      return action.payload.theme;

    default:
      return state;
  }
};

export default theme;
