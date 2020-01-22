const CsvParser = require('./CsvParser');
const parser = new CsvParser();

module.exports = db = {
    
    
    getIngredients : async () => {
        const ingredients = await parser.parseCsv("Ingredient");
        return ingredients;
    
    },
    getReceipes : async () => {
        const receipes = await  parser.parseCsv("Receipe");
        return receipes;
    }


}
