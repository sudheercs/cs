// ═══════════════════════════════════════
// Quiz Data — 15 Graduation-Level Questions (Python Basics)
// ═══════════════════════════════════════
const quizData = [
    {
        question: "Which of the following describes Python's execution model?",
        options: [
            "It is purely compiled down to machine code before executing.",
            "It is strictly a front-end web language like HTML.",
            "It is interpreted, meaning code is processed line-by-line at runtime.",
            "It requires the JVM (Java Virtual Machine) to run."
        ],
        correct: 2,
        explanation: "Python is an interpreted language. The interpreter reads and executes the code line-by-line, which makes debugging easier but is generally slower than compiled languages like C++."
    },
    {
        question: "What is the primary advantage of Python's 'Interactive Mode'?",
        options: [
            "It permanently saves your code to the hard drive.",
            "It allows for building massive, multi-file software applications.",
            "It provides instant, line-by-line feedback without needing to write full scripts.",
            "It automatically patches logical errors in your code."
        ],
        correct: 2,
        explanation: "Interactive mode (the REPL) evaluates statements immediately and prints the result, making it perfect for testing out small snippets of logic or doing quick math."
    },
    {
        question: "In Python, which of the following is NOT a fundamental Token?",
        options: [
            "Keyword",
            "Literal",
            "Statement",
            "Identifier"
        ],
        correct: 2,
        explanation: "The 5 lexical tokens are Keywords, Identifiers, Literals, Operators, and Punctuators. A 'Statement' is constructed out of tokens; it is not a token itself."
    },
    {
        question: "Which of the following is an ILLEGAL identifier name in Python?",
        options: [
            "my_variable",
            "_hiddenData",
            "1st_Place",
            "salary2024"
        ],
        correct: 2,
        explanation: "An identifier cannot begin with a digit. Therefore, '1st_Place' violates the naming rules and will throw a SyntaxError."
    },
    {
        question: "Python is a case-sensitive language. Does this mean the identifiers 'Total' and 'total' refer to the exact same memory location?",
        options: [
            "Yes, Python ignores capitalization.",
            "No, they are treated as two entirely different identifiers.",
            "Only if they are defined on the same line.",
            "Yes, but only in Script Mode."
        ],
        correct: 1,
        explanation: "Because Python is case-sensitive, 'Total' and 'total' are read as completely separate entities."
    },
    {
        question: "What is a 'Literal' in programming?",
        options: [
            "A reserved word like 'if' or 'else'.",
            "A mathematical operator like '+'.",
            "A fixed, constant data value written directly into the code (e.g., 42 or 'Hello').",
            "A type of syntax error."
        ],
        correct: 2,
        explanation: "Literals are the raw data values that you assign to variables or use in expressions. They literally represent themselves."
    },
    {
        question: "Which of the following is a Python Keyword?",
        options: [
            "False",
            "Loop",
            "Print",
            "Integer"
        ],
        correct: 0,
        explanation: "'False' is a reserved keyword in Python for the Boolean false value (must be capitalized). 'Print' is a built-in function, but it's lowercase 'print', not capitalized. 'Loop' and 'Integer' are not keywords."
    },
    {
        question: "To write a single-line comment in Python, what character must you start with?",
        options: [
            "//",
            "/*",
            "<!--",
            "#"
        ],
        correct: 3,
        explanation: "Python uses the hash/pound symbol (#) to denote single-line comments. Everything to the right of the # is ignored by the interpreter."
    },
    {
        question: "Consider the statement: X = 50. Which of the following is true regarding L-values and R-values?",
        options: [
            "X is the R-value and 50 is the L-value.",
            "Both X and 50 are L-values.",
            "X is the L-value (memory container) and 50 is the R-value (data).",
            "Neither are L-values; this is a boolean expression."
        ],
        correct: 2,
        explanation: "The Left Value (L-value) must be an assignable memory location (like a variable 'X'). The Right Value (R-value) provides the data to be placed in that container (the literal 50)."
    },
    {
        question: "What does it mean that Python is 'Dynamically Typed'?",
        options: [
            "You must explicitly declare 'int X' before assigning a number to it.",
            "Variables can change their data type during execution (e.g., starting as an integer, then being assigned a string).",
            "The code automatically types itself as you speak into the microphone.",
            "Every variable must hold a string."
        ],
        correct: 1,
        explanation: "Dynamic typing means variables are not locked into a specific data type. A variable 'my_data' can hold an integer on line 1, and be reassigned to hold a string on line 5 without throwing an error."
    },
    {
        question: "Which token category do the symbols { } , : [ ] belong to?",
        options: [
            "Operators",
            "Literals",
            "Punctuators (Delimiters)",
            "Identifiers"
        ],
        correct: 2,
        explanation: "Punctuators/Delimiters are used to organize code structures, define lists, dictionaries, or mark the beginning of indented blocks (like the colon)."
    },
    {
        question: "If you try to run the code: 100 = score, what will happen and why?",
        options: [
            "It will set the variable 'score' to 100.",
            "SyntaxError: You cannot assign to a literal. A literal (100) cannot act as an L-value.",
            "It will run, but score will be set to 0.",
            "It will turn 100 into a string."
        ],
        correct: 1,
        explanation: "The left side of an assignment operator MUST be an L-value (a valid memory container). 100 is an R-value literal, you cannot store data 'inside' the number 100."
    },
    {
        question: "What type of literal is '3.14159' in Python?",
        options: [
            "Integer Literal",
            "Floating-Point (Numeric) Literal",
            "String Literal",
            "Complex Literal"
        ],
        correct: 1,
        explanation: "Because it contains a decimal point, it is a Floating-Point numerical literal."
    },
    {
        question: "When writing a professional Python program intended to be saved, edited, and run later, which mode should you use?",
        options: [
            "Interactive Mode",
            "Script Mode",
            "Boolean Mode",
            "Terminal Mode"
        ],
        correct: 1,
        explanation: "Script mode saves all your code into a permanent .py file on the hard drive, allowing for complex, multi-line logic and permanent storage."
    },
    {
        question: "Is 'None' a valid Keyword in Python?",
        options: [
            "No, it's just an English word.",
            "Yes, it is a reserved keyword indicating the absence of a value.",
            "No, to indicate nothing you must use 'null'.",
            "Yes, but only in Python 2."
        ],
        correct: 1,
        explanation: "None (with a capital N) is a reserved keyword in Python used to define a null variable or object."
    }
];
