"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDiagnosis = void 0;
var isString = function (text) {
    return typeof text === 'string' || text instanceof String;
};
var parseName = function (name) {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing diagnosis name: ');
    }
    return name;
};
var parseCode = function (code) {
    if (!code || !isString(code)) {
        throw new Error('Incorrect or missing diagnosis code ');
    }
    return code;
};
var parseLatin = function (latin) {
    if (latin || isString(latin) || latin === undefined) {
        return latin;
    }
    else {
        throw new Error('Diagnosis latin entry must be string type ');
    }
};
exports.toDiagnosis = function (object) {
    return {
        code: parseCode(object.code),
        name: parseName(object.name),
        latin: parseLatin(object.latin),
    };
};
exports.default = exports.toDiagnosis;
