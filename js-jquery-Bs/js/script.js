/* 
 Autor:Carlos Alejandro Montero Navarro
cedual:114910639
lab js-jquery-bs
javascript principal
descripción: Este código contiene todo los metodos javascript y jquery solicitados en el lab
 */

/*asignacion de funcion anonima al boton que calcula la edad 
llama al metodo implementaUsuario*/
$("#btn_calcular_edad").click(
        function () {
            implementaUsuario();
        }
);

/*asignacion de funcion anonima mostrarResultado
al presionar el boton se va motar el mensaje en el texta area idselector el valor  cual 
es contendio en por el boton y ademas se le asigna el css que va cambiar el color de text area*/
$("#idSelector").click(
        function () {
            var texto = $("#idSelector").text();
            mostrarResultado(texto, "idSelector");

        }
);

/*asignacion de funcion anonima mostrarResultado
al presionar el boton se va motar el mensaje en el texta area classselector los valores cuales 
son contenidos por las clases asignados y ademas se le asigna el css que va cambiar el color de text area*/
$(".classSelector").click(
        function () {
            var texto = $(".classSelector").text();
            mostrarResultado(texto, "classSelector");

        }
);

/*asignacion de funcion anonima mostrarResultado
al presionar el boton se va motar el mensaje en el texta area tagselector los valores cuales 
son contenidos por las etiquetas asignados y ademas se le asigna el css que va cambiar el color de text area*/
$("a").click(
        function () {
            var texto = $("a").text();
            mostrarResultado(texto, "tagSelector");

        }
);

/*asignacion de funcion anonima mostrarResultado
al presionar el boton se van asignar el valor de identificador el valor que tenga otro seleccionado
y ademas se le asigna el css que va cambiar el color de text area*/

$("#changeSelector").click(
        function () {
             $("#changeSelector").text($("#idSelector").text());
            var texto = $("#changeSelector").text();
            mostrarResultado(texto, "changeSelector");

        }
);

/*
	se va motor el contendio del hijo y sus decendientes 
	y ademas se le asigna el css que va cambiar el color de text area
*/

$("#childSelector").click(
        function () {
            var texto =  $("form > button").text();
            mostrarResultado(texto, "childSelector");

        }
);

/*
funcion aninoma mostrarResultado
resive texto y estilo
se obtiene el componente text area que se va manipular
se le remueven las clases css que tenga previamente cargadas
se asigan el nuevo valor y la clase css
*/

var mostrarResultado = function (texto, estilo) {
    var textarea = $('#mostrarResultado');
    textarea.removeClass();
    textarea.text(texto);
    textarea.addClass(estilo);

};


/*funcion constructora de usuario
resive una fecha y un nombre*/

function usuario(Nombre, Fecha) {
/* se asignan los valores de los atributos d*/
    this.fecha = Fecha;
    this.nombre = Nombre;
    this.anio = "";
	/* metodo privado que calcula la edad de la persona */
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
/*medodo public de usuario que se encarga de mostrar el resultado del calculo de la edad*/
usuario.prototype.presentarse = function () {
    var respuesta = "Hola, mi nombre es " + this.nombre + "  y tengo " + this.anio + " años";
    return respuesta;
};


/*funcion anonima implementaUsuario
no resive parametos 
se encarga de crear una instancia de la funsion constructora usuario
se crea el objeto nuevo con los valores que ingresa el usuario
se cualcula la edad y se muestra el resultado*/
var implementaUsuario = function () {
    var name = $('#name').val();
    var fecha = $('#fecha_nacimiento').val();
    var usr = new usuario(name, fecha);
    usr.calcularEdad();
    mostrarResultado(usr.presentarse(), "presentacion");

};