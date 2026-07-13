// ═══════════════════════════════════════
// Quiz Data — 15 Graduation-Level Questions (Python Operators)
// ═══════════════════════════════════════
const quizData = [
    {
        question: "What is the guaranteed output type of the True Division ( / ) operator in Python?",
        options: [
            "Integer",
            "Float",
            "String",
            "Depends on the input numbers."
        ],
        correct: 1,
        explanation: "In Python 3, a single slash ( / ) will ALWAYS yield a floating-point number, even if the division results in a whole number (e.g., 10 / 2 = 5.0)."
    },
    {
        question: "What will be the output of: -15 // 4",
        options: [
            "-3.75",
            "-3",
            "-4",
            "3"
        ],
        correct: 2,
        explanation: "Floor division rounds down to the nearest integer. -15/4 = -3.75. The nearest integer mathematically 'below' -3.75 is -4."
    },
    {
        question: "Which of the following is NOT an augmented assignment operator?",
        options: [
            "+=",
            "**=",
            "//=",
            "==="
        ],
        correct: 3,
        explanation: "Python does not have a strict equality operator (===) like Javascript. It uses purely == for comparison and augmented variants like += for math."
    },
    {
        question: "Given A = False and B = True, what is the result of: (not A) and B?",
        options: [
            "True",
            "False",
            "None",
            "SyntaxError"
        ],
        correct: 0,
        explanation: "The 'not' operator flips A(False) to True. The statement becomes: True and True, which evaluates to True."
    },
    {
        question: "Which operator would you use to find out if the letter 'X' exists within the string 'PYTHON EXPLORER'?",
        options: [
            "==",
            "is",
            "in",
            "has"
        ],
        correct: 2,
        explanation: "The Membership Operator 'in' checks sequences to see if a specific sub-element is present inside."
    },
    {
        question: "What is the output of the following expression? 2 ** 3 ** 2",
        options: [
            "64",
            "512",
            "12",
            "36"
        ],
        correct: 1,
        explanation: "Exponentiation (**) is one of the very few operators in Python that possesses Right-to-Left associativity. Thus, 3**2=9, and 2**9=512."
    },
    {
        question: "In Python string comparison, why does 'apple' > 'Apple' return True?",
        options: [
            "Because lowercase letters have higher ASCII values than uppercase.",
            "Because there are more vowels.",
            "It evaluates to False.",
            "Because Python ignores capital letters."
        ],
        correct: 0,
        explanation: "Lowercase 'a' starts at ASCII 97, while uppercase 'A' is 65. Thus, 'a' > 'A' evaluates as mathematically true."
    },
    {
        question: "What is the primary difference between the == and is operators?",
        options: [
            "There is no difference.",
            "== checks if the values are equal; is checks if they point to the exact same memory location.",
            "== is for numbers; is is for strings.",
            "is checks equality; == checks memory."
        ],
        correct: 1,
        explanation: "Identity (is) ensures the object ids are identical. Equality (==) just ensures the underlying data content is mathematically equal."
    },
    {
        question: "What is the result of this expression? 10 % 3",
        options: [
            "3",
            "3.33",
            "0",
            "1"
        ],
        correct: 3,
        explanation: "The Modulus (%) operator yields the remainder of division. 10 / 3 goes exactly 3 times, leaving 1 leftover."
    },
    {
        question: "Which operation will evaluate to True?",
        options: [
            "10 != 10",
            "25 >= 25",
            "(5 * 2) < 9",
            "'A' == 'a'"
        ],
        correct: 1,
        explanation: "Greater than or equal to (>=) includes identical equality, thus 25 >= 25 is True."
    },
    {
        question: "What does the expression 5 + 4 * 2 == 18 evaluate to?",
        options: [
            "True",
            "False",
            "13",
            "18"
        ],
        correct: 1,
        explanation: "Multiplication beats addition. 4*2=8. 5+8=13. 13 == 18 evaluates to False."
    },
    {
        question: "What happens during a Logical Short-Circuit with 'or'?",
        options: [
            "If the left operand is True, the interpreter skips the right side entirely.",
            "If the left operand is False, the interpreter crashes.",
            "Both sides must be checked no matter what.",
            "It speeds up math operations."
        ],
        correct: 0,
        explanation: "Because an 'or' operator only requires ONE True statement to succeed, if the first part is True, checking the second part is computationally pointless."
    },
    {
        question: "Which group of operators has the LOWEST overall precedence according to Python rules?",
        options: [
            "Arithmetic / Math (+, -, *)",
            "Logical (and, or)",
            "Assignment (=, +=)",
            "Relational (>, <)"
        ],
        correct: 2,
        explanation: "Assignment operators sit at the very bottom of the precedence table so that the entire expression is solved and crunched down to a single value before finally storing it."
    },
    {
        question: "Evaluate: 'code' in ['coder', 'coded', 'code']",
        options: [
            "True",
            "False",
            "Error",
            "Yes"
        ],
        correct: 0,
        explanation: "The word 'code' is exactly present as the third discrete element inside the list sequence."
    },
    {
        question: "Can an integer literal (e.g. 100) act as an L-value during an assignment operation?",
        options: [
            "Yes, if it's on the left side of =.",
            "No, literals can only be R-values as they are not memory containers.",
            "Yes, in Python 3 only.",
            "No, only strings can be L-values."
        ],
        correct: 1,
        explanation: "You cannot assign data into a raw number. '100 = x' throws a SyntaxError because 100 is not a valid container for storage."
    }
];
