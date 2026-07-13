// ═══════════════════════════════════════
// Quiz Data — Conditional Statements
// ═══════════════════════════════════════
const quizData = [
    {
        question: "What will the following print?\n\nx = 7\nif x > 10:\n    print('Big')\nprint('Done')",
        options: [
            "Big\nDone",
            "Done",
            "Big",
            "Error"
        ],
        correct: 1,
        explanation: "Since 7 > 10 is False, the if-block is skipped entirely. The unindented 'Done' is outside the if, so it always prints."
    },
    {
        question: "In an if-elif-else ladder, how many blocks are executed when a condition is True?",
        options: [
            "All True branches execute.",
            "Exactly one — the FIRST True branch.",
            "Exactly two — the True branch and the else.",
            "None until the else is reached."
        ],
        correct: 1,
        explanation: "Python evaluates conditions top-to-bottom. The moment it finds the first True condition, it executes that block and skips the rest of the ladder."
    },
    {
        question: "What is the output?\n\nnum = -5\nif num < 0:\n    num = num * -1\nprint(num)",
        options: [
            "-5",
            "5",
            "0",
            "Error"
        ],
        correct: 1,
        explanation: "Since -5 < 0 is True, the block executes: -5 * -1 = 5. This is exactly the Absolute Value algorithm."
    },
    {
        question: "How do you check if a number n is divisible by 7?",
        options: [
            "n / 7 == 0",
            "n // 7 == 0",
            "n % 7 == 0",
            "n ** 7 == 0"
        ],
        correct: 2,
        explanation: "The modulus operator (%) returns the remainder. If the remainder is 0 when dividing by 7, the number is perfectly divisible."
    },
    {
        question: "In a chained comparison like `a <= b <= c`, what does Python actually evaluate?",
        options: [
            "It first checks a <= b, then checks b <= c, and ANDs both results.",
            "It adds all three and checks if the result is positive.",
            "It only checks a <= c.",
            "It throws a SyntaxError."
        ],
        correct: 0,
        explanation: "Python's chained comparisons are shorthand. `a <= b <= c` is equivalent to `(a <= b) and (b <= c)`, both conditions must be True."
    },
    {
        question: "What does the `else` keyword require?",
        options: [
            "A boolean condition, like: else x > 5:",
            "Nothing. It acts as a catch-all with no condition.",
            "A return statement.",
            "Two colons (::)."
        ],
        correct: 1,
        explanation: "The else block triggers automatically when ALL preceding if/elif conditions have failed. It never takes a condition."
    },
    {
        question: "Why must the 'divisible by BOTH 3 and 5' check come BEFORE individual checks in an elif ladder?",
        options: [
            "Because Python reads bottom-to-top.",
            "Because a number divisible by both (like 15) would match 'divisible by 3' first and never reach the combined check.",
            "Because 'and' operators must always be first.",
            "It doesn't matter — the order is irrelevant."
        ],
        correct: 1,
        explanation: "If we put 'n % 3 == 0' first, the number 15 would match it immediately, and the 'both' branch would be unreachable. Order matters in ladders!"
    },
    {
        question: "To sort three numbers a, b, c in ascending order using only conditionals, how many possible orderings must you account for?",
        options: [
            "3",
            "4",
            "6",
            "9"
        ],
        correct: 2,
        explanation: "Three items can be arranged in 3! = 3 × 2 × 1 = 6 unique permutations (abc, acb, bac, bca, cab, cba). Each requires its own elif branch."
    },
    {
        question: "What is the output?\n\nx = 10\nif x > 5:\n    print('A')\n    if x > 8:\n        print('B')\n    else:\n        print('C')\nelse:\n    print('D')",
        options: [
            "A",
            "A\nB",
            "A\nC",
            "D"
        ],
        correct: 1,
        explanation: "x=10: Outer if (10>5) is True → prints 'A'. Inner if (10>8) is also True → prints 'B'. The inner else and outer else are both skipped."
    },
    {
        question: "A flowchart uses which shape to represent a decision/condition?",
        options: [
            "Rectangle",
            "Oval / Rounded Rectangle",
            "Diamond / Rhombus",
            "Parallelogram"
        ],
        correct: 2,
        explanation: "In standard flowchart notation, a Diamond (rhombus) shape represents a decision point where the flow branches based on a Yes/No or True/False condition."
    }
];
