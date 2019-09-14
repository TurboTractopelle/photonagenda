import * as actionTypes from "../actions/actionTypes";
// @ts-ignore
import { preparse, parse as dateParser, format } from "date-and-time";

const initialState = {
  loading: false,
  cat: "",
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
        dataCache: setUsefulDates(action.data),
        data: setUsefulDates(action.data)
      };
    case actionTypes.SET_CAT:
      return {
        ...state,
        cat: action.cat,
        data: action.cat
          ? getDataFilteredByCat(state.dataCache, action.cat)
          : state.dataCache
      };
    default:
      return state;
  }
};

function getDataFilteredByCat(data, cat) {
  return data.filter(item => item.cat === cat);
}

function setUsefulDates(data) {
  return data.map(item => {
    let displayDate;
    const d1 = item.dateStart
      ? preparse(item.dateStart, "YYYY-MM-DD HH:mm:ss")
      : {};
    const d2 = item.dateEnd
      ? preparse(item.dateEnd, "YYYY-MM-DD HH:mm:ss")
      : {};

    //console.log(item.dateStart, d1);
    //console.log(item.dateEnd, d2);

    // gérer affichage des dates
    // si pas de date de fin
    if (!item.dateStart) {
      displayDate = "";
    } else if (!item.dateEnd) {
      const objDateStart = dateParser(item.dateStart, "YYYY-MM-DD HH:mm:ss");
      // @ts-ignore
      displayDate = format(objDateStart, "DD MMM. YYYY");
    } else {
      const objDateStart = dateParser(item.dateStart, "YYYY-MM-DD HH:mm:ss");
      const objDateEnd = dateParser(item.dateEnd, "YYYY-MM-DD HH:mm:ss");
      // compare month
      if (d1.M !== d2.M) {
        displayDate =
          // @ts-ignore
          format(objDateStart, "DD MMM.") +
          "-" +
          // @ts-ignore
          format(objDateEnd, "DD MMM. YYYY");
      } else {
        displayDate =
          // @ts-ignore
          format(objDateStart, "DD") +
          "-" +
          // @ts-ignore
          format(objDateEnd, "DD MMM. YYYY");
      }
    }

    return { ...item, displayDate };
  });
}

export default reducer;
