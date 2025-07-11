const express = require("express");
const app = express();
const userroute = require("./routes/user")
const ratelimit = require("express-rate-limit");
const dataroute = require("./routes/Data")
require('dotenv').config()
const { Server } = require("socket.io");
const http = require('http');
const Notification = require('./db');
const testrouter = require('./routes/test');


const cors = require('cors'); 
const { requestCount, getMetrics, finalRequestCount, activeUserGauge } = require("./middlewire/monitoring/code");
app.use(cors({}))

const limit = ratelimit({
	windowMs: 5 * 60 * 1000,
	max: 100,
	standardHeaders: 'draft-8',
	legacyHeaders: false,

})


// app.use(limit)
app.use(express.json());
app.use(requestCount); //this middleware is to keep track the request for our monitoringapp
app.use(activeUserGauge); 

app.use(finalRequestCount);
app.get('/metrics',getMetrics);  //this route will be hit by the prometheus only to get the metrics


// Prometheus metrics route


app.use("/", testrouter);

app.use("/user", userroute);
app.use("/user/Search", dataroute);



const PORT = 3000;
const server = app.listen(PORT,'0.0.0.0', function () {
	console.log(`App is listing on port number ${PORT}`);
})

module.exports = { server, app }



