import * as actionTypes from "./actionTypes";
import actionCreator from "./actionCreator";
import axios from "axios";
import fakeData from "../../fixtures/fakedata";

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

    setTimeout(() => {
      console.log("done");

      if (fakeData()) {
        console.log(fakeData());
        dispatch(fetchAgendaSuccess(fakeData()));
      } else {
        axios
          .get("/data")
          .then(res => {
            dispatch(fetchAgendaSuccess(res));
          })
          .catch(err => {
            dispatch(fetchAgendaFail(err));
          });
      }
    }, 500);
  };
};
