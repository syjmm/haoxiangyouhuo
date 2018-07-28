import Vue from 'vue'
import Router from 'vue-router'

import Addbills from '@/components/addbills'
import Billslist from '@/components/billslist'
import Myorder from '@/components/myorder'
import Ordershow from '@/components/ordershow'
import Member from '@/components/member'
import Membershow from '@/components/membershow'
import Afterorder from '@/components/afterorder'
import Shopshow from '@/components/shopshow'
import Goodshow from '@/components/goodshow'
import Memberover from '@/components/memberover'
import Logistics from '@/components/logistics'
import Activemore from '@/components/activemore'
import Shouhuoadd from '@/components/shouhuoadd'
import Addresslist from '@/components/addresslist'
import Toursign from '@/components/toursign'
import Bycarmore from '@/components/bycarmore'
import Studying from '@/components/studying'
import Tourmore from '@/components/tourmore'
import HxMember from '@/components/hxmember'
import Membermotion from '@/components/membermotion'
import Membermotion1 from '@/components/membermotion1'
import Membermotion2 from '@/components/membermotion2'
import Collect from '@/components/collect'







Vue.use(Router)

export default new Router({
  routes: [
      // 新增发票页面
    {
        path: '/addbills',
        name: 'addbills',
        component: Addbills
    },
      // 发票详情页面
    {
        path: '/billslist',
        name: 'billslist',
        component: Billslist
    },//我的订单页面
    {
      path: '/myorder',
      name: 'myorder',
      component: Myorder
    },
      //订单详情页面
      {
          path: '/ordershow',
          name: 'ordershow',
          component: Ordershow
      },
      //开卡成功页面
      {
          path: '/member',
          name: 'member',
          component: Member
      },
      //好象会员卡页面
      {
          path: '/hxmember',
          name: 'hxmember',
          component: HxMember
      },
      //会员卡内容页
      {
          path: '/membershow',
          name: 'membershow',
          component: Membershow
      },
      //会员过期
      {
          path: '/memberover',
          name: 'memberover',
          component: Memberover
      },
      //订单缺省页
      {
          path: '/afterorder',
          name: 'afterorder',
          component: Afterorder
      },
      //商家详情页
      {
          path: '/shopshow',
          name: 'shopshow',
          component: Shopshow
      },
      //商品详情页
      {
          path: '/goodshow',
          name: 'goodshow',
          component: Goodshow
      },
      //物流信息
      {
          path: '/logistics',
          name: 'logistics',
          component: Logistics
      },
      //活动详情页
      {
          path: '/activemore',
          name: 'activemore',
          component: Activemore
      },
      //收货地址添加
      {
          path: '/shouhuoadd',
          name: 'shouhuoadd',
          component: Shouhuoadd
      },
      //收货地址列表
      {
          path: '/addresslist',
          name: 'addresslist',
          component: Addresslist
      },
      //旅行特卖报名成功
      {
          path: '/toursign',
          name: 'toursign',
          component: Toursign
      },
      //叮叮驾考活动页面
      {
          path: '/bycarmore',
          name: 'bycarmore',
          component: Bycarmore
      },
      //出国留学活动页面
      {
          path: '/studying',
          name: 'studying',
          component: Studying
      },
      //旅游特卖活动页面
      {
          path: '/tourmore',
          name: 'tourmore',
          component: Tourmore
      },
      //好象会员示意（已过期）
      {
          path: '/membermotion',
          name: 'membermotion',
          component: Membermotion
      },
      //好象会员示意（去开通）
      {
          path: '/membermotion1',
          name: 'membermotion1',
          component: Membermotion1
      },
      //好象会员示意（体验）
      {
          path: '/membermotion2',
          name: 'membermotion2',
          component: Membermotion2
      },
      //收藏页列表
      {
          path: '/collect',
          name: 'collect',
          component: Collect
      },



  ]
})
