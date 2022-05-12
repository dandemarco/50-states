<!--LAB: create a new component called StatesVisited.vue.  This component, when mounted, will use the state service to request 
all the states that are visited. Display the names of these states on the page. The page should have a heading explaining the page content 
(e.g. "States you have visited") and a list of the states that have been visited. You may style and present this data however you wish.-->

<template>
    <div>
        <h2>States you have visited</h2>
        <div id="visited-list">
            
        </div>
    </div>

</template>

<script>
export default {
    name: 'StatesVisited',
}
</script>