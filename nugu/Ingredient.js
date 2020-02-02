const db = require('../db/db');

module.exports = class Ingredient {

    constructor() {
        this.ingredientList = null;
        this.MAX_RECEIPE_COUNT = 6; 
        
    }
    async getIngredientList() {

        if(this.ingredientList === null) {
            this.ingredientList = await db.getIngredients();
        }
    }
    async filterIngredientCode(userIngredients){
        
        await this.getIngredientList();
        const filteredByEntityReceipe = this.filterByEntity(userIngredients);
        const filteredByFrequencyReceipe = this.filterByIngredientFrequency(filteredByEntityReceipe);
        const sortByIngredientCountReceipe = this.sortByIngredientCounts(filteredByFrequencyReceipe);
        return sortByIngredientCountReceipe;
        
    }
    
    filterByEntity(ingredients) {

                let filteredByEntity = new Map();
                //대표 재료 기준으로 필터링
                ingredients.forEach(ingredientName => {
                        
                            
                    let frequency = 1;


                    //입력받은 재료와, 등록된 재료를 비교해서 대표재료의 빈도수를 구하고 Map 자료형에 저장한다.
                    this.ingredientList.forEach(ingredient => {
                        
                            
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

            
            return filteredByEntity;

            
    }
    filterByIngredientFrequency(filteredByEntity) {

        const sortedByFrequency = new Map([...filteredByEntity.entries()].sort((a, b) => b[1].frequency - a[1].frequency));
        let filteredByFrequency = [];
        
        for(let [key,value] of sortedByFrequency) {
            if(filteredByFrequency.length < this.MAX_RECEIPE_COUNT) {
                filteredByFrequency.push({"receipeCode" : key, "info" : value});
            }			

        }

        return filteredByFrequency;
    }
    sortByIngredientCounts(filteredByFrequency) {

        filteredByFrequency.sort((a,b) => (a.info.receipeCounts > b.info.receipeCounts) ? 1 : ((a.info.receipeCounts < b.info.receipeCounts) ? -1 : 0)); 

        let filteredByCounts = [];
        for(const receipeCode of filteredByFrequency) {
	   
            if(filteredByCounts.length < this.MAX_RECEIPE_COUNT) {
                filteredByCounts.push(receipeCode);
            }			

        }

        return filteredByCounts;
    }
}