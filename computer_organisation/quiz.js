// ═══════════════════════════════════════
// Quiz Data — 15 Graduation-Level Questions
// ═══════════════════════════════════════
const quizData = [
    {
        question: "Which of the following best describes the IPO cycle in a computer system?",
        options: [
            "Install → Process → Output",
            "Input → Process → Output",
            "Input → Produce → Operate",
            "Interpret → Process → Organise"
        ],
        correct: 1,
        explanation: "The IPO (Input → Process → Output) cycle is the fundamental operational model of every computer. Data enters through input devices, is processed by the CPU, and results are delivered via output devices."
    },
    {
        question: "GIGO is a principle in computing. What does it stand for?",
        options: [
            "Get In, Get Out",
            "Garbage In, Garbage Out",
            "General Input, General Output",
            "Good Information, Good Output"
        ],
        correct: 1,
        explanation: "GIGO (Garbage In, Garbage Out) means that if incorrect or poor-quality data is entered into a computer, the output will also be incorrect or meaningless, regardless of how accurate the processing is."
    },
    {
        question: "Which component of the CPU is responsible for performing arithmetic and logical operations?",
        options: [
            "Control Unit (CU)",
            "Program Counter (PC)",
            "Arithmetic Logic Unit (ALU)",
            "Memory Address Register (MAR)"
        ],
        correct: 2,
        explanation: "The ALU (Arithmetic Logic Unit) performs all arithmetic operations (addition, subtraction, etc.) and logical operations (AND, OR, NOT, comparisons). The CU only coordinates and directs the flow of data."
    },
    {
        question: "In the Fetch-Decode-Execute cycle, what does the Control Unit do during the 'Decode' phase?",
        options: [
            "Retrieves the instruction from RAM",
            "Performs the arithmetic calculation",
            "Interprets the instruction to determine the required operation",
            "Stores the result back in memory"
        ],
        correct: 2,
        explanation: "During the Decode phase, the Control Unit interprets (decodes) the fetched instruction to understand what operation needs to be performed, which operands are needed, and how to coordinate the execution."
    },
    {
        question: "Which type of memory is volatile?",
        options: [
            "ROM",
            "Hard Disk Drive",
            "RAM",
            "Flash Memory (SSD)"
        ],
        correct: 2,
        explanation: "RAM (Random Access Memory) is volatile — its contents are erased when power is turned off. ROM, HDDs, SSDs, and flash memory are all non-volatile and retain data without power."
    },
    {
        question: "SRAM is used for cache memory primarily because:",
        options: [
            "It is cheaper than DRAM",
            "It has higher storage capacity",
            "It is faster and does not require periodic refresh",
            "It uses capacitors for storage"
        ],
        correct: 2,
        explanation: "SRAM (Static RAM) uses flip-flop circuits that hold data as long as power is supplied without needing to be refreshed. This makes it much faster than DRAM (which needs periodic refresh), making it ideal for cache memory, though it is more expensive."
    },
    {
        question: "What is the correct order of cache levels from fastest to slowest?",
        options: [
            "L3 → L2 → L1",
            "L1 → L2 → L3",
            "L2 → L1 → L3",
            "L1 → L3 → L2"
        ],
        correct: 1,
        explanation: "L1 cache is the fastest and smallest (closest to the CPU core), L2 is larger but slightly slower, and L3 is the largest cache shared among all cores but the slowest of the three levels."
    },
    {
        question: "A 'cache hit' occurs when:",
        options: [
            "The cache memory is full",
            "Data requested by the CPU is found in the cache",
            "Data needs to be fetched from the hard drive",
            "The CPU clock speed exceeds the cache speed"
        ],
        correct: 1,
        explanation: "A cache hit occurs when the data the CPU needs is already present in the cache memory, allowing fast access. A cache miss occurs when the data is not in cache and must be fetched from slower RAM or storage."
    },
    {
        question: "How many bits are in 4 Kilobytes (4 KB)?",
        options: [
            "4,096 bits",
            "32,768 bits",
            "4,000 bits",
            "8,192 bits"
        ],
        correct: 1,
        explanation: "4 KB = 4 × 1024 Bytes = 4,096 Bytes. Since 1 Byte = 8 bits: 4,096 × 8 = 32,768 bits."
    },
    {
        question: "Why does a 500 GB hard drive show approximately 465 GB in Windows?",
        options: [
            "Some space is reserved for the operating system",
            "Hard drive manufacturers are dishonest about capacity",
            "Manufacturers use decimal (1 GB = 1000³ bytes) while OS uses binary (1 GiB = 1024³ bytes)",
            "The file system formatting takes 35 GB of space"
        ],
        correct: 2,
        explanation: "Manufacturers measure capacity in decimal (SI): 1 GB = 1,000,000,000 bytes. Operating systems use binary (IEC): 1 GiB = 1,073,741,824 bytes. So 500,000,000,000 ÷ 1,073,741,824 ≈ 465.66 GiB, which Windows displays as ~465 GB."
    },
    {
        question: "Which of the following is NOT a type of ROM?",
        options: [
            "PROM",
            "EPROM",
            "DDR4",
            "EEPROM"
        ],
        correct: 2,
        explanation: "DDR4 is a type of SDRAM (Synchronous Dynamic Random Access Memory), which is volatile. PROM, EPROM, and EEPROM are all types of ROM (Read-Only Memory), which are non-volatile."
    },
    {
        question: "A Solid State Drive (SSD) is faster than a Hard Disk Drive (HDD) primarily because:",
        options: [
            "SSDs are larger in physical size",
            "SSDs have no mechanical moving parts and use NAND flash memory",
            "SSDs use magnetic platters that spin faster",
            "SSDs require more power to operate"
        ],
        correct: 1,
        explanation: "SSDs use NAND flash memory chips with no moving parts, eliminating the mechanical seek time and rotational latency that plague HDDs. An NVMe SSD can achieve speeds of 3,500-7,000 MB/s compared to ~100-200 MB/s for a typical HDD."
    },
    {
        question: "Which register holds the memory address of the NEXT instruction to be fetched?",
        options: [
            "Instruction Register (IR)",
            "Accumulator (ACC)",
            "Program Counter (PC)",
            "Memory Data Register (MDR)"
        ],
        correct: 2,
        explanation: "The Program Counter (PC) always holds the address of the next instruction to be fetched from memory. After each fetch, the PC is incremented (or updated for jumps) to point to the subsequent instruction."
    },
    {
        question: "An operating system like Windows is classified as:",
        options: [
            "Application Software",
            "Utility Software",
            "System Software",
            "Firmware"
        ],
        correct: 2,
        explanation: "Operating systems are classified as System Software. They manage hardware resources, provide a user interface, and serve as a platform for running application software. Application software (like Word, Chrome) runs on top of the OS."
    },
    {
        question: "Arrange the following in INCREASING order of storage capacity: Byte, KB, MB, Bit, GB, TB",
        options: [
            "Bit < Byte < MB < KB < GB < TB",
            "Bit < Byte < KB < MB < GB < TB",
            "Byte < Bit < KB < MB < TB < GB",
            "Bit < KB < Byte < MB < GB < TB"
        ],
        correct: 1,
        explanation: "The correct increasing order is: Bit (1 bit) < Byte (8 bits) < Kilobyte (1024 Bytes) < Megabyte (1024 KB) < Gigabyte (1024 MB) < Terabyte (1024 GB). Each level is 1024× the previous (in binary)."
    }
];
