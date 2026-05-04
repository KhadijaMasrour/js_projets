



function addobjet(id){
    return document.getElementById(id)
}

function valider(){
    if (addobjet("nom").value != "" && addobjet("Filiere").value != "" && addobjet("Groupe").value != "" && addobjet("Module").value != ""){
        let Nom = addobjet("nom");
        let Tel = addobjet("Groupe");
        let Spz = addobjet("Module");
        let Date = addobjet("Filiere");
    }else{
        alert("Vous voulez compléter les informations")
    }
}

valider()