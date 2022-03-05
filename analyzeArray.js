function analyzeArray(array) {
    let object = {}

    function getMin(array) {
        let min = array[0]
        for(let i=0; i<array.length; i++) {
            if(array[i]<min){
                min = array[i]
            }

        }
        return min
    }

    function getMax(array) {
        let max = array[0]
        for(let i=0; i<array.length; i++) {
            if(array[i]>max){
                max = array[i]
            }

        }
        return max
    }

    function getLength(array) {
        return array.length
    }

    function getAverage(array) {
        let sum = 0;

        for(let i=0; i<array.length;i++) {
            sum += array[i]
        }
        
        return sum / array.length

    }

    object.average = getAverage(array);
    object.length = getLength(array);
    object.max = getMax(array);
    object.min = getMin(array);

    return object
}


export {analyzeArray}