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
const ava_1 = __importDefault(require("ava"));
const _1 = __importDefault(require("."));
ava_1.default("Success function returns the specified value", (t) => __awaiter(void 0, void 0, void 0, function* () {
    const successValue = "success";
    const actualValue = yield _1.default.success(successValue, 100);
    t.is(actualValue, successValue);
}));
ava_1.default("Success function adds delay if specified", (t) => __awaiter(void 0, void 0, void 0, function* () {
    const delay = 500;
    const start = new Date().getTime();
    yield _1.default.success("", delay);
    const end = new Date().getTime();
    const duration = end - start;
    t.true(duration >= delay);
}));
ava_1.default("Fail function rejects with provided error message", (t) => __awaiter(void 0, void 0, void 0, function* () {
    const errorMessage = "fail";
    try {
        yield _1.default.fail(errorMessage, 100);
    }
    catch (error) {
        t.is(error.message, errorMessage);
    }
}));
ava_1.default("Fail function adds delay if specified", (t) => __awaiter(void 0, void 0, void 0, function* () {
    const delay = 500;
    const start = new Date().getTime();
    try {
        yield _1.default.fail("", delay);
    }
    catch (error) { }
    const end = new Date().getTime();
    const duration = end - start;
    t.true(duration >= delay);
}));
