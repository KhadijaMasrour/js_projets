let book=[
    {nom:"10 nights",
        auteur:"khadija",
        Date_c:"01/02/2024",
        Date_p:"02/03/2026",
        Img:"C:\Users\hp\Desktop\Java scripte\js_projets\books\img\Tangled Hearts.jfif",
        Description:"le sndi sjd jd"},

    {nom:"50 days",
        auteur:"khadija",
        Date_c:"2024",
        Date_p:"2026",
        Img:"C:\Users\hp\Desktop\Java scripte\js_projets\books\img\Tangled Hearts.jfif",
        Description:"le sndi sjd jd"
    }
]



Nom=document.getElementById("nom");
Auteur=document.getElementById("auteur");
date_c=document.getElementById("dcreat");
date_p=document.getElementById("dpub");
img=document.getElementById("img");
dscrp=document.getElementById("description");

document.getElementById("ajouter").addEventListener("click",ajouter);


function ajouter(e){
    e.preventDefault()
    let new_book={
        nom:Nom.value,
        auteur:Auteur.value,
        Date_c:date_c.value,
        Date_p:date_p.value,
        Img:img.value,
        Description:dscrp.value
    }
    book.push(new_book)
    afficher()
}

function afficher(){
    let conten="";
    for(i=0;i<book.length;i++){
        conten+=`
            <div class="book">
                <img src="${book[i].Img}">
                <div class="book-content">
                    <h3>${book[i].nom}</h3>
                    <p>Auteur: ${book[i].auteur}</p>
                    <p>Création:${book[i].Date_c}</p>
                    <p>Publication: ${book[i].Date_p}</p>
                    <p>${book[i].Description}</p>
                    <button class="delete">Supprimer</button>
                </div>
            </div>
        `
        document.getElementById("books").innerHTML+=conten
    }
}

function supprimer(id){
    
}