/**
 * un produit dans le panier
 * @typedef  {Object} produitDansLePanier
 * @property {String} produit._id      l'identifiant  (reference) du produit
 * @property {String} produit.color    la couleur du produit
 * @property {String} produit.imageUrl le lien de l'image
 * @property {String} produit.altTxt
 * @property {String} produit.name 
 * @property {String} produit.price 
 * @property {Number} produit.quantite          le nombre de produits
 */


/**
 * genère le HTML d'un produit dans le panier
 * @param {produitDansLePanier} produit
 * @returns {String}  le html d'un produit dans le panier
 * 
 */
function afficheProduit(produit){
    return /*html*/ `
    <article class="cart__item" data-id="${produit._id}" data-color="${produit.color}">
        <div class="cart__item__img">
            <img src="${produit.imageUrl}" alt="${produit.altTxt}">
            </div>
        <div class="cart__item__content">
        <div class="cart__item__content__description">
            <h2>${produit.name}</h2>
            <p>${produit.color}</p>
            <p>${produit.price},00 €</p>
            </div>
            <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${produit.quantite}">
            </div>
            <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
            </div>
            </div>
        </div>
        </article>
    `;
}

/**
 * données fictives pour le test
 * @type {Array.<produitDansLePanier>}
 */
const donneesDuPanier = [
    {
        "_id" : "12",
        "altTxt" : "klmklmklmk",
        "color" : "red",
        "imageUrl" : "xxxx",
        "name" : "super canapé",
        "price" : 2000,
        "quantite" : 3
    },
    
    {
        "_id" : "12",
        "altTxt" : "klmklmklmk",
        "color" : "jaune",
        "imageUrl" : "xxxx",
        "name" : "hyper super canapé",
        "price" : 2000,
        "quantite" : 10
    }
];

/**
 * affiche dnas la page les produits du panier
 * @param {Array.<produitDansLePanier>}  liste
 * @returns {void}  affiche les produits das le DOM
 */
function affichePanier(liste){
    let html  = "";
    liste.forEach(produit => {
        html += afficheProduit(produit)
    });
    document.getElementById("cart__items").innerHTML = html;
}


window.onload = function (){
    affichePanier(donneesDuPanier);
}