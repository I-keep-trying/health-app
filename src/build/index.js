"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var patientsRouter_1 = __importDefault(require("./routes/patientsRouter"));
var diagnosesRouter_1 = __importDefault(require("./routes/diagnosesRouter"));
var cors_1 = __importDefault(require("cors"));
require('dotenv').config();
//const path = require('path')
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.static('build'));
app.use('/api/patients', patientsRouter_1.default);
app.use('/api/diagnoses', diagnosesRouter_1.default);
/* app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
}) */
var PORT = process.env.PORT || 3011;
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});
