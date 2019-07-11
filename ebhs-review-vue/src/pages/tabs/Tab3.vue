<template>
  <div class="tab3">
    <group>
      <cell v-for="(task,idx) in taskList" :key="idx"
            :title="task.name"
            :link="{path:'/task', query:{id:task.id}}">
      </cell>
    </group>
    <x-button type="primary" class="add">添加曲线</x-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Tab3',
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed: {
    ...mapState({
      taskList:state=>state.taskList
    })
  },
  methods:{}
}
</script>

<style>

</style>
