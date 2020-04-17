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

    <p>get word is {{ word }}</p>

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
    <div class="bv-example-row"
         v-for="(qa, index) in qajson"
         :key="index"
         style="width: 20rem;">
      <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-medium-hide">
          <md-card md-with-hover v-on:click="show(qa)">
            <div @click="show(qa)">
                <md-card-header>
                  <div class="md-title">
                    <div class="text-justify">
                      <i class="material-icons">
                        help_outline
                      </i>
                       {{qa.question}}
                    </div>
                  </div>
                  <div class="md-subhead">
                    service: {{qa.service_name}}
                  </div>
                </md-card-header>

                <md-card-content>
                  <div class="text-truncate">
                      <i class="material-icons md-10">
                        error_outline
                      </i>
                    {{ qa.answer }}
                  </div>
                </md-card-content>

                <md-card-footer class="text-muted">
                    Last updated 3 mins ago
                </md-card-footer>
            </div>
          </md-card>
        </div>
      </div>
    </div>

    <!-- modal window -->
    <modal height="auto"
           :scrollable="true"
           name="qa-modal"
           :resizable="true"
           @before-open="beforeOpen">
      <div class="modal-header">
        <h2>
          Question : {{modal_q}}
        </h2>
      </div>
      <div class="modal-body">
        <p>
          A: <br />
          {{modal_a}}
        </p>
        <small>
          Service: {{modal_s}}
        </small>
        <br />
        <small>
          <router-link :to="{name:'FAQ Detail',params: {qid: this.modal_id}}">QID : {{modal_id}}</router-link>
          ←QIDのリンクをクリックすると、個別詳細ページへジャンプします
        </small>
        <br />
        <small>
          Tags:
          <span class="modalTag" v-for="(tag, index) in modal_tags" :key="index" >
            {{tag}}
          </span>
        </small>
        <br />
        <br />
        <button v-on:click="hide">
          閉じる
        </button>
      </div>
    </modal>
    <!--
    <qaList :sWord='sWord'></qaList>
    -->
  </div>
</template>

<script>

/* eslint-disable */
import Vue from 'vue'
import axios from 'axios'
import qaList from '@/components/material/card/qa_list.vue'
/* eslint-enable */


export default {
  name: 'qaSearch',
  components: {
    //qaList,
  },
  data () {
    return {
      service : 'Mail',
      text: '',
      sWord: '',
      word: '',

      qajson  : '',
      qid     : '',
      modalqa : '',
      modal_q : '',
      modal_a : '',
      modal_s : '',
      modal_id : '',
      modal_tags: [],
    }
  },
  mounted: function () {
    axios
      .get('/faq/list', {
        word: this.word
      }
      )
      .then(response => (this.qajson = response.data))
  },
  methods: {
    setWord: function(){
      this.sWord=this.word
    },
    openModal () {
      this.$modal.show({
        template: `
        <b>
          {{modalqa}}
        </b>
        `,
        props: [
          'modalqa',
          'modal_q',
          'modal_a',
          'modal_s',
          'modal_id',
        ]
      },{
        width: 300,
      }, {
        'before-open': this.beforeOpen,
      })
    },
    beforeOpen (qa) {
      // Set the opening time of the modal
      this.modal_q = qa.params.modalqa.question,
      this.modal_a = qa.params.modalqa.answer,
      this.modal_s = qa.params.modalqa.service_name,
      this.modal_id = qa.params.modalqa.QID
      this.modal_tags = qa.params.modalqa.tags
    },
    setQID: function(qid) {
      this.qid = qid
    },
    show (qa) {
      this.$modal.show('qa-modal', {modalqa: qa})
    },
    hide () {
      this.$modal.hide('qa-modal');
    }

  },
}
</script>

<style scoped lang="scss">
@import 'vue-material/dist/theme/engine';
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
.modal-header, .modal-body {
	padding: 5px 25px;
}
.modal-header {
	border-bottom: 1px solid #ddd;
}
.md-card {
  width: 320px;
  display: inline-block;
  margin-bottom:10px;
  text-align: left;

}

.md-card-footer{
  text-align: right;
}
.md-card-content{
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}

.modalTag {
  padding: 1px;
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 3px;
  background: #f0f7ff;
  border: dashed 2px #5b8bd0;
}

.material-icons.md-10 {
font-size: 18px;
}
</style>
