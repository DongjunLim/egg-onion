const parser = require('csv-parser');
const errorMessage = require('../error/errorLogFormat').format;
const fs = require('fs');


// 재료 csv 파일 경로
const Ingredient = __dirname + "/data/"+ "Receipe" + ".csv";
// 레시피 csv 파일 경로
const Receipe= __dirname + "/data/"+ "Receipe" + ".csv";
const CookingOrder = __dirname + "/data/"+ "Receipe" + ".csv";

//레시피 저장된 배열
let  receipes= [];

//재료 저장된 배열
let ingredients = [];

let orders = [];


fs.createReadStream(Ingredient)
                    .pipe(parser())
                    .on('data', (data) => {
                        ingredients.push(data);
                    })
                    .on('end', async () => {
                        console.log(ingredients)
                    })
                   
  