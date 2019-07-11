<template>
  <div class="curve">
    <my-header>{{curve.name}}</my-header>
    <group>
      <cell v-for="(dot,idx) in curve.dotList" :key="idx"
            :title="'在' + dot.value + unitStr[dot.unit] + '后复习'">
      </cell>
    </group>
  </div>
</template>

<script>
// 曲线详情页
import MyHeader from '@/components/MyHeader'
export default {
  name: 'Curve',
  components:{ MyHeader },
  data () {
    return {
      unitStr:{
        day:'天',
        month:'月'
      },
      curve: {
        id:'',
        name:'',
        dotList:[]
      }
    }
  },
  created(){
    this.curve = JSON.parse(this.$route.query.curve)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
