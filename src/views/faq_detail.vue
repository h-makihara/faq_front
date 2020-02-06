<template>
  <div class="detail">
    <dShow></dShow>
  </div>
</template>

<script>
// @ is an alias to /src
import dShow from '@/components/material/common/detail_show.vue'

export default {
  name: 'detail',
  components: {
    dShow,
  }
}
</script>
