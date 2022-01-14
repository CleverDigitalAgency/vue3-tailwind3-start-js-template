import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  notifySnackbar: { active: false, text: '', type: '', timeout: 5000 },
  confirmSnackbar: { active: false, text: '', cbYes: null }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
