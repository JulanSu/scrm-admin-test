<template>
  <div class="navbar">
    <div class="left-menu">
      <div v-if="isHome" class="home-logo">
        <img src="@/assets/indexLogo.png" class="left-index-logo">
        <span>豆神网校</span>
      </div>
      <img v-else src="@/assets/logo.png" class="left-menu-logo">
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img v-if="avatar" :src="avatar" class="user-avatar">
          <img v-else src="@/assets/user_avater.png" class="user-avatar" alt="">
          <span>{{ name }}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hamburger from '@/components/Hamburger/index.vue'
import { toLogin } from '@/utils/auth'

export default {
  props: {
    isHome:{
      type: Boolean,
      default: false
    }
  },
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    logout() {
      this.$confirm('确认退出登录吗?', '提示', {
        confirmButtonText: '退出登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.success('账号退出成功!');
        toLogin();
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出登录'
        });          
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,0.08);

  .left-menu {
    height: 50px;
    margin-left: 20px;
    line-height: 50px;
    .home-logo {
        height: 100%;
        display: flex;
        align-items: center;
      .left-index-logo{
        width: 40px; 
      }
      span{
        font-size: 14px;
        font-weight: 400;
      }
    }
    
    .left-menu-logo {
      margin-top: 10px;
      width: 120px;
      height: 30px;
    }
  }
  
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    position: absolute;
    top: 0;
    right: 20px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .user-avatar {
      margin-right: 5px;
      cursor: pointer;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      border-radius: 20px;
    }

    .avatar-container {
      margin-left: 10px;
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
