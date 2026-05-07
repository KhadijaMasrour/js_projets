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
            let today = new Date().toISOString().split("T")[0];
            if(this.ttel>=8 && this.tdate >= today){
                nv_objt={
                    nom:this.tnom,
                    nom:this.ttel,
                    nom:this.tspe,
                    nom:this.tdate,
                }
                infos.push(nv_objt)
                return "yes"
            }
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
                <td><button class="btn-delete" onclick="supprimer()">supprimer</button></td>
            </tr>
        `
        addobjet("tdata").innerHTML=content
    }
    supprimer(){
        
    }
}

R1= new Rendez_vous("khadija","06070504","02/06/2026","TETE");
R1.est_valide();
R1.toHtml()