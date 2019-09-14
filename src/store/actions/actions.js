import * as actionTypes from "./actionTypes";
import actionCreator from "./actionCreator";
import axios from "axios";

export const fetchAgendaStart = actionCreator(actionTypes.FETCH_AGENDA_START);
export const fetchAgendaFail = actionCreator(
  actionTypes.FETCH_AGENDA_FAIL,
  "error"
);
export const fetchAgendaSuccess = actionCreator(
  actionTypes.FETCH_AGENDA_SUCCESS,
  "data"
);
export const setCat = actionCreator(actionTypes.SET_CAT, "cat");

export const fetchAgenda = () => {
  return dispatch => {
    dispatch(fetchAgendaStart());

    return axios
      .get("http://localhost:5000/data")
      .then(res => {
        dispatch(fetchAgendaSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchAgendaFail(err));
      });
  };
};
