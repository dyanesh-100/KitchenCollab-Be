const recipeData = [
    
    {
        id: "1",
        name: "Butter Chicken",
        description: "A classic Indian dish originating from Delhi, Butter Chicken is a creamy and indulgent curry made with tender chicken pieces simmered in a rich tomato and butter sauce. This iconic recipe was invented by Kundan Lal Gujral, the founder of the Moti Mahal restaurant in Delhi, during the 1950s, using leftover tandoori chicken cooked in a velvety tomato gravy enriched with butter and cream.",
        ingredients: [
            "500g chicken breast, diced",
            "1 cup yogurt",
            "1 cup tomato puree",
            "1/2 cup cream",
            "4 tbsp butter",
            "2 onions, finely chopped",
            "2 tbsp ginger garlic paste",
            "Spices (as per taste)"
          ],
          steps: [
            "Marinate chicken pieces with yogurt, ginger garlic paste, and spices for at least 2 hrs.",
            "In a pan, heat butter and sauté onions until golden brown.",
            "Add marinated chicken and cook until it's tender.",
            "Stir in tomato puree and cook until the sauce thickens.",
            "Add cream and simmer for a few mins.",
            "Garnish with fresh cream and serve hot with naan or rice."
          ],
          prep_time: "30 mins",  
          cooking_time: "45 mins",   
          total_time: "1 hr 15 mins",
          
          nutrition_info: {
            per_serving: {
                "calories": 350,
                "total_carbohydrate": "15g",
                "total_fat": "20g",
                "trans_fat": "0.5g",
                "dietary_fibre": "2g",
                "total_sugar": "5g",
                "cholesterol": "80mg",
                "protein": "25g"
            }
        },
        jpg: "https://as1.ftcdn.net/v2/jpg/06/01/41/66/1000_F_601416673_Tn9dqtXuujNiavuJnNNspgcDezsStYpD.jpg"
    },
    {
        id: "2",
        name: "Chicken Biryani",
        description: "An iconic Indian rice dish originating from the Mughal Empire, Chicken Biryani is a fragrant blend of marinated chicken, aromatic spices, and saffron-infused rice layers, cherished for centuries for its rich flavors and cultural significance.",
        ingredients: [
            "500g chicken, cut into pieces",
            "2 cups basmati rice",
            "2 onions, thinly sliced",
            "2 tomatoes, chopped",
            "1/2 cup yogurt",
            "2 tbsp ginger garlic paste",
            "2-3 green chilies, slit",
            "1/4 cup mint leaves",
            "1/4 cup coriander leaves",
            "4 tbsp ghee",
            "Spices (as per taste)"
          ],
          steps: [
            "Marinate chicken pieces with yogurt, ginger garlic paste, green chilies, mint leaves, coriander leaves, and spices.",
            "Soak basmati rice in water for 30 mins.",
            "In a pot, heat ghee and sauté sliced onions until golden brown.",
            "Add marinated chicken and cook until it's half done.",
            "Layer soaked rice over the chicken and add water.",
            "Cook on low heat until the rice and chicken are fully cooked.",
            "Serve hot with raita."
          ],

        
        nutrition_info: {
            per_serving: {
              "calories": 400,
              "total_carbohydrate": "50g",
              "total_fat": "15g",
              "trans_fat": "0.2g",
              "dietary_fibre": "3g",
              "total_sugar": "2g",
              "cholesterol": "60mg",
              "protein": "30g"
            }
        },
        prep_time: "45 mins", // Sufficient time for preparation tasks
        cooking_time: "45 mins", // Cooking time
        total_time: "1 hr 30 mins" ,
        jpg: "https://as1.ftcdn.net/v2/jpg/06/08/84/24/1000_F_608842413_hdYadp6uSC7c7pq6LJew9s8gPnRSgjln.jpg"
    },
    {
        id: "3",
        name: "Chettinad Chicken Curry",
        description: "A fiery South Indian delicacy hailing from the Chettinad region, renowned for its bold flavors of roasted spices and coconut. Originating from the Chettiar community, this dish has been perfected over generations.",
        ingredients: [
            "500g chicken, cut into pieces",
            "2 onions, sliced",
            "2 tomatoes, chopped",
            "1/2 cup grated coconut",
            "2 tbsp ginger garlic paste",
            "Spices (as per taste)",
            "Curry leaves"
          ],
          steps: [
            "Clean and cut chicken into pieces.",
            "In a pan, heat oil and sauté sliced onions until golden brown.",
            "Add ginger garlic paste and cook until the raw smell disappears.",
            "Add tomatoes and cook until they turn soft.",
            "Grind coconut and spices into a fine paste.",
            "Add the ground paste to the pan and cook until the oil separates.",
            "Add water to adjust the consistency of the gravy.",
            "Add chicken pieces and simmer until the chicken is cooked through.",
            "Garnish with curry leaves and serve hot with rice or roti."
          ],
          prep_time: "45 mins", // Sufficient time for preparation tasks
          cooking_time: "45 mins", // Cooking time
          total_time: "1 hr 30 mins" ,
        nutrition_info: {
            per_serving: {
              "calories": 300,
              "total_carbohydrate": "10g",
              "total_fat": "18g",
              "trans_fat": "0.3g",
              "dietary_fibre": "4g",
              "total_sugar": "3g",
              "cholesterol": "70mg",
              "protein": "20g"
            }
        },
        jpg: "https://as1.ftcdn.net/v2/jpg/07/12/27/68/1000_F_712276809_IamGkG2IxlUEdsuYH0cOuZR3l9W1Vouu.jpg",
    },
    {
        id: "4",
        name: "Chettinad Fish Fry",
        description: "An authentic South Indian delight, Chettinad Fish Fry is a zesty dish marinated with Chettinad spices, boasting a rich culinary legacy. This recipe reflects the vibrant flavors of the Chettiar community and is a beloved seafood delicacy in the region.",
        ingredients: [
            "500g fish fillets",
            "2 tbsp ginger garlic paste",
            "1 tbsp chili powder",
            "1/2 tsp turmeric powder",
            "1 tbsp coriander powder",
            "1 tsp cumin powder",
            "Curry leaves",
            "Salt (as per taste)",
            "Oil (for frying)"
          ],
          steps: [
            "Clean and wash fish fillets.",
            "In a bowl, mix ginger garlic paste, chili powder, turmeric powder, coriander powder, cumin powder, curry leaves, and salt to make a marinade.",
            "Coat fish fillets with the marinade and let them marinate for at least 30 mins.",
            "Heat oil in a pan and shallow fry the fish fillets until golden brown and crispy on both sides.",
            "Serve hot with lemon wedges and onion slices."
          ],
          prep_time: "10 mins", // Preparation time for marinating fish
          cooking_time: "15 mins", // Cooking time for frying
          total_time: "25 mins", // Total time (prep time + cooking time)
        
        nutrition_info: {
            per_serving: {
              "calories": 250,
              "total_carbohydrate": "5g",
              "total_fat": "12g",
              "trans_fat": "0.1g",
              "dietary_fibre": "1g",
              "total_sugar": "0g",
              "cholesterol": "50mg",
              "protein": "30g"
            }
        },

        jpg: "https://as2.ftcdn.net/v2/jpg/05/92/96/83/1000_F_592968373_aqqk5f7VHr7RUGa6ZC6KhAiBFPbl0MKQ.jpg"
    },
    {
        id: "5",
        name: "Thalappakatti Biriyani",
        description: "An aromatic and flavorful biryani hailing from Dindigul, Tamil Nadu. This signature dish features fragrant basmati rice, tender mutton, and a harmonious blend of spices. With roots tracing back to the 19th century, it continues to captivate palates with its rich history and distinctive flavors.",
        ingredients: [
            "500g mutton",
            "2 cups basmati rice",
            "2 onions, thinly sliced",
            "2 tomatoes, chopped",
            "1/2 cup yogurt",
            "2 tbsp ginger garlic paste",
            "2-3 green chilies, slit",
            "1/4 cup mint leaves",
            "1/4 cup coriander leaves",
            "4 tbsp ghee",
            "Spices (as per taste)"
          ],
          steps: [
            "Marinate mutton pieces with yogurt, ginger garlic paste, green chilies, mint leaves, coriander leaves, and spices.",
            "Soak basmati rice in water for 30 mins.",
            "In a pot, heat ghee and sauté sliced onions until golden brown.",
            "Add marinated mutton and cook until it's half done.",
            "Layer soaked rice over the mutton and add water.",
            "Cook on low heat until the rice and mutton are fully cooked.",
            "Serve hot with raita."
          ],
          prep_time: "45 mins", // Preparation time for marinating mutton and soaking rice
          cooking_time: "1 hr", // Cooking time for preparing the biryani
          total_time: "1 hr 45 mins", // Total time (prep time + cooking time)
        nutrition_info: {
            per_serving: {
              "calories": 380,
              "total_carbohydrate": "40g",
              "total_fat": "16g",
              "trans_fat": "0.3g",
              "dietary_fibre": "5g",
              "total_sugar": "2g",
              "cholesterol": "60mg",
              "protein": "22g"
            }
        },
        jpg: "https://th-i.thgim.com/public/incoming/p6o0u1/article66976013.ece/alternates/LANDSCAPE_1200/9864_13_6_2023_12_43_4_3_PONRAMBIRYANI_08.JPG"

    },
    {
        id: "6",
        name: "Fish Curry",
        description: "A delectable fish curry prepared in a coconut-based gravy with aromatic spices, offering a delightful culinary experience. With origins in coastal regions, this dish has been savored for generations, evolving into a beloved staple in South Indian cuisine.",
        ingredients: [
            "500g fish fillets",
            "1 cup coconut milk",
            "2 tomatoes, chopped",
            "2 onions, sliced",
            "2 tbsp ginger garlic paste",
            "Spices (as per taste)",
            "Curry leaves"
          ],
          steps: [
            "Clean and marinate fish pieces with ginger garlic paste and salt.",
            "In a pan, heat oil and sauté sliced onions until golden brown.",
            "Add tomatoes and cook until they turn soft.",
            "Stir in ginger garlic paste and spices.",
            "Add coconut milk and water to make the curry.",
            "Simmer for 10-15 mins.",
            "Add fish pieces and curry leaves. Cook until the fish is cooked through.",
            "Serve hot with rice."
          ],
          prep_time: "20 mins", // Preparation time for marinating fish and cutting vegetables
          cooking_time: "25 mins", // Cooking time for preparing the curry
          total_time: "45 mins", // Total time (prep time + cooking time)
        nutrition_info: {
            per_serving: {
              "calories": 250,
              "total_carbohydrate": "5g",
              "total_fat": "12g",
              "trans_fat": "0.1g",
              "dietary_fibre": "1g",
              "total_sugar": "0g",
              "cholesterol": "50mg",
              "protein": "30g"
            }
        },
        jpg: "https://img.freepik.com/free-photo/top-view-delicious-fish-meal_23-2148734691.jpg?t=st=1711724436~exp=1711728036~hmac=89e4084442ca6e4b4c11f78c741032660a404386a601cdb4c843b2cf4b5b85f9&w=996"

    },
    {
        id: "7",
        name: "Kanyakumari Chicken Fry",
        description: "A zesty chicken fry with roots in Kanyakumari, a coastal town in South India. This dish boasts a crispy exterior and a burst of flavors from the blend of spices. A cherished appetizer, it reflects the region's rich culinary heritage.",
        ingredients: [
            "500g chicken, cut into pieces",
            "2 tbsp ginger garlic paste",
            "1 tbsp chili powder",
            "1/2 tsp turmeric powder",
            "1 tbsp coriander powder",
            "1/4 cup rice flour",
            "Curry leaves",
            "Salt (as per taste)",
            "Oil (for frying)"
          ],
          steps: [
            "Clean and cut chicken into medium-sized pieces.",
            "In a bowl, mix ginger garlic paste, chili powder, turmeric powder, coriander powder, rice flour, curry leaves, and salt to make a marinade.",
            "Coat chicken pieces with the marinade and let them marinate for at least 1 hr.",
            "Heat oil in a pan and deep fry the chicken pieces until they are golden brown and crispy.",
            "Serve hot with onion slices and lemon wedges."
          ],
          prep_time: "25 mins", // Preparation time for marinating chicken
          cooking_time: "20 mins", // Cooking time for frying
          total_time: "45 mins", // Total time (prep time + cooking time)
          nutrition_info: {
            per_serving: {
              "calories": 320,
              "total_carbohydrate": "15g",
              "total_fat": "20g",
              "trans_fat": "0.4g",
              "dietary_fibre": "2g",
              "total_sugar": "1g",
              "cholesterol": "80mg",
              "protein": "30g"
            }
        },
        jpg: "https://img.freepik.com/premium-photo/tandoori-chicken-indian-food-photography_753066-9643.jpg?w=1380"

    },
    {
        id: "8",
        name: "Tandoori Chicken",
        description: "A classic Indian dish originating from the Punjab region, Tandoori Chicken is renowned for its tender meat marinated in yogurt and spices, then cooked to perfection in a traditional tandoor (clay oven). With centuries-old roots, it remains a beloved staple of Indian cuisine.",
        ingredients: [
            "500g chicken pieces",
            "1 cup yogurt",
            "2 tbsp ginger garlic paste",
            "2 tbsp lemon juice",
            "Spices (as per taste)",
            "2 tbsp kasuri methi (dried fenugreek leaves)",
            "2 tbsp oil"
          ],
          steps: [
            "Make deep gashes on the chicken pieces.",
            "Marinate the chicken with yogurt, ginger garlic paste, lemon juice, spices, and kasuri methi for at least 4 hrs or overnight.",
            "Preheat the oven to its highest temperature.",
            "Thread the chicken onto skewers and place them on a baking tray.",
            "Bake for 20-25 mins or until the chicken is cooked through and charred on the edges.",
            "Serve hot with mint chutney and onion slices."
          ],
          prep_time: "20 mins", // Preparation time for marinating chicken
          cooking_time: "25 mins", // Cooking time for baking
          total_time: "45 mins", // Total time (prep time + cooking time)
        nutrition_info: {
            per_serving: {
              "calories": 280,
              "total_carbohydrate": "8g",
              "total_fat": "15g",
              "trans_fat": "0.2g",
              "dietary_fibre": "1g",
              "total_sugar": "3g",
              "cholesterol": "90mg",
              "protein": "25g"
            }
        },
        jpg: "https://as2.ftcdn.net/v2/jpg/06/12/03/85/1000_F_612038524_JSdZDp3QCWCntBgWTFuli5XtV0JIxZza.jpg"

    },
    {
        id: "9",
        name: "Hyderabadi Chicken Biryani",
        description: "A quintessential dish originating from the royal kitchens of Hyderabad, renowned for its fragrant rice layered with succulent chicken, caramelized onions, and aromatic spices. With roots tracing back to the Nizam era, it continues to captivate palates with its rich history and exquisite flavors.",
        ingredients: [
            "500g chicken, cut into pieces",
            "2 cups basmati rice",
            "2 onions, thinly sliced",
            "1/2 cup yogurt",
            "2 tbsp ginger garlic paste",
            "2-3 green chilies, slit",
            "1/4 cup mint leaves",
            "1/4 cup coriander leaves",
            "Spices (as per taste)",
            "4 tbsp ghee"
          ],
          steps: [
            "Marinate chicken pieces with yogurt, ginger garlic paste, green chilies, mint leaves, coriander leaves, and spices.",
            "Soak basmati rice in water for 30 mins.",
            "In a pot, heat ghee and sauté sliced onions until golden brown.",
            "Layer marinated chicken over the onions and top it with half-cooked rice.",
            "Sprinkle fried onions, mint leaves, and coriander leaves on top.",
            "Cover and cook on low heat until the rice and chicken are fully cooked.",
            "Serve hot with raita and salad."
          ],
          prep_time: "20 mins", // Preparation time for marinating chicken and cutting vegetables
          cooking_time: "40 mins", // Cooking time for preparing the biryani
          total_time: "1 hr",
          nutrition_info: {
            per_serving: {
              "calories": 400,
              "total_carbohydrate": "45g",
              "total_fat": "18g",
              "trans_fat": "0.5g",
              "dietary_fibre": "4g",
              "total_sugar": "3g",
              "cholesterol": "70mg",
              "protein": "25g"
            }
        },
        jpg: "https://as1.ftcdn.net/v2/jpg/07/07/39/18/1000_F_707391816_ofcGHvzjShu3UKPuVfSkvY8u7jXvsJzD.jpg"


    },
    {
        id: "10",
        name: "Chicken Tikka Masala",
        description: "A beloved dish originating from the Indian subcontinent, Chicken Tikka Masala features succulent chicken pieces marinated in spices and simmered in a creamy tomato-based gravy. With contested origins, it's been adapted globally, becoming a staple of Indian cuisine worldwide.",
        ingredients: [
            "500g chicken breast, diced",
            "1 cup yogurt",
            "1 cup tomato puree",
            "1/2 cup cream",
            "4 tbsp butter",
            "2 onions, finely chopped",
            "2 tbsp ginger garlic paste",
            "Spices (as per taste)"
          ],
          steps: [
            "Marinate chicken pieces with yogurt, ginger garlic paste, and spices for at least 2 hrs.",
            "Grill or roast marinated chicken until it's cooked through.",
            "In a pan, heat butter and sauté onions until golden brown.",
            "Add tomato puree and cook until the sauce thickens.",
            "Stir in cream and cooked chicken pieces.",
            "Simmer for a few mins.",
            "Garnish with fresh cream and serve hot with naan or rice."
          ],
          prep_time: "25 mins", // Preparation time for marinating chicken and cutting vegetables
          cooking_time: "30 mins", // Cooking time for preparing the dish
          total_time: "55 mins" ,
        nutrition_info: {
            per_serving: {
              "calories": 320,
              "total_carbohydrate": "12g",
              "total_fat": "18g",
              "trans_fat": "0.4g",
              "dietary_fibre": "2g",
              "total_sugar": "4g",
              "cholesterol": "70mg",
              "protein": "22g"
            }
        },
        jpg: "https://as2.ftcdn.net/v2/jpg/03/16/63/49/1000_F_316634941_hPLB2Lryquq1DzAa8oYY7BcnxPS0MoLu.jpg"

    },

    // Vegetarian recipes
    {
        id: "11",
        name: "Sambar",
        description: "A staple of South Indian cuisine, Sambar is a hearty lentil stew made with toor dal and an assortment of vegetables, simmered in aromatic spices. With origins dating back centuries, it remains a beloved comfort food, enjoyed with rice or idli across the region.",
        ingredients: [
            "1 cup toor dal",
            "Mixed vegetables (carrot, beans, pumpkin, etc.)",
            "Small lemon-sized tamarind",
            "2 tbsp sambar powder",
            "1/2 tsp turmeric powder",
            "Salt (as per taste)"
          ],
          steps: [
            "Cook 1 cup toor dal in a pressure cooker until soft and mushy.",
            "Soak small lemon-sized tamarind in warm water and extract its juice.",
            "Boil mixed vegetables with 1/2 tsp turmeric powder and salt until they are cooked.",
            "Add the tamarind extract, 2 tbsp sambar powder, and cooked dal to the vegetables and mix well.",
            "Simmer the sambar for a few mins until it thickens and flavors meld together.",
            "Serve hot with rice or idli."
          ],
          prep_time: "15 mins", // Preparation time for soaking tamarind and cutting vegetables
          cooking_time: "25 mins", // Cooking time for preparing the sambar
          total_time: "40 mins",
          nutrition_info: {
            per_serving: {
              "calories": 150,
              "total_carbohydrate": "20g",
              "total_fat": "5g",
              "trans_fat": "0.2g",
              "dietary_fibre": "3g",
              "total_sugar": "4g",
              "cholesterol": "0mg",
              "protein": "7g"
            }
        },
        jpg: "https://as2.ftcdn.net/v2/jpg/04/84/16/15/1000_F_484161575_DqXirPHQBwcG9ry9OKHTpxrydj0f5cLY.jpg"

    },
    {
        id: "12",
        name: "Rasam",
        description: "An iconic South Indian soup, Rasam boasts a tangy flavor derived from tomatoes, tamarind, and a blend of spices, tempered with aromatic seasonings. With roots in ancient Ayurvedic traditions, it's cherished for its soothing properties and is often served as a comfort food.",
        ingredients: [
            "2 tomatoes",
            "Small lemon-sized tamarind",
            "1/4 cup toor dal",
            "2 tbsp rasam powder",
            "1/2 tsp turmeric powder",
            "Salt (as per taste)"
          ],
          steps: [
            "Cook 1/4 cup toor dal in a pressure cooker until soft and mushy.",
            "Soak small lemon-sized tamarind in warm water and extract its juice.",
            "Boil 2 tomatoes with 1/2 tsp turmeric powder and salt until they are soft.",
            "Add the tamarind extract, cooked dal, 2 tbsp rasam powder, and salt to the tomatoes and mix well.",
            "Simmer the rasam for a few mins until it reaches a soupy consistency.",
            "Temper with mustard seeds, cumin seeds, curry leaves, and dried red chilies.",
            "Serve hot as a soup or with rice."
          ],
          prep_time: "10 mins", // Preparation time for soaking tamarind and cutting vegetables
          cooking_time: "20 mins", // Cooking time for preparing the rasam
          total_time: "30 mins",
          nutrition_info: {
            per_serving: {
              "calories": 70,
              "total_carbohydrate": "10g",
              "total_fat": "2g",
              "trans_fat": "0g",
              "dietary_fibre": "1g",
              "total_sugar": "2g",
              "cholesterol": "0mg",
              "protein": "4g"
            }
        },
        
        jpg: "https://as1.ftcdn.net/v2/jpg/05/84/34/12/1000_F_584341235_VBEH6O8yrIKXd9STuFbzdXvrn59TO5dW.jpg"

    },
    {
        id: "13",
        name: "Upma",
        description: "A traditional South Indian breakfast favorite, Upma is a comforting dish crafted from roasted semolina, seasoned with spices, and enriched with vegetables. Originating from ancient Indian culinary traditions, it remains cherished for its simplicity and nourishing qualities.",
        ingredients: [
            "1 cup semolina",
            "1/2 tsp mustard seeds",
            "1/2 tsp urad dal",
            "1/2 tsp chana dal",
            "Curry leaves",
            "2 green chilies, chopped",
            "1-inch piece ginger, chopped",
            "1 large onion, chopped",
            "Mixed vegetables (carrot, peas, beans, etc.)",
            "Salt (as per taste)"
          ],
          steps: [
            "Dry roast 1 cup semolina in a pan until it turns aromatic and light golden brown. Set aside.",
            "Heat oil in a pan and add 1/2 tsp mustard seeds, 1/2 tsp urad dal, 1/2 tsp chana dal, and curry leaves. Saute until the dal turns golden brown.",
            "Add 2 chopped green chilies, 1-inch piece chopped ginger, and 1 large chopped onion. Saute until the onions turn translucent.",
            "Add mixed vegetables and cook until they are soft.",
            "Add roasted semolina, salt, and water. Stir well to avoid lumps.",
            "Cover and cook on low heat until the upma is cooked through and the water is absorbed.",
            "Serve hot with chutney or sambar."
          ],
          prep_time: "15 mins", // Preparation time for chopping vegetables and roasting semolina
          cooking_time: "20 mins", // Cooking time for preparing the upma
          total_time: "35 mins",
          nutrition_info: {
            per_serving: {
              "calories": 200,
              "total_carbohydrate": "20g",
              "total_fat": "9g",
              "trans_fat": "0.1g",
              "dietary_fibre": "2g",
              "total_sugar": "3g",
              "cholesterol": "0mg",
              "protein": "6g"
            }
        },
        jpg: "https://as1.ftcdn.net/v2/jpg/04/09/19/10/1000_F_409191045_hKZVAPBdUXGuuKhbmi2DbbEktKIY33yb.jpg"

    },
    {
        id: "14",
        name: "Pongal",
        description: "Originating from Tamil Nadu, Pongal is a traditional South Indian dish crafted from rice and split moong dal, seasoned with aromatic spices and adorned with crunchy cashew nuts. Celebrated during the harvest festival, it symbolizes abundance and prosperity.",
        ingredients: [
            "1 cup rice",
            "1/2 cup split moong dal",
            "1 tsp black pepper",
            "1 tsp cumin seeds",
            "1-inch piece ginger, chopped",
            "Few curry leaves",
            "2 tbsp ghee",
            "Handful of cashew nuts",
            "Salt to taste"
          ],
          steps: [
            "Dry roast rice and split moong dal separately until they turn light golden brown and aromatic.",
            "Combine roasted rice and dal in a pressure cooker along with water, salt, crushed black pepper, cumin seeds, chopped ginger, and curry leaves.",
            "Pressure cook until the pongal is soft and mushy.",
            "In a separate pan, heat ghee and fry cashew nuts until golden brown.",
            "Add the fried cashew nuts to the cooked pongal and mix well.",
            "Serve hot with sambar or coconut chutney."
          ],
          prep_time: "10 mins", // Preparation time for chopping ginger and roasting rice and dal
          cooking_time: "20 mins", // Cooking time for preparing the pongal
          total_time: "30 mins",
          nutrition_info: {
            per_serving: {
              "calories": 280,
              "total_carbohydrate": "30g",
              "total_fat": "10g",
              "trans_fat": "0.2g",
              "dietary_fibre": "4g",
              "total_sugar": "2g",
              "cholesterol": "0mg",
              "protein": "8g"
            }
        },
        jpg: "https://as2.ftcdn.net/v2/jpg/04/79/98/13/1000_F_479981384_MDjRU26mjIOlO8qh1d6XjJxl8j2HN9sJ.jpg"

    },
    {
        id: "15",
        name: "Aloo Gobi",
        description: "Aloo Gobi, a beloved North Indian dish, brings together potatoes (aloo) and cauliflower (gobi) in a tantalizing curry bursting with flavors. With origins tracing back to Punjab, it's a staple in Indian households, cherished for its simplicity and comforting taste.",
        "ingredients": [
            "2 potatoes, diced",
            "1 cauliflower, cut into florets",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "2 tbsp ginger garlic paste",
            "Spices (as per taste)",
            "Coriander leaves (for garnish)"
          ],
          "steps": [
            "In a pan, heat oil and sauté chopped onions until golden brown.",
            "Add ginger garlic paste and cook until the raw smell disappears.",
            "Add chopped tomatoes and cook until they turn soft.",
            "Stir in spices and cook for a minute.",
            "Add diced potatoes and cauliflower florets. Mix well.",
            "Cover and cook until the vegetables are tender.",
            "Garnish with coriander leaves and serve hot with roti or rice."
          ],
          prep_time: "15 mins", // Preparation time for cutting vegetables
          cooking_time: "25 mins", // Cooking time for preparing the curry
          total_time: "40 mins",
        nutrition_info: {
            per_serving: {
              "calories": 200,
              "total_carbohydrate": "25g",
              "total_fat": "8g",
              "trans_fat": "0.1g",
              "dietary_fibre": "5g",
              "total_sugar": "3g",
              "cholesterol": "0mg",
              "protein": "5g"
            }
        },
        jpg: "https://as1.ftcdn.net/v2/jpg/06/03/62/72/1000_F_603627249_sxZbWfemUAOg35yeup4gGHEAa2xNggkt.jpg"

    },
    {
        id: "16",
        name: "Palak Paneer",
        description: "Palak Paneer, a quintessential North Indian delicacy, blends spinach (palak) with Indian cottage cheese (paneer) in a creamy, aromatic curry. Originating from Punjab, this dish is cherished for its nutritional value and delightful taste, dating back centuries.",
        ingredients: [
            "250g paneer, cubed",
            "4 cups spinach, chopped",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "1/2 cup cream",
            "2 tbsp butter",
            "1 tbsp ginger garlic paste",
            "Spices (as per taste)"
          ],
          steps: [
            "Blanch spinach leaves in boiling water for 2-3 mins. Drain and blend into a smooth puree.",
            "In a pan, heat butter and sauté chopped onions until golden brown.",
            "Add ginger garlic paste and cook until the raw smell disappears.",
            "Add chopped tomatoes and cook until they turn soft.",
            "Stir in spinach puree and spices. Cook for a few mins.",
            "Add cream and paneer cubes. Simmer for 5-7 mins.",
            "Serve hot with naan or rice."
          ],
          prep_time: "15 mins", // Preparation time for cutting vegetables and paneer
          cooking_time: "20 mins", // Cooking time for preparing the curry
          total_time: "35 mins",
        nutrition_info: {
            per_serving: {
              "calories": 280,
              "total_carbohydrate": "10g",
              "total_fat": "15g",
              "trans_fat": "0.4g",
              "dietary_fibre": "3g",
              "total_sugar": "4g",
              "cholesterol": "40mg",
              "protein": "20g"
            }
        },
        jpg: "https://as2.ftcdn.net/v2/jpg/06/13/65/75/1000_F_613657567_NiNPLoP5GB9cZfoom8lWUgZnN01UtXA0.jpg",

    },
    {
        id: "17",
        name: "Vegetable Biryani",
        description: "Vegetable Biryani is a fragrant and flavorful rice dish originating from the Indian subcontinent. Prepared with mixed vegetables, basmati rice, and aromatic spices, it's a one-pot meal loved for its rich taste and nutritional value. The dish has a history dating back centuries, evolving with regional variations.",
        ingredients: [
            "2 cups basmati rice",
            "Assorted vegetables (carrots, beans, peas, potatoes), diced",
            "2 onions, thinly sliced",
            "2 tomatoes, chopped",
            "1/2 cup yogurt",
            "2 tbsp ginger garlic paste",
            "2-3 green chilies, slit",
            "1/4 cup mint leaves",
            "1/4 cup coriander leaves",
            "4 tbsp ghee",
            "Spices (as per taste)"
          ],
          steps: [
            "Soak basmati rice in water for 30 mins.",
            "In a pot, heat ghee and sauté sliced onions until golden brown.",
            "Add assorted vegetables and cook until they are partially cooked.",
            "Add ginger garlic paste, green chilies, mint leaves, coriander leaves, and spices.",
            "Stir in chopped tomatoes and cook until they turn soft.",
            "Layer soaked rice over the vegetables and add water.",
            "Cook on low heat until the rice and vegetables are fully cooked.",
            "Serve hot with raita."
          ],
          prep_time: "20 mins", // Preparation time for cutting vegetables
          cooking_time: "30 mins", // Cooking time for preparing the biryani
          total_time: "50 mins",
        nutrition_info: {
            per_serving: {
              "calories": 300,
              "total_carbohydrate": "40g",
              "total_fat": "10g",
              "trans_fat": "0.2g",
              "dietary_fibre": "4g",
              "total_sugar": "2g",
              "cholesterol": "0mg",
              "protein": "5g"
            }
        },
        jpg: "https://as1.ftcdn.net/v2/jpg/06/79/32/20/1000_F_679322055_V9VMUiqizXOoMfnPpu8PbZAczItHd1NA.jpg"

    },
    {
        id: "18",
        name: "Dal Makhani",
        description: "Dal Makhani, a creamy and aromatic lentil curry, originates from the Punjab region of India. It has a rich history, traditionally cooked slowly over charcoal, blending black lentils and kidney beans in a tomato and cream gravy. This dish embodies centuries-old culinary traditions.",
        ingredients: [
      "1 cup whole black lentils",
      "1/4 cup kidney beans",
      "2 onions, finely chopped",
      "2 tomatoes, chopped",
      "1/2 cup cream",
      "2 tbsp butter",
      "1 tbsp ginger garlic paste",
      "Spices (as per taste)",
      "Coriander leaves (for garnish)"
      ],
      steps: [
        "Soak black lentils and kidney beans in water for 6-8 hrs or overnight.",
        "Pressure cook soaked lentils and beans until they are soft and cooked through.",
        "In a pan, heat butter and sauté chopped onions until golden brown.",
        "Add ginger garlic paste and cook until the raw smell disappears.",
        "Add chopped tomatoes and cook until they turn soft.",
        "Add cooked lentils and beans along with spices.",
        "Simmer for 20-30 mins.",
        "Stir in cream and cook for another 5 mins.",
        "Garnish with coriander leaves and serve hot with naan or rice."
      ],
      prep_time: "8 hrs (soaking time) + 15 mins (other prep)", // Preparation time including soaking lentils and chopping vegetables
      cooking_time: "50 mins", // Cooking time for preparing the dal makhani
      total_time: "9 hrs 5 mins" ,
        nutrition_info: {
            per_serving: {
              "calories": 300,
              "total_carbohydrate": "20g",
              "total_fat": "12g",
              "trans_fat": "0.3g",
              "dietary_fibre": "5g",
              "total_sugar": "2g",
              "cholesterol": "20mg",
              "protein": "15g"
            }
        },
        jpg: "https://as2.ftcdn.net/v2/jpg/04/36/02/25/1000_F_436022574_jlJvrnHliwqNFm6XL9DjZu8qXT5B04aa.jpg",

    },
    {
        id: "19",
        name: "Vegetable Korma",
        description: "Originating from the Mughlai cuisine of India, Vegetable Korma is a rich and creamy curry with mixed vegetables cooked in a coconut-based sauce. Its history dates back to the royal kitchens of the Mughal era, where it was prepared with aromatic spices and nuts to please the royalty.",
        ingredients: [
            "Assorted vegetables (carrots, beans, potatoes, cauliflower), diced",
            "2 onions, finely chopped",
            "2 tomatoes, chopped",
            "1/2 cup cashew nuts",
            "1/2 cup grated coconut",
            "1/4 cup fresh cream",
            "2 tbsp butter",
            "1 tbsp ginger garlic paste",
            "Spices (as per taste)",
            "Coriander leaves (for garnish)"
          ],
          steps: [
            "Boil vegetables until they are partially cooked.",
            "In a pan, heat butter and sauté chopped onions until golden brown.",
            "Add ginger garlic paste and cook until the raw smell disappears.",
            "Add chopped tomatoes and cook until they turn soft.",
            "Grind cashew nuts and grated coconut into a fine paste.",
            "Add the ground paste to the pan along with spices. Cook until the oil separates.",
            "Stir in fresh cream and boiled vegetables. Simmer for 5-7 mins.",
            "Garnish with coriander leaves and serve hot with naan or rice."
          ],
          prep_time: "20 mins", // Preparation time including cutting vegetables and other prep
          cooking_time: "25 mins", // Cooking time for preparing the vegetable korma
          total_time: "45 mins",

          nutrition_info: {
            per_serving: {
              "calories": 320,
              "total_carbohydrate": "30g",
              "total_fat": "15g",
              "trans_fat": "0.3g",
              "dietary_fibre": "6g",
              "total_sugar": "5g",
              "cholesterol": "0mg",
              "protein": "10g"
            }
        },
        jpg: "https://as1.ftcdn.net/v2/jpg/01/74/32/00/1000_F_174320019_4OHlAxXdQljObdJWaKdpBC7uoqp4XdLR.jpg"

    },
    {
        id: "20",
        name: "Vada",
        description: "Originating from South India, Vada is a popular crispy fritter made from ground black gram dal, seasoned with green chilies and curry leaves. It has been enjoyed for centuries as a savory snack or accompaniment to meals, symbolizing traditional South Indian cuisine.",
        ingredients: ["black gram dal", "green chilies", "ginger", "curry leaves", "salt"],
        steps: [
            "Soak black gram dal in water for at least 4 hrs.",
            "Grind the soaked dal along with green chilies, ginger, and curry leaves into a coarse paste.",
            "Add salt to the paste and mix well.",
            "Shape the paste into small rounds and make a hole in the center to form vadas.",
            "Deep fry the vadas in hot oil until they turn golden brown and crispy.",
            "Serve hot with chutney or sambar."
        ],
        prep_time: "4 hrs (Soaking Time)", // Soaking time for black gram dal
        cooking_time: "20 mins", // Cooking time for frying the vadas
        total_time: "4 hrs 20 mins" ,
       nutrition_info: {
            per_serving: {
                "calories": 350,
                "total_carbohydrate": "15g",
                "total_fat": "20g",
                "trans_fat": "0.5g",
                "dietary_fibre": "2g",
                "total_sugar": "5g",
                "cholesterol": "80mg",
                "protein": "25g"
            }
        },
        jpg: "https://as2.ftcdn.net/v2/jpg/04/93/56/75/1000_F_493567592_wijZ9m7d1RtxuyoYF7ACHMaDmUvgi4ty.jpg"
 
    }
]




module.exports=recipeData