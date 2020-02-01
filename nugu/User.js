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
        

        //대표 재료 기준으로 필터링
        this.ingredients.forEach(ingredientName => {
        
            
            let frequency = 1;


            //입력받은 재료와, 등록된 재료를 비교해서 대표재료의 빈도수를 구하고 Map 자료형에 저장한다.
            ingredientList.forEach(ingredient => {
                   
                    
                    const mainIngredient = ingredient["I-title"]
                    const receipeCode = ingredient["R-code"];
                    const receipeCounts = Number(ingredient["I-count"]);
                    
                    // 입력받은 재료와 등록된 재료와 같은 경우
                    if(mainIngredient === ingredientName) {
                        

                        // 이미 Map에 등록된 경우 빈도수 증가
                        if(filteredByEntity.has(receipeCode)) {
                            let beforeFrequency = filteredByEntity.get(receipeCode).frequency;
                            filteredByEntity.set(receipeCode,{ "receipeCounts" : receipeCounts, "frequency" : ++beforeFrequency});
                        }
                        // 처음 찾은 레시피 이면 빈도수 1로 설정
                        else {
                            filteredByEntity.set(receipeCode,{ "receipeCounts" : receipeCounts, "frequency" : frequency});
                        }
                             
                    }
                    
                    
            })       
        })



        // 빈도수 기준으로 정렬
        const sortedByFrequency = new Map([...filteredByEntity.entries()].sort((a, b) => b[1].frequency - a[1].frequency));
        let filteredByFrequency = [];
        
                

        for(let [key,value] of sortedByFrequency) {
            if(filteredByFrequency.length < this.MAX_RECEIPE_COUNT) {
                filteredByFrequency.push({"receipeCode" : key, "info" : value});
            }			

        }
	

        // 재료수 기준으로 정렬
        filteredByFrequency.sort((a,b) => (a.info.receipeCounts > b.info.receipeCounts) ? 1 : ((a.info.receipeCounts < b.info.receipeCounts) ? -1 : 0)); 

       
        let filteredByCounts = [];
        for(const receipeCode of filteredByFrequency) {
	   
            if(filteredByCounts.length < this.MAX_RECEIPE_COUNT) {
                filteredByCounts.push(receipeCode);
            }			

        }

        return filteredByCounts;
    }

    

    async findReceipe() {

        
        const filteredIngredientInfo  =  await this.filterIngredientCode();
	const receipeList = await db.getReceipes();
        const filteredReceipe = new Map();
		


        filteredIngredientInfo.forEach(info => {
         
	     receipeList.forEach(receipe => {
                const receipeCode = receipe["레시피 코드"];
                const receipeName = receipe["레시피 이름"];
  		
                if(info.receipeCode === receipeCode) {
                  
		    filteredReceipe.set(receipeCode, receipeName);
                }
            })
        })
	

        
	    this.receipes = filteredReceipe;
      	
	    
    }

    getReceipes() {

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
