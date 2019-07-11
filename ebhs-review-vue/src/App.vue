<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {},
  created(){
    // this.getWebData()
  },
  methods:{
    ...mapActions(['setStore']),
    async getWebData(){
      this.$http.post('https://qcloud.coding.net/u/haomiaozhichen/p/CloudCode/git/raw/master/reviewTasks.json').then(({data}) => {
        console.log('reviewTasks.json:', JSON.stringify(data,null,4))
      })
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body {
  background-color: #fbf9fe;
}
</style>
