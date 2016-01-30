<template>
  <h3>Timeline</h3>
  <div id="timeline">
    <div v-for="message in messages" track-by="$index">{{message}}</div>
  </div>
</template>

<script>
import Store from '../store'

export default {
  data () {
    return {
      messages: Store.messages
    }
  }
}
</script>
