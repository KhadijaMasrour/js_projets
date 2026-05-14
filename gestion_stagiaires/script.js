let NOTE = 0;
let DECISION = "";
let MENTION = "";
let red_class="";
stagiaires=[
    {nom:"khadija",Cc1:17,Cc2:18,Cc3:18,Efm:18,note:18,groupe:"dd102",filiere:"DEV",Module:"algorithme",decision:"Admis",mention:"Très-Bien"},
    {nom:"Samira",Cc1:17,Cc2:18,Cc3:18,Efm:18,note:18,groupe:"dd101" ,filiere:"DEV",Module:"POO",decision:"Admis",mention:"Très-Bien"}
] 

const table_employés=document.getElementById("table_stagiaires")
let NOM=document.getElementById("nom")
let GROUPE=document.getElementById("Groupe")
let MODULE=document.getElementById("Module")
let FILIERE=document.getElementById("Filiere")
let CC1=document.getElementById("Cc1")
let CC2=document.getElementById("Cc2")
let CC3=document.getElementById("Cc3")
let EFM=document.getElementById("Efm")
let ID=document.getElementById("id_mdf")
let SEARCH=document.getElementById("search")


document.getElementById("btn_ajouter").addEventListener("click",ajouter_employé)
document.getElementById("btn_modifier").addEventListener("click",modifier_infos_employé)
document.getElementById("btn_rechercher").addEventListener("click",Search)




function calculerNote(){
    NOTE = ((Number(CC1.value) + Number(CC2.value) + Number(CC3.value) ) / 3 )*0.6+ Number(EFM.value)*0.4 ;

    if(NOTE >= 10){
        DECISION = "Admis";
        red_class="admis";
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
        red_class="nonadmis";
    }

    
}

function ajouter_employé(e){
    e.preventDefault()
    calculerNote();
    const nv_employé={
        nom:NOM.value,
        note:NOTE,
        Cc1:CC1.value,
        Cc2:CC2.value,
        Cc3:CC3.value,
        Efm:EFM.value,
        groupe:GROUPE.value,
        filiere:FILIERE.value,
        Module:MODULE.value,
        decision:DECISION,
        mention:MENTION,
    }
    stagiaires.push(nv_employé)
    afficher()
    const lnom= /^[A-Za-z]+$/;
    const text=/^[A-Za-z]+$/;  
    const lpost=/^[A-Za-z]+ *[A-Za-z]* *[A-Za-z]*$/;  
    const lsalaire=/\d{4,6}$/;  

    let rep="yes";

    if(lnom.test(NOM.value)===false ){
        document.getElementById("errNom").textContent = "Le nom est obligatoire."; document.getElementById("errNom").style.color = "red";
        NOM.style.border="1px solid red";
        NOM.style.background=" #fff2f3";
        rep="no";
    }


    if(lprenom.test(PRENOM.value)===false){
        document.getElementById("errPrenom").textContent = "Le prénom est obligatoire."; document.getElementById("errPrenom").style.color = "red";
        PRENOM.style.border="1px solid red";
        PRENOM.style.background=" #fff2f3";
        rep="no";
    }

    if(lpost.test(POSTE.value)===false){
        document.getElementById("errPoste").textContent = "Veuillez saisir un poste valide."; document.getElementById("errPoste").style.color = "red";
        POSTE.style.border="1px solid red";
        POSTE.style.background=" #fff2f3";
        rep="no";
    }

    if(SALAIRE.value<1000 || SALAIRE.value>1000000){
        document.getElementById("errSalaire").textContent = "Veuillez saisir un salaire valide."; document.getElementById("errSalaire").style.color = "red";
        SALAIRE.style.border="1px solid red";
        SALAIRE.style.background=" #fff2f3";
        rep="no";
    }

    for(let i = 0 ; i < stagiaires.length ; i++){
            if(stagiaires[i].nom==NOM.value && stagiaires[i].prenom==PRENOM.value){
                document.getElementById("errPrenom").textContent = "Le prénom est dèja utilisée."; document.getElementById("errPrenom").style.color = "red";
                PRENOM.style.border="1px solid red";
                PRENOM.style.background=" #fff2f3";
                rep="no";
                document.getElementById("errNom").textContent = "Le nom est dèja utilisée."; document.getElementById("errNom").style.color = "red";
                NOM.style.border="1px solid red";
                NOM.style.background=" #fff2f3";
                
            }
        }

    if(rep=="no"){
        rep="no"
        
    }else{
        REP="ys"
    }
    
    
}


