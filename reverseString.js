
function reverseString(input) {

    let array = input.split("");
    let result = []

    for (let i = 0 ; i < input.length ; i++){
        result.push(array.pop());
    }

    return result.join("")
}

export {reverseString}