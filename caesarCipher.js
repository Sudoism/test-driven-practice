const caesarCipher = () => {
    let shiftSize = 5;

    const encrypt = (input) => {
        let array = input.split("");
        let result = [];
        let value = ""

        for(let i=0; i < array.length; i++){
            value = shiftCharacter(array[i])
            result.push(value)
        }

        return result.join("")
    }

    const shiftCharacter = (ch) => {
        let val = ch.charCodeAt(0);

        //ignore space and punctuation
        if(val === 32 || val === 46) {
            return String.fromCharCode(val);
        }
        let newVal = val+shiftSize
        if(val>96 && val<124) {
            while(newVal>123){
                newVal = 96+(newVal%122)
            }
        }

        if(val>64 && val<91) {
            while(newVal>90){
                newVal = 64+(newVal%90)
            }

        }
        return String.fromCharCode(newVal);
    }

    return {encrypt}

}

export {caesarCipher}