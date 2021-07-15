<template>
  <div>
    404
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    useHead({
      title: 'Page not found 🦕',
    })
    return {}
  },
})
</script>
