
function capitalize(input) {
    let array = input.split('')
    let first = array.shift();
    array.unshift(first.toUpperCase());
    let result = array.join('');

    return result
}

export {capitalize}