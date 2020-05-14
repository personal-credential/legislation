<template>
    <div>
        <h2 style="text-align: centern">Conditions & Rendaring</h2>
        <p v-if="show">You can see me</p>
        <p>Do you can see me?</p>
        <button @click="show = !show">Click</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        }
    },
}
</script>

<style scoped>

</style>