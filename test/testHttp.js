/********************************************************
    test
*********************************************************
ce code contiens les requetes http apartir du routage user
*********************************************************/
let express = require('express');
let router = express.Router();

/* User routes */
/*- GET */
router

.get('/', async(req, res)=>{
    res.send({info:'get ok', ok:true, results:{}})
})

/*- POST */
.post('/', async (req, res)=> {
    temp = req.body.dataValue
    session = req.body.session
    res.send({info:'post ok', ok:true, results:temp})
})

/*- PUT */
.put('/', async(req, res)=> {
    temp = req.body.dataValue
    session = req.body.session
    res.send({info:'put ok', ok:true, results:temp})
})

/*- DELETE */
.delete('/', async(req, res)=> {
    temp = req.body.dataValue
    session = req.body.session
    res.send({info:'delete ok', ok:true, results:temp})
})

module.exports = router;