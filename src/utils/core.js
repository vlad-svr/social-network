export function stringsToUpperCase(name) {
    return name.split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
}

export function firstLetterToLowerCase(str) {
    return str[0].toLowerCase() + str.slice(1)
}
