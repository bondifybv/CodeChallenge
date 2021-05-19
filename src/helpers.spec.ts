import { inverseString } from "./helpers";

describe("Helpers Suite", () => {
  it("should inverse a given string", () => {
    expect(inverseString("")).toEqual("");
    expect(inverseString("abcd")).toEqual("dcba");
    expect(inverseString("11/11/11")).toEqual("11/11/11");
    expect(inverseString("madam")).toEqual("madam");
  });

  it("should remove duplicated elements", () => {
    expect("").toEqual("");
  });
});
