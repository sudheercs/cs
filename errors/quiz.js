// ═══════════════════════════════════════
// Quiz Data — Python Errors
// ═══════════════════════════════════════
const quizData = [
    {
        question: "Which type of error prevents the Python interpreter from executing even a single line of your code?",
        options: [
            "Logical Error",
            "Run-time Error",
            "Syntax Error",
            "Execution Error"
        ],
        correct: 2,
        explanation: "Syntax errors are caught during the 'parsing' phase before execution begins. If grammar rules are broken, Python refuses to start."
    },
    {
        question: "A program runs smoothly from start to finish without generating any error messages, but the final mathematical output is completely wrong. What type of bug is this?",
        options: [
            "Semantic / Logical Error",
            "Indentation Error",
            "Run-time Error",
            "ValueError"
        ],
        correct: 0,
        explanation: "Logical errors do not crash programs. The computer flawlessly executes the flawed human logic you provided it (like adding instead of subtracting)."
    },
    {
        question: "You attempt to write a loop but forget the colon at the end: `for x in range(10)` \nWhat error will this generate?",
        options: [
            "SyntaxError: Expected ':'",
            "NameError",
            "ZeroDivisionError",
            "Logical Error"
        ],
        correct: 0,
        explanation: "Missing punctuation like colons, brackets, and parentheses are strict grammatical infractions, triggering a SyntaxError."
    },
    {
        question: "Examine this code:\n`password = input('Enter code:')`\n`num_pass = int(password)`\n\nIf the user types the letters 'ABC', what happens?",
        options: [
            "The program converts 'ABC' to ASCII logic.",
            "The program crashes with a Run-time ValueError.",
            "The program skips the line.",
            "A SyntaxError is thrown before the program starts."
        ],
        correct: 1,
        explanation: "The grammar is perfectly fine, so it's not a Syntax error. The crash happens DURING run-time because 'ABC' is an impossible literal for base-10 integer conversion."
    },
    {
        question: "Examine this code:\n`print( 'My name is ' + username )`\n\nIf the variable 'username' was never created, what happens?",
        options: [
            "A Run-time NameError is triggered.",
            "A Syntax Error is triggered.",
            "It prints 'My name is null'.",
            "A Logical Error occurs."
        ],
        correct: 0,
        explanation: "Attempting to access a variable or function that does not exist in memory generates a Run-time NameError at the exact moment the line is executed."
    },
    {
        question: "Which of the following is an example of a Logical Error?",
        options: [
            "Misspelling 'print' as 'prnt'.",
            "Forgetting to indent an if-statement block.",
            "Dividing a number by zero.",
            "Using `average = a + b / 2` instead of `average = (a + b) / 2`."
        ],
        correct: 3,
        explanation: "Failing to use parentheses for precedence rules results in perfectly executable code that yields the mathematically incorrect answer. This is a logic flaw."
    },
    {
        question: "Are IndentationErrors classified as Syntax Errors or Run-time Errors?",
        options: [
            "Run-time Errors, because indentation changes while running.",
            "Syntax Errors, because whitespace is a strict grammar rule in Python.",
            "Logical Errors, because it changes code blocks.",
            "Neither, they are ignored."
        ],
        correct: 1,
        explanation: "In Python, indentation governs code structure (instead of {} brackets). Therefore, breaking indentation rules is a lethal Syntax Error."
    }
];
