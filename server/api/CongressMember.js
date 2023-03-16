const router = require('express').Router()

const {
    models: {
        CongressMember
    }
} = require('../db')

router.get('/', (req, res, next) => {
    CongressMember.findAll()
    .then((congressmembers) => res.json(congressmembers))
    .catch(next)
})

module.exports = router