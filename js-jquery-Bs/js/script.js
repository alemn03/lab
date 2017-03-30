/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * id Selector $("#btn_calcular_edad")
 * class selector $(".btn_calcular_edad")
 * tag selector $("p")
 */


$("#btn_calcular_edad").click(
        function () {
            implementaUsuario();
        }
);

$("#idSelector").click(
        function () {
            var texto = $("#idSelector").text();
            mostrarResultado(texto, "idSelector");

        }
);


$(".classSelector").click(
        function () {
            var texto = $(".classSelector").text();
            mostrarResultado(texto, "classSelector");

        }
);

$("a").click(
        function () {
            var texto = $("a").text();
            mostrarResultado(texto, "tagSelector");

        }
);

$("#changeSelector").click(
        function () {
             $("#changeSelector").text($("#idSelector").text());
            var texto = $("#changeSelector").text();
            mostrarResultado(texto, "changeSelector");

        }
);

$("#childSelector").click(
        function () {
            var texto =  $("form > button").text();
            mostrarResultado(texto, "childSelector");

        }
);


var mostrarResultado = function (texto, estilo) {
    var textarea = $('#mostrarResultado');
    textarea.removeClass();
    textarea.text(texto);
    textarea.addClass(estilo);

};




function usuario(Nombre, Fecha) {

    this.fecha = Fecha;
    this.nombre = Nombre;
    this.anio = "";
    this.calcularEdad = function () {
        // Si la fecha es correcta, calculamos la edad
        var values = this.fecha.split('-');
        var dia = values[2];
        var mes = values[1];
        var ano = values[0];

        // cogemos los valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth() + 1;
        var ahora_dia = fecha_hoy.getDate();

        // realizamos el calculo
        var edad = (ahora_ano + 1900) - ano;
        if (ahora_mes < mes)
        {
            edad--;
        }
        if ((mes === ahora_mes) && (ahora_dia < dia))
        {
            edad--;
        }
        if (edad > 1900)
        {
            edad -= 1900;
        }

        // calculamos los meses
        var meses = 0;
        if (ahora_mes > mes)
            meses = ahora_mes - mes;
        if (ahora_mes < mes)
            meses = 12 - (mes - ahora_mes);
        if (ahora_mes === mes && dia > ahora_dia)
            meses = 11;

        // calculamos los dias
        var dias = 0;
        if (ahora_dia > dia)
            dias = ahora_dia - dia;
        if (ahora_dia < dia)
        {
            ultimoDiaMes = new Date(ahora_ano, ahora_mes, 0);
            dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
        }

        this.anio = edad;
    };




}

usuario.prototype.presentarse = function () {
    var respuesta = "Hola, mi nombre es " + this.nombre + "  y tengo " + this.anio + " años";
    return respuesta;
};



var implementaUsuario = function () {
    var name = $('#name').val();
    var fecha = $('#fecha_nacimiento').val();
    var usr = new usuario(name, fecha);
    usr.calcularEdad();
    mostrarResultado(usr.presentarse(), "presentacion");

};