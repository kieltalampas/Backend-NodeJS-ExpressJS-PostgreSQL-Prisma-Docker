//URL -> http://localhost:8383
//IP -> 127.0.0.1:8383
const express = require('express')
const app = express()
const PORT = 8383

let data = ['kiel']

//middleware
app.use(express.json())

// website endpoint
app.get('/', (req, res) => {
    console.log('homepage requested')
    res.send(`
        <body style="background:pink;
        color:blue;">
        <h1>data</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('script')</script>
        `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
        <h1>data</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/">Home</a>
        </body>
        `)
})


// api endpoints
// create-post read-get update-put delete-delete

app.get('/api/data', (req, res) =>{
    console.log('data')
    res.status(599).send(data)
})

app.post('/api/data',(req, res) =>{
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data',(req, res) =>{
    data.pop()
    console.log("deleted last element")
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))