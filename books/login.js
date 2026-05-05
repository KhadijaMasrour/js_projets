let personnes = JSON.parse(localStorage.getItem("personnes")) || [];

let Nom = addo("nom");
let Email = addo("email");
let Date = addo("date");
let Password = addo("password");

function addo(id){
    return document.getElementById(id);
}

document.getElementById("conecter")
.addEventListener("click", connecter);

function vrf_personne(){

    for(let i = 0; i < personnes.length; i++){

        // EMAIL + PASSWORD صحيحين
        if(
            Email.value === personnes[i].email &&
            Password.value === personnes[i].password
        ){
            return "yes";
        }
    }

    return "no";
}

function connecter(e){

    e.preventDefault();

    let test = vrf_personne();

    if(test === "yes"){

        document.getElementById("Formulaire").innerHTML =
        "<h1>Verifié ✔</h1>";

    }else{

        document.getElementById("erremail").textContent =
        "Email ou Password incorrect";

        document.getElementById("erremail").style.color = "red";

        Email.style.border = "1px solid red";

        Password.style.border = "1px solid red";
    }
}