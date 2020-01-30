const express = require('express');
const router = express.Router();
const {nuguService} = require('../nugu/nuguService');
const nugu = require('nugu-kit');

router.post('/answer.input_ingredient', async (req,res) => {
    
    nugu.app(req,res);
    const {action,context} = req.body;
    const {parameters} = action;
    const {session} = context;
    const result = await nuguService.getReceipes(parameters,session);
    const output = {"first_output_menu" : "김치 볶음밥","second_output_menu" : "김치찌개", "third_output_menu" : "김치전"};
    nugu.setOutput(output);
    nugu.response();


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
