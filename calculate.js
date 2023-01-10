    var k1='';
    var k2='';
document.addEventListener("keypress", function (event) {
    //     if (!started) {
    //       $("#level-title").text("Level " + level);
    //       nextSequence();
    //       console.log(event.key);
    //       started = true;
    // }
    console.log(event.key);
    switch (event.key) {
        case '1':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            document.getElementById("display").innerText += k1;
            document.getElementById("display").innerText += event.key;
            k1='';
            break;
        case '2':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            document.getElementById("display").innerText += k1;
            document.getElementById("display").innerText += event.key;
            k1='';
            break;
        case '3':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            document.getElementById("display").innerText += k1;
            document.getElementById("display").innerText += event.key;
            k1='';
            break;
        case '4':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            document.getElementById("display").innerText += k1;
            document.getElementById("display").innerText += event.key;
            k1='';
            break;
        case '5':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            document.getElementById("display").innerText += k1;
            document.getElementById("display").innerText += event.key;
            k1='';
            break;
        case '6':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            document.getElementById("display").innerText += k1;
            document.getElementById("display").innerText += event.key;
            k1='';
            break;
        case '7':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            document.getElementById("display").innerText += k1;
            document.getElementById("display").innerText += event.key;
            k1='';
            break;
        case '8':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            document.getElementById("display").innerText += k1;
            document.getElementById("display").innerText += event.key;
            k1='';
            break;
        case '9':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            document.getElementById("display").innerText += k1;
            document.getElementById("display").innerText += event.key;
            k1='';
            break;
        case '0':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            document.getElementById("display").innerText += k1;
            document.getElementById("display").innerText += event.key;
            k1='';
            break;

        case '+':
             document.getElementById("for").innerText += event.key;
               console.log("hurray");
               k1=event.key;
            break;

        case '-':
             document.getElementById("for").innerText += event.key;
            if(k1==''){
                console.log("hurray");
                k1=event.key;
            }
            else if(k1=='-'){
                k1='+';
            }
            else if(k1=='+'||k1=='*'||k1=='/'){
                    k1=k1+'-';
            }
            break;
        case '/':
             document.getElementById("for").innerText += event.key;
               console.log("hurray");
               k1=event.key;
            break;
        case '*':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            k1=event.key;
            break;
        case '%':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            k1=event.key;
            break;
        case 'C':
            console.log("hurray");
            document.getElementById('display').textContent='';
            break;
        case '.':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            document.getElementById("display").innerText += event.key;
            break;
        case '=':
             document.getElementById("for").innerText += event.key;
            console.log("hurray");
            var text = document.getElementById('display').textContent;
            document.getElementById('display').textContent='';
            document.getElementById("display").innerText += eval(text);
            k1='';
            break;

        default:
            break;
    }
});




let expression = "";
let result;

function addToDisplay(val) {
  expression += val;
  document.getElementById("display").value = expression;
  document.getElementById("display").innerText = expression;
  document.getElementById("for").innerText = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = expression;
  document.getElementById("display").innerText = expression;
  document.getElementById("for").innerText = expression;
}

function calculate() {
  try {
    result = eval(expression);
  } catch (err) {
    alert("Invalid Expression");
    clearDisplay();
    return;
  }
  clearDisplay();
  document.getElementById("display").value = result;
  document.getElementById("display").innerText = result;
  document.getElementById("for").innerText = 0;
}


// for (var i = 0; i <= document.querySelectorAll(".btn").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(event){
//     console.log(this.value);
          
//         }
//         );   
// }
