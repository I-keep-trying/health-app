import express from 'express'
import patientRouter from './routes/patientsRouter'
import diagnosesRouter from './routes/diagnosesRouter'
import cors from 'cors'

require('dotenv').config()
//const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use('/api/patients', patientRouter)

app.use('/api/diagnoses', diagnosesRouter)

/* app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
}) */

const PORT = process.env.PORT || 3011
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
