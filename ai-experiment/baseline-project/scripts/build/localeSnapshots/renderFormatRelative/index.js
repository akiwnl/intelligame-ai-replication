"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../../../src/formatRelative/index.js");
const distanceDates_js_1 = require("../_lib/distanceDates.js");
function renderFormatRelative(locale) {
    return `## \`formatRelative\`

If now is January 1st, 2000, 00:00.

| Date | Result |
|-|-|
${distanceDates_js_1.relativeDates
        .map((date) => {
        const dateString = date.toISOString();
        let result;
        try {
            result = (0, index_js_1.formatRelative)(date, distanceDates_js_1.baseDate, { locale });
        }
        catch (_err) {
            result = "Errored";
        }
        return `| ${dateString} | ${result} |`;
    })
        .join("\n")}`;
}
exports.default = renderFormatRelative;
