
const questions =
  [
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
      question: "In a circular queue, the 'Rear' pointer moves from 'Max-1' to:",
      options: ["-1", "0", "1", "Max"],
      answer: "0"
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
      question: "Sparse matrix contains mainly:",
      options: ["Ones", "Zeros", "Unique numbers", "Negative numbers"],
      answer: "Zeros"
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
      question: "Binary search is much faster than linear search for ______ arrays.",
      options: ["Large", "Small", "Unsorted", "Sorted"],
      answer: "Sorted"
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
      question: "The time required to search an element in a Hash Table is (Average):",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      answer: "O(1)"
    },
    {
      question: "Which of the following is a primitive data structure?",
      options: ["Integer", "Array", "Structure", "Linked List"],
      answer: "Integer"
    },
    {
      question: "Which data structure is used to represent many-to-many relationships?",
      options: ["Tree", "Graph", "Queue", "Stack"],
      answer: "Graph"
    },
    {
      question: "The process of arranging data in a specific order is called:",
      options: ["Searching", "Sorting", "Merging", "Traversing"],
      answer: "Sorting"
    },
    {
      question: "Which of these is a linear data structure?",
      options: ["Graph", "Tree", "Stack", "Binary Search Tree"],
      answer: "Stack"
    },
    {
      question: "A matrix with a high percentage of zero elements is called:",
      options: ["Identity Matrix", "Sparse Matrix", "Square Matrix", "Null Matrix"],
      answer: "Sparse Matrix"
    },
    {
      question: "What is the complexity of accessing an element in an array using an index?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(1)"
    },
    {
      question: "Which of the following is the application of a Stack?",
      options: ["Recursion", "Function Call", "Expression Evaluation", "All of these"],
      answer: "All of these"
    },
    {
      question: "In a stack, if the TOP pointer is -1, it indicates:",
      options: ["Stack is Full", "Stack is Empty", "Stack has one element", "None"],
      answer: "Stack is Empty"
    },
    {
      question: "What is the prefix form of the expression (A + B) * C?",
      options: ["*+ABC", "AB+C*", "+*ABC", "ABC+*"],
      answer: "*+ABC"
    },
    {
      question: "A queue where elements can be added or removed from both ends is called:",
      options: ["Priority Queue", "Circular Queue", "Deque", "Simple Queue"],
      answer: "Deque"
    },
    {
      question: "Which data structure is most suitable for a print-job scheduler?",
      options: ["Stack", "Queue", "Linked List", "Tree"],
      answer: "Queue"
    },
    {
      question: "The 'Rear' end of a queue is used for:",
      options: ["Deletion", "Insertion", "Searching", "Traversing"],
      answer: "Insertion"
    },
    {
      question: "In a Singly Linked List, the last node's pointer contains:",
      options: ["Address of first node", "Address of middle node", "NULL", "Garbage value"],
      answer: "NULL"
    },
    {
      question: "A Linked List where the last node points back to the first node is:",
      options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Linear List"],
      answer: "Circular Linked List"
    },
    {
      question: "What is the advantage of a Doubly Linked List over a Singly Linked List?",
      options: ["Uses less memory", "Faster insertion", "Bidirectional traversal", "Simple to implement"],
      answer: "Bidirectional traversal"
    },
    {
      question: "Which of the following is a non-linear data structure?",
      options: ["Queue", "Stack", "Tree", "Array"],
      answer: "Tree"
    },
    {
      question: "The maximum number of nodes at level 'L' of a binary tree is:",
      options: ["2^L", "2^(L-1)", "L^2", "2L"],
      answer: "2^L"
    },
    {
      question: "Which tree traversal algorithm uses the 'Root-Left-Right' order?",
      options: ["In-order", "Pre-order", "Post-order", "Level-order"],
      answer: "Pre-order"
    },
    {
      question: "In a Binary Search Tree (BST), the right subtree of a node contains:",
      options: ["Smaller keys", "Equal keys", "Greater keys", "Any keys"],
      answer: "Greater keys"
    },
    {
      question: "A complete graph with 'n' vertices has how many edges?",
      options: ["n", "n-1", "n(n-1)/2", "n^2"],
      answer: "n(n-1)/2"
    },
    {
      question: "A graph without any cycles is called a/an:",
      options: ["Acyclic Graph", "Cyclic Graph", "Directed Graph", "Path"],
      answer: "Acyclic Graph"
    },
    {
      question: "Which algorithm finds the Minimum Spanning Tree (MST)?",
      options: ["Dijkstra's", "Kruskal's", "Binary Search", "Quick Sort"],
      answer: "Kruskal's"
    },
    {
      question: "In BFS (Breadth-First Search), which data structure is used for tracking?",
      options: ["Stack", "Queue", "Tree", "Array"],
      answer: "Queue"
    },
    {
      question: "What is the time complexity of Bubble Sort in the worst case?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
      answer: "O(n^2)"
    },
    {
      question: "Binary search can only be applied on:",
      options: ["Unsorted arrays", "Sorted arrays", "Linked lists", "Graphs"],
      answer: "Sorted arrays"
    },
    {
      question: "Which sorting algorithm is based on the idea of 'Pivot' element?",
      options: ["Merge Sort", "Insertion Sort", "Quick Sort", "Bubble Sort"],
      answer: "Quick Sort"
    },
    {
      question: "What is the height of a tree with only a root node?",
      options: ["-1", "0", "1", "2"],
      answer: "0"
    },
    {
      question: "The degree of a graph is the number of ______ connected to a vertex.",
      options: ["Nodes", "Edges", "Loops", "Weights"],
      answer: "Edges"
    },
    {
      question: "Which data structure is best for implementing an 'Adjacency List' of a graph?",
      options: ["Stack", "Linked List", "Queue", "Binary Tree"],
      answer: "Linked List"
    },
    {
      question: "A file that is organized such that records can be accessed in any order is:",
      options: ["Sequential File", "Direct Access File", "Indexed File", "Hashed File"],
      answer: "Direct Access File"
    },
    {
      question: "What is the full form of Hashing in DFS?",
      options: ["Data sorting", "Mapping large keys to small indices", "File compression", "Data merging"],
      answer: "Mapping large keys to small indices"
    },
    {
      question: "When two different keys produce the same hash address, it is called:",
      options: ["Merging", "Collision", "Overflow", "Chaining"],
      answer: "Collision"
    },
    {
      question: "Which searching method has the best average time complexity O(1)?",
      options: ["Linear Search", "Binary Search", "Hashing", "Interpolation Search"],
      answer: "Hashing"
    },
    {
      question: "What is an AVL tree?",
      options: ["Self-balancing BST", "Complete Binary Tree", "Heap", "Graph"],
      answer: "Self-balancing BST"
    },
    {
      question: "A node's balance factor in an AVL tree can be:",
      options: ["0", "1 or -1", "All of these", "2"],
      answer: "All of these"
    },
    {
      question: "Which data structure is needed to convert an Infix expression to Prefix?",
      options: ["Queue", "Stack", "Tree", "Graph"],
      answer: "Stack"
    },
    {
      question: "In a binary tree, the number of nodes at any level i is at most:",
      options: ["2i", "2^i", "i^2", "2^(i-1)"],
      answer: "2^i"
    },
    {
      question: "Which of the following is an example of a dynamic data structure?",
      options: ["Array", "Linked List", "Primitive Integer", "None"],
      answer: "Linked List"
    },
    {
      question: "What is the complexity of searching an element in a Binary Search Tree in the worst case?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: "O(n)"
    },
    {
      question: "A graph is said to be ______ if there is a path between every pair of vertices.",
      options: ["Complete", "Connected", "Acyclic", "Directed"],
      answer: "Connected"
    },
    {
      question: "The term 'Pop' refers to which operation in a stack?",
      options: ["Adding an item", "Deleting an item", "Checking if empty", "Viewing top item"],
      answer: "Deleting an item"
    },
    {
      question: "Which traversal technique is used to find the shortest path in an unweighted graph?",
      options: ["DFS", "BFS", "In-order", "Post-order"],
      answer: "BFS"
    },
    {
      question: "The first node of a tree is called:",
      options: ["Leaf", "Stem", "Root", "Branch"],
      answer: "Root"
    },
    {
      question: "Which data structure is used in the implementation of a Priority Queue?",
      options: ["Stack", "Heap", "Simple Queue", "Linked List"],
      answer: "Heap"
    },
    {
      question: "In a Doubly Linked List, how many pointers are there in each node?",
      options: ["1", "2", "3", "0"],
      answer: "2"
    },
    {
      question: "What is the time complexity of Quick Sort in the best case?",
      options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
      answer: "O(n log n)"
    },
    {
      question: "Which of the following is not a type of file organization?",
      options: ["Sequential", "Random", "Indexed", "Linear"],
      answer: "Linear"
    },
    {
      question: "The data structure used to store a sparse matrix efficiently is:",
      options: ["Linked List", "Stack", "Queue", "Binary Tree"],
      answer: "Linked List"
    },
    {
      question: "Which overflow handling technique uses a separate list for collisions in Hashing?",
      options: ["Open Addressing", "Chaining", "Linear Probing", "Double Hashing"],
      answer: "Chaining"
    },
    {
      question: "A Binary Tree is called ______ if all its levels are completely filled except possibly the last.",
      options: ["Full", "Complete", "Strict", "Perfect"],
      answer: "Complete"
    },
    {
      question: "What is the postfix equivalent of the infix expression A + B * C?",
      options: ["ABC*+", "+ABC*", "AB+C*", "ABC+*"],
      answer: "ABC*+"
    },
    {
      question: "Which pointer in a queue is updated during a delete operation?",
      options: ["Rear", "Front", "Top", "Next"],
      answer: "Front"
    },
    {
      question: "In an Adjacency Matrix, a '1' at row i and column j represents:",
      options: ["A vertex", "An edge between i and j", "A loop", "Weight"],
      answer: "An edge between i and j"
    },
    {
      question: "The process of combining two sorted lists into one sorted list is:",
      options: ["Sorting", "Merging", "Traversing", "Insertion"],
      answer: "Merging"
    },
    {
      question: "Which data structure is primarily used to implement the 'Undo' feature in text editors?",
      options: ["Queue", "Linked List", "Stack", "Array"],
      answer: "Stack"
    },
    {
      question: "The height of a binary tree with 'n' nodes is at least:",
      options: ["log2(n+1)", "n", "n/2", "n^2"],
      answer: "log2(n+1)"
    },
    {
      question: "Which of the following sorting algorithms is stable by nature?",
      options: ["Quick Sort", "Merge Sort", "Heap Sort", "Selection Sort"],
      answer: "Merge Sort"
    },
    {
      question: "A leaf node is also known as a/an:",
      options: ["Internal node", "External node", "Root node", "Intermediate node"],
      answer: "External node"
    },
    {
      question: "Which hashing function uses the 'mod' operator?",
      options: ["Mid-square", "Division method", "Folding method", "Multiplication method"],
      answer: "Division method"
    },
    {
      question: "The number of nodes in a complete binary tree of depth d is:",
      options: ["2^d", "2^(d+1) - 1", "2^d - 1", "2^(d-1)"],
      answer: "2^(d+1) - 1"
    },
    {
      question: "Which linked list doesn't have a NULL pointer?",
      options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "None"],
      answer: "Circular Linked List"
    },
    {
      question: "What is the purpose of a 'Header Node' in a linked list?",
      options: ["Store data", "Point to the last node", "Simplify insertions/deletions", "None"],
      answer: "Simplify insertions/deletions"
    },
    {
      question: "Which search algorithm divides the list into two halves in every step?",
      options: ["Linear Search", "Binary Search", "Hash Search", "Sequential Search"],
      answer: "Binary Search"
    },
    {
      question: "What is the time complexity of Selection Sort?",
      options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
      answer: "O(n^2)"
    },
    {
      question: "In a graph, the number of edges incident to a vertex is its:",
      options: ["Path", "Degree", "Weight", "Cycle"],
      answer: "Degree"
    },
    {
      question: "Which file organization allows for the fastest retrieval of a single specific record?",
      options: ["Sequential", "Indexed Sequential", "Direct (Hashed)", "Relative"],
      answer: "Direct (Hashed)"
    },
    {
      question: "A deque is a ______ queue.",
      options: ["Single-ended", "Double-ended", "Circular", "Priority"],
      answer: "Double-ended"
    },
    {
      question: "Which operation is performed to check if the stack is full?",
      options: ["isEmpty", "isFull", "isOverflow", "Peek"],
      answer: "isFull"
    },
    {
      question: "In a tree, a node that has children is called a/an:",
      options: ["Leaf node", "Internal node", "External node", "Terminal node"],
      answer: "Internal node"
    },
    {
      question: "Which data structure is used by the compiler to check balanced parentheses?",
      options: ["Stack", "Queue", "Tree", "Array"],
      answer: "Stack"
    },
    {
      question: "Which of the following is an example of a forest in data structures?",
      options: ["A single tree", "A collection of disjoint trees", "A tree with no leaves", "A graph with cycles"],
      answer: "A collection of disjoint trees"
    },
    {
      question: "The time complexity of finding an element in a balanced BST is:",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      answer: "O(log n)"
    },
    {
      question: "Which data structure is best for implementing a priority-based task list?",
      options: ["Heap", "Stack", "Simple Queue", "Array"],
      answer: "Heap"
    },
    {
      question: "In a circular linked list, the insertion of a node at the end involves changing:",
      options: ["Only the last node", "Only the head node", "Both last and head nodes", "No nodes"],
      answer: "Both last and head nodes"
    },
    {
      question: "Which of the following sorting algorithms uses partitioning?",
      options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion Sort"],
      answer: "Quick Sort"
    },
    {
      question: "A graph is a tree if it is:",
      options: ["Connected and has no cycles", "Disconnected", "Directed", "Complete"],
      answer: "Connected and has no cycles"
    },
    {
      question: "The space complexity of an adjacency matrix for a graph with V vertices is:",
      options: ["O(V)", "O(V^2)", "O(E)", "O(V+E)"],
      answer: "O(V^2)"
    },
    {
      question: "Which hash collision method is also known as 'closed hashing'?",
      options: ["Separate Chaining", "Open Addressing", "Double Hashing", "Rehashing"],
      answer: "Open Addressing"
    },
    {
      question: "What is the result of an in-order traversal of a Binary Search Tree?",
      options: ["Unsorted data", "Sorted data in ascending order", "Sorted data in descending order", "Random data"],
      answer: "Sorted data in ascending order"
    },
    {
      question: "The minimum number of stacks required to implement a queue is:",
      options: ["1", "2", "3", "4"],
      answer: "2"
    },
    {
      question: "Which of the following is a non-linear data structure?",
      options: ["String", "Linked List", "Graph", "Stack"],
      answer: "Graph"
    },
    {
      question: "A complete binary tree with 15 nodes has a height of:",
      options: ["3", "4", "5", "15"],
      answer: "3"
    },
    {
      question: "In a min-heap, the root node contains the ______ value.",
      options: ["Maximum", "Minimum", "Middle", "Average"],
      answer: "Minimum"
    },
    {
      question: "Which file organization is most efficient for processing all records in order?",
      options: ["Sequential", "Direct", "Hashed", "Random"],
      answer: "Sequential"
    },
    {
      question: "The operation of moving the file pointer is performed by:",
      options: ["fseek()", "ftell()", "rewind()", "Both fseek and rewind"],
      answer: "Both fseek and rewind"
    },
    {
      question: "Which pointer is used to add an element in a queue?",
      options: ["Front", "Rear", "Top", "Bottom"],
      answer: "Rear"
    },
    {
      question: "Which searching algorithm uses the middle element for comparison?",
      options: ["Linear Search", "Binary Search", "Depth First Search", "Breadth First Search"],
      answer: "Binary Search"
    },
    {
      question: "What is the maximum degree of any node in a binary tree?",
      options: ["0", "1", "2", "Unlimited"],
      answer: "2"
    },
    {
      question: "A graph where every edge has a direction is called:",
      options: ["Undirected Graph", "Digraph", "Connected Graph", "Complete Graph"],
      answer: "Digraph"
    },
    {
      question: "Which data structure is suitable for evaluating a postfix expression?",
      options: ["Queue", "Stack", "Tree", "Array"],
      answer: "Stack"
    },
    {
      question: "The process of deleting a node from a linked list involves:",
      options: ["Shifting all elements", "Updating pointers", "Reallocating the whole list", "None"],
      answer: "Updating pointers"
    },
    {
      question: "What is the time complexity of building a heap from an array?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
      answer: "O(n)"
    },
    {
      question: "Which of the following is a type of queue?",
      options: ["Circular Queue", "Priority Queue", "Deque", "All of these"],
      answer: "All of these"
    },
    {
      question: "The traversal that visits all neighbors of a node before moving deeper is:",
      options: ["DFS", "BFS", "In-order", "Pre-order"],
      answer: "BFS"
    },
    {
      question: "Which structure is used for the 'Call Stack' in programming languages?",
      options: ["Queue", "Stack", "Graph", "Heap"],
      answer: "Stack"
    },
    {
      question: "What is a balanced tree?",
      options: ["Height of left and right subtrees differ by at most 1", "All nodes have 2 children", "Tree with no leaves", "Tree with only one path"],
      answer: "Height of left and right subtrees differ by at most 1"
    },
    {
      question: "A path in which all vertices are distinct is called a:",
      options: ["Cycle", "Simple Path", "Walk", "Trail"],
      answer: "Simple Path"
    },
    {
      question: "Which algorithm is commonly used for garbage collection in memory?",
      options: ["Sorting", "Graph Traversal", "Searching", "Hashing"],
      answer: "Graph Traversal"
    },
    {
      question: "What is the advantage of a circular queue over a simple queue?",
      options: ["Faster access", "Better memory utilization", "Easier to implement", "None"],
      answer: "Better memory utilization"
    },
    {
      question: "In a binary search, if the element is not found, it returns:",
      options: ["0", "-1", "1", "NULL"],
      answer: "-1"
    },
    {
      question: "Which of the following is not a stable sort?",
      options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Merge Sort"],
      answer: "Quick Sort"
    },
    {
      question: "The pointer that tracks the first element in a linked list is called:",
      options: ["Last", "Head", "Tail", "Rear"],
      answer: "Head"
    },
    {
      question: "Which data structure is best for implementing a dictionary?",
      options: ["Hash Table", "Stack", "Queue", "Linked List"],
      answer: "Hash Table"
    },
    {
      question: "What is an edge with the same vertex as both endpoints called?",
      options: ["Cycle", "Loop", "Bridge", "Path"],
      answer: "Loop"
    },
    {
      question: "Which file mode is used to read from a binary file in C++?",
      options: ["ios::in", "ios::binary", "ios::in | ios::binary", "ios::out"],
      answer: "ios::in | ios::binary"
    },
    {
      question: "The level of the root node is typically considered:",
      options: ["0", "1", "-1", "Any value"],
      answer: "0"
    },
    {
      question: "Which traversal visits the left child, right child, and then the root?",
      options: ["Pre-order", "In-order", "Post-order", "None"],
      answer: "Post-order"
    },
    {
      question: "A complete graph with 5 vertices has how many edges?",
      options: ["5", "10", "15", "20"],
      answer: "10"
    },
    {
      question: "Which complexity is higher?",
      options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
      answer: "O(n log n)"
    },
    {
      question: "What is the load factor in a hash table?",
      options: ["Number of elements / table size", "Table size / elements", "Max size - current size", "None"],
      answer: "Number of elements / table size"
    },
    {
      question: "Which data structure represents a hierarchical relationship?",
      options: ["Array", "Linked List", "Tree", "Stack"],
      answer: "Tree"
    },
    {
      question: "Adding an element to the rear of a queue is:",
      options: ["Enqueue", "Dequeue", "Push", "Pop"],
      answer: "Enqueue"
    },
    {
      question: "Removing an element from the front of a queue is:",
      options: ["Enqueue", "Dequeue", "Push", "Pop"],
      answer: "Dequeue"
    },
    {
      question: "Which of the following is the fastest sorting algorithm for a sorted array?",
      options: ["Quick Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
      answer: "Insertion Sort"
    },
    {
      question: "In a doubly linked list, each node has a pointer to the ______ node.",
      options: ["Next", "Previous", "Next and Previous", "Parent"],
      answer: "Next and Previous"
    },
    {
      question: "A full binary tree with n leaves has how many internal nodes?",
      options: ["n", "n-1", "n+1", "2n"],
      answer: "n-1"
    },
    {
      question: "What is the base case in a recursive implementation of binary search?",
      options: ["When element is found", "When high < low", "Both a and b", "None"],
      answer: "Both a and b"
    },
    {
      question: "Which operation in a file takes you to the end of the file directly?",
      options: ["fseek(fp, 0, SEEK_END)", "rewind(fp)", "fseek(fp, 0, SEEK_SET)", "ftell(fp)"],
      answer: "fseek(fp, 0, SEEK_END)"
    },
    {
      question: "In a stack, 'Underflow' is checked before which operation?",
      options: ["Push", "Pop", "Peek", "isEmpty"],
      answer: "Pop"
    },
    {
      question: "In a queue, 'Overflow' is checked before which operation?",
      options: ["Enqueue", "Dequeue", "Rear", "Front"],
      answer: "Enqueue"
    },
    {
      question: "A BST is also called as:",
      options: ["Balanced Tree", "Ordered Binary Tree", "Heap", "Graph"],
      answer: "Ordered Binary Tree"
    },
    {
      question: "Which pointer in a linked list always stores the address of the next node?",
      options: ["Data pointer", "Link pointer", "Null pointer", "Prev pointer"],
      answer: "Link pointer"
    },
    {
      question: "Which sorting algorithm compares adjacent elements and swaps them?",
      options: ["Selection Sort", "Insertion Sort", "Bubble Sort", "Merge Sort"],
      answer: "Bubble Sort"
    },
    {
      question: "Which of the following is a non-primitive data structure?",
      options: ["Char", "Float", "Array", "Double"],
      answer: "Array"
    },
    {
      question: "The process of accessing each record in a file is called:",
      options: ["File Retrieval", "File Scanning", "File Sorting", "File Merging"],
      answer: "File Scanning"
    },
    {
      question: "Which function in C++ is used to close a file stream?",
      options: ["end()", "close()", "stop()", "exit()"],
      answer: "close()"
    },
    {
      question: "Which of the following data structures can be used to implement a recursive algorithm?",
      options: ["Queue", "Stack", "Binary Tree", "All of these"],
      answer: "Stack"
    },
    {
      question: "What is the result of a post-order traversal of a tree with only a root node?",
      options: ["Root", "NULL", "0", "None"],
      answer: "Root"
    },
    {
      question: "The depth of a node is the number of ______ from the root to that node.",
      options: ["Edges", "Nodes", "Leaves", "Paths"],
      answer: "Edges"
    },
    {
      question: "Which sorting algorithm works by repeatedly finding the maximum element and placing it at the end?",
      options: ["Selection Sort", "Bubble Sort", "Quick Sort", "Insertion Sort"],
      answer: "Selection Sort"
    },
    {
      question: "Which file access method is the simplest?",
      options: ["Direct Access", "Sequential Access", "Indexed Access", "Random Access"],
      answer: "Sequential Access"
    },
    {
      question: "In a linked list, a 'Node' consists of:",
      options: ["Data field", "Pointer field", "Both Data and Pointer", "Only Data"],
      answer: "Both Data and Pointer"
    },
    {
      question: "Which data structure is used to represent a hierarchy of folders in an operating system?",
      options: ["Tree", "Stack", "Queue", "Hash Table"],
      answer: "Tree"
    },
    {
      question: "What is the average case time complexity of Merge Sort?",
      options: ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
      answer: "O(n log n)"
    },
    {
      question: "In a graph, if every vertex has an even degree, the graph has a/an:",
      options: ["Euler Circuit", "Hamiltonian Path", "Complete Path", "Cycle"],
      answer: "Euler Circuit"
    },
    {
      question: "Which of the following is a linear search technique?",
      options: ["Binary Search", "Sequential Search", "Hash Search", "None"],
      answer: "Sequential Search"
    },
    {
      question: "A tree where each node has at most 'm' children is called a/an:",
      options: ["Binary Tree", "m-way Search Tree", "AVL Tree", "B-Tree"],
      answer: "m-way Search Tree"
    },
    {
      question: "Which operator is used in C++ for dynamic memory deallocation?",
      options: ["new", "delete", "malloc", "free"],
      answer: "delete"
    },
    {
      question: "The time complexity of inserting an element at the front of a linked list is:",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      answer: "O(1)"
    },
    {
      question: "Which data structure is most useful in finding the shortest path between two cities?",
      options: ["Stack", "Queue", "Graph", "Tree"],
      answer: "Graph"
    },
    {
      question: "What is the main drawback of a priority queue implemented using an array?",
      options: ["Slow insertion", "Slow deletion", "High memory usage", "None"],
      answer: "Slow insertion"
    },
    {
      question: "A complete binary tree with 'n' internal nodes has ______ leaf nodes.",
      options: ["n", "n+1", "n-1", "2n"],
      answer: "n+1"
    },
    {
      question: "Which sorting algorithm is also known as the 'Tournament Sort'?",
      options: ["Heap Sort", "Merge Sort", "Quick Sort", "Bubble Sort"],
      answer: "Heap Sort"
    },
    {
      question: "The process of transforming a key into a table index is:",
      options: ["Mapping", "Hashing", "Sorting", "Indexing"],
      answer: "Hashing"
    },
    {
      question: "Which file organization is best for a system where records are updated frequently?",
      options: ["Sequential", "Direct", "Indexed Sequential", "Relative"],
      answer: "Indexed Sequential"
    },
    {
      question: "In a queue, deletion is also known as:",
      options: ["Push", "Pop", "Enqueue", "Dequeue"],
      answer: "Dequeue"
    },
    {
      question: "What is the complexity of deleting the last node in a singly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: "O(n)"
    },
    {
      question: "A binary tree is balanced if the height of its subtrees differs by no more than:",
      options: ["0", "1", "2", "Any"],
      answer: "1"
    },
    {
      question: "Which pointer tracks the next available position in a stack?",
      options: ["Base", "Top", "Front", "Rear"],
      answer: "Top"
    },
    {
      question: "Which structure is used for 'Undo' and 'Redo' operations in software?",
      options: ["Two Stacks", "Two Queues", "One Tree", "One Graph"],
      answer: "Two Stacks"
    },
    {
      question: "What is the time complexity of the best sorting algorithm in the worst case?",
      options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
      answer: "O(n log n)"
    },
    {
      question: "Which of the following is not a basic operation on a file?",
      options: ["Open", "Close", "Read", "Traverse"],
      answer: "Traverse"
    },
    {
      question: "In BFS, once a vertex is visited, it is placed in a:",
      options: ["Stack", "Queue", "List", "Array"],
      answer: "Queue"
    },
    {
      question: "A graph with no edges is called a/an:",
      options: ["Null Graph", "Complete Graph", "Directed Graph", "Connected Graph"],
      answer: "Null Graph"
    },
    {
      question: "The height of a tree is the length of the ______ path from the root to a leaf.",
      options: ["Shortest", "Longest", "Middle", "Any"],
      answer: "Longest"
    },
    {
      question: "Which data structure stores data in a LIFO manner?",
      options: ["Queue", "Stack", "List", "Tree"],
      answer: "Stack"
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




