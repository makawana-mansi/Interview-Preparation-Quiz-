//Question

const questions = [

	{
		question: "Who is the father of C language?",
		options: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorf"],
		answer: "Dennis Ritchie"
	},

	{
		question: "Which of the following is not a valid C variable name?",
		options: ["int number;", "float rate;", "int variable_count;", "int $main;"],
		answer: "int $main;"
	},

	{
		question: "All keywords in C are in ____________",
		options: ["LowerCase letters", "UpperCase letters", "CamelCase letters", "None of the mentioned"],
		answer: "LowerCase letters"
	},

	{
		question: "Which of the following is true for variable names in C?",
		options: ["They can contain special characters", "Keywords allowed", "Cannot start with digit", "Any length"],
		answer: "Cannot start with digit"
	},

	{
		question: "Which is valid C expression?",
		options: ["int my_num = 100,000;", "int my_num = 100000;", "int my num = 1000;", "int $my_num = 10000;"],
		answer: "int my_num = 100000;"
	},

	{
		question: "Which of the following cannot be a variable name in C?",
		options: ["volatile", "true", "friend", "export"],
		answer: "volatile"
	},

	{
		question: "What is short int in C programming?",
		options: ["Basic data type", "Qualifier", "Short is qualifier and int is basic type", "All"],
		answer: "Short is qualifier and int is basic type"
	},

	{
		question: "What is an example of iteration in C?",
		options: ["for", "while", "do-while", "All"],
		answer: "All"
	},

	{
		question: "What is #include <stdio.h>?",
		options: ["Preprocessor directive", "Function", "Keyword", "None"],
		answer: "Preprocessor directive"
	},

	{
		question: "What is sizeof(char)?",
		options: ["1 bit", "2 bits", "1 Byte", "2 Bytes"],
		answer: "1 Byte"
	},

	{
		question: "scanf() is in which header file?",
		options: ["stdlib.h", "ctype.h", "stdio.h", "math.h"],
		answer: "stdio.h"
	},

	{
		question: "Which keyword is used to exit loop?",
		options: ["stop", "exit", "break", "return"],
		answer: "break"
	},

	{
		question: "Which keyword skips iteration?",
		options: ["skip", "continue", "next", "break"],
		answer: "continue"
	},

	{
		question: "Which data type stores a character?",
		options: ["int", "char", "float", "double"],
		answer: "char"
	},

	{
		question: "Highest index of array of size 10?",
		options: ["10", "9", "0", "11"],
		answer: "9"
	},

	{
		question: "Array elements stored in?",
		options: ["Random", "Sequential", "Mixed", "None"],
		answer: "Sequential"
	},

	{
		question: "Which operator is logical OR?",
		options: ["&&", "|", "&", "||"],
		answer: "||"
	},

	{
		question: "Which operator is modulus?",
		options: ["%", "/", "*", "&"],
		answer: "%"
	},

	{
		question: "Which operator is equality?",
		options: ["==", "=", "!=", "<>"],
		answer: "=="
	},

	{
		question: "Which symbol is used for decision in flowchart?",
		options: ["Circle", "Rectangle", "Diamond", "None"],
		answer: "Diamond"
	},

	{
		question: "Which symbol represents process?",
		options: ["Circle", "Rectangle", "Diamond", "None"],
		answer: "Rectangle"
	},

	{
		question: "Which symbol is for input/output?",
		options: ["Circle", "Rectangle", "Diamond", "Parallelogram"],
		answer: "Parallelogram"
	},

	{
		question: "Which connects flowchart shapes?",
		options: ["Circle", "Rectangle", "Diamond", "Arrow"],
		answer: "Arrow"
	},

	{
		question: "Which keyword is used to come out of loop iteration?",
		options: ["break", "continue", "return", "none"],
		answer: "continue"
	},

	{
		question: "Which data type for single char?",
		options: ["string", "char", "character", "chr"],
		answer: "char"
	},

	{
		question: "Array first element index?",
		options: ["1", "0", "2", "10"],
		answer: "0"
	},

	{
		question: "Max elements in array?",
		options: ["Depends on memory", "256", "1000", "Unlimited"],
		answer: "Depends on memory"
	},

	{
		question: "Initialize array?",
		options: ["init keyword", "function", "loop", "values list"],
		answer: "values list"
	},

	{
		question: "Correct string declaration?",
		options: ["char str[10] = \"Hello\";", "char str = \"Hello\";", "string str", "none"],
		answer: "char str[10] = \"Hello\";"
	},

	{
		question: "Array stored in memory?",
		options: ["Sequential", "Random", "Mixed", "None"],
		answer: "Sequential"
	},

	{
		question: "Ternary operator symbol?",
		options: ["?:", ":?", ":<", "<:"],
		answer: "?:"
	},

	{
		question: "Purpose of break?",
		options: ["Continue", "Exit program", "Exit loop", "Skip"],
		answer: "Exit loop"
	},

	{
		question: "Purpose of else?",
		options: ["Execute if", "Execute else", "Both", "Skip"],
		answer: "Execute else"
	},

	{
		question: "Decision making structure?",
		options: ["switch", "for", "if", "while"],
		answer: "if"
	},

	{
		question: "Result of 5>3 && 4<6?",
		options: ["TRUE", "FALSE", "1", "0"],
		answer: "TRUE"
	},

	{
		question: "Loop structure?",
		options: ["for", "if", "switch", "while"],
		answer: "for"
	},

	{
		question: "Purpose of if?",
		options: ["Loop", "Decision", "Function", "Error"],
		answer: "Decision"
	},

	{
		question: "5 % 3 result?",
		options: ["1", "0", "3", "2"],
		answer: "1"
	},

	{
		question: "Default case in switch?",
		options: ["Execute when no match", "Error", "Skip", "Exit"],
		answer: "Execute when no match"
	},

	{
		question: "Infinite loop?",
		options: ["for", "while(true)", "do-while", "switch"],
		answer: "while(true)"
	},

	{
		question: "Continue keyword?",
		options: ["break", "return", "continue", "exit"],
		answer: "continue"
	},

	{
		question: "5+7*2?",
		options: ["19", "24", "26", "17"],
		answer: "19"
	},

	{
		question: "Logical OR operator?",
		options: ["&&", "|", "&", "||"],
		answer: "||"
	},

	{
		question: "Modulus operator?",
		options: ["%", "/", "*", "&"],
		answer: "%"
	},

	{
		question: "Equality operator?",
		options: ["==", "=", "!=", "<>"],
		answer: "=="
	},

	{
		question: "7/2 result?",
		options: ["2", "3.5", "3", "3.50"],
		answer: "3"
	},

	{
		question: "Logical NOT?",
		options: ["&&", "!", "&", "|"],
		answer: "!"
	},

	{
		question: "Assignment operator?",
		options: ["==", "=", ":=", "->"],
		answer: "="
	},

	{
		question: "Flowchart represents?",
		options: ["Algorithm", "Flowchart", "Pseudocode", "All"],
		answer: "Flowchart"
	},

	{
		question: "Algorithm is?",
		options: ["Flowchart", "Steps", "Code", "None"],
		answer: "Steps"
	},

	{
		question: "Decision symbol?",
		options: ["Circle", "Rectangle", "Diamond", "None"],
		answer: "Diamond"
	},

	{
		question: "Process symbol?",
		options: ["Circle", "Rectangle", "Diamond", "None"],
		answer: "Rectangle"
	},

	{
		question: "Input/output symbol?",
		options: ["Circle", "Rectangle", "Diamond", "Parallelogram"],
		answer: "Parallelogram"
	},

	{
		question: "Connector symbol?",
		options: ["Circle", "Rectangle", "Diamond", "Arrow"],
		answer: "Arrow"
	},
	{
		question: "Modular programming means:",
		options: ["Writing long code", "Dividing program into small parts", "Using only loops", "Using only functions"],
		answer: "Dividing program into small parts"
	},
	{
		question: "Main advantage of modular programming is:",
		options: ["Complexity increase", "Code reusability", "Memory wastage", "Slow execution"],
		answer: "Code reusability"
	},
	{
		question: "Function declaration is also called:",
		options: ["Prototype", "Body", "Call", "Loop"],
		answer: "Prototype"
	},
	{
		question: "Function definition contains:",
		options: ["Only name", "Only parameters", "Actual code", "Only return type"],
		answer: "Actual code"
	},
	{
		question: "Function call means:",
		options: ["Defining function", "Executing function", "Declaring function", "Ending function"],
		answer: "Executing function"
	},
	{
		question: "Which is a library function?",
		options: ["main()", "printf()", "sum()", "add()"],
		answer: "printf()"
	},
	{
		question: "User-defined functions are created by:",
		options: ["Compiler", "System", "Programmer", "OS"],
		answer: "Programmer"
	},
	{
		question: "Recursive function is:",
		options: ["Calls another function", "Calls itself", "No call", "Only returns value"],
		answer: "Calls itself"
	},
	{
		question: "Array is passed to function using:",
		options: ["Value", "Address", "Loop", "Index"],
		answer: "Address"
	},
	{
		question: "String is passed as:",
		options: ["Integer", "Float", "Character array", "Double"],
		answer: "Character array"
	},
	{
		question: "Call by value means:",
		options: ["Address passed", "Copy passed", "Pointer used", "Reference used"],
		answer: "Copy passed"
	},
	{
		question: "Call by reference uses:",
		options: ["Variables", "Constants", "Pointers", "Arrays"],
		answer: "Pointers"
	},
	{
		question: "Which is input function?",
		options: ["printf()", "scanf()", "puts()", "strlen()"],
		answer: "scanf()"
	},
	{
		question: "Which is output function?",
		options: ["scanf()", "getchar()", "printf()", "gets()"],
		answer: "printf()"
	},
	{
		question: "sqrt() function belongs to:",
		options: ["stdio.h", "conio.h", "math.h", "string.h"],
		answer: "math.h"
	},
	{
		question: "strlen() is used to:",
		options: ["Copy string", "Compare string", "Find length", "Join string"],
		answer: "Find length"
	},
	{
		question: "strcat() is used to:",
		options: ["Compare", "Copy", "Join", "Length"],
		answer: "Join"
	},
	{
		question: "strcmp() returns 0 when:",
		options: ["Strings differ", "Strings same", "Length zero", "Error"],
		answer: "Strings same"
	},
	{
		question: "String ends with:",
		options: ["\\n", "\\t", "\\0", "0"],
		answer: "\\0"
	},
	{
		question: "Manual string length is found using:",
		options: ["if", "switch", "loop", "goto"],
		answer: "loop"
	},
	{
		question: "A function can return:",
		options: ["Many values", "Only one value", "No value only", "Infinite values"],
		answer: "Only one value"
	},
	{
		question: "Which header file is used for string functions?",
		options: ["math.h", "stdio.h", "string.h", "conio.h"],
		answer: "string.h"
	},
	{
		question: "gets() is used for:",
		options: ["Output", "Input string", "Math", "Compare"],
		answer: "Input string"
	},
	{
		question: "Structure is declared using:",
		options: ["class", "struct", "union", "typedef"],
		answer: "struct"
	},
	{
		question: "Structure is used to:",
		options: ["Store same data type", "Store different data types", "Store only integers", "Store only characters"],
		answer: "Store different data types"
	},
	{
		question: "Structure members are accessed using:",
		options: ["->", ".", "*", "&"],
		answer: "."
	},
	{
		question: "Nested structure means:",
		options: ["Structure in loop", "Structure inside structure", "Structure outside", "Structure in array"],
		answer: "Structure inside structure"
	},
	{
		question: "Union stores:",
		options: ["Separate memory", "Shared memory", "No memory", "Double memory"],
		answer: "Shared memory"
	},
	{
		question: "Size of union depends on:",
		options: ["All members", "Smallest member", "Largest member", "Number of members"],
		answer: "Largest member"
	},
	{
		question: "Pointer stores:",
		options: ["Value", "Address", "Name", "Type"],
		answer: "Address"
	},
	{
		question: "Pointer is declared using:",
		options: ["&", "*", "->", "%"],
		answer: "*"
	},
	{
		question: "Address operator is:",
		options: ["*", "&", "->", "#"],
		answer: "&"
	},
	{
		question: "Pointer arithmetic includes:",
		options: ["+ and -", "* and /", "Only +", "Only -"],
		answer: "+ and -"
	},
	{
		question: "Pointer to structure uses:",
		options: [".", "->", "*", "&"],
		answer: "->"
	},
	{
		question: "String is:",
		options: ["Integer array", "Character array", "Float array", "Pointer only"],
		answer: "Character array"
	},
	{
		question: "Pointer is used in function to:",
		options: ["Copy value", "Modify original value", "Print only", "End function"],
		answer: "Modify original value"
	},
	{
		question: "Function returning pointer returns:",
		options: ["Value", "Address", "Loop", "Array"],
		answer: "Address"
	},
	{
		question: "Array name represents:",
		options: ["Value", "Address", "Index", "Type"],
		answer: "Address"
	},
	{
		question: "String copy without strcpy() uses:",
		options: ["Loop", "Function", "Macro", "Pointer only"],
		answer: "Loop"
	},
	{
		question: "String comparison manually is done by:",
		options: ["Adding", "Multiplying", "Character comparison", "Sorting"],
		answer: "Character comparison"
	},
	{
		question: "Access nested structure members using:",
		options: ["->", ".", "Multiple dot operators", "*"],
		answer: "Multiple dot operators"
	},
	{
		question: "Array of structure means:",
		options: ["Single structure", "Multiple structures", "Pointer", "Function"],
		answer: "Multiple structures"
	},
	{
		question: "Union can be passed to function:",
		options: ["Yes", "No"],
		answer: "Yes"
	},
	{
		question: "Incrementing pointer moves to:",
		options: ["Next memory location", "Previous", "Same", "Null"],
		answer: "Next memory location"
	},
	{
		question: "Pointer to array stores:",
		options: ["Value", "Address of array", "Index", "Size"],
		answer: "Address of array"
	},
	{
		question: "String can be accessed using:",
		options: ["Pointer", "Loop", "Both", "None"],
		answer: "Both"
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

function showSolution(index) {
	let sol = document.getElementById("sol" + index);
	let correctAnswer = questions[index].answer;
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




