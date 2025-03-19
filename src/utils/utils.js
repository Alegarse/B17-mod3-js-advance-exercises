export function capitalizeString(string) {
    let arrayString = string.toLowerCase().split('');
    arrayString[0] = arrayString[0].toUpperCase()
    return arrayString.join('')
}