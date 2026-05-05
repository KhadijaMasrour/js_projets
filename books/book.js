let personnes = JSON.parse(localStorage.getItem("personnes")) || [];

let books = JSON.parse(localStorage.getItem("books")) || [];

// ====== SELECT INPUTS ======
let Nom = document.getElementById("nom");
let Auteur = document.getElementById("auteur");
let date_c = document.getElementById("dcreat");
let date_p = document.getElementById("dpub");
let img = document.getElementById("img");
let dscrp = document.getElementById("description");


let Email = addo("email");
let Password = addo("password");

function addo(id){
    return document.getElementById(id);
}

document.getElementById("conecter").addEventListener("click", connecter);

function vrf_personne(){

    for(let i = 0; i < personnes.length; i++){

        
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
    console.log("ok")
    e.preventDefault();

    let ajout=`
        <div class="formm">
            <div class="form-box">
            <div id="titre"><h2>Ajouter un livre</h2></div> 
            <div class="for-inp">
                <input id="nom" type="text" placeholder="Nom du livre">
                <input id="auteur" type="text" placeholder="Auteur">
            </div>
            <div class="for-inp">
                <input  id="dcreat" type="number" placeholder="Date du création">
                <input id="dpub" type="number" placeholder="Date du publication">
            </div>
            <div class="for-inp">
                <input id="img" type="text" placeholder="URL image">
                <textarea id="description" placeholder="Description"></textarea>
            </div>
            <div id="for-inp">
                <button id="ajouter">Ajouter</button>
                <div id="lm"></div>
            </div>
        </div>
        </div>

        <div id="books">
            <div id="bt"><button id="btn_aff">SHOW BOOKS > </button></div>
        </div>
    `;

    let test = vrf_personne();

    if(test === "yes"){

        document.getElementById("container").innerHTML = ajout;

        // ===== SELECT INPUTS =====
        Nom = document.getElementById("nom");
        Auteur = document.getElementById("auteur");
        date_c = document.getElementById("dcreat");
        date_p = document.getElementById("dpub");
        img = document.getElementById("img");
        dscrp = document.getElementById("description");

        // ===== EVENTS =====
        document
        .getElementById("btn_aff")
        .addEventListener("click", afficher);

        document
        .getElementById("ajouter")
        .addEventListener("click", ajouter);

    }else{

        document.getElementById("erremail").textContent =
        "Email ou Password incorrect";

        document.getElementById("erremail").style.color = "red";

        Email.style.border = "1px solid red";

        Password.style.border = "1px solid red";
    }
}

// ====== GET DATA FROM LOCALSTORAGE ======




document.getElementById("btn_aff").addEventListener("click", afficher);


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