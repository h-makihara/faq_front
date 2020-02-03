<template>
  <div class="show">
    <qaSearch></qaSearch>
    <!---
    <qaList></qaList>
		<qaShow></qaShow>
		--->
    <qaRelation msg="Welcome to FAQ world"/>
  </div>
</template>

<script>
// @ is an alias to /src
import qaRelation from '@/components/faq_component.vue'
//import qaList from '@/components/qa_list.vue'
//import qaShow from '@/components/qa_show.vue'
import qaSearch from '@/components/qa_search.vue'

export default {
  name: 'show',
  components: {
		qaSearch,
    //qaList,
    //qaShow,
    qaRelation
  }
}
</script>
