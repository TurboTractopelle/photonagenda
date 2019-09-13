import * as actionTypes from "../actions/actionTypes";

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

export default reducer;
