import * as actionTypes from "../actions/actionTypes";
// @ts-ignore
import { preparse } from "date-and-time";

const initialState = {
  loading: false,
  cat: "formation",
  error: "",
  dataCache: [],
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AGENDA_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_AGENDA_FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.FETCH_AGENDA_SUCCESS:
      return {
        ...state,
        loading: false,
        dataCache: action.data,
        data: getDataFilteredByCat(action.data, state.cat)
      };
    case actionTypes.SET_CAT:
      return {
        ...state,
        cat: action.cat,
        data: getDataFilteredByCat(state.dataCache, action.cat)
      };
    default:
      return state;
  }
};

function getDataFilteredByCat(data, cat) {
  return data.filter(item => item.cat === cat);
}

function setUsefulDates(data) {
  let dataWithDates = data.map(item => {
    const parsedDateStart = data.dateStart
      ? preparse(data.dateStart, "YYYY-MM-DD HH:mm:ss")
      : {};
    const parsedDateEnd = data.dateEnd
      ? preparse(data.dateEnd, "YYYY-MM-DD HH:mm:ss")
      : {};

    console.log(data.dateStart, parsedDateStart);
    console.log(data.dateEnd, parsedDateEnd);
  });
}

export default reducer;
