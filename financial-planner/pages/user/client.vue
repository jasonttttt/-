<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/tangxin.less");
#page-my-client {
    //client页面字体颜色
    color: @client-color;
    .my-client-wrap {
        background-color: @color-light;
        // .flow;
        .my-client {
            // .flow;
            .client {
                //名字字体大小
                i {
                    font-size: @size-font-large;
                }
                .border(bottom);
                 &:last-child{
                    border-bottom: none;
                }
                height: .7rem;
                .flow(row);
                .justify(space-between);
                .align(center);
                margin-left: .4rem;
                padding-right: .3rem;
                //超出内容以省略号显示
                span{
                    width: 20%;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>

<template>
    <div id="page-my-client">
        <div class="my-client-wrap">
            <ul class="my-client">
                <li v-for="item in list" :key="item.id" class="client">
                    <i>{{item.name}}</i>
                    <em>{{item.phone | hideMiddle}}</em>
                    <span>{{item.company}}</span>
                    <span>{{item.company}}</span>
                    <span>{{item.company}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$http.post("getClient").then(resp => {
            return this.list = resp.list;
        });
    },
    data() {
        return {
            list:[]
        };
    },
    filters: {
        hideMiddle(val) {
            return `${val.substr(0, 3) + "****" + val.substr(7)}`;
        }
    }
};
</script>

