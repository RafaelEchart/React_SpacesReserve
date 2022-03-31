import axios from 'axios';

const SPACE_FETCH_REQUEST = 'SPACE_FETCH_REQUEST';
const SPACE_FETCH_SUCCESS = 'SPACE_FETCH_SUCCESS';
const SPACE_FETCH_FAILURE = 'SPACE_FETCH_FAILURE';

const initialState = [];

export const fetchSpaces = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3000/spaces');
  // console.log(res.data);
  const spaces = [];
  Object.entries(res.data).forEach(([key, value]) => {
    const datas = {
      id: key,
      description: value.description,
      image: value.image,
      price: value.price,
      reservation: value.reservation,
    };
    spaces.push(datas);
  });
  dispatch({ type: SPACE_FETCH_SUCCESS, payload: spaces });
};

const spacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPACE_FETCH_REQUEST:
      return state;
    case SPACE_FETCH_SUCCESS:
      return action.payload;
    case SPACE_FETCH_FAILURE:
      return state;
    default:
      return state;
  }
};

export default spacesReducer;
