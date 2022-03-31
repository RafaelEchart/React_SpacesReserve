const SPACE_FETCH_REQUEST = 'SPACE_FETCH_REQUEST';

const initialState = [];

const spacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPACE_FETCH_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

export default spacesReducer;
