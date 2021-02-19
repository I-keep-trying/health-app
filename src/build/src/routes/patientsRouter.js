"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
var express_1 = __importDefault(require("express"));
var patientService_1 = require("../services/patientService");
var patientUtils_1 = require("../utils/patientUtils");
var entryUtils_1 = require("../utils/entryUtils");
var router = express_1.default.Router();
router.get('/', function (_req, res) {
    res.send(patientService_1.getSecurePatient());
});
router.get('/:id', function (req, res) {
    try {
        // res.send(getPatientDetail());
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
    //console.log('req.body', req.body);
    try {
        if (req.body.type === 'HealthCheck') {
            var entry = entryUtils_1.toNewHealthCheckEntry(req.body);
            var addedRecord = patientService_1.addEntry(req.params.id, entry);
            res.json(addedRecord);
        }
        else if (req.body.type === 'Hospital') {
            var entry = entryUtils_1.toNewHospitalEntry(req.body);
            console.log('req.body', entry);
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
