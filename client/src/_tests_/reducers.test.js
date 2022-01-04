import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
  } from '../utils/actions'

  import { reducer } from '../utils/reducers';

// create a sample of what our global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
  };

//First, we'll write a test for updating that products list...
    //we'll be testing the UPDATE_PRODUCTS action to see if we can add a product to the products array.
  test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
    //This is the type of action we're performing, and should be one of the predefined actions we created earlier.
      type: UPDATE_PRODUCTS,
      //This won't always have the name value, but it is a name representative of the new data we want to use with the action
      products: [{}, {}]
    });
  
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
  });


//This one is very similar to UPDATE_PRODUCTS, but it will be used to test how we can update the categories array
    //We now want to execute the UPDATE_CATEGORIES action and update our category list to be a new array of categories.
  test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CATEGORIES,
      categories: [{}, {}]
    });
  
    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
  });

//With this test, we are updating the state of currentCategory to a new string value instead of an array.
    //When the test runs, compare these values between newState and initialState to confirm that initialState has remained the same.
  test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: '2'
    });
  
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
  });