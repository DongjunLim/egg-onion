const db = require('../db/db');
const Ingredient = require('./Ingredient');
const Receipe = require('./Receipe');
const ingredient = new Ingredient();
const receipe = new Receipe();


/**
 * @author Sang Yun Park
 * @date 2020-01-22
 */

 module.exports = class User {
    
    constructor() {

        this.id = null;
        this.ingredients = [];
        this.receipes = null;
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

         
    async getReceipes(isFirst) {
	if(isFirst){
        	const filteredIngredientInfo = await ingredient.filterIngredientCode(this.ingredients);
        	this.receipes = await receipe.findReceipe(filteredIngredientInfo);
	}
        let temp = [] ;
        
        if(this.receipes.length === 0) return null;
        
        for(let [key,value] of this.receipes) {
                if(temp.length < 3) {
                    temp.push(value);
                    this.removeReceipe(key);
                }
        }
        return temp;
    }
                


    removeReceipe(key) {
    	this.receipes.delete(key);
    }


 }
