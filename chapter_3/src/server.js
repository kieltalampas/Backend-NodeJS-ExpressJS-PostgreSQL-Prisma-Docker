import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'



const app = express()
const PORT = process.env.PORT || 5003

//get file path from URL of the current module
const __filename = fileURLToPath(import.meta.url)

// get dir name from file path
const __dirname = dirname(__filename)

//middleware
app.use(express.json())

//serves html file from public dir
app.use(express.static(path.join(__dirname, '../public')))


//Serving up html file from dir
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//routes
app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)



app.listen(PORT, () => {
    console.log(`server started: ${PORT}`)
})