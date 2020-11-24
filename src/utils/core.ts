export function stringsToUpperCase(name: string): string {
    return name.split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
}

export function firstLetterToLowerCase(str: string): string {
    return str[0].toLowerCase() + str.slice(1)
}
