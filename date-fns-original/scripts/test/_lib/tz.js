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
Object.defineProperty(exports, "__esModule", { value: true });
exports.testTimeZones = exports.testTimeZone = void 0;
const bun_1 = require("bun");
const node_os_1 = require("node:os");
const queue_1 = require("./queue");
function testTimeZone(timeZone) {
    return __awaiter(this, void 0, void 0, function* () {
        const { stderr, exitCode } = yield (0, bun_1.$) `TZ=${timeZone} bun test ./src/**/test.ts`.quiet();
        if (exitCode) {
            console.log(stderr.toString());
            console.log(`⛔ Tests for the time zone ${timeZone}`);
            process.exit(exitCode);
        }
        console.log(`✅ Tests for the time zone ${timeZone}`);
    });
}
exports.testTimeZone = testTimeZone;
function testTimeZones(timeZones) {
    return (0, queue_1.promiseQueue)(timeZones.map((timeZone) => () => testTimeZone(timeZone)), (0, node_os_1.availableParallelism)());
}
exports.testTimeZones = testTimeZones;
