<template>
  <div class="qaSearch">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" >FAQ Search</a>
      <form class="form-inline" @submit.prevent="exec">
        <input  v-on:keymap.enter="setWord()"
                v-model="word"
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                @click="setWord()">
          Search
        </button>
      </form>
    </nav>
    <qaList :sWord='sWord'></qaList>
  </div>
</template>

<script>

/* eslint-disable */
import Vue from 'vue'
import qaList from '@/components/test/qa_list2.vue'
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
</style>
