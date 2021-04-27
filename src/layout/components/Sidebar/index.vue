<template>
  <div :class="{'has-logo':showLogo}">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.fe_path" :item="route" :base-path="route.fe_path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'userInfo'
    ]),
    routes() {
      this.getNewMenu(this.userInfo.menu);
      return this.userInfo.menu
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      // return this.$store.state.settings.sidebarLogo
      return true
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    getNewMenu(item) {
      for(var i = 0; i < item.length; i++) {
        if (item[i].children) {
          this.getNewMenu(item[i].children);
        }
        item[i].path = item[i].fe_path;
      }
    }
  }
}
</script>
