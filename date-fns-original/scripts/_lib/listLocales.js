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
exports.listLocales = void 0;
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const ignorePattern = /^_|\./; // can't start with `_` or have a `.` in it
function listLocales() {
    return __awaiter(this, void 0, void 0, function* () {
        const localesPath = path_1.default.resolve(process.cwd(), "src/locale");
        const locales = yield (0, promises_1.readdir)(localesPath);
        return locales
            .filter((file) => !ignorePattern.test(file))
            .map((locale) => ({
            name: locale
                .split("-")
                .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
                .join(""),
            code: locale,
            path: `./${locale}`,
            fullPath: `./src/locale/${locale}/index.ts`,
        }));
    });
}
exports.listLocales = listLocales;
