// manages the actions that can be performed on the state
export const counterButtonClicked = (amount) => ({
  type: "COUNTER_BUTTON_CLICKED",
  payload: { amount },
});
