<template>
	<div class="home-container page-container">我是axios页面</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
	name: 'Axios',
    setup() {
        const store = useStore()
        console.log(store.state.user.name)
    }
})
</script>

<style scoped>
.home-container {
}
</style>
