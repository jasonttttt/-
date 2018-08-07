<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/tangxin.less");
#page-retrieve {
    height: 100%;
    .flow;
    background-color: @color-border-base;
    .page-retrieve {
        height: @hei*6;
        background-color: @color-light;
        .flow(column);
        .align(cenflex-start);
        .justify(space-between);
        .password-common {
			//reset 三个input布局
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
	//确定框
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
	<div id="page-retrieve">
		<div class="page-retrieve">
			<!-- 手机号码 -->
			<input type="text" placeholder="请输入手机号码" class="password-common" v-model="mobile">
			<!-- 验证码 -->
			<div class="password-common">
				<input type="text" v-model="vfcode.value" placeholder="请填写输入的验证码" />
				<a class="btn text size-s primary" href="javascript:void(0);" @click="getVfcode">
					{{vfcode.countdownText||vfcode.placeholder}}
				</a>
			</div>

			<!-- 请输入新密码 -->
			<div v-if="newPswVisible" class="password-common">
				<input type="text" placeholder="请输入新密码 (密码为6-18字母和数字的组合)" v-model="newPasswordComfirm">
				<img src="~/assets/img/eyesOpen.svg" @click="newPswVisible=!newPswVisible" />
			</div>
			<div v-else class="password-common">
				<input type="password" placeholder="请输入新密码 (密码为6-18字母和数字的组合)" v-model="newPasswordComfirm">
				<img src="~/assets/img/eyesClose.svg" @click="newPswVisible=!newPswVisible" />
			</div>
		</div>
		<div class="btn-wrapper">
			<a class="btn block" href="javascript:void(0);" @click="confirm" ref="confirmBtn">确定</a>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            mobile: "",
            newPasswordComfirm: "",
            newPswVisible: false,
            vfcode: {
                countdowning: false,
                value: "",
                placeholder: "获取验证码",
                countdownText: "",
                countdownTextTemplate: "*s 后获取",
                timer: -1,
                counter: 0,
                interval: 5
            }
        };
    },
    computed: {
        loginable() {
            return this.mobile.trim() && this.newPasswordComfirm.trim();
        }
    },
    methods: {
        getVfcode() {
            //获取验证码
            if (this.vfcode.countdowning) return;

            let mobile = this.mobile.trim(),
                error = "";

            if (!mobile) {
                error = "请输入手机号";
            } else if (!this.$util.mobileValidate(mobile)) {
                error = "手机号错误";
            }

            this.vfcode.countdowning = true;
            this.countdown();
        },
        commonValidate(items = []) {
            // 公共验证
            let vm = this;
            let error = "";
            let success = "";
            let temp = null;
            let validater = {
                mobile: {
                    validate(val) {
                        if (!val) {
                            return { result: false, error: "请输入手机号" };
                        } else if (!vm.$util.mobileValidate(val)) {
                            return { result: false, error: "手机号码错误" };
                        } else {
                            return { result: true };
                        }
                    }
                },
                vfcode: {
                    error: "请输入验证码"
                },
                newPasswordComfirm: {
                    validate(val){
                        if(!val){
                            return { result: false, error: "请输入新密码" };
                        }else if(!vm.$util.passwordValidate(val)){
                             return { result: false, error: "密码为8到16位字母和数字的组合"};
                        }else {
                            vm.$refs.confirmBtn.style.backgroundColor = "blue";
                            return {
                                result: true,
                                error:"登陆密码修改成功",
                            };
                            //这里操作dom 更改btn颜色  然后传递数据 跳转页面
                            // vm.refs.confirmBtn.backgroundColor = "blue"
                        }
                    }
                }
                
            };

            items.some(item => {
                // console.log(this.item)
                //如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
                temp = validater[item.name];
                //三个验证器只要满足一个就直接跳出循环 if（error）那里
                if (!temp) {
                    console.error(
                        `${item.name} 无法验证, 请确认是否存在相应的 validater`
                    );
                } else {
                    if (typeof temp.validate === "function") {
                        error = temp.validate(item.value).error;
                    } else {
                        error = item.value.trim() ? "" : temp.error;
                    }
                }
                return error;
            });

            if (error) {
                this.$store.commit("showDialog", { text: error });
            }
            //整个commonValidate函数返回的值 (有问题就有error字符串就是真) 返回值取反 就是假  没问题就是真  
            return !error
        },
        confirm() {
            let mobile = this.mobile.trim(),
                vfcode = this.vfcode.value.trim(),
                password = this.newPasswordComfirm.trim();
            if (
                !this.commonValidate([
                    //有问题就commonValidate假 取反为真  执行空return 没有返回啥数据   没问题就跳过 执行todo
                    { name: "mobile", value: mobile },
                    { name: "vfcode", value: vfcode },
                    { name: "newPasswordComfirm", value: password }
                ])
            ) {
                return;
            }else{
                 console.log('todo');
                 //没有显示 不能操作
            }
            // TODO  没问题的操作在这里 
            // this.refs.confirmBtn.backgroundColor = "blue"
            // return {error:"登陆密码修改成功"};
        },
        countdown() {
            //倒计时
            let vfcode = this.vfcode;
            if (vfcode.counter === vfcode.interval) {
                vfcode.counter = 0;
                vfcode.countdownText = "";
                vfcode.countdowning = false;
                return;
            }
            vfcode.countdownText = vfcode.countdownTextTemplate.replace(
                "*",
                vfcode.interval - vfcode.counter++
            );
            clearTimeout(vfcode.timer);
            vfcode.timer = setTimeout(this.countdown, 1000);
        }
    }
};
</script>

