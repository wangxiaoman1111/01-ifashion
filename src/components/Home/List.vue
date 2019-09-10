<!--���ģ��-->
<template>
    <div class="list">
        <div class="good" v-for="(good,index) in list" :key="index">
            <div class="pic">
                <img :src="good.pic" alt="">
            </div>
            <div class="text">
                <div class="name">{{good.name}}</div>
                <div class="buyCount">已售: {{good.buyCount}} 件</div>
                <div class="price">单价: <span>¥{{good.price}}</span></div>
            </div>
            <div class="btn" @click="addToCart(good)">加入购物车</div> 
        </div>
    </div>
</template>

<!--���ҵ���߼�-->
<script >

    //导入空实例
    import emptyVue from '../../emptyVue/emptyVue.js';

    //导入axios
    import axios from 'axios';

    export default {
        data:function(){
            return {
                list:[]
            }
        },
        methods:{
            addToCart:function(good){
                //加入购物车,将数据存储到localStorage

                //从localStorage去除已加入的商品
                var goodInCart = JSON.parse(localStorage.getItem("goodInCart")) || [];

                //判断good是否已存在
                var findIndex = goodInCart.findIndex((g,index)=>{
                    return g.id == good.id;
                })
                console.log(findIndex);
                
                if(findIndex != -1)//good已存在,数量加1
                {
                    goodInCart[findIndex].count++;
                }
                else//设置数量为1,加入购物车
                {
                    //good.count = 1;
                    this.$set(good,'count',1);
                    goodInCart.push(good);
                }
                console.log(goodInCart);
                
                localStorage.setItem("goodInCart",JSON.stringify(goodInCart));

            }
        },
        mounted:function(){
            console.log('mounted');
            
            axios.get('http://yantianfeng.com/api/goodList').then((res)=>{
                console.log(res.data);
                this.list = res.data.goodList;
            })

            //监听事件
            emptyVue.$on('sendData',function(index){
                console.log('list',index);
                //排序
                if(index == 0)
                {
                    this.list.sort((goodA,goodB)=>{
                        return goodA.price - goodB.price;
                    })
                }
                else if(index == 1)
                {
                    this.list.sort((goodA,goodB)=>{
                        return goodB.price - goodA.price;
                    })
                }
                else if(index == 2)
                {
                    this.list.sort((goodA,goodB)=>{
                        return goodA.buyCount - goodB.buyCount;
                    })
                }
                else{
                    this.list.sort((goodA,goodB)=>{
                        return goodB.buyCount - goodA.buyCount;
                    })
            
                }

            }.bind(this))

        }
    }
</script>

<!--�����ʽ-->
<style scoped>
    .list .good{
        margin: 20px;
        display: flex;
         position: relative;
    }
    .list .good .pic{
        width: 30%;
        margin-right: 15px;
    }
    .list .good .pic img{
        width: 100%;
    }

    .list .good .text{
        width: 70%;
    }
    .list .good .text .name{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 20px;
    }
    .list .good .text>div{
        margin-bottom: 10px;
    }
    .list .good .text .price span{
        color: red;
    }
    .list .good .btn{
        position: absolute;
        bottom: 0;
        right: 0;
        color: white;
        background-color: red;
        padding: 5px 10px;
    }
</style>