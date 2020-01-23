const express = require('express');
const router = express.Router();
const {nuguService} = require('../nugu/nuguService');
const nugu = require('nugu-kit');

router.post('/getReceipe.threeIngredient', async (req,res) => {
    
    nugu.app(req,res);
    //const result = await nuguService(payload);
    const receipe = {"receipeName" : "김치 볶음밥"};
    nugu.setOutput(receipe);
    nugu.response();
})


module.exports = router;
