const recipeData = require('../Data/recipeData')
const getAllRecipeData = (request,response) =>{
  response.status(200).send(recipeData)
}

const getRecipeDataById =(request,response) => {
  const recipeId = request.params.id;
  let expectedRecipeData

  recipeData.map((recipe)=>{
      if(recipeId === recipe.id){
          expectedRecipeData = recipe
      }
  })
  if(expectedRecipeData){
      return response.status(200).send(expectedRecipeData)
  }
  else{
      return response.status(404).send({message:`${recipeId} doesn't valid`})
  }
}
const getRecipeDataByName = (request,response) => {
const expectedRecipeName = request.params.name;
const expectedRecipeData = recipeData.find(iterator => iterator.name.toLowerCase()===expectedRecipeName )
if(expectedRecipeData){
    response.status(200).send(expectedRecipeData)
}
else{
    response.status(404).send({meesage : `${expectedRecipeName} not found`})

}

}

module.exports={getAllRecipeData,getRecipeDataById,getRecipeDataByName}