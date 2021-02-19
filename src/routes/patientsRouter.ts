/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
//import express from 'express';
import {
  addPatient,
  getSecurePatient,
  findById,
  addEntry,
} from '../services/patientService';
import { toNewPatient } from '../utils/patientUtils';
import {
  toNewHealthCheckEntry,
  toNewHospitalEntry,
  toNewOccupationalHealthcareEntry,
} from '../utils/entryUtils';
import Router from "express-promise-router";
const router = Router();

//const router = express.Router();

router.get('/', async (_req, res) => {
  const patients = await getSecurePatient()
  res.send(patients);
});

router.get('/:id', (req, res) => {
  try {
    res.send(findById(req.params.id));
  } catch (e) {
    if (e instanceof Error) {
      res.status(404).send({ error: e.message });
    }
  }
});

router.get('/:id/entries', (req, res) => {
  try {
    const patient = findById(req.params.id);
    res.send(patient?.entries);
  } catch (e) {
    if (e instanceof Error) {
      res.status(404).send({ error: e.message });
    }
  }
});

router.post('/', (req, res) => {
  try {
    const newPatientRecord = toNewPatient(req.body);
    const addedRecord = addPatient(newPatientRecord);
    res.json(addedRecord);
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message);
    }
  }
});

router.post('/:id/entries', (req, res) => {
  try {
    if (req.body.type === 'HealthCheck') {
      const entry = toNewHealthCheckEntry(req.body);
      const addedRecord = addEntry(req.params.id, entry);
      res.json(addedRecord);
    } else if (req.body.type === 'Hospital') {
      const entry = toNewHospitalEntry(req.body);
      const addedRecord = addEntry(req.params.id, entry);
      res.json(addedRecord);
    } else if (req.body.type === 'OccupationalHealthcare') {
      const entry = toNewOccupationalHealthcareEntry(req.body);
      const addedRecord = addEntry(req.params.id, entry);
      res.json(addedRecord);
    } else {
      res.status(400).send('Type of entry was not received.');
    }
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message);
    }
  }
});

export default router;
