<!--组件模板-->
<template>
    <div class="nav">
        <div class="item" @click="sort(0)" :class="{active: actives[0] }">价格升序↑</div>
        <div class="item" @click="sort(1)" :class="{active: actives[1] }">价格降序↓</div>
        <div class="item" @click="sort(2)" :class="{active: actives[2] }">销量升序↑</div>
        <div class="item" @click="sort(3)" :class="{active: actives[3] }">销量降序↓</div>
    </div>
</template>

<!--组件业务逻辑-->
<script>

    //导入空实例
    import emptyVue from '@/emptyVue/emptyVue.js'

    export default {
        data:function(){
            return {
                actives:[true,false,false,false]
            }
        },
        methods:{
            sort:function(index){
                console.log(index);
                //维护按钮的高亮效果
                for(var i = 0;i < this.actives.length;i++)
                {
                    if(index == i)
                    {
                        //this.actives[i] = true;
                        this.$set(this.actives,i,true  );
                    }
                    else
                    {
                        //this.actives[i] = false;
                        this.$set(this.actives,i,false  );
                    }
                }

                //排序
                //主动触发事件, 将按钮的索引传给List组件
                emptyVue.$emit('sendData',index);
            }
        }
    }
</script>

<!--组件样式-->
<style scoped>
    .nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #f0f0f0;
    }
    .nav .active{
        color:red;
    }
</style>
