module.exports = class CsvParser {
    
    constructor() {
        this.parser = require('csv-parser');
        this.errorMessage = require('../error/errorLogFormat').format;
        this.fs = require('fs');
        
    }

  
    parseCsv(fileName) {

        let results = [];
        const directory = __dirname + "/data/"+ fileName + ".csv";
        
        if(typeof(fileName)  !== 'string') {
            console.log(this.errorMessage.typeError);
            return;
        }   
        
        this.fs.createReadStream(directory)
            .pipe(this.parser())
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', () => {
                console.log(results);
            })
        
        return results;
    }


    

}
