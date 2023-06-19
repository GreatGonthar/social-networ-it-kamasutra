export const required = value => {
    if (value){
        return undefined
    }
    return "поле обязательно к заполнению"
}

export const maxLength = numb => value => {
    if (value && value.length > numb){
        return `символов больше ${numb}`
    }
    return undefined
}
