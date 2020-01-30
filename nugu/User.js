const db = require('../db/db');



/**
 * @author Sang Yun Park
 * @date 2020-01-22
 */

 module.exports = class User {
    
    constructor() {

        this.id = null;
        this.ingredients = [];
        this.MAX_INGREDIENT_COUNT = 3; 

    }

    set setId(id) {
        this.id = id;
    }
   
    get getId() {
        return this.id;
    }
    
    set setUserIngredients(ingredients) {
        if(this.validate(ingredients)) {
            this.ingredients = ingredients;
        }
    }

    validate(array) {
        if(array.length > this.MAX_INGREDIENT_COUNT) return false;
        return true;
    }

    async findReceipe() {


        let ingredientList = await db.getIngredients();
        let sortedByEntity = new Map();
	let sortedByCount = [];
        
	//filtered by ingredient entity
        this.ingredients.forEach(ingredientName => {
            ingredientList.forEach(ingredient => {
                if(ingredient["I-title"] === ingredientName) {
                    
                    const receipeCode = ingredient["I-index"];
                    const receipeCounts = ingredient["I-count"];
                    console.log(receipeCode);
		    sortedByEntity.set(receipeCode,receipeCounts);
                
                }
            })       
        })

	
	//filtered by ingredient count
        for(let [key,value] of sortedByEntity) {

	    if(sortedByCount.length < 6) {
		console.log(key);
		sortedByCount.push(key);
	    }			

        }


	console.log(sortedByCount);
    }

 }
