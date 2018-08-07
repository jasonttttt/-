<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/tangxin.less");
#page-my-collection {
    .my-collection {
        .search-wrap {
            // 搜索框
            height: @distance;
            background-color: @color-text-secondary;
            .flow(row);
            .justify(center);
            .align(center);
            .search {
                width: 90%;
                .radius(@radius-border-base);
                .text-center();
            }
        }
        .company-collection {
            // ul
            // width: 70%;
            .flow(column);
            color: @client-color;
            .concrete-collection {
                // v-for 循环的li
                height:  @distance*3;
                .border(bottom);
                 &:last-child{
                    border-bottom: none;
                }
                padding-left: @distance / 1.5;
                padding-right: @distance*4.3;
                p {
                   font-size: @size-font-large;
                    height: @distance;
                    line-height: @distance;
                }
                .company-details {
                    height:  @distance*2;
                    .flow(row);
                    .justify(space-between);
                    .align(center);
                    .details-common {
                        .flow(column);
                    }
                    span{
                        //收益率
                        .ratio{
                           font-size: @size-font-larger;
	                       color: @color-gold;
                        }
                        //最小字体
                        em{
                            font-size: @size-font-small;
                        }
                        //日期
                        .collection-data{
                            font-size: @size-font-larger;
                        }
                        .term{
                            font-size: @size-font-large;
                        }
                    }
                }
            }
        }
    }
}
</style>
<template>
	<div id="page-my-collection">
		<div class="my-collection">
			<div class="search-wrap">
				<input type="text" class="search" placeholder="搜索">
			</div>
            <ul class="company-collection">
                <li class="concrete-collection" v-for="item in list" :key=item.id>
                    <p>{{item.company}}</p>
                    <div class="company-details">
                        <span class="yield details-common">
                            <i class="ratio">{{item.yield}}</i>
                            <em>预期收益率</em>
                        </span>
                        <span class="raisingTime details-common">
                            <i class="collection-data">{{item.time}}</i>
                            <em>{{item.raisingTime}}</em>
                        </span>
                        <span class="term details-common">
                            <i class="term">{{item.term}}</i>
                            <em>期限(月)</em>
                        </span>
                    </div>
                </li>
            </ul>
		</div>
	</div>
</template>

<script>
// import detail from '~/components/product_details'
export default {
    // components: { detail },
     mounted() {
        this.$http.post("getCollection").then(resp => {
            return this.list = resp.list;
        });
    },
    data() {
        return {
            list:[]
        };
    }
};
</script>

