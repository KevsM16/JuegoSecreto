let numeroSecreto=generarNumeroSecreto();
let intentos=1;
let listaNumerosSorteados=[];
let numeroMaximo=10;
console.log(numeroSecreto);


function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
   let numeroUsuario=parseInt(document.getElementById("numeroUsuario").value);
  if(numeroUsuario===numeroSecreto){
    document.getElementById("reiniciar").removeAttribute("disabled");
    asignarTextoElemento("p",`Lograste acertar ,acertaste en ${intentos} ${intentos===1?"intento":"intentos"}`);
  }else{
    if(numeroUsuario<numeroSecreto){
      asignarTextoElemento("p","tu numero es menor al numero a adivinar");
    }else{
      asignarTextoElemento("p","tu numero es mayor al numero a adivinar")
    }
    intentos++;
    limpiarCaja();
  }
return;

  
}

function limpiarCaja(){
  document.querySelector("#valorUsuario").value="";
 
}

function generarNumeroSecreto() {
 let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
 //si ya sorteamos todos los numeros
 if(listaNumerosSorteados.length==numeroMaximo){
asignarTextoElemento("p","Ya asignamos todos los numeros posibles");
 }else{

 
 }if(listaNumerosSorteados.includes(numeroGenerado)){
   return generarNumeroSecreto();
  }else{
    listaNumerosSorteados.push(numeroGenerado);
    return  numeroGenerado;
  }
}

function condicionesIniciales(){
  asignarTextoElemento("h1","Secret number game");
  asignarTextoElemento(`p`,`Ingrese un numero del 1 al ${numeroMaximo}`);
  numeroSecreto=generarNumeroSecreto();
  intentos=1;
}
 function reiniciarJuego(){
//limpiar caja
limpiarCaja();
//Indicar mensaje de intervalo
//Generar el numero Aleatorio
//inicializar numero de intentos
condicionesIniciales();
//remorver noton juego;
document.querySelector("#reiniciar").setAttribute("disabled",true);
 }
condicionesIniciales();







function IMC(){

}




