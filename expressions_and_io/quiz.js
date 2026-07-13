// ═══════════════════════════════════════
// Quiz Data — Expressions & I/O
// ═══════════════════════════════════════
const quizData = [
    {
        question: "Which of the following describes an Expression?",
        options: [
            "An instruction that commands Python to loop.",
            "A combination of values and operators that evaluates to a single value.",
            "A variable assignment like x = 10.",
            "An import command."
        ],
        correct: 1,
        explanation: "Expressions always 'boil down' to a discrete value that can be printed or evaluated. Variable assignment (x = 10) is a Statement, not an expression."
    },
    {
        question: "Which of these is considered a STATEMENT in Python?",
        options: [
            "5 * 2 + 10",
            "len('Hello')",
            "import math",
            "True and False"
        ],
        correct: 2,
        explanation: "'import math' is an instruction given to the interpreter to load a module. It does not return a mathematical or logical value, making it a Statement."
    },
    {
        question: "In the expression `15 + 4 * 2 ** 3 // 2`, which operation executes FIRST?",
        options: [
            "15 + 4 (Addition)",
            "4 * 2 (Multiplication)",
            "2 ** 3 (Exponentiation)",
            "3 // 2 (Floor Division)"
        ],
        correct: 2,
        explanation: "Exponentiation (**) holds the highest precedence in Python mathematics, barring parentheses."
    },
    {
        question: "What is Implicit Type Conversion?",
        options: [
            "When the programmer uses int().",
            "When Python automatically converts data types during evaluation to prevent data loss.",
            "When a string is converted to a boolean.",
            "When input() returns a string."
        ],
        correct: 1,
        explanation: "Implicit means 'implied without being explicitly stated'. Python automatically coerces lower types (ints) to higher types (floats) behind the scenes."
    },
    {
        question: "What is the danger of Explicit Type Casting using `int()` on a Float?",
        options: [
            "It will round the number up incorrectly.",
            "It completely truncates the decimal portion, resulting in data loss.",
            "It converts it to a String instead.",
            "It crashes the program."
        ],
        correct: 1,
        explanation: "int(3.99) yields 3. It chops off the decimal portion regardless of rounding rules."
    },
    {
        question: "If 10.5 is added to 5, what type is the result?",
        options: [
            "<class 'int'>",
            "<class 'str'>",
            "<class 'float'>",
            "<class 'bool'>"
        ],
        correct: 2,
        explanation: "Implicit type conversion steps in: Python sees a float and an integer. It upscales the integer (5) to a float (5.0) to prevent data loss."
    },
    {
        question: "What is the return type of ALL data submitted via the `input()` function?",
        options: [
            "String",
            "Integer",
            "Float",
            "Whatever the user typed."
        ],
        correct: 0,
        explanation: "The input() function ALWAYS returns a string, even if the user typed numbers. It must be cast explicitly to be used in math."
    },
    {
        question: "Consider this code:\nx = input('Num1: ')\ny = input('Num2: ')\nprint(x + y)\nIf the user types 5 and 4, what is the output?",
        options: [
            "9",
            "5 4",
            "54",
            "Error"
        ],
        correct: 2,
        explanation: "Because input() yields strings, Python treats it as '5' + '4'. The plus sign acts as a concatenator for strings, stitching them into '54'."
    },
    {
        question: "What does `sep='-'` do in a print function?",
        options: [
            "Prints a dash at the end of the line.",
            "Replaces the default space between multiple arguments with a dash.",
            "Subtracts the printed numbers.",
            "Splits the string inside the print."
        ],
        correct: 1,
        explanation: "The 'sep' (separator) arguments defines how parameters passed into print() are joined together."
    },
    {
        question: "What is the result of Short-Circuit Evaluation if the left side of an `or` is True?",
        options: [
            "The program crashes.",
            "Python evaluates the right side to be sure.",
            "Python stops immediately and returns True.",
            "Python throws a syntax warning."
        ],
        correct: 2,
        explanation: "Because an 'or' logic gate only needs ONE 'True' to pass, if the leftmost side is True, Python short-circuits and skips evaluating the rest of the line as an optimization."
    }
];
