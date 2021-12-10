async function startPage(){
    const list = await getAllProducts();
    let html = "";
    list.forEach(produit => {
        html += `<a href="./product.html?id=${produit._id}">
        <article>
          <img src="${produit.imageUrl}" alt="${produit.altTxt}">
          <h3 class="productName">${produit.name}</h3>
          <p class="productDescription">${produit.description}</p>
        </article>
      </a>`;
    });
    document.getElementById("items").innerHTML = html;
};

window.onload = startPage;