import {caesarCipher} from './caesarCipher'

const cipher = caesarCipher()

test ("simple word", () => {
    expect(cipher.encrypt("word")).toBe("btwi")
})

test ("another word", () => {
    expect(cipher.encrypt("simple")).toBe("xnruqj")
})

test ("a third word", () => {
    expect(cipher.encrypt("stuff")).toBe("xyzkk")
})

test ("a sentance", () => {
    expect(cipher.encrypt("this is stuff")).toBe("ymnx nx xyzkk")
})

test ("caps word", () => {
    expect(cipher.encrypt("COOL")).toBe("HTTQ")
})

test ("caps word near end", () => {
    expect(cipher.encrypt("WAZUP")).toBe("BFEZU")
})

test (" word near end", () => {
    expect(cipher.encrypt("wazup")).toBe("bfezu")
})

test ("mixed caps sentance", () => {
    expect(cipher.encrypt("wazup Hi therE")).toBe("bfezu Mn ymjwJ")
})

test ("mixed caps sentance with punctuation", () => {
    expect(cipher.encrypt("wazup. Hi therE")).toBe("bfezu. Mn ymjwJ")
})