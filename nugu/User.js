const db = require('../db/db');



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
        this.MAX_RECEIPE_COUNT = 6; 

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

     
    async filterIngredientCode() {

        const ingredientList = await db.getIngredients();
        let filteredByEntity = new Map();

        //filtered by ingredient entity
        this.ingredients.forEach(ingredientName => {
            ingredientList.forEach(ingredient => {;
		 if(ingredient["I-title"] === ingredientName) {
                       
                    const receipeCode = ingredient["R-code"];
                    const receipeCounts = ingredient["I-count"];
                    filteredByEntity.set(receipeCode,receipeCounts);
                
                }
            })       
        })

        //filtered by ingredient counts
        let filteredByCounts = []
	filteredByEntity[Symbol.iterator] = function* () {
	   yield* [...this.entries()].sort((a,b) => a[1] - b[1]);
	};
        for(let [key,value] of filteredByEntity) {
	   
            if(filteredByCounts.length < this.MAX_RECEIPE_COUNT) {
                filteredByCounts.push(key);
            }			

        }
	console.log(filteredByCounts);
        return filteredByCounts;
    }

    


    async findReceipe() {

        
        const filteredIngredientCode  =  await this.filterIngredientCode();
        const receipeList = await db.getReceipes();
        const filteredReceipe = new Map();
	
        filteredIngredientCode.forEach(code => {
            receipeList.forEach(receipe => {
                const receipeCode = receipe["레시피 코드"];
                const receipeName = receipe["레시피 이름"];
  		
                if(code === receipeCode) {
                    console.log(code,receipeCode,receipeName);
		    filteredReceipe.set(receipeCode, receipeName);
                }
            })
        })
	

        
	this.receipes = filteredReceipe;
      	
	    
    }

    getReceipes() {

	let temp = [] ;
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
