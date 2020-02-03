<template>
  <div class="show">
    この部分は見た目を比較するためにテストフォルダを掘って編集しています
    <qaSearch></qaSearch>
  </div>
</template>

<script>
// @ is an alias to /src
import qaSearch from '@/components/test/qa_search.vue'

export default {
  name: 'show',
  components: {
    qaSearch,
  }
}
</script>
