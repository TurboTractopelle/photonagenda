import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  cat: "formations",
  error: "",
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AGENDA_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_AGENDA_FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.FETCH_AGENDA_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case actionTypes.SET_CAT:
      return { ...state, cat: action.cat };
    default:
      return state;
  }
};
export default reducer;
