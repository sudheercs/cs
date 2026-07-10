// ═══════════════════════════════════════
// Quiz Data — 12 Graduation-Level Questions (OS Functions & UI)
// ═══════════════════════════════════════
const quizData = [
    {
        question: "Which of the following is the most accurate definition of an Operating System?",
        options: [
            "A collection of hardware tools designed to fix the computer",
            "A software program that allows users to type documents",
            "System software that acts as an intermediary between the user/applications and the computer hardware",
            "A security module designed specifically to prevent virus attacks"
        ],
        correct: 2,
        explanation: "An Operating System is the core system software that manages computer hardware resources and provides a stable platform for running application software."
    },
    {
        question: "A program currently in execution in the main memory is called a:",
        options: [
            "File",
            "Process",
            "Thread",
            "Script"
        ],
        correct: 1,
        explanation: "In OS terminology, a 'process' is an active entity representing a program that has been loaded into memory and is currently being executed by the CPU."
    },
    {
        question: "Which OS function is responsible for deciding which process gets control of the CPU and for how long?",
        options: [
            "Memory Management",
            "File Management",
            "Device Management",
            "CPU Scheduling (Process Management)"
        ],
        correct: 3,
        explanation: "CPU Scheduling is a critical part of Process Management. The OS uses algorithms to rapidly switch the CPU between active processes (context switching) to create the illusion of multitasking."
    },
    {
        question: "What mechanism does an Operating System use to handle a situation where programs require more RAM than is physically installed on the computer?",
        options: [
            "Job Accounting",
            "Virtual Memory",
            "Cache Clearing",
            "Segmentation Fault"
        ],
        correct: 1,
        explanation: "Virtual Memory extends the physical memory by moving inactive data from RAM to a designated file or partition on the secondary storage (hard drive), allowing the system to run heavier workloads without crashing."
    },
    {
        question: "If Process A attempts to access the memory address space legally assigned to Process B, what is the OS expected to do?",
        options: [
            "Grant access immediately",
            "Merge the two processes into one",
            "Deny access and typically terminate Process A (e.g., throwing a Segmentation Fault)",
            "Format the hard drive"
        ],
        correct: 2,
        explanation: "As part of Memory Protection, the OS strictly maintains isolated memory boundaries for security and stability. A violation usually results in the OS terminating the offending process (Segmentation Fault/Access Violation)."
    },
    {
        question: "A 'Device Driver' falls under which overarching function of the Operating System?",
        options: [
            "Memory Management",
            "Process Scheduling",
            "Security Management",
            "Device / I/O Management"
        ],
        correct: 3,
        explanation: "Device management involves communicating with hardware peripherals. The OS translates its generic I/O instructions into specific hardware signals by communicating through Device Drivers."
    },
    {
        question: "What is an advantage of a Command Line Interface (CLI/CUI) over a Graphical User Interface (GUI)?",
        options: [
            "CLI is much easier for entirely new computer users to learn",
            "CLI allows users to click on visual icons",
            "CLI uses significantly fewer system resources (RAM/GPU) and is excellent for automation/scripting",
            "CLI automatically fixes syntax errors"
        ],
        correct: 2,
        explanation: "A CLI does not have to render high-resolution graphics, shadows, or window animations, making it extremely lightweight. Furthermore, text commands are naturally suited for scripts and automated tasks."
    },
    {
        question: "The acronym WIMP is closely associated with which type of user interface, and what does it stand for?",
        options: [
            "CLI: Words, Instructions, Menus, Processing",
            "GUI: Windows, Icons, Menus, Pointers",
            "GUI: Watts, Inputs, Memory, Processing",
            "CLI: Windows, Inputs, Mouse, Pointer"
        ],
        correct: 1,
        explanation: "WIMP stands for Windows, Icons, Menus, and Pointer. This paradigm defines the vast majority of modern desktop Graphical User Interfaces (like Windows OS and macOS)."
    },
    {
        question: "What is 'Job Accounting' in the context of Operating Systems?",
        options: [
            "A feature that helps users calculate their taxes",
            "Keeping track of time and resources used by various users and processes",
            "Creating backup copies of database files",
            "Connecting the computer to a network"
        ],
        correct: 1,
        explanation: "Job Accounting monitors exactly how much CPU time, memory, disk space, and network bandwidth each user or application consumes. It is vital for billing on cloud platforms (like AWS) and preventing resource abuse."
    },
    {
        question: "Which of the following creates a uniform logical view of data storage, hiding the physical mechanics of whether the data is on a spinning HDD or flash SSD?",
        options: [
            "Process Management",
            "File Management",
            "Memory Management",
            "UI Management"
        ],
        correct: 1,
        explanation: "The File Management system organizes data logically into directories and files. The user simply opens a file without needing to understand the physical sectors, tracks, or NAND blocks underneath."
    },
    {
        question: "Which interface relies primarily on a mouse or touch interactions rather than a keyboard?",
        options: [
            "Graphical User Interface (GUI)",
            "Command Line Interface (CLI)",
            "Character User Interface (CUI)",
            "Disk Operating System (DOS)"
        ],
        correct: 0,
        explanation: "A GUI is designed around visual elements and relies predominantly on pointing devices (mice, touchpads, or touchscreen inputs) to navigate and interact with those elements."
    },
    {
        question: "MS-DOS and the Linux Bash Shell are examples of:",
        options: [
            "Hardware architectures",
            "Graphical User Interfaces (GUI)",
            "Command Line Interfaces (CLI)",
            "Natural Language Interfaces"
        ],
        correct: 2,
        explanation: "Both MS-DOS and the Linux Bash Shell are text-based environments where users issue commands exclusively by typing specific syntax, making them classic Command Line Interfaces."
    }
];
