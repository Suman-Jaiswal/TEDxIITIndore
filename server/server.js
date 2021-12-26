require('dotenv').config()
const app = require('express')()
const mongoose = require('mongoose')

app.use('/', require('./routes.js'))

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});