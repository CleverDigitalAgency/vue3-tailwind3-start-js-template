// eslint-disable-next-line
import * as common from '@/store/common'

const notifySnackbarGet = (state) => {
  return state.notifySnackbar
}

const confirmSnackbarGet = (state) => {
  return state.confirmSnackbar
}

const isPortraitGet = (state) => {
  return state.isPortrait
}

export default {
  notifySnackbarGet,
  confirmSnackbarGet,
  isPortraitGet
}
