let btn = document.querySelector(".btnDark");
let circulo = document.querySelector(".circulo")
btn.addEventListener('click', function(){

    document.body.classList.toggle("dark")
    circulo.classList.toggle("circulo2")

});