
function sayWoof(){
    var woof = new Audio("dog_woof.mp3");
    
    woof.play();
}

$("#woof").on("click", sayWoof);
