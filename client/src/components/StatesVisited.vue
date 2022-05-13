<!--LAB: create a new component called StatesVisited.vue.  This component, when mounted, will use the state service to request 
all the states that are visited. Display the names of these states on the page. The page should have a heading explaining the page content 
(e.g. "States you have visited") and a list of the states that have been visited. You may style and present this data however you wish.-->

<template>
    <div>
        <h2>States you have visited</h2>
        <div v-if="state.visited">
            <div v-for="state in states" v-bind:key="state.name">{{state.name}}</div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'StatesVisited',
    data () {
        return {
            visitedStates: [],
            visited: this.state.visited     //ok to modify data
        }
    },
    mounted() {
        this.fetchVisitedStates()
    },
    methods: {
        fetchVisitedStates() {
            this.$stateService.getVisited().then( visitedStates => {
                this.visitedStates = visitedStates    
            })
            .catch(err => {
                alert('Sorry, can\'t fetch state list')
                console.error(err)
            })
        },
    },
    computed: {
        mapCenter() {
            return [this.state.lat, this.state.lon]
        }
    }
}
</script>