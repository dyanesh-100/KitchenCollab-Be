const express = require("express")
const multer = require('multer')
const path = require('path');



const { getAllRecipeData, getRecipeDataByName,addNewRecipe,uploadImage } = require("../Controllers/recipeController")


const router = express.Router()


router.get('/',getAllRecipeData)

router.post('/addrecipe',addNewRecipe)

router.get('/:name',getRecipeDataByName)




module.exports = router