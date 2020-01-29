const CsvParser = require('./CsvParser');
const parser = new CsvParser();


/**
 * @author Sang Yun Park
 * @date 2020-01-22
 */
module.exports = db = {
    
    
    getIngredients : async () => {
        const ingredients = await parser.parseCsv("Ingredient_data");
        return ingredients;
    
    },
    getReceipes : async () => {
        const receipes = await  parser.parseCsv("Receipe");
        return receipes;
    }


}
