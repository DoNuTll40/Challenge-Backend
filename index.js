
require('dotenv').config();
const express = require("express");
const web = express();
const port = process.env.PORT;

const cors = require('cors');

// import file function
const errorHandler = require('./src/middlewares/errorHandler');
const notFoundHandler = require('./src/middlewares/notFound');
const carRecord = require('./src/routes/record-route');

// use cors
web.use(cors());
web.use(express.json());

// path main api
web.use('/car', carRecord)

// setup port and output api
web.listen(port, () => {
    console.log(`\nServer run on port ${port} | URL : http://localhost:${port} \n`);
})

// create error api
web.use(errorHandler)
web.use('*', notFoundHandler) // error path not found