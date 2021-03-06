import { SET_EVENT } from './types';

const initialState = {
  event: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENT:
      return {
        ...state,
        event: action.event
      }
    default:
      return state;
  }
}

export default reducer;