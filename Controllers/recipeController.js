const recipeModel = require('../models/recipeModel')
const recipeData = require('../Data/recipeData')
const multer = require('multer')
const path = require('path')
const { request, response } = require('express');
const { error } = require('console');

const storage = multer.diskStorage({
  destination: (request,file,cb) =>{
    cb(null, 'uploads/')
  },
  filename:(request,file,cb) =>{
    cb(null, `${Date.now()} + ${file.originalname}`)
  }

})

const upload = multer({storage: storage}) 

const singleFileUpload = (request,response) => {
  upload.single('file')(request,response, error)
}

const getAllRecipeData = async(request,response) =>{
  try{
    const recipes = await recipeModel.find()
    if(recipes.length === 0){
        const addedRecipes = await recipeModel.create(recipeData)
        return response.status(200).send(addedRecipes)
    }
    response.status(200).json(recipes)
  }
  catch (err){
    response.status(500).json({message:err.message})
  }
}
const addNewRecipe = async(request, response) => {
  try {
    
    const newRecipe = await recipeModel.create(request.body);
    response.status(201).json(newRecipe);
  } 
  catch(err) {
    response.status(500).json({message:err.message})
  }
}

const getRecipeDataById = async(request,response) => {
  try{
    const recipe = await recipeModel.findOne(request.params.id)
    if(!recipe) return response.status(404).json({message : "recipe not found"})
    response.status(200).json(recipe)
  }
  catch(err){
    response.status(500).json({message:err.message})
  }
}
const getRecipeDataByName = async (request,response) => {
    try{
        const expectedRecipeName = request.params.name;
        const recipe = await recipeModel.findOne({
            $expr: {
                $eq: [{ $toLower: "$name" }, expectedRecipeName]
            }
        });
        if (!recipe) {
            return response.status(404).send({ message: `${request.params.name} not found` });
        }        
        response.status(200).json(recipe)
      }
      catch(err){
        response.status(500).json({message:err.message})
      }
}


module.exports={getAllRecipeData,getRecipeDataById,getRecipeDataByName,addNewRecipe}