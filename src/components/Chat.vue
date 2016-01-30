<template>
  <div id="chat">
    <timeline></timeline>
    <div id="write">
      <input v-model="draft" placeholder="..." @keyup.enter="publish" type="text"/>
    </div>
  </div>
</template>

<script>
import Timeline from './Timeline'
import Guble from '../guble'
import Store from '../store'

export default {
  components: {
    Timeline
  },
  data () {
    return {
      draft: ''
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
