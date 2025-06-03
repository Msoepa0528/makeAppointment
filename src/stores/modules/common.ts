import { pinia } from "@/stores/index"
import { defineStore } from 'pinia'
import {getLanguage,setLanguage,removeLanguage} from "@/utils/cache/cookies"
export const useCommonStore = defineStore("common", () => {
  const language = ref<string>(getLanguage() || 'zh-US')
  // 设置 Token
  const setLanguageFn = (value: string) => {
    setLanguage(value)
    language.value = value
  }
  const resetLanguageFn = () => {
    removeLanguage()
    language.value = ""
  }

  return { language,setLanguageFn,resetLanguageFn }
})


/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useCommonStoreOutside() {
  return useCommonStore(pinia)
}