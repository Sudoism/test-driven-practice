import {reverseString} from './reverseString'

test ("One word", () => {
    expect(reverseString("one")).toBe("eno");
})

test ("Another word", () => {
    expect(reverseString("two")).toBe("owt");
})

test ("A phrase", () => {
    expect(reverseString("this is a sentance")).toBe("ecnatnes a si siht");
})