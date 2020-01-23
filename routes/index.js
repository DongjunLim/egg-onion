const express = require('express');
const router = express.Router();
const {nuguService} = require('../nugu/nuguService');

router.post('/getReceipe.threeIngredient', async (req,res) => {
    const payload = req.body;
    const result = await nuguService(payload);
     console.log(payload.action.parameters);
    //if(result == null) res.status(500).end();
    const receipe = {"receipeName" : "김치 볶음밥"};
    console.log(receipe);
    res.json(receipe);
})


module.exports = router;
