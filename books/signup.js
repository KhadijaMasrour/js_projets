let personnes = JSON.parse(localStorage.getItem("personnes")) || [];


Nom=addo("nom");
Email=addo("email");
Date=addo("date");
Password=addo("password");

function addo(id){
    return document.getElementById(id)
}

document.getElementById("conecter").addEventListener("click",ajouter)

function verification(){
    let rep="";
    let nom=/^[A-Za-z]+$/;
    let email=/^[A-Za-z]+[0-9]*(@)(gmail.com|ofppt.ma)$/;
    let date=/^[A-Za-z]*.[0-9]+$/;
    let pass=/^[A-Za-z]+.[0-9]+$/;
    if(nom.test(Nom.value)=== false){
        document.getElementById("errnom").textContent = " Nom est incorrect !!";
        document.getElementById("errnom").style.color = "red";
        Nom.style.border = "1px solid red";
        Nom.style.border = "1px solid red";
        Nom.style.background=" #fff2f3";
        return rep="no";
        console.log("ok")
    }else if(email.test(Email.value)=== false){
        document.getElementById("erremail").textContent = " Email est incorrect !!";
        document.getElementById("erremail").style.color = "red";
        Email.style.border = "1px solid red";
        Email.style.border = "1px solid red";
        Email.style.background=" #fff2f3";
        return rep="no";
        console.log("ok")
        
    }else if(Date.value <= 1920 || Date.value >= 2010){
        document.getElementById("errdate").textContent = " Date est incorrect !!";
        document.getElementById("errdate").style.color = "red";
        Date.style.border = "1px solid red";
        Date.style.border = "1px solid red";
        Date.style.background=" #fff2f3";
        return rep="no";
        console.log("ok")
    }else if(pass.test(Password.value)=== false){
        document.getElementById("errpassword").textContent = " Password est incorrect !!";
        document.getElementById("errpassword").style.color = "red";
        Password.style.border = "1px solid red";
        Password.style.border = "1px solid red";
        Password.style.background=" #fff2f3";
        return rep="no";
        console.log("ok")
    }else{
        return rep="yes"
    }
}

function vrf_personne(){
    for(i=0;i<personnes.length;i++){
        if(Email.value==personnes[i].email){
            document.getElementById("erremail").textContent = " Email est dèja utilisée !!";
            document.getElementById("erremail").style.color = "red";
            Email.style.border = "1px solid red";
            Email.style.border = "1px solid red";
            Email.style.background=" #fff2f3";
            Email.style.color=" #3e3c3d";
            return "no";
            console.log(personnes)
        }
    }
    return "yes"
}

function ajouter(e){
    e.preventDefault();
    let ent=""
    nv_personne={
        nom:Nom.value,
        email:Email.value,
        password:Password.value,
    }
    verification();
    if(verification()== "no" || vrf_personne()== "no"){
        let li=[]
    }else if (verification()== "yes"){
        ent=`<h1>Verifié</h1>`
        document.getElementById("Formulaire").innerHTML=ent
        personnes.push(nv_personne)
        console.log(personnes)
        localStorage.setItem("personnes", JSON.stringify(personnes));
    }
    
}