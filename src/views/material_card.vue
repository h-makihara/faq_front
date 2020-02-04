<template>
  <div class="show">
    Vue Material のCard表示用
    <qaSearch></qaSearch>
  </div>
</template>

<script>
// @ is an alias to /src
import qaSearch from '@/components/material/card/qa_search.vue'

export default {
  name: 'show',
  components: {
    qaSearch,
  }
}
</script>
