<template>
  <div class="show">
    Vue Material のテーブル表示用
    <qaSearch></qaSearch>
  </div>
</template>

<script>
// @ is an alias to /src
import qaSearch from '@/components/material/table/qa_search.vue'

export default {
  name: 'show',
  components: {
    qaSearch,
  }
}
</script>
