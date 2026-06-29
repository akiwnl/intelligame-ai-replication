#!/usr/bin/env npx tsx
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const promises_1 = require("fs/promises");
const path_1 = require("path");
const dirsToRemove = new Set();
const root = (0, path_1.resolve)(process.env.PACKAGE_OUTPUT_PATH || "lib");
const relativeRoot = (0, path_1.relative)(process.cwd(), root);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        return getFiles(relativeRoot)
            .then((files) => Promise.all(files.map((filePath) => __awaiter(this, void 0, void 0, function* () {
            const content = yield (0, promises_1.readFile)(filePath, "utf-8");
            const newFilePath = getNewPath(filePath);
            const isCJS = /\.js$/.test(filePath);
            const replaceRE = isCJS ? /require\("([^"]+)"\)/g : /from "([^"]+)"/g;
            let newContent = content.replace(replaceRE, (_str, relImportPath) => {
                const newRelImportPath = getNewImportPath(filePath, relImportPath);
                return isCJS
                    ? `require("${newRelImportPath}")`
                    : `from "${newRelImportPath}"`;
            });
            if (!isCJS)
                newContent = newContent.replace(/import\("([^"]+)"\)/g, (_str, relImportPath) => `import("${getNewImportPath(filePath, relImportPath)}")`);
            // Non-empty dirs won't delete, so we can add all dirs
            dirsToRemove.add((0, path_1.dirname)(filePath));
            if (newFilePath !== filePath)
                return Promise.all([
                    (0, promises_1.writeFile)(newFilePath, newContent),
                    (0, promises_1.unlink)(filePath),
                ]);
            else
                return (0, promises_1.writeFile)(filePath, newContent);
        }))))
            .then(() => Promise.all([...dirsToRemove].map((dir) => (0, promises_1.rmdir)(dir).catch(() => { }))))
            .catch((error) => {
            console.error(error);
            process.exit(1);
        });
    });
}
function getNewImportPath(filePath, relImportPath) {
    const importPath = resolvePath(filePath, relImportPath);
    const newFilePath = getNewPath(filePath);
    const newFullImportPath = getNewPath(importPath);
    // Determine the relative path between newFilePath and newFullImportPath
    const newImportPath = (0, path_1.relative)((0, path_1.dirname)(newFilePath), newFullImportPath);
    return newImportPath.startsWith(".") ? newImportPath : "./" + newImportPath;
}
const ignoreMove = [new RegExp(`^${relativeRoot}/index`)];
function getNewPath(oldPath) {
    if (ignoreMove.some((r) => r.test(oldPath)))
        return oldPath;
    return oldPath
        .replace(/([^/]+)\/index\.(.+)$/, "$1.$2")
        .replace(/([^/]+)\/index$/, "$1");
}
function resolvePath(base, relativePath) {
    const baseDir = (0, path_1.dirname)(base);
    return (0, path_1.join)(baseDir, relativePath);
}
const ignoreProcess = [new RegExp(`^${relativeRoot}/docs`)];
function getFiles(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield (0, promises_1.readdir)(dir);
        let allFiles = [];
        for (const file of files) {
            const fullPath = (0, path_1.join)(dir, file);
            const stats = yield (0, promises_1.stat)(fullPath);
            if (stats.isDirectory()) {
                const subFiles = yield getFiles(fullPath);
                allFiles = allFiles.concat(subFiles);
            }
            else if (stats.isFile() &&
                /\.(d\.ts|js|mjs)$/.test(file) &&
                !ignoreProcess.some((r) => r.test(fullPath))) {
                allFiles.push(fullPath);
            }
        }
        return allFiles;
    });
}
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        // getNewPath
        // Moves files
        assert_1.default.strictEqual(getNewPath("lib/addDays/index.js"), "lib/addDays.js");
        assert_1.default.strictEqual(getNewPath("lib/fp/addDays/index.js"), "lib/fp/addDays.js");
        assert_1.default.strictEqual(getNewPath("lib/locale/en-US/index.js"), "lib/locale/en-US.js");
        assert_1.default.strictEqual(getNewPath("lib/transpose/index.js"), "lib/transpose.js");
        assert_1.default.strictEqual(getNewPath("lib/fp/index.js"), "lib/fp.js");
        assert_1.default.strictEqual(getNewPath("lib/locale/index.js"), "lib/locale.js");
        // Ignores the index file
        assert_1.default.strictEqual(getNewPath("lib/index.js"), "lib/index.js");
        // Ignores non-index files
        assert_1.default.strictEqual(getNewPath("lib/parse/_lib/Setter.js"), "lib/parse/_lib/Setter.js");
        assert_1.default.strictEqual(getNewPath("./setWeek/index"), "./setWeek");
        assert_1.default.strictEqual(getNewPath("./add/index.d.ts"), "./add.d.ts");
        // resolvePath
        // Resolves relative paths
        assert_1.default.strictEqual(resolvePath("lib/addDays/index.js", "./_lib/utils.js"), "lib/addDays/_lib/utils.js");
        assert_1.default.strictEqual(resolvePath("lib/parse/_lib/Setter.js", "../../transpose/index.js"), "lib/transpose/index.js");
        // getNewImportPath
        assert_1.default.strictEqual(getNewImportPath("lib/addDays/index.js", "./_lib/utils.js"), "./addDays/_lib/utils.js");
        assert_1.default.strictEqual(getNewImportPath("lib/index.js", "./add/index.js"), "./add.js");
        assert_1.default.strictEqual(getNewImportPath("lib/index.js", "./locale/en-US/index.js"), "./locale/en-US.js");
        assert_1.default.strictEqual(getNewImportPath("lib/locale/en-US/index.js", "../_lib/utils.js"), "./_lib/utils.js");
        assert_1.default.strictEqual(getNewImportPath("lib/parse/_lib/Setter.js", "../../transpose/index.js"), "../../transpose.js");
        assert_1.default.strictEqual(getNewImportPath("lib/add/index.d.ts", "../types.js"), "./types.js");
    });
}
process.env.TEST ? test() : main();
