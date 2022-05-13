let express = require('express')
let States = require('../models').States

let router = express.Router()

//fetch all of the states
router.get('/states', function(req, res, next) {
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch(err => next(err))
})

//LAB: create an api route that gets all the visited states
router.get('/visited', function(req, res, next) {
    States.findAll({ order: ['visited']}).then( visitedStates => {
        return res.json(visitedStates)
    })
    .catch(err => next(err))
})

//get all info about one state
router.get('/state/:name', function(req, res, name) {
    let stateName = req.params.name
    States.findOne( {where: { name: stateName}})
        .then( state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send('State not found')
            }
        })
        .catch(err => next(err) )
})

//patch route to update a state as visited or not
//request to states/Iowa
//states/qwerty

router.patch('/states/:name', function(req, res, next) {
    let stateName = req.params.name     //Iowa
    let stateVisited = req.body.visited     //true

    States.update( { visited: stateVisited }, { where: { name: stateName}})
        .then( rowsUpdated => {
            if (rowsUpdated) {
                //state in database and has been updated
                return res.send('ok')
            } else {        //for example, if name is "notastate"
                return res.status(404).send('State not found')
            }
        })
        .catch(err => next(err) )
})

module.exports = router