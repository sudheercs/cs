// ═══════════════════════════════════════
// Quiz Data — 15 Graduation-Level Questions (Number Systems)
// ═══════════════════════════════════════
const quizData = [
    {
        question: "What is the maximum valid single digit in a Base-8 (Octal) number system?",
        options: ["8", "7", "9", "F"],
        correct: 1,
        explanation: "The highest valid digit in any base is (Base - 1). Therefore, in Base-8, the highest valid digit is 7."
    },
    {
        question: "Convert the binary number 10110 to decimal.",
        options: ["18", "22", "20", "24"],
        correct: 1,
        explanation: "10110 in binary is: (1 × 16) + (0 × 8) + (1 × 4) + (1 × 2) + (0 × 1) = 16 + 4 + 2 = 22."
    },
    {
        question: "Which of the following is NOT a valid Hexadecimal number?",
        options: ["A1B2", "0xDEADBEEF", "G19", "F0.0F"],
        correct: 2,
        explanation: "Hexadecimal numbers use digits 0-9 and letters A-F. The letter G is invalid because it would represent 16, and the max digit in Base-16 is F (15)."
    },
    {
        question: "When converting a decimal integer to binary, what mathematical operation is repeatedly used?",
        options: ["Successive Multiplication by 2", "Successive Division by 2", "Successive Addition of 2", "Taking the Square Root"],
        correct: 1,
        explanation: "To convert a decimal integer to any base, you use successive division by that base (in this case, 2) and record the remainders."
    },
    {
        question: "When converting the fractional part of a decimal number (like 0.625) to binary, what mathematical operation is used?",
        options: ["Successive Division by 2", "Successive Multiplication by 2", "Subtracting 2 repeatedly", "Checking powers of 10"],
        correct: 1,
        explanation: "For fractional parts, you use successive multiplication by the target base (2), and record the integer parts that carry over."
    },
    {
        question: "Convert the hexadecimal number '1A' to Decimal.",
        options: ["20", "26", "16", "31"],
        correct: 1,
        explanation: "1A in hexadecimal is (1 × 16) + (10 × 1) = 16 + 10 = 26."
    },
    {
        question: "How many binary bits exactly map to ONE octal digit?",
        options: ["2", "3", "4", "8"],
        correct: 1,
        explanation: "Because 2³ = 8, every perfect grouping of 3 bits corresponds exactly to a single octal digit."
    },
    {
        question: "Convert the fractional binary number 0.11 to decimal.",
        options: ["0.66", "0.3", "0.75", "0.51"],
        correct: 2,
        explanation: "The positional weights are 2⁻¹ (0.5) and 2⁻² (0.25). Therefore, (1 × 0.5) + (1 × 0.25) = 0.75."
    },
    {
        question: "Convert the octal number 34 to binary.",
        options: ["011 100", "011 011", "100 011", "011 010"],
        correct: 0,
        explanation: "Using the 3-bit shortcut: 3 maps to 011, and 4 maps to 100. So 34 in octal is 011100 in binary."
    },
    {
        question: "Which number system is most commonly used to represent IPv6 addresses and Web Colors?",
        options: ["Binary", "Octal", "Hexadecimal", "Decimal"],
        correct: 2,
        explanation: "Hexadecimal is used because it provides a highly compact shorthand for long binary strings (4 bits per character)."
    },
    {
        question: "Convert the binary number 11110011 to Hexadecimal.",
        options: ["E3", "F3", "F4", "A3"],
        correct: 1,
        explanation: "Group the bits by 4: (1111) and (0011). 1111 is 15 (F), and 0011 is 3. Result: F3."
    },
    {
        question: "What is the decimal equivalent of the octal fraction 0.4?",
        options: ["0.4", "0.5", "0.125", "0.8"],
        correct: 1,
        explanation: "0.4 in octal means 4 × 8⁻¹ = 4 / 8 = 1/2 = 0.5 in decimal."
    },
    {
        question: "To convert an octal number directly to hexadecimal, what is the standard intermediate step?",
        options: ["Convert to Decimal first", "Convert to Binary first", "Add 8 to all digits", "Divide by 2"],
        correct: 1,
        explanation: "The easiest and standard way to convert Octal to Hex is to use Binary as a conceptual bridge (Octal → 3-bit Binary → regroup to 4-bit Binary → Hex)."
    },
    {
        question: "Calculate the decimal value of 10.1 in Binary.",
        options: ["2.1", "2.5", "10.5", "3.0"],
        correct: 1,
        explanation: "10 (binary integer) = 2. The .1 (binary fraction) = 0.5. Total = 2.5."
    },
    {
        question: "What is the decimal value of the max byte 11111111 in binary?",
        options: ["128", "256", "255", "1024"],
        correct: 2,
        explanation: "8 bits of all 1s equals (256 - 1) = 255. It represents the highest value in an 8-bit unsigned integer system."
    }
];
