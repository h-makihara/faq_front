<template>
      <div class="modal fade"
           id="exampleModal"
           tabindex="-1"
           role="dialog"
           aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title{{qa}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {{qa}}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
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


export default{
  name: 'modal fade',
  props: [
    'qa',
  ],
  data () {
    return {
      question: '',
      answer: ''
    }
  },
}
