//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    window.location.href='../../../index.html';
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

let total_ques = 0;

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
// if Next Que button clicked
next_btn.onclick = ()=>{
    if(total_ques < (questions.length/2)-1){ //if question count is less than total question length
        //que_count++; //increment the que_count value
        console.log(que_count)
        que_count = Math.floor(Math.random() * 59);
        que_numb++; //increment the que_numb value
        total_ques++; //increment the total_ques value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}
function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    
    const item = arr[randomIndex];
    
    return item;

    
    }
var TopperArray = ["BATmxNL5nM2", "BATyRonQ8ug", "BATgQMp62FF", "BAT5WYdDKky", "BATLnE6SmBY", "BATe8fsUjxC", "BAT3dpb2msB", "BATBM2bsZPJ", "BATutIpg8yY", "BATurY7K9G2", "BAT3r7o64Is", "BATcGairp9C", "BATm1s1eSLd", "BATGBT4PLEs", "BATqU2zMMaj", "BATckKT6o1U", "BATIkvMNpnI", "BATRlUwKlJa", "BATndgBNKy5", "BATJ5n17jwe", "BAT2E7o9Yho", "BATV52TxdgK", "BATqA8RkNhB", "BAT0LF5GaXV", "BAT0mcUYhup", "BATYbE3P1UN", "BATOqQvh0sI", "BATjLTKEBa4", "BAT5WOskP7f", "BATpWFDkGbC", "BATfPytoibJ", "BATmC5ZFDi7", "BATUUGpDjaX", "BATbm9QfUep", "BATVFeWJadw", "BAT5VbIug3u", "BATf0h0FcZK", "BAT8eKXsoW6", "BATWyD0cAzB", "BATXDdZ1aNi", "BATn4sguAOc", "BATZSQbZ7zz", "BATxN1PS8pL", "BATORJprhUF", "BATd1gVmRId", "BATIc72Unrt", "BAT8ml0fE8R", "BATLMafBpv8", "BATpx45yGRM", "BATbLjOhqFW"];
var AverageArray = ["BAAK1YRHZCh", "BAAfSxjRxzN", "BAAecQcFH1V", "BAA8USIz1Fi", "BAA5uX4Er5B", "BAAAgq5F7nM", "BAAORPTnzWU", "BAAB6rTWnGD", "BAAvVuYFkLQ", "BAAV3xYuAZw", "BAAk4hBrbhs", "BAAQz6abVxy", "BAAxd4SBXHS", "BAACf6QVCD5", "BAAR1GDhA3C", "BAAub0Av7Ur", "BAAFss1Z6Kb", "BAA2sOEgAQd", "BAAzvZ2ERMw", "BAAYzZCEqx0", "BAAk98FBh08", "BAAWjwDumOf", "BAA7RSfjih2", "BAAYKAAHKyE", "BAAozbzTl7t", "BAAezxcokxv", "BAA2NzESuBf", "BAAq4SNGyM4", "BAATMVpexoY", "BAAU14eR2Az", "BAAT4HC5DCn", "BAAOAgcj00y", "BAA7CzqPCyw", "BAAmc48HfCQ", "BAAdMf9XfDS", "BAAsm6xOV18", "BAAj4YExjHz", "BAAy7MURQ2B", "BAA1iISVjp3", "BAAjtfRR3UH", "BAAnPFwOqiZ", "BAAoaUJO4tX", "BAAzeBGpHWD", "BAAdB8jmYz9", "BAAGvIBNMw3", "BAApgTRA56R", "BAAgeK2F4B4", "BAAV8N0iujB", "BAA3u5Vhn0I", "BAARXvPZeDb"];
var FailArray = ["BAFgOwADD5x", "BAFaSwlR2Yh", "BAFhAVXxz4G", "BAF5Kyl8qbE", "BAFXBpLLTrc", "BAFdlmfPkHM", "BAFhBtqxOQi", "BAF9w1WFdgH", "BAFYnmDCkR5", "BAFG12QuDQN", "BAF8Ab6UA0V", "BAFAeCcqXN7", "BAF2Fh03SSA", "BAF5aLfzvgf", "BAFl09K8VJX", "BAFKKECBsSA", "BAFSCykEj5k", "BAFZkUKHR2K", "BAFVaxUIfLv", "BAFJoJPqNFJ", "BAFKjU7yple", "BAFrVoTLIBt", "BAFzlqPPoyU", "BAFRIlUiKL6", "BAFjU94rNDk", "BAFvSVMNuyC", "BAFuHOxu9md", "BAF8n0BVWMq", "BAFtZHkWShP", "BAF8T0hgHgf", "BAFKGhlekym", "BAFqpcDAF5f", "BAFBH1GHuQj", "BAFdplVuMHy", "BAFeTX0KdJB", "BAFUqOkZENp", "BAF48dkn7Xr", "BAFjQW50v1S", "BAFLVgJG3k2", "BAFxks8JA86", "BAFMxcXHxn1", "BAFdhZCF7Kx", "BAFlFe5QIat", "BAFsBwBlbly", "BAFxCfZrIRE", "BAFowREqDo0", "BAFax6XvajD", "BAF89aphzj9", "BAFfx6jyn5Q", "BAFCxNUxqVB"];

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore  > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        
        var TopperResult = getRandomItem(TopperArray);
        console.log(TopperResult);
        let scoreTag = '<span>and congrats! 🎉, You got '+ userScore  +' out of '+ ((questions.length +1) /2) +'<br>Note Your keycode BASIC LEVEL: '+TopperResult+'</span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        var AverageResult = getRandomItem(AverageArray);
        console.log(AverageResult);
        let scoreTag = '<span>and nice 😎, You got '+ userScore +' out of '+ ((questions.length +1) /2) +'<br>Note Your keycode For BASIC LEVEL: '+AverageResult+'</span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        
        var FailResult = getRandomItem(FailArray);
        console.log(FailResult);

        let scoreTag = '<span>and sorry 😐, You got only '+ userScore +' out of '+ ((questions.length +1) /2) +'<br>Note Your keycode For BASIC LEVEL: '+FailResult+'</span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            next_btn.classList.add("show"); //show the next button if user selected any option
            option_list.children[0].classList.add("disabled"); //once user select an option then disabled all options
            option_list.children[1].classList.add("disabled");
            option_list.children[2].classList.add("disabled");
            option_list.children[3].classList.add("disabled");
        }
        
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ ((questions.length +1) /2) +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}