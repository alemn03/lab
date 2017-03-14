/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 document.getElementById("discreto").onclick = function() {alerta("discreto");};
    
 document.getElementById("anonimo").onclick = function() {alertaAnonima("anonimo");};

function alerta(mensaje){
      alert("Ejemplo JS tipo->  "+mensaje);
}


var alertaAnonima = function(mensaje){
    alert("Ejemplo JS tipo->  "+mensaje);
}
