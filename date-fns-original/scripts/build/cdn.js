"use strict";
/**
 * The script builds the CDN version of the library.
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
const bun_1 = require("bun");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const listLocales_1 = require("../_lib/listLocales");
const node_os_1 = require("node:os");
const queue_1 = require("../test/_lib/queue");
if (!process.env.PACKAGE_OUTPUT_PATH)
    throw new Error("PACKAGE_OUTPUT_PATH is not set");
const out = (0, path_1.relative)(process.cwd(), process.env.PACKAGE_OUTPUT_PATH);
const indexPath = (0, path_1.join)(out, "cdn.js");
const fpIndexPath = (0, path_1.join)(out, "fp", "cdn.js");
const localesIndexPath = (0, path_1.join)(out, "locale", "cdn.js");
Promise.all([
    (0, listLocales_1.listLocales)().then((locales) => Promise.all(locales.map((locale) => __awaiter(void 0, void 0, void 0, function* () {
        const localePath = (0, path_1.join)(out, "locale", locale.code, "cdn.js");
        yield (0, bun_1.$) `mkdir -p ${(0, path_1.dirname)(localePath)}`;
        yield (0, promises_1.writeFile)(localePath, localeTemplate(locale));
        return localePath;
    })))),
    (0, promises_1.writeFile)(indexPath, indexTemplate()).then(() => indexPath),
    (0, promises_1.writeFile)(fpIndexPath, fpIndexTemplate()).then(() => fpIndexPath),
    (0, promises_1.writeFile)(localesIndexPath, localesIndexTemplate()).then(() => localesIndexPath),
])
    .then(([localePaths, ...indexPaths]) => localePaths.concat(indexPaths))
    .then((paths) => __awaiter(void 0, void 0, void 0, function* () {
    const buildOptions = {
        entrypoints: paths,
        outdir: ".",
        sourcemap: "external",
        root: ".",
    };
    // First bundle code
    yield Bun.build(buildOptions);
    // Make it compatible with older browser
    yield (0, queue_1.promiseQueue)(paths.map((path) => () => __awaiter(void 0, void 0, void 0, function* () {
        // Wrap into IIFE, to avoid polluting global scope
        const content = yield (0, promises_1.readFile)(path, "utf-8");
        yield (0, promises_1.writeFile)(path, `(() => { ${content} })();`);
        // Use Babel to transpile
        yield (0, bun_1.$) `env BABEL_ENV=cdn npx babel ${path} --out-file ${path} --source-maps`;
    })), (0, node_os_1.availableParallelism)());
    // Now generate min versions
    yield Bun.build(Object.assign(Object.assign({}, buildOptions), { minify: true, naming: "/[dir]/[name].min.[ext]" }));
}));
function indexTemplate() {
    return `import * as dateFns from "./index.mjs";
window.dateFns = {
  ...window.dateFns,
  ...dateFns
};`;
}
function fpIndexTemplate() {
    return `import * as fp from "../fp.mjs";
window.dateFns = {
  ...window.dateFns,
  fp
};`;
}
function localesIndexTemplate() {
    return `import * as locales from "../locale.mjs";
window.dateFns = {
  ...window.dateFns,
  locale: {
    ...window.dateFns?.locale,
    ...locales
  }
};`;
}
function localeTemplate({ name, code }) {
    return `import { ${name} } from "../${code}.mjs";
window.dateFns = {
  ...window.dateFns,
  locale: {
    ...window.dateFns?.locale,
    ${name}
  }
};`;
}
