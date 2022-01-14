<template>
  <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-2 pointer-events-none">
    <div class="w-full flex flex-col items-center space-y-4">
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="notifySnackbarActive" :class="'bg-' + notifySnackbarColor" class="max-w-sm w-full shadow-lg rounded-lg pointer-events-auto overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="ml-3 w-0 flex-1 py-1">
                <p class="text-sm text-white">
                  {{ notifySnackbarGET.text }}
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button @click="NotifySnackbar()" class="-mt-5 -mr-2 rounded-md inline-flex text-white focus:outline-none text-3xl active:opacity-50 rotate-45">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="bg-sky-500 bg-green-500 bg-amber-400 bg-red-500 hidden"></div>
    </div>
  </div>
</template>

<script>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
  },
  setup() {
    const store = useStore()
    const notifySnackbarGET = computed(() => store.getters['app/notifySnackbarGet'])
    const notifySnackbarActive = computed(() => notifySnackbarGET.value.active)
    const notifySnackbarColor = computed(() => {
      const colors = {
        info: 'sky-500',
        success: 'green-500',
        warning: 'amber-400',
        error: 'red-500'
      }
      return colors[notifySnackbarGET.value.type] || colors.info
    })
    const NotifySnackbar = v => store.dispatch('app/NotifySnackbar', v)

    let timer
    watch(notifySnackbarActive, () => {
      if (notifySnackbarActive.value) {
        clearTimeout(timer)
        timer = setTimeout(NotifySnackbar, notifySnackbarGET.value.timeout || 5000)
      } else {
        clearTimeout(timer)
      }
    })

    return {
      notifySnackbarGET,
      notifySnackbarActive,
      notifySnackbarColor,
      NotifySnackbar
    }
  },
}
</script>
