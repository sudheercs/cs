// ═══════════════════════════════════════
// Quiz Data — Flow of Control
// ═══════════════════════════════════════
const quizData = [
    {
        question: "How does Python determine which statements belong to a specific block of code (like inside an IF statement)?",
        options: [
            "By using { curly brackets }",
            "By checking for the keyword END",
            "By looking at the indentation level (whitespace)",
            "By using parenthesis ( )"
        ],
        correct: 2,
        explanation: "Python strictly relies on indentation (usually 4 spaces) to demarcate code blocks, rather than physical bracket characters."
    },
    {
        question: "Which of the following is executed top-to-bottom without skipping a single line?",
        options: [
            "Conditional Flow",
            "Sequential Flow",
            "Iterative Flow",
            "Logical Flow"
        ],
        correct: 1,
        explanation: "Sequential is the default behavior of all scripts. Execution flows straight down, processing every single line precisely once."
    },
    {
        question: "Regarding `if`, `elif`, and `else` statements, which one NEVER takes a boolean condition to evaluate?",
        options: [
            "if",
            "elif",
            "else",
            "All of them require a condition."
        ],
        correct: 2,
        explanation: "The 'else' statement acts as an absolute catch-all. It triggers automatically if all preceding conditions failed. It never has a condition attached."
    },
    {
        question: "What numbers will `range(1, 4)` generate for a loop?",
        options: [
            "1, 2, 3, 4",
            "0, 1, 2, 3, 4",
            "1, 2, 3",
            "2, 3, 4"
        ],
        correct: 2,
        explanation: "The range function starts at the start parameter, but stops ALMOST before the stop parameter. The upper bound is exclusive."
    },
    {
        question: "A 'for' loop is usually preferred when:",
        options: [
            "You know exactly how many times you want to loop / the size of the sequence.",
            "You want the loop to run indefinitely.",
            "You need to wait for user input.",
            "You want to crash the system."
        ],
        correct: 0,
        explanation: "For-loops are 'Definite Iteration', making them perfect for iterating over lists of known size or strict numeric ranges."
    },
    {
        question: "What causes a 'while' loop to become an Infinite Loop?",
        options: [
            "Using the 'break' statement.",
            "When the condition always evaluates to True and the state is never changed inside the block.",
            "When the condition evaluates to False instantly.",
            "Using range(0)."
        ],
        correct: 1,
        explanation: "If you say 'while x < 5', but you never actually increase 'x' inside the loop, the machine will run the loop forever until memory runs out."
    },
    {
        question: "What does the `continue` statement do inside a loop?",
        options: [
            "Destroys the entire loop and exits to the next line.",
            "Skips the rest of the current block and jumps straight back to the top for the next cycle.",
            "Pauses the program until the user hits enter.",
            "Bypasses an IF statement."
        ],
        correct: 1,
        explanation: "Continue says 'Abandon this specific cycle, but keep the loop alive and start the next cycle immediately'."
    },
    {
        question: "What does the `break` statement do?",
        options: [
            "Immediately kills the entire loop and exits it.",
            "Breaks the program and throws an Error.",
            "Jump to the top of the loop.",
            "Breaks a string into a list."
        ],
        correct: 0,
        explanation: "Break is the emergency exit. Regardless of the loop condition, hitting a break statement detonates the loop permanently."
    },
    {
        question: "Is it legal to put an `if` statement INSIDE another `if` statement?",
        options: [
            "No, that's a Syntax Error.",
            "Yes, this is called Nested Conditionals.",
            "Only if you use curly brackets.",
            "Yes, but you can only go 1 level deep."
        ],
        correct: 1,
        explanation: "You can nest logic infinitely deep in Python, so long as you continually push the indentation inward 4 spaces per block level."
    },
    {
        question: "Evaluate this pseudo-code logic:\n`if x == 10:\n    print('A')\nelif x > 5:\n    print('B')\nelse:\n    print('C')`\n\nIf x is 10, what prints?",
        options: [
            "A",
            "B",
            "A and B",
            "C"
        ],
        correct: 0,
        explanation: "Even though 10 is > 5... the elif ladder executes ONLY the VERY FIRST condition that fires true. The top IF grabs it, prints A, and skips the rest of the ladder entirely."
    }
];
