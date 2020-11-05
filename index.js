"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.stringifyToken = void 0;
function stringifyToken(token) {
    var endTag = token.endTag, params = token.params, startTag = token.startTag, text = token.text, type = token.type;
    var result = '';
    if (startTag) {
        result += startTag;
    }
    result += text;
    if (params) {
        result += type === 'Interpolation' ? params : " " + params;
    }
    if (endTag) {
        result += type === 'Macro' && params === undefined ? " " + endTag : endTag;
    }
    return result;
}
exports.stringifyToken = stringifyToken;
function stringify(tokens) {
    return tokens.map(stringifyToken).join('');
}
exports.stringify = stringify;
//# sourceMappingURL=index.js.map