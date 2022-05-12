import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then(response => {
            return response.data
        })
    },

    setVisited(stateName, visited) {
        //api/state/Wisconsin
        let requestData = { visited: visited }
        return axios.patch('/api/states/' + stateName, requestData).then ( response => {
            return response.data
        })
    },

    getOneState(stateName) {
        return axios.get('/api/state/' + stateName).then( response => {
            return response.data
        })
    },

    //LAB: add a function to the StateService.js file that will make a request to your new API route.

    getVisited(stateName) {
        return axios.get('/api/visited/' + stateName).then( response => {
            return response.data
        })
    }
}