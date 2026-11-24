import { describe, expect, it } from "vitest";
import { range } from "./utils";

describe("utils", () => {
  describe("range", () => {
    it("return correct result from 1-6 range", () => {
      const result = range(1, 6);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
    it("return correct result from 43-45 range", () => {
      const result = range(43, 45);
      expect(result).toEqual([43, 44]);
    });
  });
});
