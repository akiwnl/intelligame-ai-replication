"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../../../src/format/index.js");
const index_js_2 = require("../../../../src/isValid/index.js");
const index_js_3 = require("../../../../src/parse/index.js");
const index_js_4 = require("../../../../src/toDate/index.js");
const formatParseTokens_js_1 = __importDefault(require("./formatParseTokens.js"));
function renderFormatParse(locale) {
    return `## \`format\` and \`parse\`

| Title | Token string | Date | \`format\` result | \`parse\` result |
|-|-|-|-|-|
${formatParseTokens_js_1.default
        .map(({ title, tokens, dates, options = {} }) => {
        return tokens
            .map((token, tokenIndex) => {
            return dates
                .map((date, dateIndex) => {
                const dateString = (0, index_js_4.toDate)(date).toISOString();
                const formatResult = (0, index_js_1.format)(date, token, Object.assign({ locale }, options));
                let parsedDate;
                try {
                    parsedDate = (0, index_js_3.parse)(formatResult, token, date, Object.assign({ locale }, options));
                }
                catch (_err) {
                    parsedDate = "Errored";
                }
                const parseResult = parsedDate === "Errored"
                    ? parsedDate
                    : (0, index_js_2.isValid)(parsedDate)
                        ? parsedDate.toISOString()
                        : "Invalid Date";
                if (dateIndex === 0 && tokenIndex === 0) {
                    return `| ${title} | ${token} | ${dateString} | ${formatResult} | ${parseResult} |`;
                }
                else if (dateIndex === 0) {
                    return `| | ${token} | ${dateString} | ${formatResult} | ${parseResult} |`;
                }
                else {
                    return `| | | ${dateString} | ${formatResult} | ${parseResult} |`;
                }
            })
                .join("\n");
        })
            .join("\n");
    })
        .join("\n")}`;
}
exports.default = renderFormatParse;
