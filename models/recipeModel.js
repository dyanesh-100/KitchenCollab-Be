const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  recipeName:{ 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true 

},
  ingredients: { 
    type: [String], 
    required: true 

},
  steps: { 
    type: [String], 
    required: true 

},
  prep_time: { 
    type: String, 
    required: true 

},
  cooking_time: { 
    type: String, 
    required: true 

},
  total_time: { 
    type: String, 
    required: true 

},
  nutrition_info: {
    per_serving: {
      calories: { 
        type: Number, 
        required: true 
    
    },
      total_carbohydrate: { 
        type: String, 
        required: true 
    
    },
      total_fat: { 
        type: String, 
        required: true 
    
    },
      trans_fat: { 
        type: String, 
        required: true 
    
    },
      dietary_fibre: { 
        type: String, 
        required: true 
    
    },
      total_sugar: { 
        type: String, 
        required: true 
    
    },
      cholesterol: { 
        type: String, 
        required: true 
    
    },
      protein: { 
        type: String, 
        required: true 
    
    }
    }
  },
  images: [{ 
    type: String, 
    required: true
  }]
});

module.exports = mongoose.model('Recipe', RecipeSchema);