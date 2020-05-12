<template>
    <div class="intro">
        <h3>{{ showTitle() }}</h3>
        <span>For more details <a v-bind:href="link" target="_blank">Click here</a></span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Dr. Mamun Chowdhury',
            link: 'https://www.google.com/'
        }
    },
    methods: {
        showTitle: function () {
            return this.title;
        },
    },
}
</script>

<style scoped>

</style>