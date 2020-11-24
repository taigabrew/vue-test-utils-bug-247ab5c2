<template>
  <MultiSelect
    v-model="selected"
    v-bind="{
      options: [
        { id: 'a', name: 'AAA' },
        { id: 'b', name: 'BBB' },
      ],
    }"
  />
  {{ selected }}
</template>

<script>
import { ref } from 'vue'
import MultiSelect from './components/MultiSelect.vue'

export default {
  name: 'App',
  components: {
    MultiSelect,
  },
  setup() {
    const selected = ref([])

    return { selected }
  },
}
</script>
