// ═══════════════════════════════════════
// Quiz Data — 15 Graduation-Level Questions (Data Types)
// ═══════════════════════════════════════
const quizData = [
    {
        question: "Which of the following built-in functions generates the classification class of a variable?",
        options: [
            "class()",
            "type()",
            "classify()",
            "datatype()"
        ],
        correct: 1,
        explanation: "The type() function is a built-in Python method that returns the exact class/data type of whatever object is passed to it."
    },
    {
        question: "What does it fundamentally mean if a Data Type is 'Mutable'?",
        options: [
            "It can be assigned to different variables.",
            "Its internal data structure can be modified in-place after it is created.",
            "It must automatically resize itself if it gets too large.",
            "It cannot be altered, and a new object must be created instead."
        ],
        correct: 1,
        explanation: "Mutable means the object's memory address remains identical while you alter the contents inside of it (like a List or a Dictionary)."
    },
    {
        question: "If X = 5.0, what does type(X) return in Python?",
        options: [
            "<class 'int'>",
            "<class 'real'>",
            "<class 'float'>",
            "<class 'double'>"
        ],
        correct: 2,
        explanation: "Even though 5.0 mathematically equals the integer 5, the presence of the decimal point forces Python to classify and store it as a floating-point number (float)."
    },
    {
        question: "Which of the following represents a Complex Number in Python?",
        options: [
            "3 + 4i",
            "3 + 4j",
            "complex(3, 'i')",
            "3.4"
        ],
        correct: 1,
        explanation: "Unlike mathematics which uses 'i' for imaginary numbers, Python, rooted in engineering notation, strictly uses 'j'."
    },
    {
        question: "Which of the following describes the NoneType?",
        options: [
            "It is equivalent to the integer 0.",
            "It is equivalent to an empty string ''.",
            "It is an object indicating the distinct absence of a value.",
            "It means the compiler failed to read a line of code."
        ],
        correct: 2,
        explanation: "None is a completely unique data type in Python. It does not mean False, 0, or empty. It explicitly means 'Nothing'."
    },
    {
        question: "Is a String (str) a Mutable or Immutable Data Type?",
        options: [
            "Mutable",
            "Immutable",
            "Both, depending on how it was created.",
            "Neither, Strings are not objects in Python."
        ],
        correct: 1,
        explanation: "Strings are Immutable. You cannot change a single character inside a string in-place; you must mathematically create a brand new string and re-assign it."
    },
    {
        question: "Which brackets are used to instantiate a List?",
        options: [
            "Parentheses ( )",
            "Curly Braces { }",
            "Square Brackets [ ]",
            "Angle Brackets < >"
        ],
        correct: 2,
        explanation: "Lists are enclosed in square brackets [ 1, 2, 3 ]. Tuples use ( ). Dictionaries use { }."
    },
    {
        question: "If my_tuple = (10, 20, 30), what happens if you run: my_tuple[0] = 99?",
        options: [
            "The tuple updates to (99, 20, 30).",
            "The tuple is deleted.",
            "A TypeError is thrown because Tuples are Immutable.",
            "The program will ignore the command."
        ],
        correct: 2,
        explanation: "Because Tuples are Immutable, you are forbidden from altering data at any specific index after the Tuple has been created."
    },
    {
        question: "Under what specific circumstance would a programmer intentionally choose a Tuple over a List?",
        options: [
            "When they want to add new items to the sequence later.",
            "When they want to sort the data alphabetically.",
            "When they want to protect sensitive data from being accidentally modified during execution.",
            "When they don't know how long the sequence will be."
        ],
        correct: 2,
        explanation: "Tuples guarantee Data Integrity natively. If data like GPS coordinates or configuration settings should never change during runtime, a Tuple enforces that restriction."
    },
    {
        question: "Which Data Type utilizes a Key-Value pair structure?",
        options: [
            "Tuple",
            "Dictionary (dict)",
            "List",
            "String"
        ],
        correct: 1,
        explanation: "A Dictionary is a mapping type. Instead of retrieving data using a numerical sequence index, you retrieve it using a custom semantic Key."
    },
    {
        question: "What is guaranteed about Sequence data types (Strings, Lists, Tuples)?",
        options: [
            "All elements must be Integers.",
            "Their mathematical length cannot exceed 100.",
            "They maintain rigorous Order, allowing items to be retrieved via a numerical Index.",
            "They are all Mutable."
        ],
        correct: 2,
        explanation: "Sequences, by definition, store elements continuously in order. This structural guarantee means you can always rely on Index numbers (0, 1, 2) to fetch data."
    },
    {
        question: "What is a unique feature of Indexing in Python compared to languages like C or Java?",
        options: [
            "Python starts indexes at 1 instead of 0.",
            "Python does not support brackets at all.",
            "Python natively supports Negative Indexing (-1 meaning the last element in the sequence).",
            "Python indexes are randomized."
        ],
        correct: 2,
        explanation: "In Python, -1 fetches the last element, -2 fetches the second to last, etc. This removes the need to calculate the mathematical length of an array just to get the last item."
    },
    {
        question: "Which of the following Lists is valid in Python?",
        options: [
            "[1, 2, 3]",
            "['Apple', 'Banana', 'Cherry']",
            "[10, 'Hello', True, 3.14]",
            "All of the above"
        ],
        correct: 3,
        explanation: "Python Lists support Mixed Data Types simultaneously. You can blend Ints, Strings, Booleans, and Floats all within the exact same list."
    },
    {
        question: "What must be true about the Keys in a Python Dictionary?",
        options: [
            "They must be sequential integers.",
            "They must be strictly Immutable data types (like Ints or Strings).",
            "They must be strictly Mutable data types (like Lists).",
            "There are no rules."
        ],
        correct: 1,
        explanation: "You cannot use a Mutable object (like a List) as a Dictionary Key, because Dictionary Keys rely on Hash maps which would break if the underlying data shifted."
    },
    {
        question: "Which group correctly identifies only MUTABLE data types?",
        options: [
            "Integers, Floats, Strings",
            "Lists, Dictionaries, Sets",
            "Tuples, Integers, Booleans",
            "Strings, Lists, Tuples"
        ],
        correct: 1,
        explanation: "Lists, Dictionaries, and Sets can be altered, appended, and gutted after creation without their memory address fundamentally changing. All core Numbers, Strings and Tuples are Immutable."
    }
];
