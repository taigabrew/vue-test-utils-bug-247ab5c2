<template>
  <div>
    <div v-for="item in options" :key="item.id">
      <label :for="item.id">
        <input
          :id="item.id"
          type="checkbox"
          :checked="modelValue.includes(item.id)"
          :value="item.id"
          @change="update"
        />
        {{ item.name }}
      </label>
    </div>
  </div>
</template>

<script>
import { watch } from 'vue'

export default {
  name: 'MultiSelect',
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    function update(event) {
      const val = event.target.value

      const payload = event.target.checked
        ? [...props.modelValue, val]
        : props.modelValue.filter(x => x !== val)

      console.log('update:modelValue', payload)
      emit('update:modelValue', payload)
    }

    return { update }
  },
}
</script>
