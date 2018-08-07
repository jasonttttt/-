<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/tangxin.less");
#page-setUp {
    background-color: @color-border-base;
    // .flow(column);
    color: @client-color;
    .setUp-content {
        height: 100%;
        .flow;
        //主题内容
        .change-avatar {
            //更改头像
            font-weight: bold;
            height: @hei*2;
            background-color: @color-light;
            .flow(row);
            .justify(space-between);
            .align(center);
            margin-bottom: @hei/3;
            .avatar-left {
                padding-left: @profile-padding;
                .flow(row);
                .align(center);
                line-height: @profile-padding;
                img {
                    //用户头像
                    margin-right: @size-font-small;
                    .dispaly(block);
                    width: 0.35rem;
                    height: 0.35rem;
                }
            }
            .avatar-right {
                padding-right: @profile-padding;
            }
        }
        .user-setting {
            //用户设置  三个选项
            // height: @hei*3.5;
            background-color: @color-light;
            .flow(column);
            .align(cenflex-start);
            .justify(space-between);
            // margin-bottom: @middle-Interval-distance;
            .user-setting-commom {
                //三个选项 公共的样式
                height: @hei*1.5;
                .flow(row);
                .justify(space-between);
                .align(center);
                .border(bottom);
                .common-left {
                    padding-left: @profile-padding;
                    .flow(row);
                    line-height: @profile-padding;
                }
                .common-right {
                    padding-right: @profile-padding;
                }
            }
        }
        .exit-logon-wrap {
            .flex;
            .content-center;
            //退出登陆
            p{
                width: 100%;
                height: @hei*1.5;
                background-color: @color-light;
                .text-center;
                line-height: @hei*1.5;
                font-weight: bolder;
            }
        }
    }
}
</style>

<template>
    <!-- 设置 -->
    <div id="page-setUp">
        <div class="setUp-content">
            <nuxt-link to="/user/setting/avatar" class="change-avatar">
                <div class="avatar-left">
                    <img src="~/assets/img/header.svg" >
                    更换头像
                </div>
                <div class="avatar-right">></div>
            </nuxt-link>
            <div class="user-setting">
                <nuxt-link to="/user/security/reset" class="password-management user-setting-commom">
                    <div class="common-left">
                        密码管理
                    </div>
                    <div class="common-right">></div>
                </nuxt-link>
                <nuxt-link to="/user/setting/feedback" class="user-feedback user-setting-commom">
                    <div class="common-left">
                        用户反馈
                    </div>
                    <div class="common-right">></div>
                </nuxt-link>
                <nuxt-link to="/user/setting/feedback?type=versions" class="version-information user-setting-commom">
                    <div class="common-left">
                        版本信息
                    </div>
                    <div class="common-right">></div>
                </nuxt-link>
            </div>
            <div class="exit-logon-wrap">
                <p>退出登陆</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
};
</script>

