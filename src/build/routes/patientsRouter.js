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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
//import express from 'express';
var patientService_1 = require("../services/patientService");
var patientUtils_1 = require("../utils/patientUtils");
var entryUtils_1 = require("../utils/entryUtils");
var express_promise_router_1 = __importDefault(require("express-promise-router"));
var router = express_promise_router_1.default();
//const router = express.Router();
router.get('/', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var patients;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, patientService_1.getSecurePatient()];
            case 1:
                patients = _a.sent();
                res.send(patients);
                return [2 /*return*/];
        }
    });
}); });
router.get('/:id', function (req, res) {
    try {
        res.send(patientService_1.findById(req.params.id));
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(404).send({ error: e.message });
        }
    }
});
router.get('/:id/entries', function (req, res) {
    try {
        var patient = patientService_1.findById(req.params.id);
        res.send(patient === null || patient === void 0 ? void 0 : patient.entries);
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(404).send({ error: e.message });
        }
    }
});
router.post('/', function (req, res) {
    try {
        var newPatientRecord = patientUtils_1.toNewPatient(req.body);
        var addedRecord = patientService_1.addPatient(newPatientRecord);
        res.json(addedRecord);
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(400).send(e.message);
        }
    }
});
router.post('/:id/entries', function (req, res) {
    try {
        if (req.body.type === 'HealthCheck') {
            var entry = entryUtils_1.toNewHealthCheckEntry(req.body);
            var addedRecord = patientService_1.addEntry(req.params.id, entry);
            res.json(addedRecord);
        }
        else if (req.body.type === 'Hospital') {
            var entry = entryUtils_1.toNewHospitalEntry(req.body);
            var addedRecord = patientService_1.addEntry(req.params.id, entry);
            res.json(addedRecord);
        }
        else if (req.body.type === 'OccupationalHealthcare') {
            var entry = entryUtils_1.toNewOccupationalHealthcareEntry(req.body);
            var addedRecord = patientService_1.addEntry(req.params.id, entry);
            res.json(addedRecord);
        }
        else {
            res.status(400).send('Type of entry was not received.');
        }
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(400).send(e.message);
        }
    }
});
exports.default = router;
