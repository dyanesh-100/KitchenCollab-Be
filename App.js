require ('dotenv').config()
const express = require ("express")
const cors = require('cors')
const path = require("path")
const app = express ()
const mongoose = require('mongoose')
const recipeRoute = require('./Routes/recipeRoute')
const PORT = process.env.PORT
app.use(cors({
    origin : 'https://vercel.com/dyaneshs-projects-bb69bfb8/kitchen-collab-fe',
    methods: 'GET,POST,PUT,DELETE',
}))
app.use(express.json())


mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully'))

app.get('/',(request,response) => {
    response.status(200).send({message:"Hello World"})
}) 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/v1/recipes',recipeRoute)


app.listen(PORT, console.log(`Server running at http://localhost:${PORT}/api/v1`))