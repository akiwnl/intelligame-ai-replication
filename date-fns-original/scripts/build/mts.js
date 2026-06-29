#!/usr/bin/env npx tsx
"use strict";
/**
 * @file
 * The script generates .d.mts files for ESM imports.
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
const root = (0, path_1.resolve)(process.env.PACKAGE_OUTPUT_PATH || "lib");
createMTSFiles((0, path_1.resolve)(root));
function createMTSFiles(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const files = yield (0, promises_1.readdir)(dir, { withFileTypes: true });
            const promises = [];
            for (const file of files) {
                const fullPath = (0, path_1.join)(dir, file.name);
                if (file.isDirectory()) {
                    promises.push(createMTSFiles(fullPath));
                }
                else if (file.isFile() && file.name.endsWith(".d.ts")) {
                    const newFilePath = fullPath.replace(".d.ts", ".d.mts");
                    promises.push((0, promises_1.copyFile)(fullPath, newFilePath));
                }
            }
            yield Promise.all(promises); // Wait for all promises to resolve
        }
        catch (error) {
            console.error("Error processing directory:", error);
            process.exit(1);
        }
    });
}
