let books = [

{
    nom:"Atomic Habits",
    auteur:"James Clear",
    Date_c:"2018",
    Date_p:"2019",
    Img:"img/BLAVK1.JPG",
    Description:"Développement personnel."
},

{
    nom:"Rich Dad Poor Dad",
    auteur:"Robert Kiyosaki",
    Date_c:"1997",
    Date_p:"2000",
    Img:"img/BLAVK2.JPG",
    Description:"Finance personnelle."
},

{
    nom:"The Alchemist",
    auteur:"Paulo Coelho",
    Date_c:"1988",
    Date_p:"1993",
    Img:"img/BLUE1.jpg",
    Description:"Roman inspirant."
},

{
    nom:"Deep Work",
    auteur:"Cal Newport",
    Date_c:"2016",
    Date_p:"2017",
    Img:"img/BLUE2.jpg",
    Description:"Focus et productivité."
},

{
    nom:"Think and Grow Rich",
    auteur:"Napoleon Hill",
    Date_c:"1937",
    Date_p:"1937",
    Img:"img/GREEN.jpg",
    Description:"Succès et mindset."
},

{
    nom:"Start With Why",
    auteur:"Simon Sinek",
    Date_c:"2009",
    Date_p:"2010",
    Img:"img/Her Fate.jpg",
    Description:"Leadership."
},

{
    nom:"Zero to One",
    auteur:"Peter Thiel",
    Date_c:"2014",
    Date_p:"2015",
    Img:"img/PUR2.jpg",
    Description:"Startup & innovation."
},

{
    nom:"Ikigai",
    auteur:"Hector Garcia",
    Date_c:"2016",
    Date_p:"2017",
    Img:"img/télécharger (2).jpg",
    Description:"Sens de la vie."
}

];

localStorage.setItem("books", JSON.stringify(books));


document.getElementById("btn_aff").addEventListener("click",afficher)

function afficher(){
    let conten="";
    for(i=0;i<books.length;i++){
        conten+=`
            <div  class="book">
                <div class="ID">${books[i].id=i+1}</div>
                <img  src="${books[i].Img}">
                <div onclick="remlpire(${books[i].id})" class="book-content">
                    <h3>${books[i].nom}</h3>
                    <p>Auteur: ${books[i].auteur}</p>
                    <p>Création:${books[i].Date_c}</p>
                    <p>Publication: ${books[i].Date_p}</p>
                    <p>${books[i].Description}</p>
                        <button class="delete" onclick="supprimer(${books[i].id})">Supprimer</button>
                </div>
            </div>
        `
        
    }
    document.getElementById("books").innerHTML=conten

    
}





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
    books.push(new_book)
    afficher()
}


function supprimer(Id){
    for(let i = 0 ; i < books.length ; i++){
        if(Id==books[i].id){
            books.splice(i,1);
        }
    }
    afficher()
}

function modifier(id){
    for(i=0;i<books.length;i++){
        if(id==books[i].id){
            books[i].nom=Nom.value
            books[i].auteur=Auteur.value
            books[i].Date_c=date_c.value
            books[i].Date_p=date_p.value
            books[i].Img=img.value
            books[i].Description=dscrp.value
            
        }
    }
    afficher()
    contt=`<button id="btn-mdf" onclick="modifier(${books[i].id})">modifier</button>`
    document.getElementById("for-inp").innerHTML-=contt
}

function remlpire(id){
    let cont=" ";
    for(i=0;i<books.length;i++){
        if(id==books[i].id){
            ID=books[i].id
            Nom.value=books[i].nom
            Auteur.value=books[i].auteur
            date_c.value=books[i].Date_c
            date_p.value=books[i].Date_p
            img.value=books[i].Img
            dscrp.value=books[i].Description
            cont=`
                <button id="btn-mdf" onclick="modifier(${books[i].id})">modifier</button>
            `
            document.getElementById("lm").innerHTML=cont
            document.getElementById("lm").style.display="block"
        }
    }
}

