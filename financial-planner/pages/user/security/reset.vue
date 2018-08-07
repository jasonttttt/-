<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/tangxin.less");
#page-password-management {
    height: 100%;
    .flow;
    background-color: @color-border-base;
    .password-management {
        height: @hei*6;
        background-color: @color-light;
        .flow(column);
        .align(cenflex-start);
        .justify(space-between);
        .password-common {
            height: @hei*2;
            .border(bottom);
            .flow(row);
            .justify(space-between);
            .align(center);
            padding-left: @size-font-base;
            padding-right: @size-font-base;
            input{
                width: 80%;
                height: 100%;
            }
            img{
                .dispaly(block);
                width: 0.28rem;
                height: 0.28rem;
            }
        }
    }
    .btn-wrapper {
		flex:1;
		.content-center;
        padding: 0 5%;
        .btn {
            background-color: @color-text-secondary;
            color: @color-light;
        }
    }
}
</style>

<template>
    <div id="page-password-management">
        <!-- 密码管理 -->
        <div class="password-management">
            <!-- 原始密码 -->
            <input type="text" placeholder="请输入原始密码" class="password-common" v-model="password">
            <!-- 输入新密码 -->
            <div v-if="pswVisible" class="password-common">
                <input type="text" placeholder="请输入新密码 (密码为8-16字母和数字的组合)"  v-model="newPassword">
                <img src="~/assets/img/eyesOpen.svg" @click="pswVisible=!pswVisible"/>
            </div>
            <div v-else class="password-common">
                <input type="password" placeholder="请输入新密码 (密码为8-16字母和数字的组合)"  v-model="newPassword">
                <img src="~/assets/img/eyesClose.svg" @click="pswVisible=!pswVisible"/>
            </div>
            <!-- 再次输入新密码 -->
            <div v-if="newPswVisible" class="password-common">
                <input type="text" placeholder="请确认输入新密码" v-model="newPasswordComfirm">
                <img src="~/assets/img/eyesOpen.svg" @click="newPswVisible=!newPswVisible"/>
            </div>
            <div v-else class="password-common">
                <input type="password" placeholder="请确认输入新密码"  v-model="newPasswordComfirm">
                <img src="~/assets/img/eyesClose.svg" @click="newPswVisible=!newPswVisible"/>
            </div>
        </div>
        <div class="btn-wrapper">
            <a class="btn block" @click="changePassword" ref="confirmBtn">确定</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            password: "",
            newPassword: "",
            newPasswordComfirm: "",
            pswVisible:false,
            newPswVisible:false,
        }
    },
    computed: {
        loginable() {
            return (
                this.newPassword.trim() &&
                this.password.trim() &&
                this.newPasswordComfirm.trim()
            );
        }
    },
    methods: {
        changePassword() {
            let password = this.password.trim(),
                newPassword = this.newPassword.trim(),
                newPasswordComfirm = this.newPasswordComfirm.trim(),
                error = "",
                success = "";
            if (!password) {
                error = "请输入原始密码";
                //原始密码的判断  当焦点不在上面时 判断一次
            }else if (
                !/^\w{8,16}$/.test(
                    password
                )
            ) {
                error = "密码为8到16位字母和数字的组合";
            }else if (!newPassword) {
                error = "请输入新密码";
            }else if (password == newPassword) {
                error = "新密码不能和原密码相同";
            }else if (
                !/^\w{8,16}$/.test(
                    newPassword
                )
            ) {
                error = "密码为8到16位字母和数字的组合";
            }else if (!newPasswordComfirm) {
                error = "请再次输入新密码";
            }else if (
                !/^\w{8,16}$/.test(
                    newPasswordComfirm
                )
            ) {
                error = "密码为8到16位字母和数字的组合";
            }else if (newPassword != newPasswordComfirm) {
                this.$refs.confirmBtn.style.backgroundColor = "blue";
                error = "两次输入的密码不一致请重新输入！";
            } else {
                success = "修改成功！";
            }
            if (error) {
                this.$store.commit("showDialog", { text: error });
            }
            if (success) {
                this.$store.commit("showDialog", { text: success });
            }
        },
    }
};
</script>

