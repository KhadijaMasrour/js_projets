let books = JSON.parse(localStorage.getItem("books")) || [];

document.getElementById("bth").addEventListener("click", read());

function read() {
    let conten = "";

    for (let i = 0; i < books.length; i++) {
        books[i].id = i + 1; // تحديث id

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