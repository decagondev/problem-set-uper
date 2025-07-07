# Most Repeated Word Problem

## 🎯 Problem Description

Write a function `getMostRepeatedWord` that finds the most repeated word in a string and returns both the word and its count.

### Requirements:
- Find the word that appears most frequently in the given string
- Return the result in format: `"word: count"` (e.g., `"hello: 3"`)
- If no word is repeated, return the **first word** with count 1
- **Case insensitive**: "Hello" and "hello" are the same word
- **Ignore punctuation**: Remove these characters: `. , ? : ! ; "`
- Handle empty or invalid input gracefully

### Example:
```javascript
Input: "Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on."
Output: "wasted: 2"

Input: "Hello world how are you"
Output: "hello: 1"  // First word since no repeats

Input: "The the THE"
Output: "the: 3"  // Case insensitive
```

---

## 🔍 The UPER Method

UPER is a systematic approach to problem-solving that helps you break down complex problems into manageable steps:

### **U - Understand**
- **What** is the problem asking for?
- **What** are the inputs and expected outputs?
- **What** are the constraints and edge cases?
- **What** examples can help clarify the requirements?

### **P - Plan**
- **How** will you approach this problem?
- **What** data structures or algorithms might be useful?
- **What** are the steps in your solution?
- **What** is the time/space complexity?

### **E - Execute**
- **Write** the code based on your plan
- **Start** with a simple solution, then optimize
- **Test** your solution with the given examples
- **Debug** any issues that arise

### **R - Reflect**
- **What** worked well in your solution?
- **What** could be improved?
- **What** did you learn from this problem?
- **How** could you optimize further?

---

## 📝 Your Task

1. **Fork/Clone** this repository
2. **Open** `solution.js` and implement the `getMostRepeatedWord` function
3. **Follow** the UPER methodology - use the template in `UPER_TEMPLATE.md`
4. **Test** your solution by running `npm test` or opening `test.html` in a browser
5. **Document** your thought process in the UPER template

---

## 🧪 Testing Your Solution

### Setup (Required for Node.js testing)
If you plan to use Node.js testing, first install the dependencies:
```bash
npm install
```

### Option 1: Browser Testing
1. Open `test.html` in your web browser
2. Open the browser's developer console (F12)
3. You'll see test results showing which tests pass/fail

### Option 2: Node.js Testing (if you have Node installed)
```bash
npm test
```

### Test Cases Included:
- ✅ Basic functionality with repeated words
- ✅ No repeated words (return first word)
- ✅ Case insensitivity
- ✅ Punctuation handling
- ✅ Edge cases (empty string, only punctuation, etc.)

---

## 📊 Complexity Goals

Try to achieve:
- **Time Complexity**: O(n) where n is the number of characters
- **Space Complexity**: O(w) where w is the number of unique words

---

## 💡 Hints (Read only if stuck!)

<details>
<summary>Hint 1: Data Structure</summary>

Think about using a hash map (JavaScript object or Map) to count word frequencies efficiently.

</details>

<details>
<summary>Hint 2: String Processing</summary>

Consider using methods like:
- `split()` to break text into words
- `replace()` or regex to remove punctuation  
- `toLowerCase()` for case insensitivity

</details>

<details>
<summary>Hint 3: Algorithm Approach</summary>

1. Clean and split the input string
2. Count frequency of each word
3. Find the word with maximum frequency
4. Handle the "first word" case when no repeats exist

</details>

---

## 🎓 Learning Objectives

After completing this problem, you should understand:
- Hash map applications for counting problems
- String manipulation in JavaScript
- Edge case handling in algorithm design
- Time and space complexity analysis
- The UPER problem-solving methodology

---

## 📁 Repository Structure

```
most-repeated-word/
├── README.md           # This file
├── solution.js         # Your implementation goes here
├── test.js             # Test cases
├── test.html           # Browser-based testing
├── UPER_TEMPLATE.md    # Template for your thought process
└── package.json        # npm configuration
```

---

## 🚀 Getting Started

1. Read through this README completely
2. Look at the starter code in `solution.js`
3. Use `UPER_TEMPLATE.md` to organize your thinking
4. Implement your solution step by step
5. Test frequently and iterate

**Good luck, and remember: the journey of problem-solving is just as important as the destination!** 🎯
