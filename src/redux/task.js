// action types
const LOAD_DATA = 'ProjectName/ReducerName/ActionType';
const RESET_DATA = 'ProjectName/ReducerName/RESET_DATA';

// initial state
const initialState = false;

// action creators
export const loadData = (data) => ({
  type: LOAD_DATA,
  payload: data,
});

const resetUser = () => ({
  type: RESET_DATA,
});

export const logOut = () => async (dispatch) => {
  dispatch(resetUser);
};

export const userIsLogged = (token, userData) => async (dispatch) => {
  const data = {
    name: userData.name,
    email: userData.email,
    role: userData.role,
    joined: userData.created_at,
    id: userData.id,
    jti: userData.jti,
    token,
  };

  localStorage.setItem('userInformation', JSON.stringify(data));
  dispatch(loadData(data));
};

export const checkUserData = () => async (dispatch) => {
  const reloadData = JSON.parse(localStorage.getItem('userInformation'));
  if (reloadData) {
    dispatch(loadData(reloadData));
  }
};

// reducers
export const userInformation = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.payload;
    case RESET_DATA:
      return state;
    default:
      return state;
  }
};
