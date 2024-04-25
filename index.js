
const express = require("express");
const path = require("path");

const app = express();

const loginData = require("../Hairdresser website/routes/routes");
const routeRouter = require("../Hairdresser website/routes/app");
const bookingData = require("../Hairdresser website/routes/booking");


app.use(loginData);
app.use(routeRouter);
app.use(bookingData);


app.listen(4000, ()=>{
    console.log("Server Started in 4000");
})