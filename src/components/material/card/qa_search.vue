<template>
  <div class="qaSearch">
    <md-toolbar>
      <h4 class="md-title">
        Search from word
        <i class="material-icons">android</i>
      </h4>
    </md-toolbar>

    <md-field>
      <label>
        Please enter search word...
      </label>
      <md-input type="text"
                v-model="word"
                v-on:keyup.enter="setWord()">
      </md-input>
      <md-button class="md-fav">
        <i class="material-icons md-35" @click="setWord()">
            search
        </i>
      </md-button>
    </md-field>


    <!---
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

    --->

    <qaList :sWord='sWord'></qaList>
  </div>
</template>

<script>

/* eslint-disable */
import Vue from 'vue'
import qaList from '@/components/material/card/qa_list.vue'
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
.material-icons.md-35 {
font-size: 35px;
}

.icon {
  width: 160px;
  height: 160px;
  border-radius: 15px;
  background: #e91e63;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -80px;
  margin-left: -80px;
  box-shadow: inset 1px 1px 0 rgba(white,.35), inset -1px -1px 0 rgba(black,.05), 0 10px 25px rgba(black,.45);
  overflow: hidden;
  transition: background .25s ease-in-out;
  cursor: pointer;
  transform: translateZ(0);
  > i {
    border-radius: 15px;
    overflow: hidden;
  }

  i.ok {
    color: white;
    font-size: 100px;
    width: 100%;
    height: 100%;
    line-height: 160px;
    display: inline-block;
    text-align: center;
    position: relative;
    z-index: 2;
    transform: translate3d(-150%,-100%,0);
    transition: all .25s ease-in-out;

    /* Weird, hacky, long-shadow */
    &::after {
      content: '';
      position: absolute;
      top: 98px;
      left: 65px;
      transform: rotate(45deg);
      width: 150px;
      height: 70px;
      background: rgba(black,.125);
      z-index: -1;
    }
  }

  i.important {
    color: white;
    font-size: 100px;
    width: 100%;
    height: 100%;
    line-height: 160px;
    display: inline-block;
    text-align: center;
    position: relative;
    z-index: 2;
    transform: translate3d(0,0,0);
    transition: all .25s ease-in-out;

    /* Weird, hacky, long-shadow */
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -33px;
      margin-left: -25px;
      width: 50px;
      height: 50px;
      background: #e91e63;
      display: block;
      z-index: -1;
      transition: inherit;
    }
    &::after {
      content: '';
      position: absolute;
      top: 76px;
      left: 56px;
      transform: rotate(45deg);
      width: 150px;
      height: 114px;
      background: rgba(black,.125);
      z-index: -2;
    }
  }

  &:hover {
    background: #4caf50;

    i.important {
      transform: translate3d(150%,0,0);
      &::before {
        background: #4caf50;
      }
    }

    i.ok {
      transform: translate3d(0,-101%,0);
    }
  }
}
</style>
