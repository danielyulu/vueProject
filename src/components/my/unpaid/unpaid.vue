<template>
    <div>
        <div id="head">
            <ul>
                <li>
                    <mu-icon value="keyboard_arrow_left" @click = "$router.go(-1)" :size="38"></mu-icon>
                </li>
                <li>购买订单</li>
            </ul>
        </div>
        <div class="sellcontent">
            <ul class="navbox">
                <li>
                    <mt-tab-item  @click.native.prevent="active = 'tab-container1'">全部</mt-tab-item>
                </li>
                <li>
                    <mt-tab-item  @click.native.prevent="active = 'tab-container2'">待支付</mt-tab-item>   
                </li>
                <li>
                    <mt-tab-item  @click.native.prevent="active = 'tab-container3'">待发货</mt-tab-item>  
                    
                </li>
                <li>
                    <mt-tab-item  @click.native.prevent="active = 'tab-container4'">待签收</mt-tab-item>  
                </li>         
            </ul>
            <div class="page-tab-container">
                <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                    <!--全部组件-->
                    <mt-tab-container-item id="tab-container1">
                        <cadd></cadd>                   
                    </mt-tab-container-item>
                    <!--待支付组件-->
                    <mt-tab-container-item id="tab-container2">
                        <loser></loser>
                    </mt-tab-container-item>
                    <!--待发货组件-->
                    <mt-tab-container-item id="tab-container3">
                        <deliver></deliver>
                    </mt-tab-container-item>
                    <!--待签收组件-->
                    <mt-tab-container-item id="tab-container4">
                        <received></received>
                    </mt-tab-container-item>     
                </mt-tab-container>
            </div>
        </div>
    </div>
</template>

<script>
    import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
    import './unpaid.scss';
    import cadd from './cadd.vue';
    import loser from './loser.vue';
    import deliver from './deliver.vue';
    import received from './received.vue';
    export default {
        data() {
            return {
                name:'page-tab-container',
                
                active: 'tab-container1',
            };
        },
        components: {
            cadd,
            loser,
            deliver,
            received
        },
    }

</script>

<style lang="scss">
    .sellcontent {
        .navbox {
            background-color: #FFFFFF;
            padding: 0.4rem;
            width: 100%;
            li {
                
                color: #333333;
                .mint-tab-item-label {
                    color: #333333;
                    font-size: 0.426666rem;
                    line-height: 1;
                }
                a:active, a:hover {
                    border-bottom: 0.04rem solid #FD5C02;
                    color: #FD5C02;
                }
                
                
            }
        }
    }
</style>