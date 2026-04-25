const employés = [
    { nom:"Radi", prenom:"Hamza", 
        poste:18, salaire : 12000},
    { nom:"Khalidi", prenom:"Khadija", 
        poste:18,  salaire : 15000},

]

// déclarations
const table_employés=document.getElementById("table_employés")
let NOM=document.getElementById("nom")
let PRENOM=document.getElementById("prenom")
let POSTE=document.getElementById("poste")
let SALAIRE=document.getElementById("salaire")
let ID=document.getElementById("id_mdf")

// EXP REG



// Events

document.getElementById("btn_ajouter").addEventListener("click",ajouter_employé)
document.getElementById("btn_modifier").addEventListener("click",modifier_infos_employé)


//Functions

// ajouter function 
function ajouter_employé(e){
    e.preventDefault()
    const nv_employé={
        nom:NOM.value,
        prenom:PRENOM.value,
        poste:POSTE.value,
        salaire:SALAIRE.value
    }
    const lnom= /^[A-Za-z]+$/;
    const lprenom=/^[A-Za-z]+$/;  
    const lpost=/^[A-Za-z]+[A-Za-z]*[A-Za-z]*$/;  
    const lsalaire=/\d{4,6}$/;  

    let rep="yes";

    if(lnom.test(NOM.value)===false ){
        document.getElementById("errNom").textContent = "Le nom est obligatoire."; document.getElementById("errNom").style.color = "red";
        NOM.style.border="1px solid red";
        NOM.style.background=" #fff2f3";
        rep="no";
    }


    if(lprenom.test(PRENOM.value)===false){
        console.log(3)
        document.getElementById("errPrenom").textContent = "Le prénom est obligatoire."; document.getElementById("errPrenom").style.color = "red";
        PRENOM.style.border="1px solid red";
        PRENOM.style.background=" #fff2f3";
        rep="no";
    }

    if(lpost.test(!POSTE.value)===false){
        document.getElementById("errPost").textContent = "Veuillez saisir un poste valide."; document.getElementById("errPost").style.color = "red";
        POSTE.style.border="1px solid red";
        POSTE.style.background=" #fff2f3";
        rep="no";
    }

    if(lsalaire.test(SALAIRE.value)===false){
        document.getElementById("errSalaire").textContent = "Veuillez saisir un salaire valide."; document.getElementById("errSalaire").style.color = "red";
        SALAIRE.style.border="1px solid red";
        SALAIRE.style.background=" #fff2f3";
        rep="no";
    }

    if(rep=="no"){
        rep="no"
        ID.value=""
        NOM.value=""
        PRENOM.value=""
        POSTE.value=""
        SALAIRE.value=""
    }else{
        employés.push(nv_employé)
        afficher()
    }
    
}

// Modifier

function modifier_infos_employé(e){
    e.preventDefault()
    for(i=0;i<employés.length;i++){
        if (ID.value==employés[i].id){
            employés[i].id=i;
            employés[i].nom=NOM.value;
            employés[i].prenom=PRENOM.value;
            employés[i].poste=POSTE.value;
            employés[i].salaire=SALAIRE.value;
        }
    
            
        
        
    }

        
    afficher()
}


// affiche
function afficher(){
    let content=" ";
    for(i=0;i<employés.length;i++){
        content +=`<tr>
            <td>${ employés[i].id=i+1}</td>
            <td>${employés[i].nom}</td>
            <td>${employés[i].prenom}</td>
            <td>${employés[i].poste}</td>
            <td>${employés[i].salaire}</td>
            <td><button onclick="supprimer_employé(event)"  class="btn-delete" id=${employés[i].id}>supprimer</button></td>
        </tr>`
    }
    document.getElementById("tdata").innerHTML=content

    //
    for (let i=1;i<table_employés.rows.length - 1;i++){
        table_employés.rows[i].addEventListener("click",function(e){
            for(let j = 1; j <table_employés.rows.length - 1;j++){
                table_employés.rows[j].classList.remove("row-success");
            }
            e.currentTarget.classList.add("row-success");
            //
            remplirInputs(e.currentTarget.children[0].textContent)
        })
        
    }

    let MAXSALAIRE=employés[0].salaire
    for(i=0;i<employés.length;i++){
        if(MAXSALAIRE<employés[i].salaire){
            MAXSALAIRE=employés[i].salaire
        }
    }
    document.getElementById("txtSalaireMax").textContent=MAXSALAIRE
}

function remplirInputs(idd){
    for(i=0;i<employés.length;i++){
        if(idd==employés[i].id){
            ID.value=employés[i].id
            NOM.value=employés[i].nom
            PRENOM.value=employés[i].prenom
            POSTE.value=employés[i].poste
            SALAIRE.value=employés[i].salaire
        }
    }
}


//supprimer

function supprimer_employé(event){
    if(confirm("Voulez vous supprimer cet enregistrement ?") == true){
        let index=-1;
        for(let i=0;i < employés.length;i++){
            if(event.currentTarget.id == employés[i].id){
                index=i;
                break;
            }
        }
        if(index !==-1){
            employés.splice(index,1);
            afficher();
        }
    }
}

