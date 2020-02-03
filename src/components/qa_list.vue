<template>
  <div class="qaListShow">
    <div id='app'>
      <table id="vforTest" class="table table-hover">
        <thead class ="thead-dark">
          <tr>
            <th>
              Question
            </th>
            <th>
              Service
            </th>
          </tr>
        </thead>
        <tbody v-for="(qa, index) in qajson" :key="index">
          <tr @click="setQID(qa.QID)">
            <td>
                {{ qa.question }}
            </td>
            <td>
                {{ qa.service_name }}
            </td>
          </tr>
        </tbody>
      </table>
      <p>get word is {{ sWord }}</p>




      <qaShow :qid='qid' :qajson='qajson'></qaShow>


    </div>
  </div>

</template>

<script>
/* eslint-disable */
import config from "@/config";
import Vue from 'vue'
import axios from 'axios'
import VModal from 'vue-js-modal'
import qaShow from '@/components/qa_show.vue'
import virtualList from 'vue-virtual-scroll-list'
/* eslint-enable */

export default {
  name: 'qaListShow',
	props: [
		'sWord',
	],
	components: {
		qaShow,
	},
  data () {
    return {
      qajson  : '',
			qid     : '',
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
.modal-header, .modal-body {
	padding: 5px 25px;
}
.modal-header {
	border-bottom: 1px solid #ddd;
}
</style>
