const User = require('./User');



/**
 * @author Sang Yun Park
 * @date 2020-01-22
 */


module.exports.nuguService = {

    getReceipes : async (parameters,session) => {
    
        const {nameofingredient} = parameters;
        const {id,isNew} = session;
        const user = new User();
        user.setId = id;
        user.setUserIngredients = nameofingredient.value.split('|');
        await user.findReceipe();
    
    },
    
    getMoreReceipes : async(parameters,session) => {
    
    }

}

