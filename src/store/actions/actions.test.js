import * as actions from "./actions";
import * as actionTypes from "./actionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import mockAxios from "axios";

describe("should dispatch sync action to the store", () => {
  const initialState = {};
  const store = mockStore(initialState);

  it("should dispatch the correct action when fetchAgendaStart", () => {
    store.dispatch(actions.fetchAgendaStart());
    const dispatchedActions = store.getActions();

    expect(dispatchedActions).toEqual([
      { type: actionTypes.FETCH_AGENDA_START }
    ]);
  });

  it("should returns an action to fetchAgendaFail", () => {
    expect(actions.fetchAgendaFail()).toStrictEqual({
      type: actionTypes.FETCH_AGENDA_FAIL,
      error: undefined
    });
  });
});

/*
describe("testing async actions", () => {
  const initialState = {};
  const store = mockStore(initialState);

  it("should fetch data", () => {
    // @ts-ignore
    store.dispatch(actions.fetchAgenda());
    const dispatchedActions = store.getActions();
    expect(dispatchedActions[0]).toEqual({
      type: actionTypes.FETCH_AGENDA_START
    });
    console.log(dispatchedActions);
    expect(dispatchedActions[1].type).toBe(actionTypes.FETCH_AGENDA_SUCCESS);
  });
});
*/
