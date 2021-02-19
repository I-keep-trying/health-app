/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
//import express from 'express';
import { getDiagnoses } from '../services/diagnosisService'
import Router from 'express-promise-router'
const router = Router()
//const router = express.Router();

router.get('/', async (_req, res) => {
  const diagnoses = await getDiagnoses()
  res.send(diagnoses)
})

router.post('/', (_req, res) => {
  res.send('Saving a diagnosis record!')
})

export default router
