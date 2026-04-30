const questions = [


  {
    question: "Which JavaScript method is used to write into an alert box?",
    options: ["alertBox()", "msg()", "alert()", "prompt()"],
    answer: "alert()"
  },
  {
    question: "How do you call a function named 'display' in JavaScript?",
    options: ["call display()", "display()", "execute display()", "function display()"],
    answer: "display()"
  },
  {
    question: "Which operator is used to compare two values in JS?",
    options: ["=", "==", "===", "Both == and ==="],
    answer: "Both == and ==="
  },
  {
    question: "What does the 'typeof' operator do in JavaScript?",
    options: ["Returns the size", "Returns the data type", "Returns the value", "None"],
    answer: "Returns the data type"
  },
  {
    question: "Which JavaScript event occurs when the user clicks on an element?",
    options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
    answer: "onclick"
  },
  {
    question: "Which built-in JS method joins all elements of an array into a string?",
    options: ["concat()", "join()", "pop()", "push()"],
    answer: "join()"
  },
  {
    question: "Which JavaScript dialog box is used to get a 'Yes' or 'No' response?",
    options: ["alert()", "prompt()", "confirm()", "input()"],
    answer: "confirm()"
  },
  {
    question: "Which JS operator is used to check for strict equality (value and type)?",
    options: ["==", "===", "=", "!=="],
    answer: "==="
  },
  {
    question: "Which JavaScript method adds a new element to the end of an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "Which JavaScript method is used to remove the first element of an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    answer: "shift()"
  },
  {
    question: "Which JS built-in object is used to handle dates and times?",
    options: ["Time()", "Clock()", "Date()", "Calendar()"],
    answer: "Date()"
  },
  {
    question: "Which JavaScript function is used to convert a string to a floating-point number?",
    options: ["parseFloat()", "parseInt()", "Number()", "float()"],
    answer: "parseFloat()"
  },
  {
    question: "Which JS method returns a string in all uppercase letters?",
    options: ["toUpper()", "toUpperCase()", "upperCase()", "changeCase(upper)"],
    answer: "toUpperCase()"
  },
  {
    question: "Which JavaScript method returns the character at a specified index?",
    options: ["charAt()", "getChar()", "indexAt()", "char()"],
    answer: "charAt()"
  },
  {
    question: "Which JS operator is used to find the remainder of a division?",
    options: ["/", "*", "%", "#"],
    answer: "%"
  },
  {
    question: "Which JS built-in method sorts the elements of an array?",
    options: ["sort()", "order()", "arrange()", "align()"],
    answer: "sort()"
  },
  {
    question: "Which JS method converts an object to a JSON string?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.toText()", "JSON.convert()"],
    answer: "JSON.stringify()"
  },
  {
    question: "Which JavaScript operator is used to check if a property exists in an object?",
    options: ["in", "exists", "has", "within"],
    answer: "in"
  },
  {
    question: "Which JS event occurs when the content of an element has been changed?",
    options: ["onclick", "onblur", "onchange", "onfocus"],
    answer: "onchange"
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
    if(q.options && q.options.length>0)
    {

    for (let j = 0; j < q.options.length; j++) {

      let optionLabel = String.fromCharCode(65 + j);

      html += `<label>
       ${optionLabel}.
      <input type="radio" name="q${i}" value="${q.options[j]}">
      ${q.options[j]}
    </label><br>
    `;
    }
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




