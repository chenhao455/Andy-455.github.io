<template>
  <div>
    <my-header>数据生成JSON</my-header>
    <p>{{dataStr}}</p>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { mapState } from 'vuex'
export default {
  name: 'CreateJson',
  components:{ MyHeader },
  data () {
    return {
      appStr: ''
    }
  },
  computed: {
    ...mapState({
      dataStr:state => JSON.stringify(state)
    })
  },
  methods:{}
}
</script>

<style>

</style>
