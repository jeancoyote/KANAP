/**
 * @typedef {Object}  Product
 * @property {Array}  colors    les différentes couleurs possibles
 * @property {String}  _id      l'identifiant  (reference) du produit
 * @property {String}  name 
 * @property {Number}  price 
 * @property {String} imageUrl 
 * @property {String} description
 * @property {String} altTxt
*/

/**
 * un fiche contact contenant les informations de l'utilisateur
 * @typedef {Object}  Contact
 * @property {String} firstName
 * @property {String} lastName
 * @property {String} address
 * @property {String} city
 * @property {String} email
 */

const server = "http://localhost:3000/api/products/";

async function getAllProducts(){
    const response = await fetch(server);
    const products =  await response.json();
    return products;
}

/**
 * donne les informations d'un produit
 *
 * @param   {String}  id  [id description]
 *
 * @return  {Product}      [return description]
 */
async function getProduct(id){
    const response = await fetch(server+"/"+id);
    const product =  await response.json();
    return product;
}

/**
 * envoi une commande
 *
 * @param   {Contact}         contact  [contact description]
 * @param   {Array.<String>}  order    un tableu contenant les id des produits
 *
 * @return  {[type]}           [return description]
 */
function sendOrder(contact, order){

}