function modifier_infos_employé(e){
    e.preventDefault()
    calculerNote()
    for(i=0;i<stagiaires.length;i++){
        if (ID.textContent==stagiaires[i].id){
            stagiaires[i].id=i;
            stagiaires[i].nom=NOM.value;
            stagiaires[i].note=NOTE;
            stagiaires[i].groupe=GROUPE.value;
            stagiaires[i].filiere=FILIERE.value;
            stagiaires[i].Module=MODULE.value;
            stagiaires[i].decision=DECISION;
            stagiaires[i].mention=MENTION;
        }
    
            
        
        
    }

        
    afficher()
}


// affiche
function afficher(){
    let content=" ";
    for(i=0;i<stagiaires.length;i++){
        
        if(stagiaires[i].note >= 10){
            red_class="admis";
        } else {
            red_class="nonadmis";
        }
        content +=`<tr>
            <td>${ stagiaires[i].id=i+1}</td>
            <td>${stagiaires[i].nom}</td>
            <td>${stagiaires[i].note}</td>
            <td>${stagiaires[i].groupe}</td>
            <td>${stagiaires[i].filiere}</td>
            <td>${stagiaires[i].Module}</td>
            <td class="${red_class}">${stagiaires[i].decision}</td>
            <td >${stagiaires[i].mention}</td>
            <td><button onclick="supprimer_employé(event)"  class="btn-delete" id=${stagiaires[i].id}>supprimer</button></td>
        </tr>`
    }
    document.getElementById("tdata").innerHTML=content

    //
    for (let i=1;i<table_stagiaires.rows.length - 1;i++){
        table_stagiaires.rows[i].addEventListener("click",function(e){
            for(let j = 1; j <table_stagiaires.rows.length - 1;j++){
                table_stagiaires.rows[j].classList.remove("row-success");
            }
            e.currentTarget.classList.add("row-success");
            //
            remplirInputs(e.currentTarget.children[0].textContent)
        })
        
    }

    let MAXSALAIRE=stagiaires[0].salaire
    for(i=0;i<stagiaires.length;i++){
        if(MAXSALAIRE<stagiaires[i].salaire){
            MAXSALAIRE=stagiaires[i].salaire
        }
    }
    document.getElementById("txtSalaireMax").textContent=MAXSALAIRE
}

function remplirInputs(idd){
    for(i=0;i<stagiaires.length;i++){
        if(idd==stagiaires[i].id){
            ID.textContent=stagiaires[i].id
            NOM.value=stagiaires[i].nom
            CC1.value=stagiaires[i].Cc1
            CC2.value=stagiaires[i].Cc2
            CC3.value=stagiaires[i].Cc3
            EFM.value=stagiaires[i].Efm
            GROUPE.value=stagiaires[i].groupe
            FILIERE.value=stagiaires[i].filiere
            MODULE.value=stagiaires[i].Module
        }
    }
}


//supprimer

function supprimer_employé(event){
    if(confirm("Voulez vous supprimer cet enregistrement ?") == true){
        let index=-1;
        for(let i=0;i < stagiaires.length;i++){
            if(event.currentTarget.id == stagiaires[i].id){
                index=i;
                break;
            }
        }
        if(index !==-1){
            stagiaires.splice(index,1);
            afficher();
        }
    }
}

let rechercher;




function Search(){
    rechercher = stagiaires.filter((item)=>{

        if(SEARCH.value == item.id || SEARCH.value == item.nom || SEARCH.value == item.groupe || SEARCH.value == item.filiere || SEARCH.value == item.Module || SEARCH.value == item.decision || SEARCH.value == item.mention){
            return item;
        }

    });
    console.log(rechercher);
    let ctn="";
    for(i=0;i<rechercher.length;i++){
        if(rechercher[i].note >= 10){
            red_class="admis";
        } else {
            red_class="nonadmis";
        }
         ctn+=`
        <tr>
            <td>${rechercher[i].id}</td>
            <td>${rechercher[i].nom}</td>
            <td>${rechercher[i].prenom}</td>
            <td>${rechercher[i].groupe}</td>
            <td>${rechercher[i].filiere}</td>
            <td>${rechercher[i].Module}</td>
            <td class="${red_class}">${rechercher[i].decision}</td>
            <td>${rechercher[i].mention}</td>
        </tr>`
    }

    document.getElementById("tdat").innerHTML=ctn;
    
}

