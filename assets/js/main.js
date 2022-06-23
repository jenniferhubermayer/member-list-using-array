console.log("Hallo")

// Definiert die Variable "arrMemberName" und fügt dem Array neue Elemente hinzu
let arrMemberName = new Array();
// Definiert die Variable "memberListItem" und greift auf die Liste im DOM zu, in der die Teilnehmer ausgegeben werden sollen.
let memberListItem = document.querySelector(".listItems");
// Definiert die Variable "memberCount" und greift auf die h3 im DOM zu, in der die Teilnehmeranzahl ausgegeben werden soll.
let memberCount = document.querySelector("h3")

pushElement = (event) => {
    event.preventDefault();
    // Definiert die Variable "memberName" und greift auf den Value zu, der im Textfeld eingegeben wird.
    let memberName = document.querySelector("#name").value;
    // "If else" checkt, ob das Textfeld gefüllt ist.
    if (memberName === ""){
        // Switch checkt die Länge des Arrays.
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
        // Übergibt den Value des "memberName" an das Array "arrMemberName".
        arrMemberName[arrMemberName.length] = memberName;
        // Übergibt die Elemente des Arrays "arrMemberName" in einen String umgewandelt ins HTML über die Variable "memberListItem".
        memberListItem.innerHTML = `<li>${arrMemberName.join("</li><li>")}</li>`;
        // Übergibt die Anzahl der Elemente innerhalb des Arrays "arrMemberName" ins HTML über die Variable "memberCount".
        memberCount.innerText = `Anzahl: ${arrMemberName.length}`;
    }
}

removeElement = (event) => {
    event.preventDefault();
    // Löscht das letzte Element des Arrays "arrMemberName".
    arrMemberName.pop();
    // Übergibt die Elemente des Arrays "arrMemberName" in einen String umgewandelt ins HTML über die Variable "memberListItem".
    memberListItem.innerHTML = `<li>${arrMemberName.join("</li><li>")}</li>`;
    // Übergibt die Anzahl der Elemente innerhalb des Arrays "arrMemberName" ins HTML über die Variable "memberCount".
    memberCount.innerText = `Anzahl: ${arrMemberName.length}`
    // Checkt die Anzahl der Elemente innerhalb des Arrays und gibt bei "0" eine Info im innerHTML aus.
    switch (arrMemberName.length){
        case 0:
        memberListItem.innerHTML = `<li>keine Teilnehmer*innen</li>`;
        memberCount.innerText = `Anzahl: ${arrMemberName.length}`;
        break;
    }
}