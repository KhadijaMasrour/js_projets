let clients = [ 
  { 
    id: 1, 
    nom: "Bennani", 
    prenom: "Sara", 
    ville: "Settat", 
    commandes: [ 
      { 
        id: 101, 
        date: "2026-04-10", 
        produits: [ 
          { id: 1, libelle: "Clavier", prix: 120, quantite: 2 }, 
          { id: 2, libelle: "Souris", prix: 80, quantite: 1 } 
        ], 
        payee: true 
      }, 
      { 
        id: 102, 
        date: "2026-04-15", 
        produits: [ 
          { id: 3, libelle: "Ecran", prix: 950, quantite: 1 } 
        ], 
        payee: false 
      } 
    ] 
  }, 
 
  { 
    id: 2, 
    nom: "Radi", 
    prenom: "Hamza", 
    ville: "Casablanca", 
    commandes: [ 
      { 
        id: 103, 
        date: "2026-04-11", 
        produits: [ 
          { id: 4, libelle: "Casque", prix: 200, quantite: 1 }, 
          { id: 5, libelle: "Webcam", prix: 300, quantite: 1 } 
        ], 
        payee: true 
      } 
    ] 
  }, 
 
  { 
    id: 3, 
    nom: "Khalidi", 
    prenom: "Khadija", 
    ville: "Rabat", 
    commandes: [ 
      { 
        id: 104, 
        date: "2026-04-09", 
        produits: [ 
          { id: 6, libelle: "Imprimante", prix: 1200, quantite: 1 } 
        ], 
        payee: false 
      } 
    ] 
  } 
]; 

function afficherClients(){
    for (let i = 0 ; i< clients.length ; i++){
        console.log("------------------ Client N°  " , i+1 , " ------------------ " )
        console.log("Nom : " , clients[i].nom )
        console.log("Prenom : " , clients[i].prenom )
        console.log("Ville : " , clients[i].ville  )
    }
}

function afficherCommandesClient(idClient) {
    for(i=0;i<clients.length;i++){
        for(let j=0; j < clients[i].commandes.length;j++){
            if(idClient==clients[i].id){
                 console.log(clients[i].commandes)
            }
        }
    }
}

function afficherProduitsCommandes(idCommandes) {
    for(i=0;i<clients.length;i++){
        for(let j=0; j < clients[i].commandes.length;j++){
            if(idCommandes==clients[i].commandes[j].id){
                for(k=0 ; k<clients[i].commandes[j].produits.length;k++ ){
                    console.log(clients[i].commandes[j].produits)
                }
            }
        }
    }
}


function chercherClient(id) {
    for (i=0;i<clients.length;i++){
        if(id==clients[i].id){
            return clients[i]
        }
    }
}


Montant_totale=function(idCommande){
    for(i=0;i<clients.length;i++){
        let total=0
        for(let j=0; j < clients[i].commandes.length;j++){
            if(idCommande==clients[i].commandes[j].id){
                for(k=0 ; k<clients[i].commandes[j].produits.length;k++ ){
                   total += clients[i].commandes[j].produits[k].prix*clients[i].commandes[j].produits[k].quantite
                }
                return total
            }
        }
    }
}

function afficherCommandesNonPayees() {
    for(i=0;i<clients.length;i++){
        for(let j=0; j < clients[i].commandes.length;j++){
            for(k=0 ; k<clients[i].commandes[j].produits.length;k++ ){
                if(clients[i].commandes[j].payee===false){
                    return clients[i].commandes[j]
                }   
            }
        }
    }
}

function ajouterCommande(idClient, nouvelleCommande){
    for(i=0;i<clients.length;i++){
       if(idClient==clients[i].id){
            clients[i].commandes.push(nouvelleCommande)
        }
    }
}

function  modifierQuantite(idCommande, idProduit, nouvelleQuantite){
    for(i=0;i<clients.length;i++){
        for(let j=0; j < clients[i].commandes.length;j++){
            if(idCommande==clients[i].commandes[j].id){
                for(k=0 ; k<clients[i].commandes[j].produits.length;k++ ){
                    if(idProduit==clients[i].commandes[j].produits[k].id){
                        clients[i].commandes[j].produits[k].quantite=nouvelleQuantite
                    }
                }   
            }
        }
    }
}

function supprimerCommande(idCommande){
    for(i=0;i<clients.length;i++){
        for(let j=0; j < clients[i].commandes.length;j++){
            if(idCommande==clients[i].commandes[j].id){
                clients[i].commandes.splice(j,1)
            }
        }
    }
}

function clientPlusGrandMontant() {
    let max = 0;

    for (let i = 0; i < clients.length; i++) {
        let total = 0;

        for (let j = 0; j < clients[i].commandes.length; j++) {
            for (let k = 0; k < clients[i].commandes[j].produits.length; k++) {
                total += clients[i].commandes[j].produits[k].prix *
                         clients[i].commandes[j].produits[k].quantite;
            }
        }

        clients[i].total = total;

        if (total > max) {
            max = total;
        }
    }

    for (let x = 0; x < clients.length; x++) {
        if (clients[x].total === max) {
            console.log(
                "le client",
                clients[x].nom,
                clients[x].prenom,
                "a le montant le plus élevé"
            );
        }
    }
}
code_vérification=(code)=>{
    let regex = /^(CMD-)[0-9]{4}(-)\d{3}$/;
    return regex.test(code);
}


console.log("----------------------------- Q-01 afficher client -----------------------------")
afficherClients()
console.log("----------------------------- Q-02 afficher commandes -----------------------------")
afficherCommandesClient(2)
console.log("----------------------------- Q-03 afficher Produits -----------------------------")
afficherProduitsCommandes(101)
console.log("----------------------------- Q-04 chercher client -----------------------------")
console.log(chercherClient(3))
console.log("----------------------------- Q-05 Calculer Totale des commandes -----------------------------")
console.log(Montant_totale(104))
console.log("----------------------------- Q-06 Modifier la qunatité -----------------------------")
console.log(modifierQuantite(101,1,20))
console.log("----------------------------- Q-03 supprimé commande  -----------------------------")
console.log(supprimerCommande(102))
afficherCommandesClient(1)
console.log("----------------------------- Q-03 afficher le client  ayant le montant total le plus élevé -----------------------------")
clientPlusGrandMontant()
console.log("----------------------------- Q-03 Vérifier le code de commande  -----------------------------")
console.log(code_vérification("CMD-2026-001"))
console.log(code_vérification("cmd-2026-001"))