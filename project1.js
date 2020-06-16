function ageInDays()
{
var birthyear=prompt("What is your born year?");
var currentYear = prompt("Enter the current year");
var ageInDayss=(currentYear -birthyear) * 365;

var h1 = document.createElement('h4');
var textAnswer = document.createTextNode('you are '+ ageInDayss+ " days old");

h1.appendChild(textAnswer);
var a=document.getElementById('flex-box-result');
a.appendChild(h1);
}

function reset()
{
document.getElementById('flex-box-result').remove();
}

/*

function generatecat()
{
var img=document.createElement(image);
var div=document.getElementById('cat gen');
img.src="cat.jpg"; 
div.appendChild(img);
}
*/

function setpara()
{

    var p=document.createElement('p');
    var t=document.createTextNode('hii this is me arpit');
    p.appendChild(t);
    var b=document.getElementById('cat gen');
    b.appendChild(p);
    
}

function rpsGame(yourChoice)
{
 var humanChoice, botchoice;
humanChoice=yourChoice.id;
botchoice=numberToChoice(botchoices());
alert("YOUR CHOICE IS "+ humanChoice); 

alert("COMPUTER CHOICE IS "+botchoice);

results=Winner(humanChoice, botchoice);
alert(results);

message=finalemessage(results);


rpsFrontEnd(yourChoice.id,botchoice,message);

}

function botchoices(){
    return Math.floor(Math.random() * 3);

}

function numberToChoice(number){

    return['rock', 'paper', 'scissor'][number];
}

function Winner(yourChoice,computerchoice)
{
var rpsDatabase ={
    'rock':{'scissor':1,
     'paper':0,
     'rock':0.5
    },

     'paper':{'paper':0.5, 
     'scissor':0, 
     'rock':1
    },

'scissor':{'scissor':0.5, 
'paper':1,
'rock':0   
}

};

var youscore=rpsDatabase[yourChoice][computerchoice];
var computerscore=rpsDatabase[computerchoice][yourChoice];

return [youscore,computerscore];

}



function finalemessage([youscore,computerscore])
{
  if(youscore===0)
{
    return{'message':'you lost','color':'red'};
}
    else if(youscore === 0.5)
{
    return{' message':'you tied' ,'color':'yellow'};
}
    else
    {
        return{'message':'you won', 'color':'green'};
    }
}



function rpsFrontEnd(humanChoice,botchoice,finalemessage)
{
    var imagesDatabase=
    {
        'rock':document.getElementById('rock').scr,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }

document.getElementById('rock').remove();      
document.getElementById('paper').remove(); 
document.getElementById('scissor').remove(); 
}