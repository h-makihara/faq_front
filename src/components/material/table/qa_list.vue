<template>
  <div class="qaListShow">
    このファイルは画面比較用テストファイルです
    <div id='app'>
      <p>get word is {{ sWord }}</p>

      <md-toolbar>
        <h3 class="md-title" style="flex: 1">
          FAQ 一覧
        </h3>
      </md-toolbar>
      <div class="qaList">
        <md-table>
          <md-table-row>
            <md-table-head>
              Question
            </md-table-head>
            <md-table-head>
              Service
            </md-table-head>
          </md-table-row>
          <md-table-row v-for="(qa, index) in qajson"
                        :key="index"
                        @click.native="setQA(qa)">
            <md-table-cell>
              {{qa.question}}
            </md-table-cell>
            <md-table-cell>
              {{qa.service_name}}
            </md-table-cell>
          </md-table-row>
        </md-table>
      </div>

      <md-toolbar>
        <h3 class="md-title" style="flex: 1">
          FAQ 詳細
        </h3>
      </md-toolbar>
      <div class="qaDetail">
        <md-table>
          <md-table-row>
            <md-table-head>
              Question
            </md-table-head>
            <md-table-cell>
              {{dQuestion}}
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-head>
              Answer
            </md-table-head>
            <md-table-cell>
              {{dAnswer}}
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-head>
              Tag
            </md-table-head>
            <md-table-cell>
              <span v-for="(tag, index) in dTags" :key="index">
                {{tag}}
              </span>
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-head>
              Update at
            </md-table-head>
            <md-table-cell>
              {{dUpdateAt}}
            </md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
  </div>

</template>

<script>
/* eslint-disable */
import config from "@/config";
import Vue from 'vue'
import axios from 'axios'
import virtualList from 'vue-virtual-scroll-list'
/* eslint-enable */

export default {
  name: 'qaListShow',
  props: [
    'sWord',
  ],
  components: {
    //qaShow,
    //sModal,
  },
  data () {
    return {
      qajson  : '',
      dQuestion: '',
      dAnswer: '',
      dUpdateAt: '',
      dTags: [],
    }
  },
  mounted: function () {
    axios
      .get('/faq/list')
      .then(response => (this.qajson = response.data))
  },
  methods :{
    setQID: function(qid) {
      this.qid = qid
    },
    setQA: function(qa) {
      this.dQuestion=qa.question
      this.dAnswer=qa.answer
      this.dUpdateAt="Last updated 3 mins ago"
      this.dTags=qa.tags
    },
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
.modal-header, .modal-body {
	padding: 5px 25px;
}
.modal-header {
	border-bottom: 1px solid #ddd;
}
.card {
  margin-bottom:10px;
  text-align: left;
}

.md-table-head {
  text-align: center;
}
.md-toolbar {
  text-align: left;
}
</style>
