const express = require("express")
const { getAllRecipeData, getRecipeDataByName,addNewRecipe } = require("../Controllers/recipeController")

const router = express.Router()

router.get('/',getAllRecipeData)

router.post('/addrecipe',addNewRecipe)

router.get('/:name',getRecipeDataByName)


module.exports = router