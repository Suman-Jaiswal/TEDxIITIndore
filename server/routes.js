const route = require('express').Router()

route.get('/', (req, res) => {
    res.status(200).send({
        dummy: "dummy text"
    })
})

module.exports = route