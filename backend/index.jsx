const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const employeeRoutes = require('./routes/employeeRoutes');
require('dotenv').config();

const app = express();

connectDB();

app.use(bodyParser.json());

app.use('/api', employeeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
