<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/back.png" class="back">
            <span class="title">收货地址</span>
        </header>
        <!--内容-->
        <main>
            <div class="list-item">
                <div class="list-itemtop">
                    <span class="list-title1">四川省成都市金牛区西南交通大学</span>
                    <span class="list-title2">成祥明</span>
                    <span class="list-title2 list-title3">135****8866</span>
                </div>

            </div>
            <div class="list-item">
                <div class="list-itemtop">
                    <span class="list-title1">四川省成都市金牛区西南交通大学</span>
                    <span class="list-title2">成祥明</span>
                    <span class="list-title2 list-title3">135****8866</span>
                </div>
            </div>

        </main>
        <!--底部-->
        <footer>
            <button class="anniu">
                <span class="anniu-wenzi">新增收货地址</span>
            </button>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "addresslist"
    }
</script>

<style scoped>

    header{
        width: 100%;
        height: 0.93rem;
        background: #ffffff;
        line-height: 0.53rem;
        position: fixed;
        top:0;
        left:0;
    }
    main{
        margin-top:1.07rem;
    }
    .back{
        width: 0.32rem;
        height: 0.22rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#555555;
        margin-left:2.29rem;
    }
    .list-item{
        width: 7.21rem;
        height: 2.03rem;
        margin:0.14rem 0 0.14rem 0.16rem;
        background: url("../assets/images/bg.png") no-repeat  center;
        background-position: center;
        -webkit-background-size: cover;

    }
    .list-itemtop{
        width: 100%;
        height: 100%;
        overflow:hidden;
    }
    .list-title1{
        margin:0.45rem 0 0.34rem 0.45rem;
        display: block;
        font-size:0.27rem;
    }
    .list-title2{
        font-size:0.24rem;
        display: block;
        color:#a2a2a2;
        float:left;
        margin:0 0 0.15rem 0.45rem;
    }
    .list-title3{
        margin:0 0 0.15rem 0.22rem;
    }

    footer{
        position: fixed;
        bottom:0.62rem;
        left:8.5vw;
    }
    .anniu{
        width: 6.50rem;
        height: 1.78rem;
        display: block;
        margin:0 auto;
        margin-top:0.78rem;
        border:none;
        outline:none;
        background-color: #fff;
        background:url(../assets/images/button.png) no-repeat center;
    }
    .anniu-wenzi{
        font-size:0.36rem;
        color:#ffffff;
        text-align: center;
    }
</style>