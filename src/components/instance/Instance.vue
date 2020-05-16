<template>
    <div class="vue-instance">
        <h3>Understading Vue Instance</h3>
        <hr>
        <h4>{{ title }}</h4>
        <button @click="show">Click me</button>
        <p v-if="showPara">This not always visible. Only visible when button clicked.</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Vue Instance',
            showPara: false,
        }
    },
    methods: {
        show: function () {
            this.showPara = true;
            this.updataTitle('Vue Instance [ updated ]');
        },
        updataTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowerCaseTitle: function () {
            this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title Changed, new value:' + value);
        },
    },
}
</script>

<style scoped>
    
</style>