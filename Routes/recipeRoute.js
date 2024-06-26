const express = require("express")
const { getAllRecipeData, getRecipeDataById, getRecipeDataByName } = require("../Controllers/recipeController")

const router = express.Router()

router.get('/',getAllRecipeData)

// router.get('/:id([0-9]{1,2})', getRecipeDataById)
router.get('/:name',getRecipeDataByName)


module.exports = router