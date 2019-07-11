<template>
  <div>
    <inline-calendar
      v-model="hasTaskDays"
      :render-month="[nowYear, nowMonth]"
      :show-last-month="false"
      :show-next-month="false"
      :replace-text-list="{'TODAY':'今'}">
    </inline-calendar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Tab2',
  data () {
    return {
      hasTaskDays: [],
      nowYear: (new Date).getFullYear(),
      nowMonth: (new Date).getMonth() + 1,
      dayTaskList:[] // 日期任务列表
    }
  },
  computed: {
    ...mapGetters(['taskDayObj'])
  },
  created(){
    this.hasTaskDays = this.taskDayObj.hasTaskDays
    this.dayTaskList = this.taskDayObj.dayTaskList
  },
  methods:{}
}
</script>

<style>

</style>
