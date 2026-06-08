const express = require('express');
const app = express()

const port = 3000

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/about", (req,res) =>{
    res.send("About page")
})

app.get("/contact", (req,res) =>{
    res.send("contact page")
})

app.get("/home4", (req, res) =>{
    res.send("Hallo,Neyma")
})


app.listen(port, () => {
    console.log(`App Listing on Port ${port}`);
})

