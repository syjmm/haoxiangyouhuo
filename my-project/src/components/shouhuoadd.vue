<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/back.png" class="back">
            <span class="title">新增收货地址</span>
        </header>
        <!--内容-->
        <main>
            <div class="inputbox">
                <span class="shouman">收件人</span>
                <input type="text" class="name" placeholder="请输入收件人姓名">
            </div>
            <div class="inputbox">
                <span class="shouman">联系电话</span>
                <input type="text" class="name" placeholder="请输入联系电话">
            </div>
            <div class="inputbox">
                <span class="shouman">地区</span>
                <input type="text" class="name" placeholder="请选择所在区域">
            </div>
            <div class="inputbox">
                <span class="shouman">详细地址</span>
                <input type="text" class="name" placeholder="请填写详细地址">
            </div>
            <button class="anniu">
                <span class="anniu-wenzi">确认新增</span>
            </button>
        </main>
    </div>
</template>

<script>
    export default {
        name: "shouhuoadd"
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 0.93rem;
        background: #f6f6f8;
        line-height: 0.53rem;
    }
    .back{
        width: 0.32rem;
        height: 0.22rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#555555;
        margin-left:2.20rem;
    }
    .inputbox{
        width: 6.08rem;
        height: 1.23rem;
        border-bottom:0.01rem solid #e0e0e0;
        margin:0 auto;
        margin-top: 0.22rem;
    }
    .shouman{
        font-size:0.28rem;
        color:#555555;
        display: block;
        padding:0.62rem 0 0 0;
        float:left;
    }
    main{
        width: 100%;
        height: 93vh;
        background: #fff;
        float:left;
    }
    .name{
        width: 4.30rem;
        height: 1.10rem;
        border:none;
        outline: none;
        display: block;
        margin-top: 0.05rem;
        padding-top:0.4rem;
        font-size:0.28rem;
        float:right;
        color:#323a45;
    }
    .anniu{
        width: 6.50rem;
        height: 1.78rem;
        display: block;
        margin:0 auto;
        margin-top:0.25rem;
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