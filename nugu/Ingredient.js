const db = require('../db/db');


/**
 * @author Sang Yun Park
 * @date 2020-01-22
 */
module.exports = class Ingredient {
    
    constructor() {
        this.ingredients = null;
    }

    static async setIngredients() {
        this.ingredients = await db.getIngredients;
    }

    static async getIngredients() {
        return this.ingredients;
    }
  


}