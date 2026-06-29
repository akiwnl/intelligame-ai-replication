#!/usr/bin/env npx tsx
"use strict";
/**
 * @file
 * The script generates index files for submodules.
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
const listFns_js_1 = require("../_lib/listFns.js");
const listFPFns_js_1 = require("../_lib/listFPFns.js");
const listLocales_js_1 = require("../_lib/listLocales.js");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const locales = yield (0, listLocales_js_1.listLocales)();
    const fns = yield (0, listFns_js_1.listFns)();
    const fpFns = yield (0, listFPFns_js_1.listFPFns)();
    yield Promise.all([
        generatePackageJSON({ fns, fpFns, locales }).then((json) => (0, promises_1.writeFile)("package.json", json)),
        (0, promises_1.writeFile)("src/index.ts", generateIndex({ files: fns })),
        (0, promises_1.writeFile)("src/fp/index.ts", generateIndex({ files: fpFns, isFP: true })),
        (0, promises_1.writeFile)("src/locale/index.ts", generateIndex({ files: locales })),
        (0, promises_1.writeFile)("typedoc.json", generateTypeDoc(fns)),
    ]);
}))();
function generatePackageJSON(_a) {
    return __awaiter(this, arguments, void 0, function* ({ fns, fpFns, locales, }) {
        const packageJSON = JSON.parse(yield (0, promises_1.readFile)("package.json", "utf-8"));
        packageJSON.exports = Object.fromEntries([
            ["./package.json", "./package.json"],
            [
                ".",
                {
                    require: {
                        types: "./index.d.ts",
                        default: "./index.js",
                    },
                    import: {
                        types: "./index.d.mts",
                        default: "./index.mjs",
                    },
                },
            ],
        ]
            .concat(mapExports(["./constants", "./locale", "./fp"], "."))
            .concat(mapExports(mapFiles(fns)))
            .concat(mapExports(mapFiles(fpFns), "./fp"))
            .concat(mapExports(mapFiles(locales), "./locale")));
        return JSON.stringify(packageJSON, null, 2);
    });
}
function mapFiles(files) {
    return files.map((file) => file.path);
}
function mapExports(paths, prefix = ".") {
    return paths.map((path) => {
        const pth = `${prefix}${path.slice(1)}`;
        return [
            pth,
            {
                require: {
                    types: `${pth}.d.ts`,
                    default: `${pth}.js`,
                },
                import: {
                    types: `${pth}.d.mts`,
                    default: `${pth}.mjs`,
                },
            },
        ];
    });
}
function generateIndex({ files, isFP }) {
    const lines = files
        .map((file) => `export * from "${file.path}/index.js";`)
        .concat(`export type * from "${isFP ? ".." : "."}/types.js";`);
    return `// This file is generated automatically by \`scripts/build/indices.ts\`. Please, don't change it.

${lines.join("\n")}
`;
}
function generateTypeDoc(fns) {
    return ("// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.\n" +
        JSON.stringify({
            name: "date-fns",
            entryPoints: fns
                .map((fn) => fn.fullPath)
                .concat("./src/constants/index.ts"),
            json: "./tmp/docs.json",
            plugin: ["typedoc-plugin-missing-exports"],
        }, null, 2));
}
