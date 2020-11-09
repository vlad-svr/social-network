export function userNameToUpperCase(name) {
    return name.split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
}
