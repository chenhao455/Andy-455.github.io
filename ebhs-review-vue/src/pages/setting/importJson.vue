<template>
  <div class="importJson">
    <my-header>导入JSON字符串</my-header>
    <group>
      <p class="group-title" slot="title">
        <span>在下方输入文本</span>
        <span class="right" @click="importJson">导入</span>
      </p>
      <x-textarea
        v-model="jsonStr"
        placeholder="在这里输入要导入的JSON字符串"
        :height="200"
        :rows="8"
        :cols="30">
      </x-textarea>
    </group>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { mapActions } from 'vuex'
export default {
  name: 'importJson',
  components:{ MyHeader },
  data () {
    return {
      jsonStr: ''
    }
  },
  methods:{
    ...mapActions(['setStore']),
    importJson(){
      this.setStore(JSON.parse(this.jsonStr))
    }
  }
}
</script>
<style lang="scss">
.importJson{
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
  .json-str{
    width: 100%;
    height: calc(100% - 100px);
  }
}
</style>
