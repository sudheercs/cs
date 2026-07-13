// ═══════════════════════════════════════
// Quiz Data — 12 Graduation-Level Questions (Boolean Logic)
// ═══════════════════════════════════════
const quizData = [
    {
        question: "Which of the following logic gates outputs 1 ONLY if ALL of its inputs are 1?",
        options: [
            "OR Gate",
            "NAND Gate",
            "AND Gate",
            "XOR Gate"
        ],
        correct: 2,
        explanation: "The AND gate performs logical multiplication. Its output Y = A • B is 1 strictly when both A = 1 and B = 1."
    },
    {
        question: "Which two gates are known as 'Universal Gates'?",
        options: [
            "AND and OR",
            "NAND and NOR",
            "XOR and XNOR",
            "NOT and AND"
        ],
        correct: 1,
        explanation: "NAND and NOR are universal gates because any other basic logic gate (AND, OR, NOT) and any combinational logic circuit can be constructed using entirely NAND gates or entirely NOR gates."
    },
    {
        question: "According to De Morgan's First Law, what is the equivalent of the expression (A + B)'?",
        options: [
            "A' + B'",
            "A • B",
            "A' • B'",
            "A + B'"
        ],
        correct: 2,
        explanation: "De Morgan's First Law states that the complement of a sum is equal to the product of the complements: (A + B)' = A' • B'."
    },
    {
        question: "If a logical expression is Y = (A • B)', which logic gate does this represent?",
        options: [
            "NOR Gate",
            "AND Gate",
            "NAND Gate",
            "OR Gate"
        ],
        correct: 2,
        explanation: "The expression (A • B)' represents an AND operation followed by a NOT operation, which is the definition of a NAND gate."
    },
    {
        question: "Which gate is sometimes referred to as an 'Inverter'?",
        options: [
            "NOT Gate",
            "NAND Gate",
            "NOR Gate",
            "XOR Gate"
        ],
        correct: 0,
        explanation: "The NOT gate is called an inverter because it reverses the logical state of its input. A 1 input results in a 0 output, and a 0 input results in a 1 output."
    },
    {
        question: "In a Half Adder circuit, which gate is used to generate the 'Sum' bit?",
        options: [
            "AND Gate",
            "OR Gate",
            "XOR Gate",
            "NAND Gate"
        ],
        correct: 2,
        explanation: "In binary addition for a Half Adder, 0+0=0, 0+1=1, 1+0=1, and 1+1=0 (sum is 0, carry is 1). This behavior matches the Exclusive-OR (XOR) gate exactly."
    },
    {
        question: "In a Half Adder circuit, which gate is used to generate the 'Carry' bit?",
        options: [
            "XOR Gate",
            "AND Gate",
            "OR Gate",
            "NOR Gate"
        ],
        correct: 1,
        explanation: "The Carry bit is only 1 when both input A and input B are 1 (since 1+1 = binary 10). This requires an AND gate."
    },
    {
        question: "What is the output of an Exclusive OR (XOR) gate if both inputs are 1?",
        options: [
            "1",
            "0",
            "High impedance",
            "Undefined"
        ],
        correct: 1,
        explanation: "An XOR gate outputs 1 only when its inputs are DIFFERENT. Since both inputs are the SAME (1 and 1), the XOR output is 0."
    },
    {
        question: "According to De Morgan's Second Law, the expression (A • B)' is equivalent to:",
        options: [
            "A' + B'",
            "A' • B'",
            "A + B",
            "A' + B"
        ],
        correct: 0,
        explanation: "De Morgan's Second Law states that the complement of a product is equal to the sum of the complements: (A • B)' = A' + B'. This means a NAND gate functions identically to an OR gate with inverted inputs."
    },
    {
        question: "Which of the following Boolean expressions accurately represents an XOR gate?",
        options: [
            "A • B + A' • B'",
            "A' • B + A • B'",
            "A + B",
            "(A + B)'"
        ],
        correct: 1,
        explanation: "The standard Boolean expression for an XOR gate (A ⊕ B) is A'B + AB'. This means 'A is false AND B is true, OR A is true AND B is false'."
    },
    {
        question: "If inputs A = 0 and B = 1 are passed through a NOR gate, what is the output?",
        options: [
            "1",
            "0",
            "It depends on the previous state",
            "01"
        ],
        correct: 1,
        explanation: "A NOR gate is an OR gate followed by a NOT. First evaluate the OR: 0 + 1 = 1. Then apply NOT: 1' = 0. So the output is 0."
    },
    {
        question: "What does the Boolean rule A + A equal?",
        options: [
            "2A",
            "1",
            "A",
            "0"
        ],
        correct: 2,
        explanation: "In Boolean algebra, A + A is always A (Idempotent Law). If A=0, then 0+0=0. If A=1, then 1+1=1."
    }
];
