const recipeModel = require('../models/recipeModel')
const recipeData = require('../Data/recipeData')
const { request, response } = require('express');
const { error } = require('console');



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
  
  const recipeImages = request.files;
  const recipeData = request.body;

  console.log('Files:', request.files); // Log files received
  console.log('Body:', request.body);

  let images = [];
  if (recipeImages && recipeImages.length > 0){
      images = recipeImages.map(file => file.path.replace("\\","/"));
  }

  try{
    const newRecipe = new recipeModel({
      recipeName : recipeData.recipeName,
      description : recipeData.description,
      
      
      ingredients: Array.isArray(recipeData.ingredients) ? recipeData.ingredients : [recipeData.ingredients], 
      steps: Array.isArray(recipeData.steps) ? recipeData.steps : [recipeData.steps], 
      
      prep_time : recipeData.prep_time,
      cooking_time : recipeData.cooking_time,
      total_time : recipeData.total_time,
      nutrition_info : recipeData.nutrition_info,
      images : images
    })
    const addedRecipe = await newRecipe.save()
    return response.status(201).send(addedRecipe)
  } 
  catch(err) {
    console.error('Error adding recipe:', err); // Log the full error
    response.status(500).json({ message: err.message });
  }
}

const getRecipeDataById = async(request,response) => {
  try{
    const recipe = await recipeModel.findOne(request.params.id)
    if(!recipe) return response.status(404).json({message : "recipe not found"})
    response.status(200).json(recipe)
  }
  catch(err){
    
    response.status(500).json({ message: err.message });
  }
}
const getRecipeDataByName = async (request,response) => {
    try{
        const expectedRecipeName = request.params.recipeName;
        const recipe = await recipeModel.findOne({
            $expr: {
                $eq: [{ $toLower: "$recipeName" }, expectedRecipeName]
            }
        });
        if (!recipe) {
            return response.status(404).send({ message: `${request.params.recipeName} not found` });
        }        
        response.status(200).json(recipe)
      }
      catch(err){
        response.status(500).json({message:err.message})
      }
}




module.exports={getAllRecipeData,getRecipeDataById,getRecipeDataByName,addNewRecipe}