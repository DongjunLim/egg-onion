const express = require('express');

const router = express.Router();
const {nuguService} = require('../nugu/nuguService');
const nugu = require('nugu-kit');

router.post('/answer.third.ingredient', async (req,res) => {
    
   
    //const result = await nuguService(payload);
    const receipe = {"receipeName" : "김치 볶음밥"};
    const response = req.body;
    response.output  = receipe;
    console.log(response);
    res.json(response);
})


module.exports = router;
