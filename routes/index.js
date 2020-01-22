const express = require('express');
const router = express.Router();
const {nuguService} = require('../nugu/nuguService');

router.get('/test', async (req,res) => {
    const payload = req.body;
    const result = await nuguService(payload);
    //if(result == null) res.status(500).end();
    res.json(result);
})


module.exports = router;