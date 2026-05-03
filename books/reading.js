let books = JSON.parse(localStorage.getItem("books")) || [];

document.getElementById("bth").addEventListener("click", read());

function read() {

    let conten = "";

    for (let i = 0; i < books.length; i++) {

        books[i].id = i + 1;

        conten += `
            <div class="book">
                <div class="ID">${books[i].id}</div>

                <img src="${books[i].Img}">

                <div class="book-content">
                    <h3>${books[i].nom}</h3>
                    <p>Auteur: ${books[i].auteur}</p>
                    <p>Création: ${books[i].Date_c}</p>
                    <p>Publication: ${books[i].Date_p}</p>
                    <p>${books[i].Description}</p>
                </div>
            </div>
        `;
    }

    document.getElementById("books").innerHTML = conten;
}

let auteur = document.getElementById("filterAuteur");

let filterAuteur = [...new Set(
    books.map(book => book.auteur)
)];

function FilterAuteur(){

    let opt = `<option>Choisir auteur</option>`;

    for(let i = 0; i < filterAuteur.length; i++){

        opt += `
            <option value="${filterAuteur[i]}">${filterAuteur[i]}</option>
        `;
    }
    
    auteur.innerHTML = opt;
}

let filteran = [...new Set(
    books.map(annee => annee.Date_p)
)];

function OLDTO(){

    let on = filteran.sort(function(a,b){
        return a - b;
    });

    console.log(on);
}

function NEWTO(){
    let ne = filteran.sort(function(a,b){
        return b - a;
    });

    console.log(ne);
}

function choisiAuteur(id){
    let co="";
    for(j=0;j<filterAuteur.length;j++){
        for(i=0;i<books.length;i++){
            if(books[i].auteur==id)
                co+=`
                    <div class="book">
                        <div class="ID">${books[i].id}</div>

                        <img src="${books[i].Img}">

                        <div class="book-content">
                            <h3>${books[i].nom}</h3>
                            <p>Auteur: ${books[i].auteur}</p>
                            <p>Création: ${books[i].Date_c}</p>
                            <p>Publication: ${books[i].Date_p}</p>
                            <p>${books[i].Description}</p>
                        </div>
                    </div>
                `
                
        }
        break
        
    }
    document.getElementById("books").innerHTML = co;
}



function filterYear(val){
    let co = "";
    let filteredBooks = [];

    if(val == "new"){
        filteredBooks = books.filter(b => Number(b.Date_p) >= 2000);
    }

    else if(val == "old"){
        filteredBooks = books.filter(b => {
            let year = Number(b.Date_p);
            return year >= 1900 && year < 2000;
        });
    }

    // 📌 NEW: من القديم إلى الجديد
    else if(val == "oldTo"){
        filteredBooks = [...books].sort((a, b) => {
            return Number(a.Date_p) - Number(b.Date_p);
        });
    }

    // 📌 NEW: من الجديد إلى القديم (باقي عندك)
    else if(val == "newTo"){
        filteredBooks = [...books].sort((a, b) => {
            return Number(b.Date_p) - Number(a.Date_p);
        });
    }

    for(let i = 0; i < filteredBooks.length; i++){
        let b = filteredBooks[i];

        co += `
        <div class="book">
            <div class="ID">${b.id}</div>
            <img src="${b.Img}">
            <div class="book-content">
                <h3>${b.nom}</h3>
                <p>Auteur: ${b.auteur}</p>
                <p>Création: ${b.Date_c}</p>
                <p>Publication: ${b.Date_p}</p>
                <p>${b.Description}</p>
            </div>
        </div>
        `;
    }

    document.getElementById("books").innerHTML = co;
}
OLDTO();

FilterAuteur();