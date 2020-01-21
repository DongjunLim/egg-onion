module.exports = class CsvParser {
    
    constructor() {
        this.parser = require('csvtojson');
        this.errorMessage = require('../error/errorLogFormat').format;
        
    }
  
    async parseCsv(fileName) {

        
        const directory = __dirname + "/data/"+ fileName + ".csv";
        
        if(typeof(fileName)  !== 'string') {
            console.log(this.errorMessage.typeError);
            return;
        }   
        
        const results = await this.parser().fromFile(directory);
        console.log(results)
        return results;
      
    }


    

}