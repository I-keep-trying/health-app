"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewHealthCheckEntry = exports.toNewOccupationalHealthcareEntry = exports.toNewHospitalEntry = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
var types_1 = require("../types");
//import toDiagnosis from './dxUtils';
var isString = function (text) {
    return typeof text === 'string' || text instanceof String;
};
var parseDescription = function (description) {
    if (!description || !isString(description)) {
        throw new Error('Incorrect or missing description: ');
    }
    return description;
};
var isDate = function (date) {
    return Boolean(Date.parse(date));
};
var parseDate = function (date) {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect of missing date: ');
    }
    return date;
};
var parseSpecialist = function (specialist) {
    if (!specialist || !isString(specialist)) {
        throw new Error('Incorrect or missing specialist: ');
    }
    return specialist;
};
var parseHospitalType = function (type) {
    if (type !== 'Hospital') {
        throw new Error('Incorrect or missing hospital type: ');
    }
    return type;
};
var parseOccupationalHealthcareType = function (type) {
    if (type !== 'OccupationalHealthcare') {
        throw new Error('Incorrect or missing occupational healthcare type: ');
    }
    return type;
};
var parseHealthyCheckType = function (type) {
    if (type !== 'HealthCheck') {
        throw new Error('Incorrect or missing healthy check type: ');
    }
    return type;
};
var parseDischarge = function (discharge) {
    if (!discharge.date ||
        !isString(discharge.date) ||
        !isDate(discharge.date) ||
        !discharge.criteria ||
        !isString(discharge.criteria)) {
        throw new Error('Incorrect or missing discharge: ');
    }
    return discharge;
};
var parseSickLeave = function (sickLeave) {
    if (!sickLeave.startDate ||
        !isString(sickLeave.startDate) ||
        !isDate(sickLeave.startDate) ||
        !sickLeave.endDate ||
        !isString(sickLeave.endDate || !isDate(sickLeave.endDate))) {
        throw new Error('Incorrect or missing sickLeave: ');
    }
    return sickLeave;
};
var parseEmployerName = function (employerName) {
    if (!employerName || !isString(employerName)) {
        throw new Error('Incorrect or missing employer name: ');
    }
    return employerName;
};
var isHealthCheckRating = function (param) {
    return Object.values(types_1.HealthCheckRating).includes(param);
};
var parseHealthCheckRating = function (healthCheckRating) {
    if (!isHealthCheckRating(healthCheckRating)) {
        throw new Error('Incorrect or missing health check rating ');
    }
    return healthCheckRating;
};
var parseDiagnosis = function (diagnosisCodes) {
    if (!Array.isArray(diagnosisCodes)) {
        throw new Error('Diagnosis must be an array ');
    }
    return diagnosisCodes;
};
exports.toNewHospitalEntry = function (object) {
    return {
        type: parseHospitalType(object.type),
        description: parseDescription(object.description),
        date: parseDate(object.date),
        specialist: parseSpecialist(object.specialist),
        diagnosisCodes: parseDiagnosis(object.diagnosisCodes),
        discharge: parseDischarge(object.discharge),
    };
};
exports.toNewOccupationalHealthcareEntry = function (object) {
    return {
        type: parseOccupationalHealthcareType(object.type),
        description: parseDescription(object.description),
        date: parseDate(object.date),
        specialist: parseSpecialist(object.specialist),
        diagnosisCodes: parseDiagnosis(object.diagnosisCodes),
        employerName: parseEmployerName(object.employerName),
        sickLeave: parseSickLeave(object.sickLeave),
    };
};
exports.toNewHealthCheckEntry = function (object) {
    return {
        type: parseHealthyCheckType(object.type),
        description: parseDescription(object.description),
        date: parseDate(object.date),
        specialist: parseSpecialist(object.specialist),
        diagnosisCodes: parseDiagnosis(object.diagnosisCodes),
        healthCheckRating: parseHealthCheckRating(object.healthCheckRating),
    };
};
