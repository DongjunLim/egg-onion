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


        let ingredientList = [];
        let sortedByEntity = new Map();

        if(ingredientList.length == 0) {
            ingredientList = await db.getIngredients;
        }

        this.ingredients.forEach(ingredientName => {
            ingredientList.forEach(ingredient => {
                if(ingredient["I-title"] === ingredientName) {
                    
                    const receipeCode = ingredient["I-Index"];
                    const receipeCounts = ingredient["I-count"];
                    sortedByEntity.set(receipeCode,receipeCounts);
                
                }
            })       
        })


        for(let [key,value] of sortedByEntity) {
            console.log(key.name, value);
        }
    }

 }