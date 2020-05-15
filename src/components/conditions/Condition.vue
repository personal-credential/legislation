<template>
    <div class="conditioin">
        <h2 style="text-align: centern">Conditions & Rendaring</h2>
        <p v-if="show">You can see me</p>
        <p v-else> Do you can see me?</p>
        <button @click="show = !show">Click</button>
        <hr>
        <!-- <template v-if="HideMe">
           <h1>Hello Title</h1>
           <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, recusandae, quae eaque perferendis laborum officia inventore veritatis exercitationem provident molestias culpa? Odit recusandae, labore doloribus amet asperiores fuga dicta sunt.
           </p>
        </template> -->
        <button @click="hideMe = !hideMe">Switch</button>
        <p v-show="hideMe">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolor odio tempora provident, sequi quod quasi quam sapiente. Dolorem eos suscipit ipsa, saepe impedit quidem aliquid debitis deserunt at quos?
        </p>
        <hr>
        <button @click="ingredients.push('Clementines')">Add Ingredient</button>
        <ul>
            <li v-for="(ingredient, index) in ingredients" :key="ingredient">{{index}}.{{ ingredient}} </li>
        </ul>
        <div v-for="(ingredient, index) in ingredients" :key="ingredient">
            <span>{{ ingredient }}</span>
            <span>{{ index }}</span>
        </div>
        <hr>
        <ul>
            <li v-for="person in persons" :key="person">{{ person.name }}</li>
        </ul>
        <ul>
            <li v-for="person in persons" :key="person">
                <!-- <span v-for="value in person" :key="value">{{ value }} </span> -->
                <div v-for="(value,key,index) in person" :key="value">{{ index }}.{{ key }}:- {{ value }}</div>
            </li>
        </ul>
        <hr>
        <span v-for="num in 20" :key="num">{{ num }} </span>

        <h1>Finished Condition and Rendering</h1>

    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            hideMe: true,
            ingredients: ['Apples','Apricots','Aubergines','Avocados','Bananas','Butternut squash'],
            persons: [
                {name:'Dr. Mamun',age:'27',Ocupasion: 'Software Engineer'},
                {name:'Dr. Meem',age:'25',Ocupasion: 'Software Engineer'}
            ],
        }
    },
}
</script>

<style scoped>

</style>