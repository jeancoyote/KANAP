const server = "http://localhost:3000/api/products/";

async function getAllProducts(){
    const response = await fetch(server);
    const products =  await response.json();
    return products;
}


async function getProduct(id){
    const response = await fetch(server+"/"+id);
    const product =  await response.json();
    return product;
}
