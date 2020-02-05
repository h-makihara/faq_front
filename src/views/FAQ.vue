<template>
  <div class="show">
    <qaSearch></qaSearch>
    <qaRelation msg="Welcome to FAQ world"/>
  </div>
</template>

<script>
// @ is an alias to /src
import qaRelation from '@/components/faq_component.vue'
import qaSearch from '@/components/qa_search.vue'

export default {
  name: 'show',
  components: {
    qaSearch,
    qaRelation
  }
}
</script>
