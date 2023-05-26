export const setItemsToStorage=(data)=>{
    localStorage.setItem('data',JSON.stringify(data))
}
export const getItemsToStorage=(name)=>{
    return JSON.parse(localStorage.getItem(name))||[]
}