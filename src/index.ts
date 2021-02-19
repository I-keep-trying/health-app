import express from 'express'
import patientRouter from './routes/patientsRouter'
import diagnosesRouter from './routes/diagnosesRouter'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

const PORT = 3012

app.use('/api/patients', patientRouter)

app.use('/api/diagnoses', diagnosesRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
