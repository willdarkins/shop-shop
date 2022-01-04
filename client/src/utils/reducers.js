import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
  } from "./actions";
  
  export const reducer = (state, action) => {
    switch (action.type) {
      // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
      case UPDATE_PRODUCTS:
          //If it's that action type, we return a new object with a copy of the state argument using the spread ... operator
          //then set the products key to a value of a new array with the action.products value spread across it.
        return {
          ...state,
          products: [...action.products],
        };
  
      // if it's none of these actions, do not update state at all and keep things the same!
      // This is in case we accidentally execute an action that isn't predefined
      default:
        return state;
    }
  };