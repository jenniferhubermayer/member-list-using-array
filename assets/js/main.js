let arrMemberName = new Array();
let memberListItem = document.querySelector(".listItems");
let memberCount = document.querySelector("h3")

pushElement = (event) => {
    event.preventDefault();
    let memberName = document.querySelector("#name");
    if (memberName.value === ""){
        switch (arrMemberName.length){
            case 0:
                memberListItem.innerHTML = `<li>keine Teilnehmer*innen</li>`;
                memberCount.innerText = `Anzahl: ${arrMemberName.length}`;
                window.alert("Bitte geben Sie einen Namen ein!");
                break;
            default:
                memberListItem.innerHTML = `<li>${arrMemberName.join("</li><li>")}</li>`;
                memberCount.innerText = `Anzahl: ${arrMemberName.length}`;
                window.alert("Bitte geben Sie einen Namen ein!") 
                break;
        }
    }
    else{
        arrMemberName[arrMemberName.length] = memberName.value;
        memberListItem.innerHTML = `<li>${arrMemberName.join("</li><li>")}</li>`;
        memberName.value = "";
        memberCount.innerText = `Anzahl: ${arrMemberName.length}`;
    }
}

removeElement = (event) => {
    event.preventDefault();
    arrMemberName.pop();
    memberListItem.innerHTML = `<li>${arrMemberName.join("</li><li>")}</li>`;
    memberCount.innerText = `Anzahl: ${arrMemberName.length}`
    switch (arrMemberName.length){
        case 0:
        memberListItem.innerHTML = `<li>keine Teilnehmer*innen</li>`;
        memberCount.innerText = `Anzahl: ${arrMemberName.length}`;
        break;
    }
}