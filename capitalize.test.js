import {capitalize} from './capitalize.js'

test ('One word', () => {
    expect(capitalize("hi")).toBe("Hi")
})

test ('Another word', () => {
    expect(capitalize("someone")).toBe("Someone")
})

test ('a sentance', () => {
    expect(capitalize("this is a sentence")).toBe("This is a sentence")
})

test ('already capitalized', () => {
    expect(capitalize("Capital")).toBe("Capital")
})