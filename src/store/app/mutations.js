// eslint-disable-next-line
import * as common from '@/store/common'

const SET_WSC_STATE = (state, wscState) => {
  state.wscState = wscState
}

const NOTIFY_SNACKBAR = (state, snackbar) => {
  state.notifySnackbar = snackbar
}

const CONFIRM_SNACKBAR = (state, snackbar) => {
  state.confirmSnackbar = snackbar
}

const SET_IS_PORTRAIT = (state, isPortrait) => {
  state.isPortrait = isPortrait
}

export default {
  SET_WSC_STATE,
  NOTIFY_SNACKBAR,
  CONFIRM_SNACKBAR,
  SET_IS_PORTRAIT
}
