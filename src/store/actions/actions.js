import * as actionTypes from "./actionTypes";
import actionCreator from "./actionCreator";

export const getAgenda = actionCreator(actionTypes.FETCH_AGENDA_START, "data");
export const setCat = actionCreator(actionTypes.SET_CAT, "cat");
