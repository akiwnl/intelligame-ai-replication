#!/usr/bin/env npx tsx
"use strict";
/**
 * @file
 * The script generates the FP functions using the docs JSON file.
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const docs_1 = require("@date-fns/docs");
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const config_js_1 = require("../../docs/config.js");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const fns = yield (0, docs_1.readRefsFromJSON)(config_js_1.config, path_1.default.resolve(__dirname, "../../docs/"));
        yield Promise.all(fns.map((ref) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            if (ref.kind !== "function")
                return;
            const name = ref.ref.name;
            const hasOptions = !!((_a = ref.fn.signatures) === null || _a === void 0 ? void 0 : _a.find((singature) => { var _a; return (_a = singature.parameters) === null || _a === void 0 ? void 0 : _a.find((p) => p.name === "options"); }));
            const fnArity = ((_b = ref.fn.signatures) === null || _b === void 0 ? void 0 : _b.reduce((acc, signature) => { var _a; return Math.max(acc, ((_a = signature.parameters) === null || _a === void 0 ? void 0 : _a.length) || 0); }, 0)) || 0;
            // Skip non-pure functions, i.e. startOfToday as they can't
            // be safely curried.
            const pure = (_c = ref.fn.signatures) === null || _c === void 0 ? void 0 : _c.every((signature) => !signature.comment.blockTags.some((tag) => tag.tag === "@pure" && (0, docs_1.joinTag)(tag) === "false"));
            if (!pure)
                return;
            function writeFn(arity_1, sourceName_1) {
                return __awaiter(this, arguments, void 0, function* (arity, sourceName, fnName = sourceName) {
                    const source = getFPFn(sourceName, fnName, arity);
                    const dir = `./src/fp/${fnName}`;
                    if (!(yield exists(dir)))
                        yield (0, promises_1.mkdir)(dir);
                    return (0, promises_1.writeFile)(`${dir}/index.ts`, source);
                });
            }
            return Promise.all([
                writeFn(hasOptions ? fnArity - 1 : fnArity, name),
                hasOptions && writeFn(fnArity, name, name + "WithOptions"),
            ]);
        })));
    });
}
function exists(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, promises_1.stat)(filePath);
        }
        catch (err) {
            return false;
        }
        return true;
    });
}
main();
function getFPFn(sourceName, fnName, arity) {
    return `// This file is generated automatically by \`scripts/build/fp.ts\`. Please, don't change it.

import { ${sourceName} as fn } from "../../${sourceName}/index.js";
import { convertToFP } from "../_lib/convertToFP/index.js";

export const ${fnName} = convertToFP(fn, ${arity});
`;
}
