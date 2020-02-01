const db = require('../db/db');

module.exports = class Receipe {

    
    constructor() {
        this.receipeList = null;
        
    }

    async getReceipeList() {
        if(this.receipeList === null) {
            this.receipeList = await db.getReceipes();
        }
    }

    async findReceipe(filteredIngredientInfo) {

        await this.getReceipeList();
        const filteredReceipes = new Map();
	
        filteredIngredientInfo.forEach(info => {
         
	     this.receipeList.forEach(receipe => {
                
                const receipeCode = receipe["레시피 코드"];
                const receipeName = receipe["레시피 이름"];
  		
                if(info.receipeCode === receipeCode) {
		            filteredReceipes.set(receipeCode, receipeName);
                }
            })
        })
	

        
	    return filteredReceipes;
    }
}
