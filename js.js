const questions = [
  {
    question: "Which keyword is used to return a value from a function?",
    options: ["back", "return", "exit", "void"],
    answer: "return"
  },
  {
    question: "What is the result of 10 % 3 in C?",
    options: ["3", "3.33", "1", "0"],
    answer: "1"
  },
  {
    question: "In CSS, which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background-image"],
    answer: "background-color"
  },
  {
    question: "Which JavaScript method is used to write into an alert box?",
    options: ["alertBox()", "msg()", "alert()", "prompt()"],
    answer: "alert()"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<style>", "<css>", "<link>"],
    answer: "<style>"
  },
  {
    question: "A pointer stores the _______ of another variable.",
    options: ["Value", "Address", "Name", "Data type"],
    answer: "Address"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "font", "styles"],
    answer: "style"
  },
  {
    question: "Which tag is used to create a line break in HTML?",
    options: ["<break>", "<lb>", "<br>", "<hr>"],
    answer: "<br>"
  },
  {
    question: "Which function is used to allocate memory dynamically in C?",
    options: ["malloc()", "alloc()", "create()", "new()"],
    answer: "malloc()"
  },
  {
    question: "How do you call a function named 'display' in JavaScript?",
    options: ["call display()", "display()", "execute display()", "function display()"],
    answer: "display()"
  },
  {
    question: "Which CSS selector is used to specify a style for a single, unique element?",
    options: ["class", "id", "text", "attribute"],
    answer: "id"
  },
  {
    question: "Which C function is used to read a string from the user?",
    options: ["printf()", "gets()", "scanf()", "Both gets and scanf"],
    answer: "Both gets and scanf"
  },
  {
    question: "Which operator is used to compare two values in JS?",
    options: ["=", "==", "===", "Both == and ==="],
    answer: "Both == and ==="
  },
  {
    question: "What is the size of a float variable in C?",
    options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
    answer: "4 bytes"
  },
  {
    question: "Which HTML tag is used to define a table header?",
    options: ["<tr>", "<td>", "<th>", "<thead>"],
    answer: "<th>"
  },
  {
    question: "Which property is used to change the text color in CSS?",
    options: ["text-color", "color", "fgcolor", "font-color"],
    answer: "color"
  },
  {
    question: "What does the 'typeof' operator do in JavaScript?",
    options: ["Returns the size", "Returns the data type", "Returns the value", "None"],
    answer: "Returns the data type"
  },
  {
    question: "Which preprocessor directive is used to include a header file in C?",
    options: ["#define", "#include", "#import", "#header"],
    answer: "#include"
  },
  {
    question: "Which tag is used to create an ordered list in HTML?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    answer: "<ol>"
  },
  {
    question: "Which function is used to find the length of a string in C?",
    options: ["strlen()", "strlength()", "length()", "size()"],
    answer: "strlen()"
  },
  {
    question: "Which CSS property is used to make the text bold?",
    options: ["font-weight:bold", "font-style:bold", "text-bold:true", "font:bold"],
    answer: "font-weight:bold"
  },
  {
    question: "Which JavaScript event occurs when the user clicks on an element?",
    options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
    answer: "onclick"
  },
  {
    question: "Which HTML tag is used to define an image?",
    options: ["<pic>", "<img>", "<image>", "<src>"],
    answer: "<img>"
  },
  {
    question: "Which operator is used to access members of a structure in C?",
    options: [",", ":", ".", ";"],
    answer: "."
  },
  {
    question: "How do you write a comment in HTML?",
    options: ["// comment", "/* comment */", "<!-- comment -->", "' comment"],
    answer: "<!-- comment -->"
  },
  {
    question: "Which built-in JS method joins array elements into a string?",
    options: ["concat()", "join()", "pop()", "push()"],
    answer: "join()"
  },
  {
    question: "In C, default value of static variable?",
    options: ["Garbage", "0", "1", "Null"],
    answer: "0"
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "Which JavaScript dialog gives Yes/No?",
    options: ["alert()", "prompt()", "confirm()", "input()"],
    answer: "confirm()"
  },
  {
    question: "Correct HTML for hyperlink?",
    options: ["<a url='...'>", "<a>link</a>", "<a href='...'>", "<link>"],
    answer: "<a href='...'>"
  },
  {
    question: "Which CSS property adds space inside element?",
    options: ["margin", "padding", "border-spacing", "content-spacing"],
    answer: "padding"
  },
  {
    question: "Which JavaScript method adds element at end?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "Which tag creates dropdown in HTML?",
    options: ["<list>", "<input>", "<select>", "<dropdown>"],
    answer: "<select>"
  },
  {
    question: "Which JS operator checks strict equality?",
    options: ["==", "===", "=", "!=="],
    answer: "==="
  },
  {
    question: "Which HTML tag is used for list item?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<li>"
  },
  {
    question: "Which CSS property sets alignment?",
    options: ["text-align", "align-text", "content-align", "text-position"],
    answer: "text-align"
  },
  {
    question: "Which C function closes file?",
    options: ["close()", "fileclose()", "fclose()", "endfile()"],
    answer: "fclose()"
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




