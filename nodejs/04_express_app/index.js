// const express = require('express');
import express from "express";

const app = express();

// Route: GET /
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

// Route: GET /about
app.get('/about', (req, res) => {
    res.send('This is About Page');
});

// Return JSON
app.get('/json', (req, res) => {
    res.json({
        name: "Yuvraj",
        skills: ["Node", "Express"]
    })
})

// Route: POST /api
app.post('/api', (req, res) => {
    res.send('Data received through POST');
});

app.listen(4000, () => console.log("Server Started!"));