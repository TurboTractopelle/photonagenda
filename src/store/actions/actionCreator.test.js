import actionCreator from "./actionCreator";

describe("actionCreator", () => {
  it("creates basic action", () => {
    expect(actionCreator("a")()).toEqual({ type: "a" });
  });

  it("create an action with payload", () => {
    expect(actionCreator("a", "color")("green")).toEqual({
      type: "a",
      color: "green"
    });
  });
});
