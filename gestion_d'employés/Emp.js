const employes = [
    { nom:"Radi", prenom:"Hamza", 
        poste:18, salaire : 12000},
    { nom:"Khalidi", prenom:"Khadija", 
        poste:18,  salaire : 15000},

]

// declarations
const table_employes=document.getElementById("table_employes")
let NOM=document.getElementById("nom")
let PRENOM=document.getElementById("prenom")
let POSTE=document.getElementById("poste")
let SALAIRE=document.getElementById("salaire")
let SEARCH=document.getElementById("search")
let ID=document.getElementById("id_mdf")

// EXP REG



// Events

document.getElementById("btn_ajouter").addEventListener("click",ajouter_employe)
document.getElementById("btn_modifier").addEventListener("click",modifier_infos_employe)
document.getElementById("btn_rechercher").addEventListener("click",Search)


//Functions

// ajouter function 
function ajouter_employe(e){
    e.preventDefault()
    const nv_employe={
        nom:NOM.value,
        prenom:PRENOM.value,
        poste:POSTE.value,
        salaire:SALAIRE.value
    }
    const lnom= /^[A-Za-z]+$/;
    const lprenom=/^[A-Za-z]+$/;  
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
        document.getElementById("errPrenom").textContent = "Le prenom est obligatoire."; document.getElementById("errPrenom").style.color = "red";
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

    for(let i = 0 ; i < employes.length ; i++){
            if(employes[i].nom==NOM.value && employes[i].prenom==PRENOM.value){
                document.getElementById("errPrenom").textContent = "Le prenom est dèja utilisee."; document.getElementById("errPrenom").style.color = "red";
                PRENOM.style.border="1px solid red";
                PRENOM.style.background=" #fff2f3";
                rep="no";
                document.getElementById("errNom").textContent = "Le nom est dèja utilisee."; document.getElementById("errNom").style.color = "red";
                NOM.style.border="1px solid red";
                NOM.style.background=" #fff2f3";
                
            }
        }

    if(rep=="no"){
        rep="no"
        
    }else{
        employes.push(nv_employe)
        afficher()
    }
    
}

// Modifier

function modifier_infos_employe(e){
    e.preventDefault()
    for(i=0;i<employes.length;i++){
        if (ID.textContent==employes[i].id){
            employes[i].id=i;
            employes[i].nom=NOM.value;
            employes[i].prenom=PRENOM.value;
            employes[i].poste=POSTE.value;
            employes[i].salaire=SALAIRE.value;
        }
    
            
        
        
    }

        
    afficher()
}


// affiche
function afficher(){
    let content=" ";
    for(i=0;i<employes.length;i++){
        content +=`<tr>
            <td>${ employes[i].id=i+1}</td>
            <td>${employes[i].nom}</td>
            <td>${employes[i].prenom}</td>
            <td>${employes[i].poste}</td>
            <td>${employes[i].salaire}</td>
            <td><button onclick="supprimer_employe(event)"  class="btn-delete" id=${employes[i].id}>supprimer</button></td>
        </tr>`
    }
    document.getElementById("tdata").innerHTML=content

    //
    for (let i=1;i<table_employes.rows.length - 1;i++){
        table_employes.rows[i].addEventListener("click",function(e){
            for(let j = 1; j <table_employes.rows.length - 1;j++){
                table_employes.rows[j].classList.remove("row-success");
            }
            e.currentTarget.classList.add("row-success");
            //
            remplirInputs(e.currentTarget.children[0].textContent)
        })
        
    }

    let MAXSALAIRE=employes[0].salaire
    for(i=0;i<employes.length;i++){
        if(MAXSALAIRE<employes[i].salaire){
            MAXSALAIRE=employes[i].salaire
        }
    }
    document.getElementById("txtSalaireMax").textContent=MAXSALAIRE
}

function remplirInputs(idd){
    for(i=0;i<employes.length;i++){
        if(idd==employes[i].id){
            ID.textContent=employes[i].id
            NOM.value=employes[i].nom
            PRENOM.value=employes[i].prenom
            POSTE.value=employes[i].poste
            SALAIRE.value=employes[i].salaire
        }
    }
}


//supprimer

function supprimer_employe(event){
    if(confirm("Voulez vous supprimer cet enregistrement ?") == true){
        let index=-1;
        for(let i=0;i < employes.length;i++){
            if(event.currentTarget.id == employes[i].id){
                index=i;
                break;
            }
        }
        if(index !==-1){
            employes.splice(index,1);
            afficher();
        }
    }
}










let rechercher;




function Search(){
    rechercher = employes.filter((item)=>{

        if(SEARCH.value == item.id){
            return item;
        }

    });
    console.log(rechercher);
    let ctn=`
        <tr>
            <td>${rechercher.id}</td>
            <td>${rechercher.nom}</td>
            <td>${rechercher.prenom}</td>
            <td>${rechercher.poste}</td>
            <td>${rechercher.salaire}</td>
        </tr>
    `

    document.getElementById("tdat").innerHTML=ctn;
    
}


