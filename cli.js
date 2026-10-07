#!/usr/bin/env node
// Counts the words in its arguments or in standard input.
import { countWords } from "./lib.js";

const text = process.argv.slice(2).join(" ");
console.log(countWords(text));
