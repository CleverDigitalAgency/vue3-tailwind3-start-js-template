// eslint-disable-next-line
import * as common from '@/store/common'


const SetTest = ({ commit }, testData) => {
  commit('SET_TEST', testData)
}

export default {
  SetTest
}
