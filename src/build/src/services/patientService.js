"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.findById = exports.addPatient = exports.getPatientDetail = exports.getSecurePatient = exports.getDiagnoses = exports.getPatients = void 0;
var typedPatients_1 = __importDefault(require("../../data/typedPatients"));
var typedDiagnoses_1 = __importDefault(require("../../data/typedDiagnoses"));
var nanoid_1 = require("nanoid");
exports.getPatients = function () { return typedPatients_1.default; };
exports.getDiagnoses = function () { return typedDiagnoses_1.default; };
exports.getSecurePatient = function () {
    return exports.getPatients().map(function (_a) {
        var id = _a.id, name = _a.name, dateOfBirth = _a.dateOfBirth, gender = _a.gender, occupation = _a.occupation;
        return ({
            id: id,
            name: name,
            dateOfBirth: dateOfBirth,
            gender: gender,
            occupation: occupation,
        });
    });
};
exports.getPatientDetail = function () {
    return exports.getPatients().map(function (_a) {
        var id = _a.id, name = _a.name, dateOfBirth = _a.dateOfBirth, gender = _a.gender, occupation = _a.occupation, entries = _a.entries, ssn = _a.ssn;
        return ({
            id: id,
            name: name,
            dateOfBirth: dateOfBirth,
            gender: gender,
            occupation: occupation,
            entries: entries,
            ssn: ssn,
        });
    });
};
exports.addPatient = function (patient) {
    var newPatient = __assign({ id: nanoid_1.nanoid(), entries: [] }, patient);
    typedPatients_1.default.push(newPatient);
    return newPatient;
};
exports.findById = function (id) {
    return exports.getPatients().find(function (patient) { return patient.id === id; });
};
exports.addEntry = function (id, entry) {
    var _a;
    var patient = exports.findById(id);
    //console.log('...entry', entry);
    var newEntry = __assign({ id: nanoid_1.nanoid() }, entry);
    console.log('newEntry', newEntry);
    (_a = patient === null || patient === void 0 ? void 0 : patient.entries) === null || _a === void 0 ? void 0 : _a.push(newEntry);
    return patient;
};
