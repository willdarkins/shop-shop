//store the data retrieved for products by Apollo in this global state
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
//take the list of categories retrieved from the server by Apollo and store it in this global state
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
//select a category from the state created by the UPDATE_CATEGORIES action and display products for that category from the list we create from the UPDATE_PRODUCTS action.
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";