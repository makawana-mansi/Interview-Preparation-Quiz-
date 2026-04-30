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
    options: ["&lt;script>", "&lt;style>", "&lt;css>", "&lt;link>"],
    answer: "&lt;style>"
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
    options: ["&lt;break>", "&lt;lb>", "&lt;br>", "&lt;hr>"],
    answer: "&lt;br>"
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
    options: ["&lt;tr>", "&lt;td>", "&lt;th>", "&lt;theadInner>"],
    answer: "&lt;th>"
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
    options: ["&lt;ul>", "&lt;li>", "&lt;ol>", "&lt;dl>"],
    answer: "&lt;ol>"
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
    options: ["&lt;pic>", "&lt;img>", "&lt;image>", "&lt;src>"],
    answer: "&lt;img>"
  },
  {
    question: "Which operator is used to access members of a structure in C?",
    options: [",", ":", ".", ";"],
    answer: "."
  },
  {
    question: "How do you write a comment in HTML?",
    options: ["// this is a comment", "/* this is a comment */", "<!-- this is a comment -->", "' this is a comment"],
    answer: "<!-- this is a comment -->"
  },
  {
    question: "Which built-in JS method joins all elements of an array into a string?",
    options: ["concat()", "join()", "pop()", "push()"],
    answer: "join()"
  },
  {
    question: "In C, what is the default value of a static variable?",
    options: ["Garbage value", "0", "1", "Null"],
    answer: "0"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "Which JavaScript dialog box is used to get a 'Yes' or 'No' response?",
    options: ["alert()", "prompt()", "confirm()", "input()"],
    answer: "confirm()"
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: ["<a url='http://google.com'>", "<a>http://google.com</a>", "<a href='http://google.com'>", "<link href='http://google.com'>"],
    answer: "<a href='http://google.com'>"
  },
  {
    question: "Which keyword is used to allocate memory in C at runtime?",
    options: ["static", "dynamic", "malloc", "sizeof"],
    answer: "malloc"
  },
  {
    question: "How do you select all <p> elements in CSS?",
    options: ["p { }", ".p { }", "#p { }", "*p { }"],
    answer: "p { }"
  },
  {
    question: "Which JS operator is used to check for strict equality (value and type)?",
    options: ["==", "===", "=", "!=="],
    answer: "==="
  },
  {
    question: "Which C header file is used for file handling functions?",
    options: ["<stdio.h>", "<conio.h>", "<string.h>", "<math.h>"],
    answer: "<stdio.h>"
  },
  {
    question: "Which HTML tag is used to define a list item?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<li>"
  },
  {
    question: "Which CSS property is used to add space inside an element (between content and border)?",
    options: ["margin", "padding", "border-spacing", "content-spacing"],
    answer: "padding"
  },
  {
    question: "Which JavaScript method adds a new element to the end of an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "What is the result of 5 & 1 (Bitwise AND) in C?",
    options: ["0", "1", "5", "6"],
    answer: "1"
  },
  {
    question: "Which tag is used to create a drop-down list in HTML?",
    options: ["<list>", "<input type='dropdown'>", "<select>", "<dropdown>"],
    answer: "<select>"
  },
  
  {
    question: "Which keyword is used to create a structure in C?",
    options: ["struct", "union", "class", "structure"],
    answer: "struct"
  },
  {
    question: "In CSS, how do you make the list items display horizontally?",
    options: ["display:inline", "display:block", "list-style:horizontal", "display:horizontal"],
    answer: "display:inline"
  },
  {
    question: "Which JavaScript method is used to remove the first element of an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    answer: "shift()"
  },
  {
    question: "Which HTML tag is used to define emphasized text?",
    options: ["<italic>", "<i>", "<em>", "<strong>"],
    answer: "<em>"
  },
  {
    question: "What is the result of 5 | 3 (Bitwise OR) in C?",
    options: ["7", "8", "1", "2"],
    answer: "7"
  },
  {
    question: "Which CSS property is used to change the left margin of an element?",
    options: ["padding-left", "margin-left", "indent-left", "spacing-left"],
    answer: "margin-left"
  },
  {
    question: "Which JS built-in object is used to handle dates and times?",
    options: ["Time()", "Clock()", "Date()", "Calendar()"],
    answer: "Date()"
  },
  {
    question: "What is the return type of the function 'malloc()'?",
    options: ["int *", "float *", "void *", "char *"],
    answer: "void *"
  },
  {
    question: "Which HTML attribute specifies an input field must be filled out?",
    options: ["validate", "placeholder", "required", "mandatory"],
    answer: "required"
  },
  {
    question: "How do you select an element with ID 'header' in CSS?",
    options: [".header", "#header", "*header", "header"],
    answer: "#header"
  },
  {
    question: "Which JavaScript function is used to convert a string to a floating-point number?",
    options: ["parseFloat()", "parseInt()", "Number()", "float()"],
    answer: "parseFloat()"
  },
  {
    question: "Which of the following is a logical NOT operator in C?",
    options: ["&", "!", "||", "&&"],
    answer: "!"
  },
  {
    question: "Which HTML tag is used to define a short quotation?",
    options: ["<quote>", "<block>", "<q>", "<abbr>"],
    answer: "<q>"
  },
  {
    question: "In CSS, 'font-style:italic' is used to make text:",
    options: ["Bold", "Underlined", "Italic", "Capitalized"],
    answer: "Italic"
  },
  {
    question: "Which JS method returns a string in all uppercase letters?",
    options: ["toUpper()", "toUpperCase()", "upperCase()", "changeCase(upper)"],
    answer: "toUpperCase()"
  },
  {
    question: "What is the index value of the first element in a C array?",
    options: ["1", "0", "-1", "Depends on size"],
    answer: "0"
  },
  {
    question: "Which HTML tag is used to group related elements in a form?",
    options: ["<group>", "<fieldset>", "<optgroup>", "<label>"],
    answer: "<fieldset>"
  },
  {
    question: "Which CSS property is used to set the text alignment?",
    options: ["text-align", "align-text", "content-align", "text-position"],
    answer: "text-align"
  },
  {
    question: "Which JS operator is used to find the remainder of a division?",
    options: ["/", "*", "%", "#"],
    answer: "%"
  },
  {
    question: "Which C function is used to close an open file?",
    options: ["close()", "fileclose()", "fclose()", "endfile()"],
    answer: "fclose()"
  },
  
  {
    question: "Which keyword is used to create a structure in C?",
    options: ["struct", "union", "class", "structure"],
    answer: "struct"
  },
  {
    question: "In CSS, how do you make the list items display horizontally?",
    options: ["display:inline", "display:block", "list-style:horizontal", "display:horizontal"],
    answer: "display:inline"
  },
  {
    question: "Which JavaScript method is used to remove the first element of an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    answer: "shift()"
  },
  {
    question: "Which HTML tag is used to define emphasized text?",
    options: ["<italic>", "<i>", "<em>", "<strong>"],
    answer: "<em>"
  },
  {
    question: "What is the result of 5 | 3 (Bitwise OR) in C?",
    options: ["7", "8", "1", "2"],
    answer: "7"
  },
  {
    question: "Which CSS property is used to change the left margin of an element?",
    options: ["padding-left", "margin-left", "indent-left", "spacing-left"],
    answer: "margin-left"
  },
  {
    question: "Which JS built-in object is used to handle dates and times?",
    options: ["Time()", "Clock()", "Date()", "Calendar()"],
    answer: "Date()"
  },
  {
    question: "What is the return type of the function 'malloc()'?",
    options: ["int *", "float *", "void *", "char *"],
    answer: "void *"
  },
  {
    question: "Which HTML attribute specifies an input field must be filled out?",
    options: ["validate", "placeholder", "required", "mandatory"],
    answer: "required"
  },
  {
    question: "How do you select an element with ID 'header' in CSS?",
    options: [".header", "#header", "*header", "header"],
    answer: "#header"
  },
  {
    question: "Which JavaScript function is used to convert a string to a floating-point number?",
    options: ["parseFloat()", "parseInt()", "Number()", "float()"],
    answer: "parseFloat()"
  },
  {
    question: "Which of the following is a logical NOT operator in C?",
    options: ["&", "!", "||", "&&"],
    answer: "!"
  },
  {
    question: "Which HTML tag is used to define a short quotation?",
    options: ["<quote>", "<block>", "<q>", "<abbr>"],
    answer: "<q>"
  },
  {
    question: "In CSS, 'font-style:italic' is used to make text:",
    options: ["Bold", "Underlined", "Italic", "Capitalized"],
    answer: "Italic"
  },
  {
    question: "Which JS method returns a string in all uppercase letters?",
    options: ["toUpper()", "toUpperCase()", "upperCase()", "changeCase(upper)"],
    answer: "toUpperCase()"
  },
  {
    question: "What is the index value of the first element in a C array?",
    options: ["1", "0", "-1", "Depends on size"],
    answer: "0"
  },
  {
    question: "Which HTML tag is used to group related elements in a form?",
    options: ["<group>", "<fieldset>", "<optgroup>", "<label>"],
    answer: "<fieldset>"
  },
  {
    question: "Which CSS property is used to set the text alignment?",
    options: ["text-align", "align-text", "content-align", "text-position"],
    answer: "text-align"
  },
  {
    question: "Which JS operator is used to find the remainder of a division?",
    options: ["/", "*", "%", "#"],
    answer: "%"
  },
  {
    question: "Which C function is used to close an open file?",
    options: ["close()", "fileclose()", "fclose()", "endfile()"],
    answer: "fclose()"
  },
  {
    question: "Which function is used to read a character from a file in C?",
    options: ["fgetc()", "getc()", "readc()", "Both fgetc() and getc()"],
    answer: "Both fgetc() and getc()"
  },
  {
    question: "Which CSS property is used to control the space between lines of text?",
    options: ["line-height", "spacing", "text-spacing", "letter-spacing"],
    answer: "line-height"
  },
  {
    question: "Which JavaScript method returns the character at a specified index?",
    options: ["charAt()", "getChar()", "indexAt()", "char()"],
    answer: "charAt()"
  },
  {
    question: "Which HTML tag is used to define a client-side script?",
    options: ["<script>", "<js>", "<javascript>", "<codeInner>"],
    answer: "<script>"
  },
  {
    question: "What is a 'pointer to pointer' in C?",
    options: ["A variable that stores address of a pointer", "A variable that stores value of a pointer", "An array of pointers", "None"],
    answer: "A variable that stores address of a pointer"
  },
  {
    question: "How do you make each word in a text start with a capital letter using CSS?",
    options: ["text-transform:capitalize", "text-style:uppercase", "text-transform:uppercase", "font-transform:capitalize"],
    answer: "text-transform:capitalize"
  },
  {
    question: "Which JS built-in method sorts the elements of an array?",
    options: ["sort()", "order()", "arrange()", "align()"],
    answer: "sort()"
  },
  {
    question: "Which C function is used to write a string to a file?",
    options: ["fputs()", "fprintf()", "fwrite()", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which HTML attribute is used to define an internal CSS style?",
    options: ["class", "id", "style", "None"],
    answer: "None"
  },
  {
    question: "Which CSS property is used to set the width of an element's border?",
    options: ["border-width", "border-style", "border-size", "thickness"],
    answer: "border-width"
  },
  {
    question: "Which JavaScript operator is used to check if a property exists in an object?",
    options: ["in", "exists", "has", "within"],
    answer: "in"
  },
  {
    question: "In C, what is the purpose of 'rewind()' function?",
    options: ["To move file pointer to beginning", "To move file pointer to end", "To close file", "To delete file"],
    answer: "To move file pointer to beginning"
  },
  {
    question: "Which HTML tag is used to define a container for an external application (like a plug-in)?",
    options: ["<object>", "<embed>", "<iframe>", "<appletInner>"],
    answer: "<embed>"
  },
  {
    question: "Which CSS property specifies the transparency of an element?",
    options: ["visibility", "filter", "opacity", "overlay"],
    answer: "opacity"
  },
  {
    question: "Which JS method converts an object to a JSON string?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.toText()", "JSON.convert()"],
    answer: "JSON.stringify()"
  },
  {
    question: "Which symbol is used for the preprocessor in C?",
    options: ["&", "$", "#", "@"],
    answer: "#"
  },
  {
    question: "Which HTML tag is used to define a navigation link?",
    options: ["<nav>", "<navigate>", "<link>", "<anchorInner>"],
    answer: "<nav>"
  },
  {
    question: "How do you make a list that lists its items with squares in CSS?",
    options: ["list-style-type:square", "list-type:square", "list:square", "list-style:square"],
    answer: "list-style-type:square"
  },
  {
    question: "Which JS event occurs when the content of an element has been changed?",
    options: ["onclick", "onblur", "onchange", "onfocus"],
    answer: "onchange"
  },
  {
    question: "In C, which mode is used for appending data in a binary file?",
    options: ["a", "ab", "w", "wb"],
    answer: "ab"
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




