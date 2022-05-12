<template>
    <div>
        <div id="navigation-links">

            <span class="nav-link">
                <router-link to="/">Home</router-link>
            </span>

            <span class="nav-link">
                <router-link to="/about">About this site</router-link>
            </span>

            <!--LAB: Add a router-link to the PageFooter.vue component so a user can visit the new page. -->
            <span class="nav-link">
                <router-link to="/visited">States visited</router-link>
            </span>
        
        </div>

        <p>Header image by <a href="https://unsplash.com/photos/gtCWBwbZNpM">John-Mark Smith on Unsplash.</a></p>

        <p><a target="_blank" href="https://icons8.com/icon/2652/map-editing">Map Editing</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
    </div>
</template>

<script>
export default {
    name: 'PageFooter'
}

</script>

<style scoped>

.nav-link {
    margin: 1rem;
}

</style>
