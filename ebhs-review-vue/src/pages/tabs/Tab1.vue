<template>
  <div>
    <group v-if="todayTaskIds.length">
      <cell v-for="(taskId,idx) in todayTaskIds" 
        :key="idx"
        :title="taskId">
      </cell>
    </group>
    <group v-else>
      <cell title="今日没有代办任务"></cell>
    </group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { format } from '@/util'
export default {
  name: 'Tab1',
  data () {
    return {
      today: '',
      todayTaskIds:[]
    }
  },
  computed: {
    ...mapGetters(['taskDayObj'])
  },
  created(){
    this.today = format(new Date(),'YYYY-MM-DD')
    // console.log('this.taskDayObj.dayTaskList:',JSON.stringify(this.taskDayObj.dayTaskList,null,4))
    this.taskDayObj.dayTaskList.forEach((item,idx)=>{
      // console.log('item:',JSON.stringify(item,null,4))
      if(item.day === this.today){
        this.todayTaskIds = item.taskIdList
      }
    })
    // console.log('this.todayTaskIds:',JSON.stringify(this.todayTaskIds,null,4))
  },
  methods:{}
}
</script>

<style>

</style>
