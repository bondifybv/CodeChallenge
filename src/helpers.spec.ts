import {
  isPalindrome,
  removeDuplicates,
  sumToTarget,
  contains,
} from "./helpers";

describe("Helpers Suite", () => {
  it.only("should tell whether a string is a pallindrom", () => {
    expect(isPalindrome("")).toEqual(true);
    expect(isPalindrome("abcd")).toEqual(false);
    expect(isPalindrome("11/11/11")).toEqual(true);
    expect(isPalindrome("madam")).toEqual(true);
  });

  it("should remove duplicated elements", () => {
    expect(removeDuplicates([])).toEqual([]);
    expect(removeDuplicates([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(removeDuplicates([0, 0, 4, 4, 5, 5])).toEqual([0, 4, 5]);
    expect(removeDuplicates([0, "", "", 1, 2, "em"])).toEqual([
      0,
      "",
      1,
      2,
      "em",
    ]);
    expect(removeDuplicates(["a", "b", "b", "ed", "ed", "f"])).toEqual([
      "a",
      "b",
      "ed",
      "f",
    ]);
  });

  it("should search a collection for a target value", () => {
    const nestedObject = {
      data: {
        info: {
          stuff: {
            thing: {
              moreStuff: {
                magicNumber: 44,
                something: "foo2",
              },
            },
          },
        },
      },
    };
    expect(contains(nestedObject, 44)).toEqual(true);
    expect(contains(nestedObject, "foo")).toEqual(false);
  });

  it("should identify if sum to target exist", () => {
    expect(sumToTarget([], 0)).toEqual([]);
    expect(sumToTarget([3, 6, 7, 12, -1, -4], 100)).toEqual([]);
    expect(sumToTarget([3, 6, 7, 12, -1, -4], 10)).toEqual([3, 7]);
    expect(sumToTarget([44, 5, 1, 6, -43, -1, 7], 0)).toEqual([1, -1]);
  });
});
