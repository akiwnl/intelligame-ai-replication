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
exports.listFPFns = void 0;
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const ignorePattern = /^_|\./; // can't start with `_` or have a `.` in it
function listFPFns() {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield (0, promises_1.readdir)(path_1.default.join(process.cwd(), "src", "fp"));
        return files
            .filter((file) => !ignorePattern.test(file))
            .map((file) => ({
            name: file,
            path: `./${file}`,
            fullPath: `./src/fp/${file}/index.js`,
        }));
    });
}
exports.listFPFns = listFPFns;
