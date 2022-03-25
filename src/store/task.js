// action types
const ACTION_TYPE = 'ProjectName/ReducerName/ActionType';

// action creators
export const actionCreator = () => ({ type: ACTION_TYPE, payload: 'Payload' });

// initial state
const initialState = 'Initial State';

// reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE:
      return [...state];
    default:
  }
};
