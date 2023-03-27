ar forml = document.querySelector("form")

var timer;

var sec = 60;
var min =0;
var sec2;

window.onload = function timecount(){
    timer = setInterval(function(){
        sec--;
        if (sec == 0){
            clearTimeout(timer);
            checkAnswer()
            }
        else if(sec==0){
            sec=60;
        }
        document.getElementById("timer").innerHTML = "Remaining Time" + sec + " " + "seconds";},1000);

}


function checkAnswer(){
    clearTimeout(timer);

    var correct = 0;
    var ans1Arr = document.getElementsByName("1");
    var ans2Arr = document.getElementsByName("2");
    var ans3Arr = document.getElementsByName("3");
    var ans4Arr = document.getElementsByName("4");
    var ans5Arr = document.getElementsByName("5");
    var ans6Arr = document.getElementsByName("6");
    var ans7Arr = document.getElementsByName("7");
    var ans8Arr = document.getElementsByName("8");
    var ans9Arr = document.getElementsByName("9");
    var ans10Arr = document.getElementsByName("10");

    

    var ans1Select = " "; var ans2Select = " "; var ans3Select = " "; var ans4Select = " "; var ans5Select = " "; 
    var ans6Select = " "; var ans7Select = " "; var ans8Select = " "; var ans9Select = " "; var ans10Select = " ";

    //question1
    for (var i = 0; i < ans1Arr.length;i++){
        if (ans1Arr[i].checked){
            ans1Select = ans1Arr[i].value;
        }
    }
    if (ans1Select == " ") {
        document.getElementById("ans1").innerHTML = "Incompleted" ;
        document.getElementById("ans1").style.color = "#0033cc";
    }
    else if (ans1Select == "answer2") {
        document.getElementById("ans1").innerHTML = "Correct" ;
        correct +=2;
        document.getElementById("ans1").style.color = "gold";
    }
    else {
        document.getElementById("ans1").innerHTML = "Incorrect" ;
        correct--;
        document.getElementById("ans1").style.color = "#b30000";
    }

    //question2

    for (var i=0; i< ans2Arr.length;i++){
        if (ans2Arr[i].checked){
            ans2Select = ans2Arr[i].value;
        }
    }
    if (ans2Select == " ") {
        document.getElementById("ans2").innerHTML = "Incompleted" ;
        document.getElementById("ans2").style.color = "#0033cc";
    }
    else if (ans2Select == "answer2") {
        document.getElementById("ans2").innerHTML = "Correct" ;
        correct +=2;
        document.getElementById("ans2").style.color = "gold";
    }
    else {
        document.getElementById("ans2").innerHTML = "Incorrect" ;
        correct--;
        document.getElementById("ans2").style.color = "#b30000";
    }

    //question3

    for (var i=0; i< ans1Arr.length;i++){
        if (ans3Arr[i].checked){
            ans3Select = ans3Arr[i].value;

        }
    }
    if (ans3Select == " ") {
        document.getElementById("ans3").innerHTML = "Incompleted" ;
        correct--;
        document.getElementById("ans3").style.color = "#0033cc";
    }
    else if (ans3Select == "answer1") {
        document.getElementById("ans3").innerHTML = "Correct" ;
        correct +=2;
        document.getElementById("ans3").style.color = "gold";
    }
    else {
        document.getElementById("ans3").innerHTML = "Incorrect" ;
        correct--;
        document.getElementById("ans3").style.color = "#b30000";
    }

    //question4

    for (var i=0; i< ans4Arr.length;i++){
        if (ans4Arr[i].checked){
            ans4Select = ans4Arr[i].value;
        }
    }
    if (ans4Select == " ") {
        document.getElementById("ans4").innerHTML = "Incompleted" ;
        correct--;
        document.getElementById("ans4").style.color = "#0033cc";
    }
    else if (ans4Select == "answer3") {
        document.getElementById("ans4").innerHTML = "Correct" ;
        correct +=2;
        document.getElementById("ans4").style.color = "#gold";
    }
    else {
        document.getElementById("ans4").innerHTML = "Incorrect" ;
        correct--;
        document.getElementById("ans4").style.color = "#b30000";
    }

    //question5

    for (var i=0; i< ans5Arr.length;i++){
        if (ans5Arr[i].checked){
            ans5Select = ans5Arr[i].value;
        }
    }
    if (ans5Select == " ") {
        document.getElementById("ans5").innerHTML = "Incompleted" ;
        correct--;
        document.getElementById("ans5").style.color = "#0033cc";
    }
    else if (ans5Select == "answer1") {
        document.getElementById("ans5").innerHTML = "Correct" ;
        correct +=2;
        document.getElementById("ans5").style.color = "gold";
    }
    else {
        document.getElementById("ans5").innerHTML = "Incorrect" ;
        correct--;
        document.getElementById("ans5").style.color = "#b30000";
    }

    //question6

    for (var i=0; i< ans6Arr.length;i++){
        if (ans6Arr[i].checked){
            ans6Select = ans6Arr[i].value;
        }
    }
    if (ans6Select == " ") {
        document.getElementById("ans6").innerHTML = "Incompleted" ;
        correct--;
        document.getElementById("ans6").style.color = "#0033cc";
    }
    else if (ans6Select == "answer2") {
        document.getElementById("ans6").innerHTML = "Correct" ;
        correct +=2;
        document.getElementById("ans6").style.color = "#gold";
    }
    else {
        document.getElementById("ans6").innerHTML = "Incorrect" ;
        correct--;
        document.getElementById("ans6").style.color = "#b30000";
    }

    //question7

    for (var i=0; i< ans7Arr.length;i++){
        if (ans7Arr[i].checked){
            ans7Select = ans7Arr[i].value;
        }
    }
    if (ans7Select == " ") {
        document.getElementById("ans7").innerHTML = "Incompleted" ;
        correct--;
        document.getElementById("ans7").style.color = "#0033cc";
    }
    else if (ans7Select == "answer4") {
        document.getElementById("ans7").innerHTML = "Correct" ;
        correct +=2;
        document.getElementById("ans7").style.color = "#gold";
    }
    else {
        document.getElementById("ans7").innerHTML = "Incorrect" ;
        correct--;
        document.getElementById("ans7").style.color = "#b30000";
    }

    //question8

    for (var i=0; i< ans8Arr.length;i++){
        if (ans8Arr[i].checked){
            ans8Select = ans8Arr[i].value;
        }
    }
    if (ans8Select == " ") {
        document.getElementById("ans8").innerHTML = "Incompleted" ;
        correct--;
        document.getElementById("ans8").style.color = "#0033cc";
    }
    else if (ans8Select == "answer3") {
        document.getElementById("ans8").innerHTML = "Correct" ;
        correct +=2;
        document.getElementById("ans8").style.color = "gold";
    }
    else {
        document.getElementById("ans8").innerHTML = "Incorrect" ;
        correct--;
        document.getElementById("ans8").style.color = "#b30000";
    }

    //question9

    for (var i=0; i< ans9Arr.length;i++){
        if (ans9Arr[i].checked){
            ans9Select = ans9Arr[i].value;
        }
    }
    if (ans9Select == " ") {
        document.getElementById("ans9").innerHTML = "Incompleted" ;
        document.getElementById("ans9").style.color = "#0033cc";
    }
    else if (ans9Select == "answer1") {
        document.getElementById("ans9").innerHTML = "Correct" ;
        correct +=2;
        document.getElementById("ans9").style.color = "gold";
    }
    else {
        document.getElementById("ans9").innerHTML = "Incorrect" ;
        correct--;
        document.getElementById("ans9").style.color = "#b30000";
    }

    //question10

    for (var i=0; i< ans10Arr.length;i++){
        if (ans10Arr[i].checked){
            ans9Select = ans10Arr[i].value;
        }
    }
    if (ans10Select == " ") {
        document.getElementById("ans9").innerHTML = "Incompleted" ;
        document.getElementById("ans9").style.color = "#0033cc";
    }
    else if (ans10Select == "answer4") {
        document.getElementById("answer9").innerHTML = "Correct" ;
        correct +=2;
        document.getElementById("answer9").style.color = "gold";
    }
    else {
        document.getElementById("answer9").innerHTML = "Incorrect" ;
        correct--;
        document.getElementById("answer9").style.color = "#b30000";
    }

    if (correct < 0){
        correct = 0;
    }

if (correct == 20) {
    document.getElementById("form1").style.backgroundImage = "img/wi.back2.png"

}

else if (correct > 16) {
    document.getElementById("form1").style.backgroundColor = "#d9ff66";

}

else if (correct > 12) {
    document.getElementById("form1").style.backgroundColor = "#ffff33";

}

else if (correct >8 ) {
    document.getElementById("form1").style.backgroundColor = "#47d1d1";

}

else {
    document.getElementById("form1").style.backgroundColor = "#b3d9ff";

}

sec2 = 60 - sec;

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("score").innerHTML = "YOU GOT" + correct + "/20.";
document.getElementById("time").innerHTML = "yOU HAVE TAKEN" + " " + sec2 + " "+"SECOND TO COMPLATE THIS QUIZ";

}
   </script>  
</body>
</html>