<template>
    <div>
        <h2>Page Not Found</h2>
        <div id="go-home-link">
            Would you like to <router-link v-bind:to="{name: 'StateList'}">go to the homepage?</router-link>
        </div>
    </div>

</template>

<script>
export default {
    name: 'NotFound',
}
</script>
