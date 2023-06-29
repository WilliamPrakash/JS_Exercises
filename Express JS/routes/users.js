const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('users')
})

router.get('/new', (req,res) => {
    res.send('users/new')
})

router.post('/', (req, res) => {
    res.send('Create user')
})

// start parameters with a colon to indicate a dynamic parameter
router.route('/:id')
.get((req, res) => {
    res.send(req.user)
    //res.send('Get User get by Id: ' + req.params.id)
})
.put((req, res) => {
    res.send('Update User get by Id: ' + req.params.id)
})
.post((req, res) => {
    res.send('Create new User get by Id: ' + req.params.id)
})
.delete((req, res) => {
    res.send('Delete User get by Id: ' + req.params.id)
})

const users = [{name: 'Will'}, {name: 'Kelly'}]
// executes before heading into the above HTTP methods
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router
