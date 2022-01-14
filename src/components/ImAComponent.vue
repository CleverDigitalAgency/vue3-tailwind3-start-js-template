<template>
  <div class="w-6/12 mx-auto p-2 mt-4 bg-gray-100 border border-indigo-200 rounded-lg shadow-lg">
    <div class="p-2 text-xl text-center text-indigo-400 font-bold">{{ title }}</div>
    <div class="flex w-full h-16">
      <div class="w-6/12 p-2">
        <input type="text" v-model="simple" @input="LogSimple" class="h-full appearance-none block w-full px-3 py-2 rounded-md shadow-sm border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500">
      </div>
      <div class="w-6/12 h-full p-2">
        <div class="h-full p-2 text-lg rounded-md shadow-sm border border-gray-200 bg-gray-50">{{ simple }}</div>
      </div>
    </div>
    <div class="flex w-full h-16">
      <div class="w-6/12 h-full p-2">
        <input type="text" v-model="getsetModel" @input="LogGetset" class="h-full appearance-none block w-full px-3 py-2 rounded-md shadow-sm border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500">
      </div>
      <div class="w-6/12 h-full p-2">
        <div class="h-full p-2 text-lg rounded-md shadow-sm border border-gray-200 bg-gray-50">{{ getsetModel }}</div>
      </div>
    </div>
    <div class="flex w-full h-16">
      <div class="w-6/12 p-2">
        <input type="text" v-model="vuexModel" @input="LogVuex" class="h-full appearance-none block w-full px-3 py-2 rounded-md shadow-sm border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500">
      </div>
      <div class="w-6/12 h-full p-2">
        <div class="h-full p-2 text-lg rounded-md shadow-sm border border-gray-200 bg-gray-50">{{ vuexModel }}</div>
      </div>
    </div>
    <div class="w-full p-3 flex justify-between">
      <div v-for="(item, index) in vForArray" :key="index" class="w-1/12 justify-center p-1 rounded-md shadow-sm text-center text-sm text-gray-500 bg-gray-200">
        {{ item }}
      </div>
    </div>
    <div class="w-full p-3 flex justify-between">
      <button v-if="vIfFlag" @click="vIfFlag = false" class="w-3/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 focus:outline-none active:opacity-50">
        v-if
      </button>
      <button v-else @click="vIfFlag = true" class="w-3/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none active:opacity-50">
        v-else
      </button>
      <button @click="ShowMessage({ type: 'info', text: 'Тестовое уведомление', timeout: 10000 })" class="w-3/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-400 hover:bg-sky-500 focus:outline-none active:opacity-50">
        Уведомление
      </button>
      <button @click="InitConfirm()" class="w-3/12 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-400 hover:bg-red-500 focus:outline-none active:opacity-50">
        Подтверждение
      </button>
    </div>
  </div>
</template>
<script>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'ImAComponent',
  props: {
    title: String
  },
  setup(props) {
    const store = useStore()

    // ref from prop
    const title = ref(props.title)

    // v-model with simple ref
    const simple = ref('simple')
    const LogSimple = () => {
      console.log(simple.value)
    }

    // v-model with computed - get/set
    const getset = ref('getset')
    const getsetModel = computed({
      get: () => getset.value,
      set: v => { getset.value = v }
    })
    const LogGetset = () => {
      console.log(getset.value)
    }

    // v-model with vuex - get/set
    const testGET = computed(() => store.getters['test/testGet'])
    const SetTest = v => store.dispatch('test/SetTest', v)
    const vuexModel = computed({
      get: () => testGET.value,
      set: SetTest
    })
    const LogVuex = () => {
      console.log(testGET.value)
    }

    //Demo v-for
    const vForArray = ref([])
    onMounted(() => {
      vForArray.value = []
      for (let i = 0; i < 10; i++) {
        vForArray.value.push('Val ' + i)
      }
    })

    //Demo v-if v-else
    const vIfFlag = ref(true)

    //Show system notify & system Confirm dialog
    const ShowMessage = msg => store.dispatch('app/ShowMessage', msg)
    const ConfirmSnackbar = v => store.dispatch('app/ConfirmSnackbar', v)

    //Demo system Confirm dialog
    const InitConfirm = () => {
      ConfirmSnackbar({
        text: 'Да или Нет?',
        active: true,
        cbYes: () => {
          ShowMessage({ type: 'info', text: 'Получен ответ ДА' })
        }
      })
    }

    return {
      title,
      simple,
      getsetModel,
      vuexModel,
      LogSimple,
      LogGetset,
      LogVuex,
      vForArray,
      vIfFlag,
      ShowMessage,
      InitConfirm
    }
  }
}
</script>

<style>
</style>
