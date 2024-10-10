const express = require("express");
const rateLimit = require('express-rate-limit');
const app = express();

function limitRequests() {
    const limiter = rateLimit({
        windowMs: 10 * 60 * 1000,
        max: 100,
        message: 'Too many requests from this IP, please try again later.'
    });
    app.use(limiter);
}