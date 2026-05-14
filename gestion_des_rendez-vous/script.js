let redez_vous=JSON.parse(localStorage.getItem("rendez-vous")) || [] ;



function addobjet(id){
    return document.getElementById(id)
}
let Nom = addobjet("nom");
let Tel = addobjet("Groupe");
let Spe = addobjet("Module");
let Date = addobjet("Filiere");
function valider(){
    if (addobjet("nom").value != "" && addobjet("Filiere").value != "" && addobjet("Groupe").value != "" && addobjet("Module").value != ""){
        
        return "yes"
    }else{
        
        return "no"
    }
}

addobjet("btn_ajouter").addEventListener("click",ajouter)

function ajouter(){
    if(valider()=="yes"){
        nv_rnd={
            nom:Nom.value,
            tel:Tel.value,
            spe:Spe.value,
            date:Date.value,
            
        }
        console.log(redez_vous)
        redez_vous.push(nv_rnd)
    }else if(valider()=="no"){
        alert("Vous voulez compléter les informations")
    }
    
}

let infos=[]

class Rendez_vous{
    constructor(NOM,TELE,DATE,SPEC){
        this.tnom=NOM,
        this.ttel=TELE;
        this.tdate=DATE;
        this.tspe=SPEC
    }
    est_valide() {
        if(valider()=="yes"){
            
            let today = new Date();
            if(this.ttel>=8 && this.tdate >= today){
                
                return true
            }
        }else{
            return false
        }
    }

    toHtml(){
        let content=""
        content+=`
            <tr>
                <td>${this.tnom}</td>
                <td>${this.ttel}</td>
                <td>${this.tspe}</td>
                <td>${this.tdate}</td>
                <td><button class="btn-delete" onclick="supprimer(e)">supprimer</button></td>
            </tr>
        `
        addobjet("tdata").innerHTML=content
    }
    supprimer(){
        
    }
}

let r1= new Rendez_vous(Nom.value,Tel.value,Date.value,Spe.value);


function ajouter(){
    if(r1.est_valide()=="yes"){
        nv_rnd={
            nom:Nom.value,
            tel:Tel.value,
            spe:Spe.value,
            date:Date.value,
        }
        redez_vous.push(nv_rnd)
        r1.toHtml()
    }

}


function supprimer(e){
    if(e.target.classList.contains("btn-delete")){
        e.target.parentElement.parentElement.remove()
    }
}


