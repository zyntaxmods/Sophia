let image1 = document.getElementById("img1");
let images = [
    'products/product1.jpeg',
    'products/product1.2.jpeg',
    'products/product1.1.jpeg'
];

let count = 0;

image1.addEventListener('click', function() {
  image1.src = images[count];
  count = (count + 1) % images.length;
});

let picture = document.getElementById("picture");
let pictures = ['products/product2.1.jpeg',
    'products/product2.2.jpeg',
    'products/product2.jpeg'];
   let isip = 0;
   
  picture.addEventListener('click', function(){
    picture.src = pictures[isip];
    isip = (isip + 1)  % pictures.length;
  });
  
 let ulol = document.getElementById("ulol");
let ano = ['products/product3.1.jpeg',
    'products/product3.2.jpeg',
    'products/product3.3.jpeg', 'products/product3.4.jpeg', 'products/product3.jpeg'];
   let bilang = 0;
   
  ulol.addEventListener('click', function(){
    ulol.src = ano[bilang];
    bilang = (bilang + 1)  % ano.length;
  });
    