import {FETCH, GET} from '../actions/types';

export interface IRootState {
  salutation: string;
}

const initialState: IRootState = {
  // Add properties to the initial state.
  salutation: ''
};

export default function(state: IRootState = initialState, action: { type: string; payload: any }) {

  switch (action.type) {
    case FETCH:
      return {
        ...state,
        // ...,
      }
    case GET:
      return {
        ...state,
        salutation: action.payload
      }
    default:
      return state;
  }
}
