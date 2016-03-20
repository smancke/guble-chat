<template>
  <h3>Timeline</h3>
  <div id="timeline">
    <div class="chat-message" v-for="message in messages" track-by="$index">{{message}}</div>
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

<style>
.chat-message {
  border: 1px solid #ccc;
  box-shadow: 4px 4px 3px #aaa;
  border-radius: 3px;
  padding: 2px 2px 2px 5px;
  margin-bottom: 10px;
  color: #333;
}
</style>
