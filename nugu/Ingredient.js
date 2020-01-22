/**
 * @author Sang Yun Park
 * @date 2020-01-22
 */
module.exports = class Ingredient {
    
    constructor() {
        this.ingredientName = null;
        this.receipeCode = null;
        
    }

    get getIngredientName() {
        return this.ingredientName;
    }
    get getReceipeCode() {
        return this.receipeCode;
    }

    set setIngredientName(ingredientName) {
        this.ingredientName = ingredientName;
    }
    set setReceipeCode(receipeCode) {
        this.receipeCode = receipeCode;
    }


}