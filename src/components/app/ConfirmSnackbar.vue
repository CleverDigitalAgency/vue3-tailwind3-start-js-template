<template>
  <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-2 pointer-events-none" style="z-index: 1000;">
    <div class="w-full flex flex-col items-center space-y-4">
      <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0" enter-to-class="translate-y-0 opacity-100" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="confirmSnackbarActive" class="max-w-sm w-full shadow-lg bg-indigo-500 rounded-lg pointer-events-auto overflow-hidden">
          <div class="p-4">
            <div class="ml-3 py-1">
              <p class="text-sm text-white">
                {{ confirmSnackbarGET.text }}
              </p>
            </div>
            <div class="text-right pt-4">
              <button @click="ConfirmSnackbar()" class="p-1 mx-2 w-16 text-center bg-sky-300 rounded-md text-white focus:outline-none active:opacity-50">
                НЕТ
              </button>
              <button @click="SetYes" class="p-1 mx-2 w-16 text-center bg-red-400 rounded-md text-white focus:outline-none active:opacity-50">
                ДА
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
  },
  setup() {
    const store = useStore()
    const confirmSnackbarGET = computed(() => store.getters['app/confirmSnackbarGet'])
    const confirmSnackbarActive = computed(() => confirmSnackbarGET.value.active)
    const ConfirmSnackbar = v => store.dispatch('app/ConfirmSnackbar', v)

    const SetYes = () => {
      if (typeof confirmSnackbarGET.value.cbYes === 'function') {
        confirmSnackbarGET.value.cbYes()
      }
      ConfirmSnackbar()
    }

    return {
      confirmSnackbarGET,
      confirmSnackbarActive,
      ConfirmSnackbar,
      SetYes
    }
  },
}
</script>
