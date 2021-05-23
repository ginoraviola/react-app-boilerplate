import {GET, FETCH} from "./types";
import {Dispatch} from "redux";

export const triggerGetSalutation = () => (dispatch: Dispatch<any>) => {
  dispatch({
    type: GET,
    payload: 'Hello World -> straight outta action -> replace with async API response.'
  });
}
