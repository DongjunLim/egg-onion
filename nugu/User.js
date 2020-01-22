const Ingredient = require('./Ingredient');
const Receipe = require('./Receipe');
const db = require('../db/db');


/**
 * @author Sang Yun Park
 * @date 2020-01-22
 */

 module.exports = class User {
    
    constructor() {
        this.id = null;
        this.ingredients = [];
        this.MAX_INGREDIENT_COUNT = 6; 
    }

    set setId(id) {
        this.id = id;
    }
   
    get getId() {
        return this.id;
    }
    
    async setIngredients() {
        const ingredients = await db.getIngredients();
        return ingredients;
    }

    findReceipeCode() {

    }

 }