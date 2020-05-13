<template>
    <div class="intro">
        <h3>{{ showTitle() }}</h3>
        <span>For more details <a v-bind:href="link" target="_blank">Click here</a></span>
        <hr>
        <p v-html="sanitizer"></p>
        <hr>
        <button v-on:click="increase">Click for count number</button>
        <h4>{{ counter }}</h4>
        <button v-on:click="increaseAnother(2, $event)">Click for count number</button>
        <h4>{{ counter }}</h4>
        <button v-on:click="decrease">Click for count number</button>
        <h4>{{ counter }}</h4>
        <hr>
        <p v-on:mousemove="updateCoordinates">Coordinates : {{ x }} / {{ y }} -- <span @mousemove="death">Do not hover here man </span> </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Dr. Mamun Chowdhury',
            link: 'https://www.google.com/',
            sanitizer : '<h5>Hello! there who are you? and where you came from? <span> there is nothing man</span></h5>',
            counter: 0,
            x:0,
            y:0
        }
    },
    methods: {
        showTitle: function () {
            return this.title;
        },
        increase: function () {
            this.counter++;
        },
        increaseAnother: function (step, event) {
            this.counter +=step;
        },
        decrease: function () {
            this.counter--;
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        death: function (event){
            event.stopPropagation();
            
        }

    },
}
</script>

<style scoped>

</style>