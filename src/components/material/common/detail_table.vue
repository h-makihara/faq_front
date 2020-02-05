<template>
  <div class="dTable">
    <md-table>
      <md-table-row>
        <md-table-head>
          Question
        </md-table-head>
        <md-table-cell>
          {{qajson.QID}}
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-head>
          Answer
        </md-table-head>
        <md-table-cell>
          {{qajson.answer}}
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-head>
          Tag
        </md-table-head>
        <md-table-cell>
          <span v-for="(tag, index) in qajson.tag" :key="index">
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
</template>

<script>
export default {
  name: 'dTable',
  components: {
  },
  props :[
    'qajson',
  ],
  data () {
    return {
      dQuestion: '',
      dAnswer: '',
      dUpdateAt: '3 minites age',
      dTags: [],
    }
  },
  methods: {
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
