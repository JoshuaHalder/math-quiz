var player1name=localStorage.getItem("player1");
var player2name=localStorage.getItem("player2");

var player1score=0;
var player2score=0;

document.getElementById("player1").innerHTML=player1name+":";
document.getElementById("player2").innerHTML=player2name+":";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("question").innerHTML="Question turn-"+player1name;
document.getElementById("answer1").innerHTML="Answer turn-"+player2name;

var getword="";

function send(){
 getword=document.getElementById("inputbox").value;
     getword=getword.toLowerCase();
     console.log(getword);

     var firstletter=getword.charAt(0);
     console.log(firstletter);

     var second=Math.floor(getword.length/2);
     var secondletter=getword.charAt(second);
     console.log(secondletter);

     var third=getword.length-1;
     var thirdletter=getword.charAt(third);
     console.log(thirdletter);

     var finalword=getword.replace(firstletter,"_");
     finalword=finalword.replace(secondletter,"_");
     finalword=finalword.replace(thirdletter,"_");
     console.log(finalword);

     var question="<h4 id='word'> Q. "+finalword+"</h4>";
     var inputbox="<br>Answer: <input type='text' id='answer'>";
     var checkbutton="<br><br><button onclick='check()' class='btn btn-info' >check</button>";

     document.getElementById("output").innerHTML=question+inputbox+checkbutton;

     document.getElementById("inputbox").value="";
}

var question_turn="player1";
var answer_turn="player2";

function check(){
    var getanswer=document.getElementById("answer").value;
    getanswer=getanswer.toLowerCase();
    console.log("answer in lower case"+getanswer);

    if (getanswer==getword){
        if (answer_turn=="player1"){
         player1score=player1score+1;
         document.getElementById("player1score").innerHTML=player1score;
        }
        else{
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
        }
    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("question").innerHTML="question turn-"+player2name;
    }
    else{
        question_turn="player1";
        document.getElementById("question").innerHTML="question turn-"+player1name;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("answer1").innerHTML="answer turn-"+player2name;
    }
    else{
        answer_turn="player1";
        document.getElementById("answer1").innerHTML="answer turn-"+player1name;
    }
}