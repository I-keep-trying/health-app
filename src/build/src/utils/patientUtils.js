"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPatient = exports.toNewPatient = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
var types_1 = require("../types");
//import patients from '../../data/typedPatients';
var isString = function (text) {
    return typeof text === 'string' || text instanceof String;
};
var parseName = function (name) {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing name: ');
    }
    return name;
};
var isDate = function (date) {
    return Boolean(Date.parse(date));
};
var parseDateOfBirth = function (dateOfBirth) {
    if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
        throw new Error('Incorrect or missing date: ');
    }
    return dateOfBirth;
};
var parseSSN = function (name) {
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing ssn: ');
    }
    return name;
};
var isGender = function (param) {
    return Object.values(types_1.Gender).includes(param);
};
var parseGender = function (gender) {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect of missing gender: ');
    }
    return gender;
};
var parseOccupation = function (occupation) {
    if (!occupation || !isString(occupation)) {
        throw new Error('Incorrect or missing occupation: ');
    }
    return occupation;
};
var parseEntries = function (entries) {
    if (!Array.isArray(entries)) {
        throw new Error('Entries must be an array ');
    }
    return entries;
};
exports.toNewPatient = function (object) {
    return {
        name: parseName(object.name),
        dateOfBirth: parseDateOfBirth(object.dateOfBirth),
        ssn: parseSSN(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation),
    };
};
exports.toPatient = function (object) {
    return {
        name: parseName(object.name),
        dateOfBirth: parseDateOfBirth(object.dateOfBirth),
        ssn: parseSSN(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation),
        entries: parseEntries(object.entries),
    };
};
