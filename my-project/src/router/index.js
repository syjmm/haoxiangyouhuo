import Vue from 'vue'
import Router from 'vue-router'

import Addbills from '@/components/addbills'
import Billslist from '@/components/billslist'
import Myorder from '@/components/myorder'



Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/addbills',
        name: 'addbills',
        component: Addbills
    },
    {
        path: '/billslist',
        name: 'billslist',
        component: Billslist
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: Myorder
    },
  ]
})
