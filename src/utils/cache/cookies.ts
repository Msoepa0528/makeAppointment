
export const setLanguage = (value: string)=>{
    return window.localStorage.setItem('language',value)
}

export const getLanguage = ()=>{
    return window.localStorage.getItem('language')
}

export const removeLanguage = ()=>{
    return window.localStorage.removeItem('language')
}