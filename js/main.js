let txtPalabraAdivinar = document.querySelector("#palabra-adivinar");
let btnJugar = document.querySelector("#boton-jugar");
let divPalabraOculta = document.querySelector("#palabra-oculta");
let btnsLetras =  document.querySelectorAll(".abecedario");
let palabraEscondida = "";

btnJugar.addEventListener("click", jugar); 

btnsLetras.forEach(btn => {
    btn.addEventListener("click", intentarLetra);
});

function jugar(){ 
    palabraEscondida = txtPalabraAdivinar.value;
    txtPalabraAdivinar.value = "";
    for (let index = 0; index <palabraEscondida.length; index++) {
        let label = document.createElement("label");
        label.innerHTML = "X";
        label.classList.add("letra-oculta");
        divPalabraOculta.appendChild(label);
    }
} 
//
function intentarLetra(event){ 
    let letra = event.target.innerText;
    let index = palabraEscondida.indexOf(letra);
    if(index == -1){
        alert("fallaste");
    } else {
        let lblOcultos = document.querySelectorAll(".letra-oculta");
        lblOcultos[index].innerHTML = letra;
    }
} 