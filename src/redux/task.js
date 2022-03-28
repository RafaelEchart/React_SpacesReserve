// action types
const ACTION_TYPE = 'ProjectName/ReducerName/ActionType';

// action creators
export const actionCreator = () => ({ type: ACTION_TYPE, payload: 'Payload' });

// initial state
const initialState = false;

// reducers
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE:
      return state;
    default:
      return state;
  }
};
