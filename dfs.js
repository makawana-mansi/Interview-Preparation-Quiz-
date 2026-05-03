
const questions = [

  {
    question: "Which data structure is used to store elements in continuous memory locations?",
    options: ["Linked List", "Array", "Stack", "Queue"],
    answer: "Array"
  },
  {
    question: "Which data structure is based on nodes and pointers?",
    options: ["Array", "Linked List", "Matrix", "String"],
    answer: "Linked List"
  },
  {
    question: "Which data structure is LIFO based?",
    options: ["Queue", "Stack", "Array", "Tree"],
    answer: "Stack"
  },
  {
    question: "Which data structure is FIFO based?",
    options: ["Stack", "Queue", "Array", "Graph"],
    answer: "Queue"
  },
  {
    question: "Which type of data structure is Tree?",
    options: ["Linear", "Non-linear", "Static", "Primitive"],
    answer: "Non-linear"
  },
  {
    question: "Which data type cannot be divided further?",
    options: ["Array", "Structure", "Primitive", "Linked List"],
    answer: "Primitive"
  },
  {
    question: "Which data structure is used in recursion?",
    options: ["Queue", "Stack", "Array", "Tree"],
    answer: "Stack"
  },
  {
    question: "Which of the following is dynamic in nature?",
    options: ["Array", "Linked List", "Matrix", "String"],
    answer: "Linked List"
  },
  {
    question: "Which operation inserts an element in data structure?",
    options: ["Delete", "Insert", "Search", "Sort"],
    answer: "Insert"
  },
  {
    question: "Which operation removes an element?",
    options: ["Insert", "Delete", "Search", "Traverse"],
    answer: "Delete"
  },
  {
    question: "Which algorithm is used to find an element?",
    options: ["Sorting", "Searching", "Traversal", "Insertion"],
    answer: "Searching"
  },
  {
    question: "Which search is simplest?",
    options: ["Binary Search", "Linear Search", "Hashing", "Tree Search"],
    answer: "Linear Search"
  },
  {
    question: "Binary search works on?",
    options: ["Unsorted data", "Sorted data", "Linked data", "Random data"],
    answer: "Sorted data"
  },
  {
    question: "Which sorting selects minimum element each time?",
    options: ["Bubble sort", "Insertion sort", "Selection sort", "Merge sort"],
    answer: "Selection sort"
  },
  {
    question: "Which sorting inserts element at correct position?",
    options: ["Insertion sort", "Bubble sort", "Selection sort", "Merge sort"],
    answer: "Insertion sort"
  },
  {
    question: "Merge sort is based on?",
    options: ["Divide and conquer", "Greedy", "Dynamic programming", "Backtracking"],
    answer: "Divide and conquer"
  },
  {
    question: "Which complexity is better?",
    options: ["O(n^2)", "O(n log n)", "O(n^3)", "O(2^n)"],
    answer: "O(n log n)"
  },
  {
    question: "Which factor measures algorithm efficiency?",
    options: ["Time and space", "Only time", "Only space", "None"],
    answer: "Time and space"
  },
  {
    question: "Which memory is used in dynamic allocation?",
    options: ["Stack", "Heap", "Register", "Cache"],
    answer: "Heap"
  },
  {
    question: "Linked list nodes are stored in?",
    options: ["Contiguous memory", "Random memory", "Cache", "Stack"],
    answer: "Random memory"
  },
  {
    question: "Which pointer holds first node address?",
    options: ["Tail", "Head", "Next", "Prev"],
    answer: "Head"
  },
  {
    question: "Last node of singly linked list contains?",
    options: ["0", "NULL", "Address", "Data"],
    answer: "NULL"
  },
  {
    question: "Doubly linked list contains how many pointers?",
    options: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    question: "Circular linked list last node points to?",
    options: ["NULL", "First node", "Middle node", "Random node"],
    answer: "First node"
  },
  {
    question: "Which linked list allows backward traversal?",
    options: ["Singly", "Doubly", "Circular", "None"],
    answer: "Doubly"
  },
  {
    question: "Which operation displays elements?",
    options: ["Insert", "Delete", "Display", "Search"],
    answer: "Display"
  },
  {
    question: "Which data structure is best for dynamic memory?",
    options: ["Array", "Linked List", "Matrix", "String"],
    answer: "Linked List"
  },
  {
    question: "Which structure uses index for access?",
    options: ["Linked List", "Array", "Tree", "Graph"],
    answer: "Array"
  },
  {
    question: "Sparse matrix mostly contains?",
    options: ["Non-zero values", "Zero values", "Equal values", "Random values"],
    answer: "Zero values"
  },
  {
    question: "Triplet representation is used in?",
    options: ["Array", "Sparse Matrix", "Tree", "Stack"],
    answer: "Sparse Matrix"
  },
  {
    question: "Algorithm must have?",
    options: ["Infinite steps", "Finite steps", "No steps", "Random steps"],
    answer: "Finite steps"
  },
  {
    question: "Which is NOT algorithm property?",
    options: ["Input", "Output", "Ambiguity", "Finiteness"],
    answer: "Ambiguity"
  },
  {
    question: "Time complexity depends on?",
    options: ["Input size", "Output size", "Language", "Compiler"],
    answer: "Input size"
  },
  {
    question: "Space complexity includes?",
    options: ["Only variables", "Only constants", "Variables and constants", "None"],
    answer: "Variables and constants"
  },
  {
    question: "Which data structure is homogeneous?",
    options: ["Array", "Structure", "Union", "Class"],
    answer: "Array"
  },
  {
    question: "Which structure allows heterogeneous data?",
    options: ["Array", "Structure", "Stack", "Queue"],
    answer: "Structure"
  },
  {
    question: "Which linked list has no NULL?",
    options: ["Singly", "Doubly", "Circular", "Linear"],
    answer: "Circular"
  },
  {
    question: "Which operation finds element position?",
    options: ["Insert", "Delete", "Search", "Sort"],
    answer: "Search"
  },
  {
    question: "Which sorting is simplest?",
    options: ["Merge sort", "Quick sort", "Bubble sort", "Heap sort"],
    answer: "Bubble sort"
  },
  {
    question: "Which structure is best for polynomial representation?",
    options: ["Array", "Linked List", "Stack", "Queue"],
    answer: "Linked List"
  },
  {
    question: "Which structure is used in adjacency list?",
    options: ["Array", "Linked List", "Stack", "Queue"],
    answer: "Linked List"
  },
  {
    question: "Which structure is used in adjacency matrix?",
    options: ["Array", "Linked List", "Stack", "Queue"],
    answer: "Array"
  },
  {
    question: "Which list has only forward traversal?",
    options: ["Singly", "Doubly", "Circular", "All"],
    answer: "Singly"
  },
  {
    question: "Which list has both directions traversal?",
    options: ["Singly", "Doubly", "Array", "Stack"],
    answer: "Doubly"
  },
  {
    question: "Which list connects last node to first?",
    options: ["Singly", "Doubly", "Circular", "Linear"],
    answer: "Circular"
  },
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




