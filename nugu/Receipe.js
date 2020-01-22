/**
 * @author Sang Yun Park
 * @date 2020-01-22
 */
module.exports = class Receipe {
   
    constructor() {
    
        this.receipeName = null;
        this.IngredientCount = null;
       
    }


    get getReceipeName() {
        return this.receipeName;
    }
    get getIngredientCount() {
        return this.IngredientCount;
    }
    set setReceipeName(name) {
        this.receipeName = name;
    }
    set setIngredientCount(count) {
        this.IngredientCount = count;
    }

    

}