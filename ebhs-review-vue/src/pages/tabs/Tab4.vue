<template>
  <div class="tab4">
    <group>
      <p class="group-title" slot="title">
        <span>曲线列表</span>
        <span class="right" @click="addCurve">添加曲线</span>
      </p>
      <cell v-for="(list,idx) in curveList" 
        :key="idx"
        :title="list.name"
        @click.native="onCurveClick(list)">
      </cell>
    </group>
    <!-- <group>
      <cell title="数据生成JSON字符串" :link="{path:'/createJson'}"></cell>
      <cell title="导入JSON字符串" :link="{path:'/importJson'}"></cell>
      <cell title="访问IOS本地文件" :link="{path:'/iosFile'}"></cell>
    </group> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Tab4',
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed: {
    ...mapState({
      curveList:state=>state.curveList
    })
  },
  methods:{
    addCurve(){
      console.log('addCurve')
    },
    onCurveClick(curve){
      this.$router.push({path:'/curve', query:{curve:JSON.stringify(curve)}})
    }
  }
}
</script>

<style lang="scss">
.tab4{
  padding-top: 20px;
  .group-title{
    padding: 0 15px;
    .right{
      float: right;
      background-color: #42b983;
      border-radius: 20px;
      padding: 0px 10px;
    }
  }
  .add{
    margin-top: 20px;
  }
}
</style>
