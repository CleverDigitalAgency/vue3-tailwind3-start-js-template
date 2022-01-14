import { createStore } from 'vuex'
import app from '@/store/app'
import test from '@/store/test'

export default createStore({
  modules: {
    app,
    test
  },
  strict: true
})
