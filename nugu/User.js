const IngredientList = require('./Ingredient');


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

    async findReceipeCode() {

        let ingredientList = [];
        if(ingredientList.length != 0) {
            ingredientList = await IngredientList.setIngredients();
        }

        console.log(ingredientList);
        
    }

 }