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


document.getElementById("bth").addEventListener("click",read())

function read(){
    let conten="";
    for(i=0;i<books.length;i++){
        conten+=`
            <div class="book">
                <div>${books[i].id=i+1}</div>
                <img src="${books[i].Img}">
                <div class="book-content">
                    <h3>${books[i].nom}</h3>
                    <p>Auteur: ${books[i].auteur}</p>
                    <p>Création:${books[i].Date_c}</p>
                    <p>Publication: ${books[i].Date_p}</p>
                    <p>${books[i].Description}</p>
                </div>
            </div>
        `
        
    }
    document.getElementById("books").innerHTML=conten
}
