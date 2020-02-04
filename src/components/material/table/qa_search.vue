<template>
  <div class="qaSearch">
    <md-toolbar>
      <h3 class="md-title" style="flex: 1">
        FAQ Search in Vue Material
      </h3>
    </md-toolbar>

    <md-field>
      <label>
        Search Word
      </label>
      <md-input type="text"
                v-model="word"
                v-on:keymap.enter="setWord()">
      </md-input>

    </md-field>

    <qaList :sWord='sWord'></qaList>
  </div>
</template>

<script>

/* eslint-disable */
import Vue from 'vue'
import qaList from '@/components/material/table/qa_list.vue'
/* eslint-enable */


export default {
  name: 'qaSearch',
  components: {
    qaList,
  },
  data () {
    return {
      service : 'Mail',
      text: '',
      sWord: '',
      word: '',
    }
  },
  methods: {
    setWord: function(){
      this.sWord=this.word
    }
  }
}
</script>

<style scoped lang="scss">
h1,h2 {
  font-weight: normal;
  margin: 40px 0 0;
  white-space: pre-line;
  word-wrap: break-word;
}
a {
  color: #42b983;
}
td {
  text-align:center;
  white-space: pre-line;
  word-wrap: break-word;
}

.md-toolbar {
  text-align: left;
}
</style>
