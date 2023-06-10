
let precios1 = document.getElementById("precios1");
let precios2 = document.getElementById("precios2");
let precios3 = document.getElementById("precios3");

let valoritem1 =document.getElementById("precio1");
let valoritem2 =document.getElementById("precio2");
let valoritem3 =document.getElementById("precio3");

let descripcion1 = document.getElementById("desc1");
let descripcion2 = document.getElementById("desc2");
let descripcion3 = document.getElementById("desc3");

let imagen1 = document.getElementById("ima1");
let imagen2 = document.getElementById("ima2");
let imagen3 = document.getElementById("ima3");



let item1
const fetchProducto = (id) => {


return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .catch(error => console.log(error))
    
}
    



async function cargaitems()
{

    fetchProducto(5).then(val => {descripcion1.innerHTML = val.description;imagen1.src = val.image});
    fetchProducto(6).then(val => {descripcion2.innerHTML = val.description; imagen2.src = val.image});
    fetchProducto(7).then(val => {descripcion3.innerHTML = val.description; imagen3.src = val.image});

}

cargaitems();




precios1.addEventListener('click', async function(evento) {
    evento.preventDefault();
    let precio = await fetchProducto(5);
    valoritem1.innerHTML = "$"+precio.price;
   
})


precios2.addEventListener('click', async function(evento) {
    evento.preventDefault();
    let precio = await fetchProducto(6);
    valoritem2.innerHTML = "$"+precio.price;

})

precios3.addEventListener('click', async function(evento) {
    evento.preventDefault();
    let precio = await fetchProducto(7);
    valoritem3.innerHTML = "$"+precio.price;


})