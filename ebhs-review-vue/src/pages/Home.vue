<template>
  <div class="home" @touchmove="onTouchMove">
    <my-header :left-options="{showBack: false}">
      {{tabList[tabIdx].title}}
      <a slot="right">加</a>
    </my-header>
    <router-view></router-view>
    <tabbar @on-index-change="tabInxChange">
      <tabbar-item v-for="(item,idx) in tabList" :key="idx"
                   :selected="tabIdx === idx"
                   :link="item.linkPath">
        <span slot="label">{{item.name}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'

export default {
  name: 'Home',
  components:{ MyHeader },
  data () {
    return {
      tabIdx: 0,
      tabList: [{
        name: '代办',
        title: '今日代办',
        linkPath: '/',
        icon: 'ios-heart',
      }, {
        name: '日历',
        title: '任务日历',
        linkPath: '/tab2',
        icon: 'ios-checkmark',
      }, {
        name: '任务',
        title: '任务列表',
        linkPath: '/tab3',
        icon: 'ios-star',
      }, {
        name: '设置',
        title: '设置',
        linkPath: '/tab4',
        icon: 'ios-information'
      }]
    }
  },
  created(){
    let nowFullPath = this.$route.fullPath
    this.tabList.forEach((item, index)=>{
       if(item.linkPath === nowFullPath){
         this.tabIdx = index
       }
    })
  },
  methods:{
    onTouchMove(e){
      e.preventDefault()
    },
    tabInxChange(val){
      this.tabIdx = val
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
