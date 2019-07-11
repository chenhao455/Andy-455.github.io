<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
const URL = 'https://haomiaozhichen.github.io/ebhs-review-data.js'
export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {},
  created(){
    this.getWebData()
  },
  methods:{
    ...mapActions(['setStore']),
    async getWebData(){
      this.$http.post(URL).then(({data}) => {
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
