var likeCount = [0, 0, 0];
var array = document.querySelectorAll("h5");

function addLike(element){

    var buttonId = element.id
    switch(buttonId) {
        case "1":
            likeCount[0] ++;
            break;
        case "2":
            likeCount[1]++;
            break;
        case "3":
            likeCount[2]++;
            break;
    }

    array[buttonId-1].innerText = likeCount[parseInt(buttonId-1)] + " Like(s)";

}

function pressedButton(element){
    element.classList.add("btnpressed");
    element.classList.remove("btn");
}

function notPressedButton(element){
    element.classList.add("btn");
    element.classList.remove("btnpressed");
    
}