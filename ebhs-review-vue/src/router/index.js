import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Tab1 from '@/pages/tabs/Tab1'
import Tab2 from '@/pages/tabs/Tab2'
import Tab3 from '@/pages/tabs/Tab3'
import Tab4 from '@/pages/tabs/Tab4'
import Curve from '@/pages/curve/index'
import Task from '@/pages/task/index'
import CreateJson from '@/pages/setting/createJson'
import ImportJson from '@/pages/setting/importJson'
import IosFile from '@/pages/setting/iosFile'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      children:[{
        path: '',
        name: 'tab1',
        component: Tab1,
      },{
        path: 'tab2',
        name: 'tab2',
        component: Tab2,
      },{
        path: 'tab3',
        name: 'tab3',
        component: Tab3,
      },{
        path: 'tab4',
        name: 'tab4',
        component: Tab4,
      }]
    },{ // 曲线详情页
      path: '/curve',
      name: 'curve',
      component: Curve
    },{ // 任务详情页
      path: '/task',
      name: 'task',
      component: Task
    },{
      path: '/createJson',
      name: 'createJson',
      component: CreateJson
    },{
      path: '/importJson',
      name: 'importJson',
      component: ImportJson
    },{
      path: '/iosFile',
      name: 'iosFile',
      component: IosFile
    }
  ]
})
