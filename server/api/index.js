const router = require('express').Router();

router.use('/congressmembers', require('./CongressMember'))

module.exports = router