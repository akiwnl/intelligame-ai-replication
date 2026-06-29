"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertLocaleToConst = void 0;
function convertLocaleToConst(input) {
    return input.replace(/-([a-zA-Z])/g, (_, char) => char.toUpperCase());
}
exports.convertLocaleToConst = convertLocaleToConst;
