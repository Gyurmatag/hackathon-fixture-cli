import { test } from "node:test";
import assert from "node:assert/strict";
import { countWords } from "../lib.js";

test("counts words separated by any whitespace", () => {
  assert.equal(countWords("one two  three\nfour"), 4);
});

test("an empty text has no words", () => {
  assert.equal(countWords("   "), 0);
});
