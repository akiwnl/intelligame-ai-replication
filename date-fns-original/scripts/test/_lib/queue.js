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
exports.promiseQueue = void 0;
function promiseQueue(promises, max) {
    const queue = [];
    const all = Promise.all(new Array(promises.length).fill(null).map((_, index) => {
        const promise = new Promise((resolve) => {
            queue[index] = () => {
                // Trigger the queue promise
                resolve();
                // Return it, so the worker function can wait for
                return promise;
            };
        }).then(() => promises[index]());
        return promise;
    }));
    function next() {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = queue.shift();
            if (!promise)
                return;
            yield promise();
            return next();
        });
    }
    // Create the worker functions
    Promise.all(new Array(max).fill(null).map(() => next()));
    return all;
}
exports.promiseQueue = promiseQueue;
