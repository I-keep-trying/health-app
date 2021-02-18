"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiagnosis = exports.getDiagnoses = void 0;
var typedDiagnoses_1 = __importDefault(require("../data/typedDiagnoses"));
var getDiagnoses = function () { return typedDiagnoses_1.default; };
exports.getDiagnoses = getDiagnoses;
var addDiagnosis = function () {
    return [];
};
exports.addDiagnosis = addDiagnosis;
