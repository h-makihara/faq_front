<template>
  <div class="Detail">
    <md-toolbar>
      <h4 class="md-title">
        FAQ Search in Vue Material
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
  name: 'Detail',
  components: {
    dTable,
  },
  data () {
    return {
      text: '',
      qid: '',
      qajson: {},
    }
  },
  methods: {
    setQID: function(){
      this.sWord=this.qid
      console.log("set qid is ", this.qid)
      axios
        .get('/faq/qa/' + this.qid)
        .then(response => {this.qajson = response.data});
        console.log('type of data is ', typeof(this.qajson))
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
