// ═══════════════════════════════════════
// Quiz Data — 15 Graduation-Level Questions (Software Types)
// ═══════════════════════════════════════
const quizData = [
    {
        question: "Which of the following best defines 'System Software'?",
        options: [
            "Software designed to perform specific tasks for end-users",
            "Software that manages computer hardware and system resources",
            "Software written exclusively to compile source code",
            "Software used to design websites"
        ],
        correct: 1,
        explanation: "System software is the base software that directly manages and controls computer hardware and provides a stable platform for application software to run."
    },
    {
        question: "An antivirus program is an example of which type of software?",
        options: [
            "General Purpose Application",
            "Operating System",
            "System Utility",
            "Device Driver"
        ],
        correct: 2,
        explanation: "System Utilities are programs designed to help analyze, configure, optimize, or maintain a computer. Antivirus software maintains system security and health, classifying it as a utility."
    },
    {
        question: "What is the primary function of a Device Driver?",
        options: [
            "To translate high-level code to machine language",
            "To create hardware components automatically",
            "To act as a translator between an Operating System and a hardware peripheral",
            "To clean up unnecessary files on the hard disk"
        ],
        correct: 2,
        explanation: "Device drivers are specialized programs that enable the Operating System to communicate effectively with hardware devices (like printers, GPUs) by translating generic OS commands into hardware-specific signals."
    },
    {
        question: "Which of the following is an example of 'Specific Purpose Application Software'?",
        options: [
            "Microsoft Windows",
            "Google Chrome",
            "Tally (Accounting Software)",
            "WinRAR"
        ],
        correct: 2,
        explanation: "Tally is designed for a very specific task: accounting. Chrome and Word are general purpose (they can be used for many different things). Windows is an OS, and WinRAR is a utility."
    },
    {
        question: "What differentiates 'Bespoke/Custom' software from 'Off-the-shelf' software?",
        options: [
            "Custom software is always free, while off-the-shelf is paid",
            "Custom software is developed exclusively for a specific organization's unique needs",
            "Custom software does not require an operating system to run",
            "Custom software is a type of system utility"
        ],
        correct: 1,
        explanation: "Bespoke or custom software is tailor-made for a specific client or business (e.g., a university's specific student portal), whereas off-the-shelf software is mass-marketed to a wide audience."
    },
    {
        question: "Which translator processes an entire program at once and generates an executable object file?",
        options: [
            "Assembler",
            "Interpreter",
            "Compiler",
            "Decompiler"
        ],
        correct: 2,
        explanation: "A Compiler scans the entire high-level source code, translates it all at once, and generates an independent machine-code executable file before any execution begins."
    },
    {
        question: "Which translator translates code line-by-line during runtime?",
        options: [
            "Assembler",
            "Compiler",
            "Linker",
            "Interpreter"
        ],
        correct: 3,
        explanation: "An Interpreter translates and executes high-level source code one statement at a time while the program is actively running. It stops and reports an error as soon as it hits one."
    },
    {
        question: "Why is code translated by an Interpreter generally slower to execute than code translated by a Compiler?",
        options: [
            "Interpreters use older technology",
            "Because the translation happens redundantly during runtime every time the code runs",
            "Interpreters only work with assembly language",
            "Because interpreters require internet access"
        ],
        correct: 1,
        explanation: "Since an interpreter translates line-by-line during execution, the translation overhead occurs every single time the program is run. Compilers translate the code once into a fast executable binary."
    },
    {
        question: "An Assembler is used to convert:",
        options: [
            "High-level language to Assembly language",
            "Assembly language to Machine language (Object code)",
            "Machine language to High-level language",
            "Python scripts to JavaScript"
        ],
        correct: 1,
        explanation: "An Assembler is a specialized translator that maps low-level mnemonic Assembly language instructions directly into executable binary Machine language."
    },
    {
        question: "Which of the following features is highly characteristic of an Interpreter regarding debugging?",
        options: [
            "It is very difficult to debug because it outputs all errors at the very end",
            "It halts immediately upon encountering the first error, making bugs easier to isolate",
            "It automatically fixes logical errors in the source code",
            "It never encounters errors"
        ],
        correct: 1,
        explanation: "Because an interpreter processes code line-by-line, it immediately halts and throws an error on the exact line it fails, making it conceptually easier to debug syntax errors quickly compared to compilers."
    },
    {
        question: "Which of these is NOT a function of the Operating System?",
        options: [
            "Memory Management",
            "Process Management",
            "Compiling High-level code to Binary",
            "Input/Output Management"
        ],
        correct: 2,
        explanation: "Compiling code is the job of a Compiler (a Programming Tool/Translator), not the Operating System. The OS handles Memory, Processes, Files, and I/O."
    },
    {
        question: "Disk Defragmenter and Disk Cleanup are classified as:",
        options: [
            "Application Software",
            "Programming Tools",
            "System Utilities",
            "Device Drivers"
        ],
        correct: 2,
        explanation: "These are System Utilities designed to perform housekeeping tasks that optimize system performance and manage the computer's storage media."
    },
    {
        question: "Python and JavaScript are primarily associated with which type of translator?",
        options: [
            "Compiler",
            "Assembler",
            "Interpreter",
            "Device Driver"
        ],
        correct: 2,
        explanation: "Python and JavaScript are traditionally interpreted languages (or use a combination of interpreters and just-in-time compilation), allowing for dynamic, line-by-line execution."
    },
    {
        question: "Software such as Microsoft Word, Google Chrome, and VLC Player are examples of:",
        options: [
            "System Software",
            "General Purpose Application Software",
            "Utility Software",
            "Custom Application Software"
        ],
        correct: 1,
        explanation: "These are General Purpose Application Software because they address mass-market needs like text editing, web browsing, and media playback."
    },
    {
        question: "Which of the following statements about Translators is FALSE?",
        options: [
            "A Compiler generates a separate object/executable file.",
            "An Assembler is used for high-level languages like Java.",
            "An Interpreter stops execution upon finding a syntax error.",
            "Translators are considered a type of System Software / Programming Tool."
        ],
        correct: 1,
        explanation: "An Assembler is specifically designed to translate low-level Assembly language. High-level languages like Java use Compilers and Interpreters."
    }
];
