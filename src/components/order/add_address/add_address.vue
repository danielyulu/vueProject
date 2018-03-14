<template>
    <div id="a_address">
        <div class="a_header">
        <mu-icon value="navigate_before" @click="$router.go(-1)"/>
        我的地址
        </div>
        <div class="a_main">
            <template v-if="dataset.length>0">
                <dl  v-for="(item) in dataset" :key="item.id">
                    <dt >
                    <h3>{{item.name}} <span>{{item.relation}}</span></h3>
                    <p>{{item.localarea}} {{item.address}}</p>
                    </dt>
                    <dd class="clearfix">
                        <mu-radio label="默认地址" name="group" class="demo-radio"/> 
                        <span><mu-icon value="delete"/>删除</span>
                        <span><mu-icon value="edit"/>编辑</span>
                    </dd>              
                </dl> 
            </template>
            <span v-else class="none">快去添加地址吧</span>
        </div>
        <div class="a_footer">
            <button @click="$router.push('address')">添加地址</button>
        </div>
    </div>
</template>
<script>
    import './add_address.scss';
    import axios from 'axios';
    export default{
        data(){
            return{
                dataset:[{
                address:"qeadeaw",
                id:2,
                localarea:"广东 广州",
                name:"dadad",
                phone:1234,
                relation:"13232489011"
                },{
                address:"qeadeaw",
                id:3,
                localarea:"广东 广州",
                name:"dadad",
                phone:1234,
                relation:"13232489011"
                }],
               
                
            }
        },
        beforeMount(){
            axios.get('http://10.3.136.62:88/getaddress',{params:{phone:this.phone}}).then(res=>{
                console.log(res.data.data.results);
                this.dataset=res.data.data.results;
                console.log(this.dataset);

            })
        },
       computed:{
          phone:function(){
            return this.$store.state.phone;       
          },
        },
        methods:{
            defaultAddress(){
                //设置默认地址
            }
        }
    }
</script>