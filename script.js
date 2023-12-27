//Mit dem Befehl "var" legen wir eine neue Variable an
//Mit dem Selektor "document.getElementById" holen wir mit Hilfe der !ID! den Zugriff auf das jeweilige Bild
var hund = document.getElementById("hund");
var hund1 = document.getElementById("hund1");

//Mit Hilfe des Event Listeners können wir eine bestimmte Handlung zuweisen
hund1.addEventListener("click", event => {

    //Mit if überprüft man einen bestimmten Fall
    if(hund.style.display === "none"){
        hund.style.display = "block";
        hund1.textContent = "Bild ausblenden";
    }//Wenn dieser Fall nicht eintrifft, springen wir in den Else-Teil
    else{
        //Hier greifen wir auf den Style zu und setzen das Display auf none. Das bedeutet, dass das Element nichtt mehr zu sehen ist.
        hund.style.display = "none";
        hund1.textContent = "Bild einblenden";
    }
});