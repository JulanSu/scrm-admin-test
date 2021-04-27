<template>
  <section class="app-main">
    <breadcrumb v-if="$route.path != '/dataStatistics'" class="breadcrumb-container" />
    <transition name="fade-transform" mode="out-in">
      <router-view class="main-view" :key="key" />
    </transition>
  </section>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb/index.vue'
export default {
  components: {
    Breadcrumb
  },
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  position: relative;
  padding: 20px;
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
.main-view{
  padding: 20px;
  background: #fff;
  box-shadow:0px 0px 6px 0px rgba(87,123,202,0.1);
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
