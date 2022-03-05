import {calculator} from './calculator'

const calc = calculator();

test ("simple sum", () => {
    expect(calc.sum(2, 4)).toBe(6)
})

test ("large sum", () => {
    expect(calc.sum(1000, 450000)).toBe(451000)
})

test ("fraction sum", () => {
    expect(calc.sum(10.5, 2.5)).toBe(13)
})

test ("subtract small", () => {
    expect(calc.sub(10,2)).toBe(8)
})

test ("subtract large", () => {
    expect(calc.sub(5000,4999)).toBe(1)
})

test ("subtract negative", () => {
    expect(calc.sub(10,400)).toBe(-390)
})

test ("multiply small", () => {
    expect(calc.mul(2, 10)).toBe(20)
})

test ("multiply large", () => {
    expect(calc.mul(20, 4)).toBe(80)
})

test ("divide small", () => {
    expect(calc.div(20, 4)).toBe(5)
})

test ("div large", () => {
    expect(calc.div(200, 4)).toBe(50)
})

