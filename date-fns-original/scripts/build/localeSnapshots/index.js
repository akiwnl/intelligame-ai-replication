#!/usr/bin/env npx tsx
"use strict";
/**
 * @file
 * The script generates the locale snapshots.
 *
 * It's a part of the build process.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const listLocales_js_1 = require("../../_lib/listLocales.js");
const prettier_js_1 = require("../_lib/prettier.js");
const locale_js_1 = require("./_lib/locale.js");
const index_js_1 = __importDefault(require("./renderFormatDistance/index.js"));
const index_js_2 = __importDefault(require("./renderFormatDistanceStrict/index.js"));
const index_js_3 = __importDefault(require("./renderFormatDuration/index.js"));
const index_js_4 = __importDefault(require("./renderFormatParse/index.js"));
const index_js_5 = __importDefault(require("./renderFormatRelative/index.js"));
const mode = process.argv[2] || "generate";
if (((_a = process.env.TZ) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== "utc")
    throw new Error("The locale snapshots generation must be run with TZ=utc");
(0, listLocales_js_1.listLocales)()
    .then((locales) => Promise.all(locales.map((localeObj) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { code, fullPath } = localeObj;
    const locale = (yield Promise.resolve(`${`../../../src/locale/${code}`}`).then(s => __importStar(require(s))))[(0, locale_js_1.convertLocaleToConst)(code)];
    const source = (yield (0, promises_1.readFile)(path_1.default.join(process.cwd(), fullPath))).toString();
    const languageName = (_b = source.match(/\* @language (.*)/)) === null || _b === void 0 ? void 0 : _b[1];
    const snapshot = `# ${languageName} (${code}) locale

${(0, index_js_4.default)(locale)}

${(0, index_js_1.default)(locale)}

${(0, index_js_2.default)(locale)}

${(0, index_js_5.default)(locale)}

${(0, index_js_3.default)(locale)}

`;
    const snapshotPath = path_1.default.join(path_1.default.resolve(process.cwd(), path_1.default.dirname(fullPath)), "snapshot.md");
    const formattedSnapshot = yield (0, prettier_js_1.formatCode)(snapshot, "markdown");
    if (mode === "test") {
        return (0, promises_1.readFile)(snapshotPath, "utf8").then((snapshotFileContent) => {
            if (snapshotFileContent !== formattedSnapshot)
                throw new Error(`The snapshot on the disk doesn't match the generated snapshot: ${snapshotPath}. Please run npm run locale-snapshots and commit the results.`);
        });
    }
    else {
        return (0, promises_1.writeFile)(snapshotPath, formattedSnapshot);
    }
}))))
    .catch((err) => {
    console.error(err.stack);
    process.exit(1);
});
