
const calculator = () => {
    const sum = (x, y) => {
        return x+y
    }

    const sub = (x, y) => {
        return x-y
    }
    
    const mul = (x, y) => {
        return x*y;
    }

    const div = (x, y) => {
        return x/y;
    }
    
    return {sum, sub, mul, div}
};

export {calculator}