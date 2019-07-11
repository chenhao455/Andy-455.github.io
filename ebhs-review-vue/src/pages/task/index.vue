<template>
  <div class="task">
    <my-header>任务详情<a slot="right" :link="task.href" v-if="task.href">链接</a></my-header>
    <group>
      <cell title="任务名称" :value="task.name"></cell>
      <cell title="任务描述" :value="task.desc" v-if="task.desc"></cell>
      <cell title="创建时间" :value="task.createTime"></cell>
    </group>

    <group title="任务分布">
      <cell v-for="(day,idx) in distDays" :title="idx?('第' + idx + '次复习：' + day):('任务开始：' + day)" :key="idx"></cell>
    </group>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import { mapState,mapGetters } from 'vuex'
import { format, addDate } from '@/util'
export default {
  name: 'task',
  components:{ MyHeader },
  data () {
    return {
      taskId:'',
      distDays:[],
      task: {
        id:'',
        name:'',
        href: '',
        curveTypeId:'',
        createTime:''
      }
    }
  },
  computed: {
    ...mapState({taskList:state=>state.taskList}),
    ...mapGetters(['taskDayObj'])
  },
  created(){
    this.taskId = this.$route.query.id
    this.taskList.forEach((item,idx)=>{
      if(item.id === this.taskId){
        this.task = item
      }
    })
    this.taskDayObj.taskDistDayList.forEach((item,idx)=>{
      if(item.taskId === this.taskId){
        this.distDays = item.distDays
      }
    })
  },
  methods:{}
}
</script>
<style lang="scss">
.task{
  .content{
    padding: 0 15px;
  }
}
</style>
