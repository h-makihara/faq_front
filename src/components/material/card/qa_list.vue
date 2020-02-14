<template>
  <div class="qaListShow">
    <div id='app'>
      <p>get word is {{ sWord }}</p>
      <div class="bv-example-row"
           v-for="(qa, index) in qajson"
           :key="index"
           style="width: 20rem;">
        <md-card md-with-hover v-on:click="show(qa)">
          <div @click="show(qa)">

              <md-card-header>
                <div class="md-title">
                  <div class="text-justify">
                    Q. {{qa.question}}
                  </div>
                </div>
                <div class="md-subhead">
                  service: {{qa.service_name}}
                </div>
              </md-card-header>

              <md-card-content>
                <div class="text-truncate">
                  A.<br />
                  {{ qa.answer }}
                </div>
              </md-card-content>

              <md-card-footer class="text-muted">
                  Last updated 3 mins ago
              </md-card-footer>
          </div>
        </md-card>
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
  },
  data () {
    return {
      qajson  : '',
      qid     : '',
      modalqa : '',
      modal_q : '',
      modal_a : '',
      modal_s : '',
      modal_id : '',
      modal_tags: [],
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
      this.$modal.show('qa-modal', {modalqa: qa})
    },
    hide () {
      this.$modal.hide('qa-modal');
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
</style>
