// ====== GET DATA FROM LOCALSTORAGE ======
let books = JSON.parse(localStorage.getItem("books")) || [];

// ====== SELECT INPUTS ======
let Nom = document.getElementById("nom");
let Auteur = document.getElementById("auteur");
let date_c = document.getElementById("dcreat");
let date_p = document.getElementById("dpub");
let img = document.getElementById("img");
let dscrp = document.getElementById("description");

// ====== DISPLAY BUTTON ======
document.getElementById("btn_aff").addEventListener("click", afficher);

// ====== SHOW BOOKS ======
function afficher() {
    let conten = "";

    for (let i = 0; i < books.length; i++) {
        books[i].id = i + 1;

        conten += `
            <div class="book">
                <div class="ID">${books[i].id}</div>
                <img src="${books[i].Img}">
                
                <div class="book-content" onclick="remplir(${books[i].id})">
                    <h3>${books[i].nom}</h3>
                    <p>Auteur: ${books[i].auteur}</p>
                    <p>Création: ${books[i].Date_c}</p>
                    <p>Publication: ${books[i].Date_p}</p>
                    <p>${books[i].Description}</p>

                    <button class="delete" onclick="supprimer(${books[i].id})">
                        Supprimer
                    </button>
                </div>
            </div>
        `;
    }

    document.getElementById("books").innerHTML = conten;
}

// ====== ADD BOOK ======
document.getElementById("ajouter").addEventListener("click", ajouter);

function ajouter(e) {
    e.preventDefault();

    let new_book = {
        nom: Nom.value,
        auteur: Auteur.value,
        Date_c: date_c.value,
        Date_p: date_p.value,
        Img: img.value,
        Description: dscrp.value
    };

    books.push(new_book);

    localStorage.setItem("books", JSON.stringify(books));

    afficher();

    clearInputs();
}

// ====== DELETE BOOK ======
function supprimer(id) {
    if(confirm("Voulez vous supprimer cet enregistrement ?")==true){
        books = books.filter(book => book.id !== id);

        localStorage.setItem("books", JSON.stringify(books));

        afficher();
    }
}

// ====== FILL INPUTS FOR UPDATE ======
function remplir(id) {
    let btnContainer = document.getElementById("lm");

    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {

            Nom.value = books[i].nom;
            Auteur.value = books[i].auteur;
            date_c.value = books[i].Date_c;
            date_p.value = books[i].Date_p;
            img.value = books[i].Img;
            dscrp.value = books[i].Description;

            btnContainer.innerHTML = `
                <button id="btn-mdf" onclick="modifier(${id})">
                    Modifier
                </button>
            `;

            btnContainer.style.display = "block";
        }
    }
}

// ====== UPDATE BOOK ======
function modifier(id) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books[i].nom = Nom.value;
            books[i].auteur = Auteur.value;
            books[i].Date_c = date_c.value;
            books[i].Date_p = date_p.value;
            books[i].Img = img.value;
            books[i].Description = dscrp.value;
        }
    }

    localStorage.setItem("books", JSON.stringify(books));

    afficher();

    clearInputs();
}

// ====== CLEAR INPUTS ======
function clearInputs() {
    Nom.value = "";
    Auteur.value = "";
    date_c.value = "";
    date_p.value = "";
    img.value = "";
    dscrp.value = "";
}