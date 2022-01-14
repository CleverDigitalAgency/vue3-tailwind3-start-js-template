<template>
  <div class="w-screen min-h-screen">
    <site-header></site-header>
    <router-view class="mb-20"/>
    <site-footer></site-footer>
    <notify-snackbar></notify-snackbar>
    <confirm-snackbar></confirm-snackbar>
  </div>
</template>
<script>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useStore } from 'vuex'
import NotifySnackbar from '@/components/app/NotifySnackbar.vue'
import ConfirmSnackbar from '@/components/app/ConfirmSnackbar.vue'
import SiteHeader from '@/components/site/SiteHeader.vue'
import SiteFooter from '@/components/site/SiteFooter.vue'

export default {
  components: {
    NotifySnackbar,
    ConfirmSnackbar,
    SiteHeader,
    SiteFooter
  },
  setup() {
    const store = useStore()
    const SetIsPortrait = isPortrait => store.dispatch('app/SetIsPortrait', isPortrait)

    onMounted(() => {
      SetIsPortrait(window.innerWidth < window.innerHeight)
      window.addEventListener('resize', () => {
        SetIsPortrait(window.innerWidth < window.innerHeight)
      })
    })

    return {
    }
  }
}
</script>

<style>
</style>
