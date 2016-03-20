<template>
  <div class="chat">
    <timeline></timeline>
    <div>
      <textarea class="chat-draft" v-model="draft" placeholder="Type here .." @keyup.enter="publish"></textarea>
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
  methods: {
    publish: function (event) {
      if (this.draft.trim() != '') {
        Store.publish("/foo", this.draft);
        this.draft = '';
      }
    }
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
.chat {
  max-width: 400px;
}
.chat-draft {
  width: 100%;
  padding: 10px 0px 10px 10px;
  box-sizing: border-box;
}
</style>
