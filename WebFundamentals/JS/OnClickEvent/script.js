function session(element){
    console.log(element.innerText)
    if(element.innerText == 'Login'){
        element.innerText = 'Logout'
    }else{
        element.innerText = 'Login'
    }
}

function removeElement(element){
    element.remove();
}

function likeAlert(){
    alert("Ninja was liked")
}