<template>
  <div class="searchArea">
    <md-toolbar>
      <h4 class="md-title">
        Search by QID
      </h4>
    </md-toolbar>

    <md-field>
      <label>
        QID
      </label>
      <md-input type="text"
                v-model="qid"
                v-on:keyup.enter="setQID()">
      </md-input>
    </md-field>
    <md-toolbar>
      <h4 class="md-title">
        FAQ Detail
      </h4>
    </md-toolbar>
    <dTable :qajson='qajson'></dTable>

  </div>
</template>

<script>

/* eslint-disable */
import Vue from 'vue'
import dTable from '@/components/material/common/detail_table.vue'
import axios from 'axios'
/* eslint-enable */

export default {
  name: 'searchArea',
  components: {
    dTable,
  },
  data () {
    return {
      qid: '',
      qajson: {},
    }
  },
  created: function() {
    console.log("set qid is ", this.$route.params.id)
    axios
      .get('/faq/qa/' + this.$route.params.qid)
      .then(response => {this.qajson = response.data});
      console.log('type of data is ', typeof(this.qajson))

  },
  methods: {
    setQID: function(){
      console.log("set qid is ", this.qid)
      axios
        .get('/faq/qa/' + this.qid)
        .then(response => {this.qajson = response.data});
        console.log('type of data is ', typeof(this.qajson))
      // QID を指定して遷移した場合、URLをQIDで書き換えることで
      // COPY & PASTE で URL を持ち出す人に対処する
      window.history.replaceState(null, null, this.qid);
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
.md-toolbar {
  text-align: left;
}
</style>
