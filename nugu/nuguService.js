const User = require('./User');
let userList = [];


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
    	const receipes = user.getReceipes();
	
	const output = {};
	const parameterItems = ["first_output_menu","second_output_menu","third_output_menu"];
	
	for(let i = 0; i < receipes.length; i++) {
	   output[parameterItems[i]] = receipes[i];
	}
	userList.push(user);;
	return output;
	
    },
    
    getMoreReceipes : async(parameters,session) => {
    
	const {id} = session;
	const filteredUser = userList.filter(user => {
		if(user.getId == id) {
		   return user;
		}	
	})
	console.log(filteredUser);
    }

}

