
let d = document.getElementById("stopLight");
let e = document.getElementById("readyLight");
let f = document.getElementById("goLight");
let x = document.getElementById("textCon");
let timerEl = document.getElementById('timer');
let intervalId;
let countdown = 20;

function set(){
    if (intervalId) {
        clearInterval(intervalId);
    }
    countdown = 20;
    timerEl.textContent = countdown;
    x.textContent = "Stop it!";
    
    intervalId = setInterval(function() {
        countdown = countdown - 1;
        timerEl.textContent = countdown;
        if (countdown <= 20 && countdown >= 10) {
                d.style.backgroundColor = "#cf1124";
                e.style.backgroundColor = "#4b5069";
                f.style.backgroundColor = "#4b5069";
                x.textContent = "Stop it!"
            }
        else if(countdown <= 10 && countdown > 1){
                e.style.backgroundColor = "#f7c948";
                d.style.backgroundColor = "#4b5069";
                f.style.backgroundColor = "#4b5069";  
                x.textContent = "Get Ready!"
        }
        else if (countdown < 1){
            d.style.backgroundColor = "#4b5069";
            f.style.backgroundColor = "#159e32";
            e.style.backgroundColor = "#4b5069";
            clearInterval(intervalId);
            x.textContent="And Go!"
        }
      }, 1000); 
}
function reset(){
    if (intervalId) {
        clearInterval(intervalId);
    }
    countdown = 20;
    timerEl.textContent = countdown;
    d.style.backgroundColor = "#4b5069";
    e.style.backgroundColor = "#4b5069";
    f.style.backgroundColor = "#4b5069";
    x.textContent = "Follow the Rules";
}