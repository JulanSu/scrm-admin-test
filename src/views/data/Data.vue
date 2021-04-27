<template>
    <div class="login-fail">
        <div class="login-fail-main">
            <div>
              asfdaasdada
            </div>
            <div class="login-fail-btn" @click="handleBack">返回</div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleBack() {
            this.$router.go(-2)
        }
    }
}
</script>

<style lang="scss" scoped>
.login-fail {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #afafaf;
    .login-fail-main {
        position: relative;
        margin: 200px auto;
        width: 400px;
        height: 400px;
        border: 1px solid #ccc;
        background: #fff;
        color: #afafaf;
        text-align: center;
        padding: 30px;
        .login-fail-icon {
            width: 150px;
            height: 150px;
        }
        .login-fail-btn {
            position: absolute;
            left: 20%;
            bottom: 50px;
            width: 60%;
            padding: 10px 0;
            background: #ecf5ff;
            color: #333;
            border-radius: 20px;
            border: 1px solid #b3d8ff;
            cursor: pointer;
        }
    }
}
</style>