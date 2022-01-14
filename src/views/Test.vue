<template>
  <main>
    <div class="w-full p-4 text-center text-2xl text-indigo-400 font-bold">
      Test Page
    </div>
    <im-a-component :title="'Im A Component'"></im-a-component>
 </main>
</template>

<script>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useStore } from 'vuex'
import ImAComponent from '../components/ImAComponent.vue'

export default {
  components: {
    ImAComponent
  },
  setup() {

  return {
    }
  }
}
</script>

<style>
</style>
