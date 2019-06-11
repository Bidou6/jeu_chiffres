// Js for the game "Des Chiffres et des Lettres"

var ligne = document.getElementById("ligneDeLettres");
var consonne;
var compteurLettre = 1;

if (ligne != null) {

    document.getElementById("consonne").addEventListener('click', function (event) {

        axios.get('http://192.168.1.122/projet1/words_test.php').then(response => {
            console.log(response);
            consonne = reponse.data.lettre;

            document.getElementById("case.C" + compteurLettre).innerValue = consonne;

            compteurLettre++;
        })

        event.preventDefault();
    });

    document.getElementById("voyelle").addEventListener('click', function (event) {

        axios.get('http://192.168.1.122/projet1/words_test.php').then(response => {
            console.log(response);
            voyelle = response.data.lettre;

            document.getElementById("case.C" + compteurLettre).innerValue = voyelle;

            compteurLettre++;
        })
    
            event.preventDefault();
    });

    if(compteurLettre==11){
        document.getElementById("consonne").disabled = true;
        document.getElementById("voyelle").disabled = true;

    }

}
