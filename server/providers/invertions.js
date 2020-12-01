/**
 * Inverts texts, checks if its palindrome and returns response 
 * @param {string} text to invert  
 */
const invertText = (  
  text,  
) => {
  const nonSpacedText = text.replace(/ /g, "");
  const reversedText = reverseString(nonSpacedText);

  const inverted = {
    text: reversedText,
    palindrome: checkPalindrome(nonSpacedText, reversedText),
  };  

  return inverted;  
};

/**
 * Checks if text is the same as reversed text, to check if its a palindrome
 * @param {string} text text to check if is palindrome
 */
const checkPalindrome = (
  text,
  reversedText,
) => {
  return text === reversedText;
};

/**
 * Reverses string
 * @param {string} text to reverse
 */
const reverseString = (
  text,
) => {
  return text.replace(/ /g, "").split("").reverse().join("");
};

export {
  invertText,
}