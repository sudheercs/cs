// ═══════════════════════════════════════
// Quiz Data — 15 Graduation-Level Questions (Problem Solving)
// ═══════════════════════════════════════
const quizData = [
    {
        question: "Which of the following describes the 'Decomposition' phase of problem solving?",
        options: [
            "Removing syntax errors from your code.",
            "Breaking a large, complex problem into smaller, solvable sub-problems.",
            "Translating an algorithm into a programming language like Python.",
            "Defining the extreme boundary inputs for your program."
        ],
        correct: 1,
        explanation: "Decomposition (Top-Down Design) is the act of dividing a big problem down into small, isolated tasks that are easier to understand and code."
    },
    {
        question: "What is an Algorithm?",
        options: [
            "A specific snippet of Python code used to do math.",
            "A visual diagram with arrows and shapes.",
            "A finite, unambiguous sequence of logical instructions to solve a problem.",
            "A software tool that checks your code for viruses."
        ],
        correct: 2,
        explanation: "An algorithm is language-independent pure logic. It must be finite (have an end) and definite (clear and unambiguous)."
    },
    {
        question: "In standard flowchart notation, which shape represents a condition or a decision point (like an IF statement)?",
        options: [
            "Rectangle",
            "Parallelogram",
            "Oval",
            "Diamond"
        ],
        correct: 3,
        explanation: "The diamond shape is exclusively used for decisions/conditions. It evaluates to True or False and provides multiple outgoing branches (arrows)."
    },
    {
        question: "If a programmer writes 'Area = X + Y' when they intended to write 'Area = X * Y', what type of error is this?",
        options: [
            "Syntax Error",
            "Runtime Error",
            "Logical Error",
            "Compilation Error"
        ],
        correct: 2,
        explanation: "Since the syntax is totally valid (the computer can perform addition), no error is thrown by the compiler. However, the logic is flawed, leading to the wrong result. This is a Logical Error."
    },
    {
        question: "When testing a software program that accepts ages between 13 and 19, what would feeding it '13' and '19' be considered?",
        options: [
            "Normal Data testing",
            "Boundary Data testing",
            "Erroneous Data testing",
            "Stress testing"
        ],
        correct: 1,
        explanation: "13 and 19 are at the extreme edges (boundaries) of the accepted range. Many bugs occur strictly at the boundaries due to '>= vs >' logic mistakes."
    },
    {
        question: "Which characteristic is absolutely essential for a 'good' algorithm?",
        options: [
            "It must be written in C++.",
            "It must use advanced calculus.",
            "Finiteness (it must eventually stop).",
            "It must be longer than 100 lines."
        ],
        correct: 2,
        explanation: "Every algorithm MUST culminate in a final result and terminate. An algorithm that loops infinitely is fundamentally broken."
    },
    {
        question: "What is Pseudocode?",
        options: [
            "A machine-language code that processors read directly.",
            "A diagrammatic representation of code using arrows.",
            "An informal, artificial language used to draft algorithm logic.",
            "A programming language heavily used in web development."
        ],
        correct: 2,
        explanation: "Pseudocode blends English readability with structural programming concepts (IF, WHILE). It's essentially a 'draft' of real code."
    },
    {
        question: "In a flowchart, what does a Parallelogram normally depict?",
        options: [
            "Beginning of the program",
            "Input or Output operations",
            "Mathematical calculations",
            "Subroutines"
        ],
        correct: 1,
        explanation: "The Parallelogram is used whenever data is moving into the system from the user (Input), or moving out of the system to the user (Output/Print)."
    },
    {
        question: "Which of the following is an advantage of Flowcharts over Pseudocode?",
        options: [
            "Flowcharts are faster to create and modify.",
            "Flowcharts can be executed directly by the CPU.",
            "Flowcharts provide an immediate visual understanding of the logical flow and loops.",
            "Flowcharts don't require any prior knowledge of problem solving."
        ],
        correct: 2,
        explanation: "Flowcharts are excellent for humans to visualize the direction of logic and spot infinite loops at a glance, whereas text based pseudocode can be dense to read."
    },
    {
        question: "In a flowchart, what shape encapsulates a step like 'Calculate Tax = Price * 0.05'?",
        options: [
            "Diamond",
            "Rectangle",
            "Oval",
            "Parallelogram"
        ],
        correct: 1,
        explanation: "Calculations, assignments, and data manipulations are 'Processes'. Processes are always represented by Rectangles."
    },
    {
        question: "A program crashing halfway through execution because it attempted to open a file that doesn't exist is an example of a:",
        options: [
            "Syntax Error",
            "Runtime Error",
            "Semantic Error",
            "Pre-Processor Error"
        ],
        correct: 1,
        explanation: "Runtime errors occur while the program is actively executing. Attempting to perform an impossible operation (like dividing by zero or accessing missing files) causes a runtime crash."
    },
    {
        question: "Which of the following statements about Flowcharts is FALSE?",
        options: [
            "Arrows should generally flow top-to-bottom or left-to-right.",
            "A Decision Diamond is the only shape that can have multiple arrows existing from it.",
            "Every flowchart can have multiple Start shapes if there are multiple functions.",
            "A Process Rectangle should only ever have one arrow exiting from it."
        ],
        correct: 2,
        explanation: "A standard flowchart representing a single sequential process must have exactly ONE starting point (Terminal Oval) to avoid ambiguity."
    },
    {
        question: "Why should coding NOT be the very first step when given a complex task?",
        options: [
            "Because IDEs take too long to load.",
            "Because jumping into syntax distracts from formulating the core logic, usually resulting in messy, buggy architecture.",
            "Because the computer will reject the code if no flowchart exists.",
            "It SHOULD be the first step to save time."
        ],
        correct: 1,
        explanation: "Coding right away is a rookie mistake. 'Thinking before typing' (Analyzing, Algorithm Design, Decomposition) ensures you are solving the right problem in the most efficient structural way."
    },
    {
        question: "What does the keyword 'WHILE' usually indicate in pseudocode?",
        options: [
            "A mathematical addition.",
            "A decision that happens exactly once.",
            "A loop that repeats zero or more times based on a condition.",
            "An input from the user."
        ],
        correct: 2,
        explanation: "WHILE is a fundamental structural loop used in pseudocode and most programming languages to repeat a block of code as long as a condition evaluates to True."
    },
    {
        question: "Feeding a calculator program the input 'Two' instead of the number '2' is testing its resistance to what?",
        options: [
            "Normal Data",
            "Erroneous Data",
            "Boundary Data",
            "Syntax Data"
        ],
        correct: 1,
        explanation: "You are feeding the system invalid/erroneous data (a String instead of an Integer) to ensure the program has error-handling built in, rather than just crashing."
    }
];
