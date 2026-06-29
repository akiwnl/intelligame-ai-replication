"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../../../src/formatDuration/index.js");
const durations = [
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
].flatMap((unit) => [{ [unit]: 0 }, { [unit]: 1 }, { [unit]: 2 }]);
function renderFormatDurationStrict(locale) {
    return `## \`formatDuration\`

| Duration | Result |
|-|-|
${durations
        .map((duration) => {
        const durationString = JSON.stringify(duration);
        try {
            const result = (0, index_js_1.formatDuration)(duration, { locale, zero: true });
            return `| ${durationString} | ${result} |`;
        }
        catch (_a) {
            return `| ${durationString} | not supported |`;
        }
    })
        .join("\n")}`;
}
exports.default = renderFormatDurationStrict;
