<template>
  <div class="header">
    <x-header
      :left-options="leftOptions"
      :right-options="rightOptions"
      :title="title">
      <slot></slot>
      <a slot="right">
        <slot name="right"></slot>
      </a>
    </x-header>
    <div class="h-view"></div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  name: 'Header',
  components: { XHeader },
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default () {
        return {
          showMore: false
        }
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss">
  .header{
    .vux-header{
      position: fixed!important;
      z-index: 9;
      width: 100%;
      top: 20px;
    }
    .h-view{
      height: 66px;
    }
  }
</style>
