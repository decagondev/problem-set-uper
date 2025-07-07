let getMostRepeatedWord;
if (typeof module !== 'undefined' && module.exports) {
    getMostRepeatedWord = require('./solution.js');
}

function runTests() {
    const tests = [
        {
            name: "Example from problem description",
            input: "Almost nothing was more annoying than having our wasted time wasted on something not worth wasting it on.",
            expected: "wasted: 2",
            description: "Should find 'wasted' appears 2 times"
        },
        
        {
            name: "No repeated words",
            input: "Hello world how are you",
            expected: "hello: 1",
            description: "Should return first word when no repeats"
        },
        
        {
            name: "Case insensitive counting",
            input: "The the THE",
            expected: "the: 3",
            description: "Should treat different cases as same word"
        },
        
        {
            name: "Mixed case with repeats",
            input: "Hello HELLO hello World",
            expected: "hello: 3",
            description: "Should count mixed case correctly"
        },
        
        {
            name: "Punctuation removal",
            input: "test, test! test? test.",
            expected: "test: 4",
            description: "Should ignore punctuation when counting"
        },
        
        {
            name: "Complex punctuation",
            input: '"Hello," she said. "Hello!" he replied.',
            expected: "hello: 2",
            description: "Should handle quotes and multiple punctuation"
        },
        
        {
            name: "Empty string",
            input: "",
            expected: "",
            description: "Should handle empty string"
        },
        
        {
            name: "Single word",
            input: "onlyword",
            expected: "onlyword: 1",
            description: "Should handle single word"
        },
        
        {
            name: "Only punctuation",
            input: "!@#$%^&*()",
            expected: "",
            description: "Should handle string with only punctuation"
        },
        
        {
            name: "Multiple spaces",
            input: "word    word     word",
            expected: "word: 3",
            description: "Should handle multiple spaces between words"
        },
        
        {
            name: "Long sentence with multiple repeats",
            input: "The quick brown fox jumps over the lazy dog. The dog was not that lazy.",
            expected: "the: 3",
            description: "Should find most frequent word in complex sentence"
        },
        
        {
            name: "Tie - return first occurrence",
            input: "apple banana apple banana cherry",
            expected: "apple: 2",
            description: "When tied, should return word that appeared first"
        },
        
        {
            name: "Same word many times",
            input: "test test test test test",
            expected: "test: 5",
            description: "Should count many repetitions correctly"
        }
    ];
    
    console.log("🧪 Running Tests for getMostRepeatedWord\n");
    console.log("=" * 50);
    
    let passed = 0;
    let failed = 0;
    
    tests.forEach((test, index) => {
        try {
            const result = getMostRepeatedWord(test.input);
            const success = result === test.expected;
            
            if (success) {
                console.log(`✅ Test ${index + 1}: ${test.name}`);
                console.log(`   Input: "${test.input}"`);
                console.log(`   Expected: "${test.expected}"`);
                console.log(`   Got: "${result}"`);
                console.log(`   ✓ ${test.description}\n`);
                passed++;
            } else {
                console.log(`❌ Test ${index + 1}: ${test.name}`);
                console.log(`   Input: "${test.input}"`);
                console.log(`   Expected: "${test.expected}"`);
                console.log(`   Got: "${result}"`);
                console.log(`   ✗ ${test.description}\n`);
                failed++;
            }
        } catch (error) {
            console.log(`💥 Test ${index + 1}: ${test.name}`);
            console.log(`   Error: ${error.message}`);
            console.log(`   Input: "${test.input}"`);
            console.log(`   ✗ ${test.description}\n`);
            failed++;
        }
    });
    
    console.log("=" * 50);
    console.log(`📊 Test Results: ${passed} passed, ${failed} failed`);
    
    if (failed === 0) {
        console.log("🎉 All tests passed! Great job!");
    } else {
        console.log(`🔧 ${failed} test(s) need attention. Keep debugging!`);
    }
    
    return { passed, failed, total: tests.length };
}

if (typeof module !== 'undefined' && module.exports) {
    runTests();
} else {
    window.runTests = runTests;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { runTests };
}
