const User = require('./User');



/**
 * @author Sang Yun Park
 * @date 2020-01-22
 */
module.exports.nuguService =  async (payload) => {
    
    //const {action,event,context} = payload;
    //const {id,isNew} = context.session;
    const user = new User();
    const ingredients = user.setIngredients();
    return ingredients;
    
    
    
}