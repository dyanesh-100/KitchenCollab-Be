const express = require ("express")
const cors = require('cors')
const app = express ()
const PORT = 3500
const recipeRoute = require('./Routes/recipeRoute')

app.use(cors())
app.use(express.json())

app.get('/',(request,response) => {
    response.status(200).send({message:"Hello World"})
}) 

app.use('/api/v1/recipes',recipeRoute)


app.listen(PORT, console.log(`Server running at http://localhost:${PORT}/api/v1`))