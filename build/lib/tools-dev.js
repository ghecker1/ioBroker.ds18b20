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
exports.translateText = exports.isArray = void 0;
const axios_1 = require("axios");
function isArray(it) {
    if (Array.isArray != null)
        return Array.isArray(it);
    return Object.prototype.toString.call(it) === '[object Array]';
}
exports.isArray = isArray;
function translateText(text, targetLang) {
    return __awaiter(this, void 0, void 0, function* () {
        if (targetLang === 'en')
            return text;
        try {
            const url = `http://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}&ie=UTF-8&oe=UTF-8`;
            const response = yield (0, axios_1.default)({ url, timeout: 5000 });
            if (isArray(response.data)) {
                return response.data[0][0][0];
            }
            throw new Error('Invalid response for translate request');
        }
        catch (e) {
            throw new Error(`Could not translate to "${targetLang}": ${e}`);
        }
    });
}
exports.translateText = translateText;
//# sourceMappingURL=tools-dev.js.map