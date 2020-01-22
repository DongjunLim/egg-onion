const User = require('./User');



module.exports.nuguService =  async (payload) => {
    
    //const {action,event,context} = payload;
    //const {id,isNew} = context.session;
    const user = new User();
    const ingredients = user.setIngredients();
    return ingredients;
    
    
    
}