<!--组件模板-->
<template>
    <div class="header">
        <div class="poster">
            <img src="../../assets/images/avatar.jpg" alt=""/>
        </div>
        <div class="text">
            <div class="shop-name">爱时尚精品屋</div>
            <div class="shop-tip">公告:欢迎光临,流行爆款库存有限请尽早下单.</div>
        </div>
    </div>
</template>

<!--组件业务逻辑-->
<script type="text/babel">
    export default {

    }
</script>

<!--组件样式-->
<style scoped>
    .poster{
        height: 240px;
        background-image: url("../../assets/images/banner-2.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
    }
    .poster img{
        width: 80px;
        border-radius: 50%;
        position: absolute;
        bottom: -40px;
        left: 50%;
        margin-left: -40px;
    }
    .text{
        margin: 50px 0;
        text-align: center;
        line-height: 40px;
    }
    .text .shop-name{
        font-size: 18px;
        font-weight: bold;
    }
</style>