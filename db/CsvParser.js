const parser = require('csvtojson');
const logMessage = require('../error/LogFormat').format;


/**
 * @author Sang Yun Park
 * @date 2020-01-22
 */

 module.exports = class CsvParser {
    
    constructor() {
        
        
    }
  
    async parseCsv(fileName) {

        
        const directory = __dirname + "/data/"+ fileName + ".csv";
        
        if(typeof(fileName)  !== 'string') {
            console.log(logMessage.typeError);
            return;
        }   
        
        const results = await parser().fromFile(directory);
       
        return results;
      
    }


    

}