let NOTE = 0;
let DECISION = "";
let MENTION = "";
stagiaires=[
    {nom:"khadija",Cc1:17,Cc2:18,Cc3:18,Efm:18,note:18,groupe:"dd102",matiere:"algorithme",decision:"Admis",mention:"Très-Bien"},
    {nom:"Samira",Cc1:17,Cc2:18,Cc3:18,Efm:18,note:18,note:17,groupe:"dd101",matiere:"POO",Decision:"Admis",Mention:"Très-Bien"}
]
STA=[
    {nom:"khadija",Cc1:17,Cc2:18,Cc3:18,Efm:18,note:18,groupe:"dd102",matiere:"algorithme",decision:"Admis",mention:"Très-Bien"},
    {nom:"Samira",Cc1:17,Cc2:18,Cc3:18,Efm:18,note:18,note:17,groupe:"dd101",matiere:"POO",Decision:"Admis",Mention:"Très-Bien"}
]
//declaration
let ID=document.getElementById("id")
let NOM=document.getElementById("nom");
let GROUPE=document.getElementById("groupe");
let MATIERE=document.querySelector("input[name='matiere']:checked");
let cc1 =document.getElementById("CC1");
let cc2 =document.getElementById("CC2");
let cc3 =document.getElementById("CC3");
let efm =document.getElementById("EFM");

//Events

document.getElementById("ajouter").addEventListener("click", ajouter);
document.getElementById("save").addEventListener("click",save)

//functions

function calculerNote(){
    NOTE = (Number(cc1.value) + Number(cc2.value) + Number(cc3.value) + Number(efm.value)) / 4;

    if(NOTE >= 10){
        DECISION = "Admis";

        if(NOTE <= 12){
            MENTION = "Passable";
        } else if(NOTE <= 14){
            MENTION = "Assez-Bien";
        } else if(NOTE <= 16){
            MENTION = "Bien";
        } else {
            MENTION = "Très-Bien";
        }
    } else {
        DECISION = "Redoubler";
        MENTION = "---";
    }
}

function ajouter(e){
    e.preventDefault();
    calculerNote()
    let nv_sta = {
        nom: NOM.value,
        note: NOTE,
        groupe: GROUPE.value,
        matiere: MATIERE.value,
        decision: DECISION,
        mention: MENTION,
    }

    stagiaires.push(nv_sta)
    afficher();
}

function afficher(){
    let content = "";
    for(let i = 0; i < stagiaires.length; i++){
        content += `<tr>
            <td>${ stagiaires[i].id=i+1}</td>
            <td>${stagiaires[i].nom}</td>
            <td>${stagiaires[i].note}</td>
            <td>${stagiaires[i].groupe}</td>
            <td>${stagiaires[i].matiere}</td>
            <td>${stagiaires[i].decision}</td>
            <td>${stagiaires[i].mention}</td>
            <td><button class="btn-supprimer" onclick="supprimer_stagiaire(event)" id="${i}">Supprimer</button> 
                <button class="btn-modifier" onclick = "modifier(event)" id="${i}">modifier</button></td>
        </tr>`;
    }

    document.getElementById("tdata").innerHTML = content;
}

function save(e){
    e.preventDefault()
    for(i=0;i< stagiaires.length;i++){
        if(stagiaires[i].id==e.currentTarget.id){
           calculerNote()
            stagiaires[i].nom=NOM.value;
            stagiaires[i].groupe=GROUPE.value;
            stagiaires[i].matiere=MATIERE.value;
            stagiaires[i].note=NOTE;
            stagiaires[i].decision=DECISION;
            stagiaires[i].mention=MENTION;
        }
    }
    afficher()
}
let indexSelectionne = -1;
function modifier(event){
    event.preventDefault();

    indexSelectionne = event.currentTarget.id;

    let s = stagiaires[indexSelectionne];

    NOM.value = s.nom;
    GROUPE.value = s.groupe;
    cc1.value = s.Cc1;
    cc2.value = s.Cc2;
    cc3.value = s.Cc3;
    efm.value = s.Efm;

    // matiere (radio)
    let radios = document.querySelectorAll("input[name='matiere']");

    for(let i = 0; i < radios.length; i++){
        radios[i].checked = false;

        if(radios[i].value == s.matiere){
            radios[i].checked = true;
        }
    }
}