"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCode = void 0;
const prettier_1 = __importDefault(require("prettier"));
function formatCode(code, parser = "babel") {
    return prettier_1.default.format(code, { parser });
}
exports.formatCode = formatCode;
