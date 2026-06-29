"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../../../src/formatDistanceStrict/index.js");
const distanceDates_js_1 = require("../_lib/distanceDates.js");
function renderFormatDistanceStrict(locale) {
    return `## \`formatDistanceStrict\`

If now is January 1st, 2000, 00:00.

| Date | Result | \`addSuffix: true\` | With forced unit (i.e. \`hour\`)
|-|-|-|-|
${distanceDates_js_1.dates
        .map((date) => {
        const dateString = date.toISOString();
        const result = (0, index_js_1.formatDistanceStrict)(date, distanceDates_js_1.baseDate, { locale });
        const resultAddSuffix = (0, index_js_1.formatDistanceStrict)(date, distanceDates_js_1.baseDate, {
            locale,
            addSuffix: true,
        });
        const resultForcedUnit = (0, index_js_1.formatDistanceStrict)(date, distanceDates_js_1.baseDate, {
            locale,
            unit: "hour",
        });
        return `| ${dateString} | ${result} | ${resultAddSuffix} | ${resultForcedUnit} |`;
    })
        .join("\n")}`;
}
exports.default = renderFormatDistanceStrict;
