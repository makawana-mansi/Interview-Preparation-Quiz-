const questions =
  [
    {
      question: "Which inheritance has only one base class and one derived class?",
      options: ["Multiple", "Multilevel", "Single", "Hybrid"],
      answer: "Single"
    },
    {
      question: "The mechanism of deriving a class from another derived class is known as:",
      options: ["Multiple", "Multilevel", "Single", "Hierarchical"],
      answer: "Multilevel"
    },
    {
      question: "Which of these is used to resolve the 'Diamond Problem' in Hybrid inheritance?",
      options: ["Abstract Class", "Virtual Base Class", "Static Class", "Friend Class"],
      answer: "Virtual Base Class"
    },
    {
      question: "A class that contains at least one pure virtual function is known as:",
      options: ["Base Class", "Abstract Class", "Derived Class", "Pure Class"],
      answer: "Abstract Class"
    },
    {
      question: "In C++, which access specifier is the default for a class?",
      options: ["Public", "Protected", "Private", "Global"],
      answer: "Private"
    },
    {
      question: "Which operator is used to define a member function outside the class?",
      options: [".", "->", "::", ":"],
      answer: "::"
    },
    {
      question: "What is the 'this' pointer?",
      options: ["A pointer to a base class", "A pointer to the current object", "A pointer to a virtual function", "A global pointer"],
      answer: "A pointer to the current object"
    },
    {
      question: "Which keyword is used to handle run-time polymorphism?",
      options: ["static", "virtual", "inline", "friend"],
      answer: "virtual"
    },
    {
      question: "A pure virtual function is equated to which value?",
      options: ["1", "NULL", "0", "-1"],
      answer: "0"
    },
    {
      question: "Which class is used to link a file for reading?",
      options: ["ofstream", "ifstream", "fstream", "iostream"],
      answer: "ifstream"
    },
    {
      question: "Which class provides both input and output file operations?",
      options: ["ifstream", "ofstream", "fstream", "stdio"],
      answer: "fstream"
    },
    {
      question: "The file mode used to clear the file content upon opening is:",
      options: ["ios::app", "ios::ate", "ios::trunc", "ios::nocreate"],
      answer: "ios::trunc"
    },
    {
      question: "Which function tells the current position of the get pointer?",
      options: ["tellp()", "tellg()", "seekp()", "seekg()"],
      answer: "tellg()"
    },
    {
      question: "Which function is used to move the put pointer to a desired location?",
      options: ["seekg()", "seekp()", "tellg()", "tellp()"],
      answer: "seekp()"
    },
    {
      question: "What is 'argv' in command line arguments?",
      options: ["Argument Count", "Argument Vector", "Argument Value", "Argument Variable"],
      answer: "Argument Vector"
    },
    {
      question: "Which data structure works on the FIFO principle?",
      options: ["Stack", "Queue", "Tree", "Linked List"],
      answer: "Queue"
    },
    {
      question: "Adding an element to the top of a stack is called:",
      options: ["Pop", "Push", "Peek", "Rear"],
      answer: "Push"
    },
    {
      question: "In a queue, insertion is done at which end?",
      options: ["Front", "Rear", "Top", "Bottom"],
      answer: "Rear"
    },
    {
      question: "Which situation occurs when one tries to delete from an empty stack?",
      options: ["Overflow", "Underflow", "Garbage", "Null"],
      answer: "Underflow"
    },
    {
      question: "A linked list is what type of memory allocation?",
      options: ["Static", "Dynamic", "Compile-time", "Fixed"],
      answer: "Dynamic"
    },
    {
      question: "Each node in a single linked list contains data and a:",
      options: ["Pointer to previous", "Pointer to next", "Value", "Header"],
      answer: "Pointer to next"
    },
    {
      question: "Which linked list allows traversal in both directions?",
      options: ["Singly", "Doubly", "Circular", "Linear"],
      answer: "Doubly"
    },
    {
      question: "Which traversal visits the root node between left and right subtrees?",
      options: ["Pre-order", "In-order", "Post-order", "Level-order"],
      answer: "In-order"
    },
    {
      question: "A tree node with no children is called a:",
      options: ["Root node", "Leaf node", "Interior node", "Parent node"],
      answer: "Leaf node"
    },
    {
      question: "The height of an empty tree is usually considered:",
      options: ["0", "1", "-1", "Infinite"],
      answer: "-1"
    },
    {
      question: "Which algorithm is used for finding the shortest path in a graph?",
      options: ["Bubble Sort", "Dijkstra's", "Binary Search", "DFS"],
      answer: "Dijkstra's"
    },
    {
      question: "What is the time complexity of a linear search?",
      options: ["O(log n)", "O(n)", "O(1)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which sorting method picks an element and places it in its correct position relative to already sorted elements?",
      options: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort"],
      answer: "Insertion Sort"
    },
    {
      question: "The 'argc' parameter in main() stores:",
      options: ["The value of arguments", "The count of arguments", "The file path", "The pointer"],
      answer: "The count of arguments"
    },
    {
      question: "Which manipulator is used to flush the buffer and insert a newline?",
      options: ["setw", "endl", "setfill", "flush"],
      answer: "endl"
    },
    {
      question: "Which file mode allows opening a file for both reading and writing?",
      options: ["ios::in", "ios::out", "ios::in | ios::out", "ios::binary"],
      answer: "ios::in | ios::out"
    },
    {
      question: "In a circular queue, the 'Rear' pointer moves from 'Max-1' to:",
      options: ["-1", "0", "1", "Max"],
      answer: "0"
    },
    {
      question: "Which function is used to release dynamically allocated memory in C++?",
      options: ["free()", "delete", "remove()", "clear()"],
      answer: "delete"
    },
    {
      question: "The process of visiting every node in a data structure exactly once is:",
      options: ["Searching", "Sorting", "Traversal", "Insertion"],
      answer: "Traversal"
    },
    {
      question: "Which of the following is a non-linear data structure?",
      options: ["Stack", "Queue", "Array", "Graph"],
      answer: "Graph"
    },
    {
      question: "A binary search tree's left child is always ______ than the root.",
      options: ["Greater", "Smaller", "Equal", "Twice"],
      answer: "Smaller"
    },
    {
      question: "Which C++ feature allows a function to be called using an object's pointer?",
      options: ["Scope Resolution", "Encapsulation", "Virtual Functions", "Abstraction"],
      answer: "Virtual Functions"
    },
    {
      question: "Sparse matrix contains mainly:",
      options: ["Ones", "Zeros", "Unique numbers", "Negative numbers"],
      answer: "Zeros"
    },
    {
      question: "The '->' operator is a combination of which two operators?",
      options: ["* and .", "& and .", ":: and .", "+ and -"],
      answer: "* and ."
    },
    {
      question: "Which sorting algorithm uses the 'Divide and Conquer' strategy?",
      options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
      answer: "Merge Sort"
    },
    {
      question: "Which traversal visits the root node first?",
      options: ["In-order", "Pre-order", "Post-order", "Depth-first"],
      answer: "Pre-order"
    },
    {
      question: "What is the degree of a leaf node in a tree?",
      options: ["1", "0", "2", "Varies"],
      answer: "0"
    },
    {
      question: "Which structure connects nodes with edges in an unordered pair?",
      options: ["Directed Graph", "Undirected Graph", "Tree", "Stack"],
      answer: "Undirected Graph"
    },
    {
      question: "The 'eof()' function returns true when:",
      options: ["File starts", "File is empty", "End of file is reached", "File is missing"],
      answer: "End of file is reached"
    },
    {
      question: "Which function is used to write a single character to a file?",
      options: ["get()", "put()", "read()", "write()"],
      answer: "put()"
    },
    {
      question: "What is the index of the last element in an array of size N?",
      options: ["N", "N+1", "N-1", "0"],
      answer: "N-1"
    },
    {
      question: "Which data structure is used to implement a recursive function?",
      options: ["Queue", "Stack", "List", "Array"],
      answer: "Stack"
    },
    {
      question: "Which keyword prevents a class from being inherited?",
      options: ["static", "const", "final (in some versions)", "private"],
      answer: "private constructor (or final)"
    },
    {
      question: "Which function allows a non-member function to access private data?",
      options: ["Virtual", "Inline", "Friend", "Static"],
      answer: "Friend"
    },
    {
      question: "Binary search is much faster than linear search for ______ arrays.",
      options: ["Large", "Small", "Unsorted", "Sorted"],
      answer: "Sorted"
    },
    {
      question: "Which data structure is referred to as a 'Designated Node' tree?",
      options: ["Graph", "Rooted Tree", "Array", "Stack"],
      answer: "Rooted Tree"
    },
    {
      question: "The lines connecting nodes in a tree are called:",
      options: ["Links", "Edges", "Branches", "All of these"],
      answer: "Branches"
    },
    {
      question: "What is the degree of a node?",
      options: ["Number of parents", "Number of children", "Height of node", "Depth of node"],
      answer: "Number of children"
    },
    {
      question: "A Binary Tree where every node has either 0 or 2 children is called:",
      options: ["Complete Binary Tree", "Strictly Binary Tree", "Extended Binary Tree", "None"],
      answer: "Strictly Binary Tree"
    },
    {
      question: "Which traversal is used to get the postfix expression from an expression tree?",
      options: ["Pre-order", "In-order", "Post-order", "Level-order"],
      answer: "Post-order"
    },
    {
      question: "In a Graph, if (u,v) is the same as (v,u), it is called:",
      options: ["Directed Graph", "Undirected Graph", "Weighted Graph", "Digraph"],
      answer: "Undirected Graph"
    },
    {
      question: "Which graph representation uses a 2D array?",
      options: ["Adjacency List", "Adjacency Matrix", "Incidence List", "Linked List"],
      answer: "Adjacency Matrix"
    },
    {
      question: "What is the maximum number of edges in a simple graph with 'n' vertices?",
      options: ["n", "n(n-1)", "n(n-1)/2", "n^2"],
      answer: "n(n-1)/2"
    },
    {
      question: "A path that starts and ends at the same vertex is called:",
      options: ["Walk", "Trail", "Cycle", "Bridge"],
      answer: "Cycle"
    },
    {
      question: "Which searching technique is also known as Sequential Search?",
      options: ["Binary Search", "Linear Search", "Hashing", "None"],
      answer: "Linear Search"
    },
    {
      question: "What is the best case time complexity of Linear Search?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(1)"
    },
    {
      question: "In Selection Sort, which element is found first and swapped?",
      options: ["Largest", "Smallest", "Middle", "Random"],
      answer: "Smallest"
    },
    {
      question: "Which sorting algorithm is most efficient for small datasets?",
      options: ["Merge Sort", "Quick Sort", "Insertion Sort", "Heap Sort"],
      answer: "Insertion Sort"
    },
    {
      question: "The efficiency of file organization is measured by:",
      options: ["Access Speed", "Storage", "Maintenance", "All of these"],
      answer: "All of these"
    },
    {
      question: "Which file organization is best for large volume of data with sequential access?",
      options: ["Direct", "Sequential", "Indexed", "Hashed"],
      answer: "Sequential"
    },
    {
      question: "Which file attribute defines who can access the file?",
      options: ["Name", "Size", "Permissions", "Location"],
      answer: "Permissions"
    },
    {
      question: "What is the use of 'fseek()' function?",
      options: ["Read data", "Write data", "Move file pointer", "Close file"],
      answer: "Move file pointer"
    },
    {
      question: "In fseek(fp, -5, SEEK_END), where does the pointer move?",
      options: ["5 bytes from start", "5 bytes from current", "5 bytes back from end", "Start of file"],
      answer: "5 bytes back from end"
    },
    {
      question: "Which function is used to get the current file pointer position in bytes?",
      options: ["fseek()", "ftell()", "rewind()", "feof()"],
      answer: "ftell()"
    },
    {
      question: "Inheritance without the 'virtual' keyword in a Diamond structure causes:",
      options: ["Fast execution", "Ambiguity", "Memory saving", "Security"],
      answer: "Ambiguity"
    },
    {
      question: "A class containing only pure virtual functions and no data is often called:",
      options: ["Base class", "Interface", "Static class", "Friend class"],
      answer: "Interface"
    },
    {
      question: "Virtual functions are useful in implementing:",
      options: ["Static Binding", "Dynamic Binding", "Early Binding", "No Binding"],
      answer: "Dynamic Binding"
    },
    {
      question: "Which pointer is implicitly passed to all non-static member functions?",
      options: ["null", "void", "this", "base"],
      answer: "this"
    },
    {
      question: "Which class is used to create a file if it doesn't exist?",
      options: ["ifstream", "ofstream", "istream", "ostream"],
      answer: "ofstream"
    },
    {
      question: "In command line: 'myprog.exe data.txt', what is argv[0]?",
      options: ["myprog.exe", "data.txt", "NULL", "0"],
      answer: "myprog.exe"
    },
    {
      question: "Which stream object is used for standard error output?",
      options: ["cin", "cout", "cerr", "clog"],
      answer: "cerr"
    },
    {
      question: "What is the purpose of 'rewind()'?",
      options: ["Close file", "Move pointer to start", "Move pointer to end", "Delete file"],
      answer: "Move pointer to start"
    },
    {
      question: "A Stack is also known as a:",
      options: ["Push-down list", "FIFO list", "Linear graph", "Rooted tree"],
      answer: "Push-down list"
    },
    {
      question: "Which data structure is used to convert Infix to Postfix?",
      options: ["Queue", "Stack", "Tree", "Array"],
      answer: "Stack"
    },
    {
      question: "In a Linked List, 'Overflow' occurs during insertion when:",
      options: ["List is empty", "Memory is full", "Node is null", "Pointer is zero"],
      answer: "Memory is full"
    },
    {
      question: "A Circular Linked List has no ______ node.",
      options: ["First", "Middle", "Null", "Data"],
      answer: "Null"
    },
    {
      question: "Which traversal of BST gives elements in sorted order?",
      options: ["Pre-order", "Post-order", "In-order", "Level-order"],
      answer: "In-order"
    },
    {
      question: "The number of edges in a tree with 'n' nodes is:",
      options: ["n", "n+1", "n-1", "log n"],
      answer: "n-1"
    },
    {
      question: "Which algorithm uses 'front' and 'rear' pointers?",
      options: ["Stack", "Queue", "Tree", "Binary Search"],
      answer: "Queue"
    },
    {
      question: "What is the default visibility of members in a C++ 'struct'?",
      options: ["Private", "Public", "Protected", "Internal"],
      answer: "Public"
    },
    {
      question: "Which sorting algorithm has a worst-case of O(n^2) but is generally very fast?",
      options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Linear Sort"],
      answer: "Quick Sort"
    },
    {
      question: "Which data structure is best for 'Undo' operations in software?",
      options: ["Queue", "Stack", "Tree", "Linked List"],
      answer: "Stack"
    },
    {
      question: "What is a 'Forest' in data structures?",
      options: ["Large tree", "Collection of disjoint trees", "Graph with cycles", "Binary Search Tree"],
      answer: "Collection of disjoint trees"
    },
    {
      question: "In BFS, which data structure is used?",
      options: ["Stack", "Queue", "Linked List", "Tree"],
      answer: "Queue"
    },
    {
      question: "In DFS, which data structure is used?",
      options: ["Stack", "Queue", "Linked List", "Tree"],
      answer: "Stack"
    },
    {
      question: "Which header file is used for 'setw' and 'setprecision'?",
      options: ["iostream", "iomanip", "fstream", "conio"],
      answer: "iomanip"
    },
    {
      question: "What does 'ios::binary' mode do?",
      options: ["Opens file in text mode", "Opens file in binary mode", "Closes file", "Deletes file"],
      answer: "Opens file in binary mode"
    },
    {
      question: "The 'new' operator returns:",
      options: ["Value", "Address", "Null", "Void"],
      answer: "Address"
    },
    {
      question: "A destructor has the same name as class but starts with:",
      options: ["&", "*", "~", "!"],
      answer: "~"
    },
    {
      question: "Which type of inheritance is not supported in Java but supported in C++?",
      options: ["Single", "Multilevel", "Multiple", "Hierarchical"],
      answer: "Multiple"
    },
    {
      question: "A class from which no other class can be derived is:",
      options: ["Final class", "Abstract class", "Base class", "Derived class"],
      answer: "Final class"
    },
    {
      question: "The '::' operator is used for:",
      options: ["Scope Resolution", "Pointer access", "Reference", "Comparison"],
      answer: "Scope Resolution"
    },
    {
      question: "What is 'clog' used for?",
      options: ["Input", "Standard error (buffered)", "Standard output", "Standard error (unbuffered)"],
      answer: "Standard error (buffered)"
    },
    {
      question: "A Priority Queue elements are deleted based on:",
      options: ["FIFO", "LIFO", "Priority", "Random"],
      answer: "Priority"
    },
    {
      question: "The time required to search an element in a Hash Table is (Average):",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      answer: "O(1)"
    }
  ];

//load question

function loadQuestions() {
  let quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  for (let i = 0; i < questions.length; i++) {
    let q = questions[i];

    let html = `
      <div class="mcq-box">
      <div class="q-title">
      Q${i + 1}. ${q.question}</div>

      ${q.code ? `<div class="code-box">${q.code}</div>` : ""}

      <div class="options">
    `;


    for (let j = 0; j < q.options.length; j++) {

      let optionLabel = String.fromCharCode(65 + j);

      html += `<label>
       ${optionLabel}.
      <input type="radio" name="q${i}" value="${q.options[j]}">
      ${q.options[j]}
    </label><br>
    `;
    }
    html += `
     </div>

      <div class="btn-group">

      <button onclick="checkAnswers()" class="submit">Submit</button>
          
      
      <button class="btn green" onclick="showSolution(${i})">Answer & solution</button>
      </div>
      <p id="res${i}"></p>
      <p id="sol${i}" class="solution"></p>


</div>
     `;

    quiz.innerHTML += html;
  }
}

//Check answers
function checkAnswers() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    let ans = document.querySelector('input[name="q' + i + '"]:checked');
    let resultBox = document.getElementById("res" + i);

    if (ans) {
      if (ans && ans.value === questions[i].answer) {
        score++;
        resultBox.innerText = "Correct";
      }
      else {
        resultBox.innerText = "Wrong";
      }
    }
  }

  document.getElementById("result").innerText =
    "Score: " + score + " / " + questions.length;
}

// 🔥 SHOW SOLUTION FUNCTION

function showSolution(index) {
  let sol = document.getElementById("sol" + index);
  let correctAnswer = questions[index].answer;;
  let options = questions[index].options;
  let optionsIndex = options.indexOf(correctAnswer);
  let optionLabel = String.fromCharCode(65 + optionsIndex);
  sol.innerHTML =

    `<b>Answer : </b>${optionLabel}.${correctAnswer}
  <br><br>
  <b>solution : </b> This is correct explanation`;


  sol.style.display = "block";
}

loadQuestions();




