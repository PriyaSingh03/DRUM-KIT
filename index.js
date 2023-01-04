//for only one button
/*document.querySelector("button").addEventListener("click", handleClick);
function handleClick()
{
    alert("I got clicked");
    
}*/
//for more buttons
/*var nummberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i< nummberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("I got clicked");
});
}*/
//how to play audio
/*var nummberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i< nummberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var audio= new Audio('sounds/sounds_tom-1.mp3');
    audio.play();
    });
}*/
//pressed keyword gets white
/*var nummberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i< nummberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        this.style.color = "white";
    });
}*/


//detecting button press
var nummberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i< nummberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


//detecting keyboard press
document.addEventListener("keypress", function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});



function makeSound(key)
{

       
switch (key) 
        {
            case 'w':
                var audio = new Audio('sounds/sounds_tom-1.mp3');
                audio.play();
                break;
            case 'a':
                var audio = new Audio('sounds/sounds_tom-2.mp3');
                audio.play();
                break;
            case 's':
                var audio = new Audio('sounds/sounds_tom-4.mp3');
                audio.play();
                break;
            case 'd':
                var audio = new Audio('sounds/sounds_tom-3.mp3');
                audio.play();
                break;
            case 'j':
                var audio = new Audio('sounds/sounds_snare.mp3');
                audio.play();
                break;
            case 'k':
                var audio = new Audio('sounds/sounds_crash.mp3');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('sounds/sounds_kick-bass.mp3');
                audio.play();
                break;
            default: console.log(buttonInnerHTML);
                break;
        }
} 
function buttonAnimation(currentKey)
    {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    }