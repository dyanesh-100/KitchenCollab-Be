const express = require("express")

const { getAllRecipeData, getRecipeDataByName,addNewRecipe} = require("../Controllers/recipeController")
const upload = require("../middleware/uploads")


const router = express.Router()


router.get('/',getAllRecipeData)

router.post('/addrecipe',upload.array("images"),(req, res, next) => {
    try {
        addNewRecipe(req, res); // Call the addNewRecipe function to handle the request
    } catch (err) {
        console.error('Error during file upload:', err); // Log error details
        res.status(500).json({ message: 'Error processing the request' }); // Send error response
    }
});

router.get('/:recipeName',getRecipeDataByName)




module.exports = router