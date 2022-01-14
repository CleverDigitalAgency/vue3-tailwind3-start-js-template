// eslint-disable-next-line
import * as common from '@/store/common'

const NotifySnackbar = ({ commit, state }, snackbar) => {
  let notifySnackbar = { active: false, text: '', type: '', timeout: 5000 }
  if (state.notifySnackbar.active) {
    notifySnackbar = { active: false, text: '', type: '', timeout: 5000 }
    setTimeout(() => {
      notifySnackbar = snackbar && snackbar.active ? { active: true, text: snackbar.text, type: snackbar.type, timeout: snackbar.timeout || 5000 } : { active: false, text: '', type: '', timeout: 5000 }
      commit('NOTIFY_SNACKBAR', notifySnackbar)
    }, 100)
  } else {
    notifySnackbar = snackbar && snackbar.active ? { active: true, text: snackbar.text, type: snackbar.type, timeout: snackbar.timeout || 5000 } : { active: false, text: '', type: '', timeout: 5000 }
  }
  commit('NOTIFY_SNACKBAR', notifySnackbar)
}

const ShowMessage = ({ dispatch }, data) => {
  if (data.text) {
    data.active = true
    dispatch('NotifySnackbar', data)
  }
}

const ConfirmSnackbar = ({ commit, state }, snackbar) => {
  let confirmSnackbar = { active: false, text: '', cbYes: null }
  confirmSnackbar = snackbar && snackbar.active ? { active: true, text: snackbar.text, cbYes: snackbar.cbYes } : { active: false, text: '', cbYes: null }
  commit('CONFIRM_SNACKBAR', confirmSnackbar)
}

const SetIsPortrait = ({ commit }, isPortrait) => {
  commit('SET_IS_PORTRAIT', isPortrait)
}

export default {
  NotifySnackbar,
  ShowMessage,
  ConfirmSnackbar,
  SetIsPortrait
}
