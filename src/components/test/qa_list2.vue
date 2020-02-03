<template>
  <div class="qaListShow">
    このファイルは画面比較用テストファイルです
    <div id='app'>
      <p>get word is {{ sWord }}</p>
      <div class="bv-example-row"
           v-for="(qa, index) in qajson"
           :key="index"
           style="width: 20rem;">
              <!---
        <div class="card" data-toggle="modal" data-target="#exampleModal">
              --->
        <div class="card" v-on:click="show(qa)" >
          <div class="card-body">
            <h5 class="card-header bg-transparent">Q. {{qa.question}}</h5>
            <div class="card-body text-primary">
              <p class="card-text">A.<br /> {{ qa.answer }}</p>
            </div>
            <div class="card-footer bg-transparent border-success">
              <h6 class="card-title">service: {{qa.service_name}}</h6>
              <small class="text-muted">Last updated 3 mins ago</small>
              <!---
              <a href="#" class="card-link">Another link</a>
              --->
            </div>
          </div>
        </div>
      </div>
      <modal height="auto"
             :scrollable="true"
             name="hello-world"
             :draggable="true"
             :resizable="true"
             @before-open="beforeOpen">
        <div class="modal-header">
          <h2>Question : {{modal_q}}</h2>
        </div>
        <div class="modal-body">
          <p>A: <br />{{modal_a}}</p>
          <small>Service: {{modal_s}}</small><br />
          <small>QID: {{modal_id}}</small><br />
          <small>Tags:
            <span class="modalTag" v-for="(tag, index) in modal_tags" :key="index" >
              {{tag}}
            </span>
          </small><br /><br />
          <button v-on:click="hide">閉じる</button>
        </div>
      </modal>
      <!---
      <qaShow :qid='qid' :qajson='qajson'></qaShow>

      <sModal :qa='qa'></sModal>
      -->
    </div>
  </div>

</template>

<script>
/* eslint-disable */
import config from "@/config";
import Vue from 'vue'
import axios from 'axios'
import qaShow from '@/components/qa_show.vue'
import sModal from '@/components/test/modal.vue'
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
      qid     : '',
      modalqa : '',
      modal_q : '',
      modal_a : '',
      modal_s : '',
      modal_id : 0,
      modal_view: false,
    }
  },
  mounted: function () {
    axios
      .get('/faq/list')
      .then(response => (this.qajson = response.data))
  },
  methods :{

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
      this.$modal.show('hello-world', {modalqa: qa})
    },
    hide () {
      this.$modal.hide('hello-world');
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
.card {
  margin-bottom:10px;
  text-align: left;
}

.modalTag {
  padding: 1px;
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 3px;
  background: #f0f7ff;
  border: dashed 2px #5b8bd0;
}
</style>
