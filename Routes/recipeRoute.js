const express = require("express")

const { getAllRecipeData, getRecipeDataByName,addNewRecipe} = require("../Controllers/recipeController")
const upload = require("../middleware/uploads")


const router = express.Router()


router.get('/',getAllRecipeData)

router.post('/addrecipe',upload.array("images"),addNewRecipe)

router.get('/:recipeName',getRecipeDataByName)




module.exports = router