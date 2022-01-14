<template>
  <header class="w-full h-20">
    <div class="w-full h-full p-2 border border-gray-200 bg-gray-100 text-center text-xl text-gray-500 font-bold">
      Site Header
      <div class="p-1 text-center">
        <a href="/" class="mx-2 text-sm text-indigo-500 hover:underline">Главная</a>
        <a href="/test" class="mx-2 text-sm text-indigo-500 hover:underline">Тестовая</a>
      </div>
    </div>
 </header>
</template>

<script>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
  },
  setup() {

  return {
    }
  }
}
</script>

<style>
</style>
