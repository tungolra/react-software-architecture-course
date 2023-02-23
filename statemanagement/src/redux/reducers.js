// tell redux how to update the state of the application when an action occurs
export const numberOfClicksReducer = (state = 0, action) => {
  const { type } = action;
  switch (type) {
    case "COUNTER_BUTTON_CLICKED":
      return state + action.payload.amount;
    default:
      return state;
  }
};
