var headerIcon = document.querySelectorAll(".header-icon");

function addConnection() {
    headerIcon[1].innerText++;
}

var userList = document.querySelectorAll(".align-icon-text");


var userIdList = []

for (var i = 0; i < userList.length; i++) {
    if (userList[i].id) {
        userIdList.push(userList[i]);
    }
}



function removeButton(button) {
    if (button.id == "1") {
        userIdList[0].remove();
    }
    if (button.id == "2") {
        userIdList[1].remove();
    }
    decreaseConnectionReq();
}

var h1List = document.querySelectorAll("h1");

function editName() {
    let newName = prompt("New Name:");
    if (newName != null) {
        h1List[1].innerText = newName;
    }
}

function decreaseConnectionReq() {
    headerIcon[0].innerText--;
}

function decreaseConnectionReq() {
    headerIcon[0].innerText--;
}