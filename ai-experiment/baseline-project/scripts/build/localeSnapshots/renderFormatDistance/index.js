"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../../../src/formatDistance/index.js");
const distanceDates_js_1 = require("../_lib/distanceDates.js");
function renderFormatDistance(locale) {
    return `## \`formatDistance\`

If now is January 1st, 2000, 00:00.

| Date | Result | \`includeSeconds: true\` | \`addSuffix: true\` |
|-|-|-|-|
${distanceDates_js_1.dates
        .map((date) => {
        const dateString = date.toISOString();
        const result = (0, index_js_1.formatDistance)(date, distanceDates_js_1.baseDate, { locale });
        const resultIncludeSeconds = (0, index_js_1.formatDistance)(date, distanceDates_js_1.baseDate, {
            locale,
            includeSeconds: true,
        });
        const resultAddSuffix = (0, index_js_1.formatDistance)(date, distanceDates_js_1.baseDate, {
            locale,
            addSuffix: true,
        });
        return `| ${dateString} | ${result} | ${resultIncludeSeconds} | ${resultAddSuffix} |`;
    })
        .join("\n")}`;
}
exports.default = renderFormatDistance;
