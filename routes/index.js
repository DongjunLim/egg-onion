const express = require('express');
const router = express.Router();
const {nuguService} = require('../nugu/nuguService');


router.post('/answer.input_ingredient', async (req,res) => {
    
    const {action,context} = req.body;
    const {parameters} = action;
    const {session} = context;
    const result = await nuguService.getReceipes(parameters,session);
    const receipe = {"first_output_menu" : "김치 볶음밥","second_output_menu" : "김치찌개", "third_output_menu" : "김치전"};
    const response = req.body;
    response.output  = receipe;
    res.json(response);


})


router.post('/ask.another.menu', async (req,res) => {
    
   
    //const result = await nuguService(payload);
    const receipe = {"receipeName" : "김치 볶음밥"};
    const response = req.body;
    response.output  = receipe;
    console.log(response);
    res.json(response);
})



module.exports = router;
