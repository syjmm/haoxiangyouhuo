<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/back.png" class="back">
            <span class="title">新增发票</span>
        </header>
        <!--内容-->
        <main>
            <!--输入发票抬头名称-->
            <div class="name">
                <span class="michen">名称</span>
                <input type="text" class="bill-name" placeholder="发票抬头名称">
            </div>
            <!--输入发票抬头税号-->
            <div class="name billsNO">
                <span class="michen billno">税号</span>
                <input type="text" class="bill-name billno" placeholder="发票抬头税号">
            </div>
            <button class="anniu">
                <span class="anniu-wenzi">添加并使用新抬头</span>
            </button>
        </main>
    </div>
</template>

<script>
    export default {
        name: "addbills"
    }
</script>

<style scoped>
    main{
        background: #fff;
        width: 100%;
        height: 93vh;
    }
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
    .name{
        width: 6.10rem;
        height: 1.47rem;
        background-color: #fff;
        margin-left:0.70rem;
        border-bottom:0.01rem solid #e0e0e0;
    }
    .michen{
        display: block;
        font-size:0.26rem;
        color:#555555;
        margin-top:0.82rem;
        float:left;
        font-weight: bold;
    }
    .bill-name{
        width: 4.39rem;
        height: 0.26rem;
        /*background-color: blue;*/
        float:left;
        border:none;
        outline:none;
        margin:0.82rem 0 0 1.18rem;

    }
    .billsNO{
        height: 1.19rem;
    }
    .billno{
        margin-top:0.54rem;
    }
    .anniu{
        width: 100%;
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