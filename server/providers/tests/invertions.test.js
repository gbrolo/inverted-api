import { expect } from 'chai'
import { checkPalindrome, reverseString } from '../invertions'

describe("Reverse string", () => {
  it("reverses string test", () => {
    const reversed = reverseString("test")
    expect(reversed).to.eql("tset")
  })
})

describe("Test palindrome", () => {
  it("tests if string bob is palindrome", () => {
    const text = "bob"
    const reversed = reverseString("bob")    
    const palindrome = checkPalindrome(text, reversed)
    expect(palindrome).to.eql(true)
  })
})