const express = require('express');
const app = express();

//Import our Page routes
const pageRoutes = require('./routes/pages')

//register our page routes with app
app.use('/', pageRoutes)

//export changes
module.exports = app;
