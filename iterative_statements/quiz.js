// ═══════════════════════════════════════
// Quiz Data — Iterative Statements
// ═══════════════════════════════════════
const quizData = [
    {
        question: "What numbers does `range(2, 10, 3)` generate?",
        options: [
            "2, 5, 8",
            "2, 5, 8, 11",
            "3, 6, 9",
            "2, 3, 4, 5, 6, 7, 8, 9"
        ],
        correct: 0,
        explanation: "Start at 2, step by 3 → 2, 5, 8. The next value would be 11, which is ≥ 10 (the stop), so it is not included."
    },
    {
        question: "How many times does this inner statement execute?\n\nfor i in range(3):\n    for j in range(4):\n        print(i, j)",
        options: [
            "3 times",
            "4 times",
            "7 times",
            "12 times"
        ],
        correct: 3,
        explanation: "Outer loop runs 3 times. For each outer iteration, inner loop runs 4 times. Total = 3 × 4 = 12."
    },
    {
        question: "What is the difference between `break` and `continue`?",
        options: [
            "break pauses the loop; continue resumes it.",
            "break terminates the entire loop; continue skips the current iteration and moves to the next.",
            "break skips the current iteration; continue terminates the loop.",
            "There is no difference."
        ],
        correct: 1,
        explanation: "break = destroy the loop entirely. continue = skip this one cycle but keep looping."
    },
    {
        question: "What is the output?\n\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)",
        options: [
            "0 1 2 3 4",
            "0 1 2 3",
            "0 1 2",
            "3"
        ],
        correct: 2,
        explanation: "When i becomes 3, the break fires BEFORE print(i) can run. So only 0, 1, 2 are printed."
    },
    {
        question: "What is 5! (5 factorial)?",
        options: [
            "25",
            "15",
            "120",
            "60"
        ],
        correct: 2,
        explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120."
    },
    {
        question: "In a star triangle pattern using nested loops, row 4 prints 4 stars. Why?",
        options: [
            "Because the outer loop variable is 4.",
            "Because the inner loop runs `range(i)` which is `range(4)` → 4 iterations.",
            "Because the print function has 4 arguments.",
            "Because the loop counts backwards from 4."
        ],
        correct: 1,
        explanation: "The inner loop `for j in range(i)` runs i times. When i = 4, range(4) produces [0,1,2,3] → 4 iterations → 4 stars."
    },
    {
        question: "Which keyword is MOST dangerous if forgotten inside a `while` loop body?",
        options: [
            "The print statement",
            "The state-update statement (like count += 1)",
            "The break statement",
            "The import statement"
        ],
        correct: 1,
        explanation: "Without updating the loop's control variable, the condition never changes from True, causing an infinite loop that crashes or hangs the system."
    },
    {
        question: "What does this code print?\n\nfor i in range(1, 4):\n    for j in range(1, i+1):\n        print(j, end=' ')\n    print()",
        options: [
            "1\n1 2\n1 2 3",
            "1 2 3\n1 2 3\n1 2 3",
            "3 2 1",
            "1\n2\n3"
        ],
        correct: 0,
        explanation: "Row 1: j goes 1 to 1 → '1'. Row 2: j goes 1 to 2 → '1 2'. Row 3: j goes 1 to 3 → '1 2 3'. This is the Number Triangle pattern."
    },
    {
        question: "To calculate the sum of the series 1 + 1/2 + 1/3 + … + 1/N, what expression accumulates each term?",
        options: [
            "total += i",
            "total += 1 / i",
            "total += i ** 2",
            "total *= i"
        ],
        correct: 1,
        explanation: "Each term of a harmonic series is 1/i. So we add (1 / i) to the running total in each iteration."
    },
    {
        question: "What is the output?\n\nfor i in range(5):\n    if i % 2 == 0:\n        continue\n    print(i)",
        options: [
            "0 2 4",
            "1 3",
            "0 1 2 3 4",
            "2 4"
        ],
        correct: 1,
        explanation: "When i is even (0, 2, 4), `continue` fires — skipping print. Only odd values (1, 3) reach the print statement."
    }
];
