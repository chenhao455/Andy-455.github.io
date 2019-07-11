<template>
  <div class="iosFile">
    <my-header>访问IOS本地文件</my-header>
    <group>
      <cell title="写文件" @click.native="onWriteFile"></cell>
      <cell title="读文件" @click.native="onReadFile"></cell>
      <cell title="改文件" @click.native="onEditFile"></cell>
    </group>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
export default {
  name: 'iosFile',
  components:{ MyHeader },
  data () {
    return {
      testObj1: {
        list1:[{l1key1:1,l1key2:'value2'}],
        list2:[{l2key1:true,l2key2:[1,2,3]}]
      }
    }
  },
  methods:{
    onWriteFile(){
      //writeFileToIos(this.testObj1)
    },
    onReadFile(){
      //readFileInIos()
    },
    onEditFile(){
      console.log('onEditFile')
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
