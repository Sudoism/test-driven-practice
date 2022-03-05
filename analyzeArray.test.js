import {analyzeArray} from './analyzeArray'

test ("first example", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
});

test ("another example", () => {
    expect(analyzeArray([1,1,1])).toStrictEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 3
    })
});

test ("a third example", () => {
    expect(analyzeArray([2,2,2,2,2])).toStrictEqual({
        average: 2,
        min: 2,
        max: 2,
        length: 5
    })
});

