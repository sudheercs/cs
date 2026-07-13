// ═══════════════════════════════════════
// Quiz Data — 12 Graduation-Level Questions (Encoding Schemes)
// ═══════════════════════════════════════
const quizData = [
    {
        question: "How many unique characters can standard 7-bit ASCII represent?",
        options: ["127", "128", "255", "256"],
        correct: 1,
        explanation: "Standard ASCII uses 7 bits for data. 2 raised to the power of 7 equals 128 unique character mappings (from decimal 0 to 127)."
    },
    {
        question: "What is the ASCII decimal value for the uppercase letter 'A'?",
        options: ["97", "65", "48", "32"],
        correct: 1,
        explanation: "The uppercase letter 'A' is mapped to decimal 65 in the ASCII standard. 'a' is 97, '0' is 48, and space is 32."
    },
    {
        question: "Why was Extended ASCII (8-bit) still insufficient for a networked global software environment?",
        options: [
            "It took up too much RAM",
            "It was incompatible with 7-bit ASCII",
            "256 characters cannot cover all global scripts (like Chinese, Arabic, Hindi) combined",
            "It only worked on Microsoft Windows"
        ],
        correct: 2,
        explanation: "While Extended ASCII increased the limit from 128 to 256 chars, there are tens of thousands of characters across global languages, making 256 completely inadequate for internationalization."
    },
    {
        question: "What does ISCII stand for?",
        options: [
            "Indian Standard Code for Information Interchange",
            "Indian Script Code for Information Interchange",
            "International Standard Code for Indian Interchange",
            "Internal Script Code for Internet Interchange"
        ],
        correct: 1,
        explanation: "ISCII stands for Indian Script Code for Information Interchange, formulated by the Bureau of Indian Standards."
    },
    {
        question: "How does ISCII maintain compatibility with standard English letters?",
        options: [
            "It uses 16 bits, putting English in the upper byte",
            "It uses the first 128 values (0-127) for ASCII, and values 128-255 for Indian scripts",
            "It forces users to switch between two different fonts manually",
            "It doesn't; ISCII is strictly for Hindi and Sanskrit only"
        ],
        correct: 1,
        explanation: "ISCII is an 8-bit standard (256 spaces). To remain backward compatible, the lower half (0-127) mirrors standard ASCII exactly. The upper half holds the regional script modifications."
    },
    {
        question: "In the context of Unicode, what is a 'Code Point'?",
        options: [
            "A specific memory address on the RAM chip",
            "The physical pixels that make up a character on screen",
            "A unique logical ID/number assigned to every character globally (e.g., U+0041 for 'A')",
            "A type of network error when a character isn't found"
        ],
        correct: 2,
        explanation: "A Code Point is just the unique integer assigned by the Unicode Consortium to a character. It is an abstract concept, unlike a UTF which defines how to store that integer in binary."
    },
    {
        question: "Which of the following is true regarding UTF-8?",
        options: [
            "It is a fixed-width encoding using exactly 8 bytes for everything",
            "It is a variable-width encoding using 1 to 4 bytes per character",
            "It cannot represent Emojis",
            "It is incompatible with standard ASCII text files"
        ],
        correct: 1,
        explanation: "UTF-8 is variable-width. It brilliantly saves space by using 1 byte for English, 2 for European/Arabic, 3 for most Asian scripts, and 4 for historic scripts / emojis."
    },
    {
        question: "If you have a server filled exclusively with millions of plain English text documents, which encoding will consume the LEAST hard drive space?",
        options: ["UTF-32", "UTF-16", "UTF-8", "All consume the exact same space"],
        correct: 2,
        explanation: "In UTF-8, standard English characters only take 1 byte each (identical to standard ASCII). In UTF-16, they take 2 bytes, and in UTF-32, they take 4 bytes. Thus, UTF-8 is most efficient here."
    },
    {
        question: "What is the primary advantage of UTF-32 over UTF-8?",
        options: [
            "It compresses files to be 4 times smaller",
            "It is the standard used by all Web Browsers",
            "Fast, $O(1)$ string indexing because every character is exactly the same physical size (4 bytes)",
            "It has a larger code chart limit for characters than UTF-8"
        ],
        correct: 2,
        explanation: "Because UTF-32 is fixed-width (4 bytes for every character), computers can instantly find the memory address of the N-th character in a string using simple math. Variable width requires scanning from the start."
    },
    {
        question: "If a text file starts with standard ASCII values, what is true about interpreting this file as UTF-8?",
        options: [
            "The file will show corrupted boxes because UTF-8 is fundamentally different",
            "UTF-8 is strictly backward compatible with standard ASCII; the file will read perfectly",
            "The computer will need to download a translator library first",
            "It depends on the operating system"
        ],
        correct: 1,
        explanation: "The architects of UTF-8 purposely designed it so that the first 128 Code Points map directly to the 128 ASCII characters, using just one byte. Thus, all standard ASCII files are implicitly valid UTF-8 files."
    },
    {
        question: "Unicode encompasses over 1 million code points. Which of the following does it support?",
        options: [
            "Modern global alphabets",
            "Historic scripts (e.g., Egyptian hieroglyphs)",
            "Mathematical symbols and Emojis",
            "All of the above"
        ],
        correct: 3,
        explanation: "The goal of Unicode is total universality. It provides code points for virtually every script and graphical symbol used by humanity, from ancient runes to modern emojis."
    },
    {
        question: "ISCII was formulated to unify the representation of scripts derived from which ancient script family?",
        options: [
            "Latin / Roman",
            "Cyrillic",
            "Brahmi (Devanagari, Bengali, Tamil, etc.)",
            "Cuneiform"
        ],
        correct: 2,
        explanation: "ISCII caters to the family of Indian scripts, the vast majority of which (Devanagari, Gujarati, Bengali, Tamil, Telugu, etc.) evolved from the ancient Brahmi script."
    }
];
