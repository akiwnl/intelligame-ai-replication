#!/usr/bin/env npx tsx
"use strict";
/**
 * @file
 * The script adds fallback for Next.js and others that modularize imports:
 * https://twitter.com/kossnocorp/status/1731181274579325260
 *
 * It's a part of the build process.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const path_1 = require("path");
const locale_js_1 = require("./localeSnapshots/_lib/locale.js");
const root = (0, path_1.resolve)(process.env.PACKAGE_OUTPUT_PATH || "lib");
addNextJSFallbacks(root);
function addNextJSFallbacks(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const files = yield (0, promises_1.readdir)(dir, { withFileTypes: true });
            const promises = [];
            for (const file of files) {
                const fullPath = (0, path_1.join)(dir, file.name);
                const relateivePath = fullPath.replace(root + "/", "");
                if (file.isDirectory()) {
                    promises.push(addNextJSFallbacks(fullPath));
                }
                else if (file.isFile() && isModule(relateivePath)) {
                    promises.push((0, promises_1.readFile)(fullPath, "utf8").then((content) => (0, promises_1.writeFile)(fullPath, content +
                        `

// Fallback for modularized imports:
export default ${constName(relateivePath)};`)));
                }
            }
            yield Promise.all(promises);
        }
        catch (error) {
            console.error("Error processing directory:", error);
            process.exit(1);
        }
    });
}
const fnRe = /^\w+\/index.mjs/;
const localeRe = /^locale\/[\w-]+\/index.mjs/;
const fpFn = /^fp\/\w+\/index.mjs/;
const fnExceptions = [
    "constants/index.mjs",
    "locale/index.mjs",
    "fp/index.mjs",
];
function isModule(relateivePath) {
    return (!fnExceptions.includes(relateivePath) &&
        (fnRe.test(relateivePath) ||
            fpFn.test(relateivePath) ||
            localeRe.test(relateivePath)));
}
function constName(relateivePath) {
    const base = (0, path_1.basename)((0, path_1.dirname)(relateivePath));
    return localeRe.test(relateivePath) ? (0, locale_js_1.convertLocaleToConst)(base) : base;
}
