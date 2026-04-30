const questions = [

  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which is the correct CSS syntax?",
    options: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"],
    answer: "body {color: black;}"
  },
  {
    question: "How do you insert a comment in a CSS file?",
    options: ["// comment", "/* comment */", "// comment //", "' comment"],
    answer: "/* comment */"
  },
  {
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background-image"],
    answer: "background-color"
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["text-color", "font-color", "color", "fgcolor"],
    answer: "color"
  },
  {
    question: "Which CSS property controls text size?",
    options: ["text-size", "font-style", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "Which CSS property makes text bold?",
    options: ["font-style", "font-weight", "text-bold", "bold"],
    answer: "font-weight"
  },
  {
    question: "How do you remove underline from links?",
    options: ["text-decoration:none;", "underline:none;", "decoration:none;", "font-style:none;"],
    answer: "text-decoration:none;"
  },
  {
    question: "Which property is used to change font?",
    options: ["font-type", "font-style", "font-family", "font-weight"],
    answer: "font-family"
  },
  {
    question: "Which property sets left margin?",
    options: ["padding-left", "margin-left", "left-margin", "spacing-left"],
    answer: "margin-left"
  },
  {
    question: "Which selector is used for id?",
    options: ["#", ".", "*", "@"],
    answer: "#"
  },
  {
    question: "Which selector is used for class?",
    options: ["#", ".", "*", "@"],
    answer: "."
  },
  {
    question: "Which property sets space between lines?",
    options: ["spacing", "line-height", "text-height", "line-spacing"],
    answer: "line-height"
  },
  {
    question: "What is default display of block element?",
    options: ["inline", "block", "none", "inline-block"],
    answer: "block"
  },
  {
    question: "Which property hides element but keeps space?",
    options: ["display:none;", "visibility:hidden;", "opacity:0;", "remove"],
    answer: "visibility:hidden;"
  },
  {
    question: "Which property is used to float element?",
    options: ["position", "float", "display", "align"],
    answer: "float"
  },
  {
    question: "Which property controls stacking order?",
    options: ["order", "z-index", "stack", "position"],
    answer: "z-index"
  },
  {
    question: "Which property sets border color?",
    options: ["border-style", "border-color", "color", "border-bg"],
    answer: "border-color"
  },
  {
    question: "Which property adds shadow to text?",
    options: ["shadow", "text-shadow", "box-shadow", "font-shadow"],
    answer: "text-shadow"
  },
  {
    question: "Which property sets opacity?",
    options: ["opacity", "visibility", "filter", "alpha"],
    answer: "opacity"
  },
  {
    question: "Which property sets text alignment?",
    options: ["align", "text-align", "horizontal-align", "content-align"],
    answer: "text-align"
  },
  {
    question: "Which property sets padding?",
    options: ["margin", "padding", "spacing", "border"],
    answer: "padding"
  },
  {
    question: "Which property sets margin?",
    options: ["padding", "margin", "spacing", "border"],
    answer: "margin"
  },
  {
    question: "Which property sets background image?",
    options: ["background-img", "background-image", "image", "bg-image"],
    answer: "background-image"
  },
  {
    question: "Which property sets border radius?",
    options: ["border-round", "border-radius", "corner-radius", "radius"],
    answer: "border-radius"
  },
  {
    question: "Which property sets width?",
    options: ["width", "size", "length", "w"],
    answer: "width"
  },
  {
    question: "Which property sets height?",
    options: ["height", "size", "length", "h"],
    answer: "height"
  },
  {
    question: "Which property sets position?",
    options: ["display", "float", "position", "align"],
    answer: "position"
  },
  {
    question: "Which value keeps element fixed on screen?",
    options: ["absolute", "relative", "fixed", "static"],
    answer: "fixed"
  },
  {
    question: "Which property sets flex direction?",
    options: ["flex-wrap", "flex-direction", "align-items", "justify-content"],
    answer: "flex-direction"
  },
  {
    question: "Which property sets gap between flex items?",
    options: ["margin", "padding", "gap", "spacing"],
    answer: "gap"
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




