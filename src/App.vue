<template>
    <div>
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    setup() {
        console.log(import.meta.env)
    }
})
</script>

<style lang="scss">
@import './assets/scss/common';
</style>
