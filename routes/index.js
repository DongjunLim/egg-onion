const express = require('express');
const router = express.Router();
const {nuguService} = require('../nugu/nuguService');
const nugu = require('nugu-kit');

router.post('/answer.input_ingredient', async (req,res) => {
    
    nugu.app(req,res);
    const {action,context} = req.body;
    const {parameters} = action;
    const {session} = context;
    const output  = await nuguService.getReceipes(parameters,session);;
    console.log(output);
    nugu.setOutput(output);
    nugu.response();


})

router.post('/ask.another.menu', async (req,res) => {
    
   
    nugu.app(req,res);
    const {action,context} = req.body;
    const {parameters} = action;
    const {session} = context
    const output = await nuguService.getRemain;
    
    
})



module.exports = router;
