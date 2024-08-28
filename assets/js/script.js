//REQUERIMIENTOS:

//1.- Crear la estructura de datos mediante arreglos [] y objetos {}

let radiología = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'IGNACIO SCHULZ', paciente: 'ANA MARIA GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' }
];

let traumatología = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

let dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//2.- Mostrar por pantalla la primera y última atención de cada listado

//2.1 Primer y último paciente radiología

document.write(`<strong><u>Radiología</u></strong> (antes de shift y pop): <br> primera atención: ${radiología[0].paciente} - ${radiología[0].prevision} <strong>|</strong> `)
document.write(`Última atención: ${radiología[radiología.length - 1].paciente} - ${radiología[radiología.length - 1].prevision} <br><br>`)

//2.2 Primer y último paciente traumatología
document.write(`<strong><u>Traumatología</u></strong>: <br> primera atención: ${traumatología[0].paciente} - ${traumatología[0].prevision} <strong>|</strong> `)
document.write(`Última atención: ${traumatología[traumatología.length - 1].paciente} - ${traumatología[traumatología.length - 1].prevision} <br><br>`)

//2.3 Primer y último paciente Dental
document.write(`<strong><u>Dental</u></strong>: <br> primera atención: ${dental[0].paciente} - ${dental[0].prevision} <strong>|</strong> `)
document.write(`Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision} <br><br>`)

//Requerimiento nuevo------------------------------------------------------------------------------
//Eliminar el primer y último elemento del arreglo de Radiología:

//Eliminar el primero con médoto shift
radiología.shift();


//Eliminar útimo dato con método pop
radiología.pop();
//---------------------------------------------------------------------------------------------------


//3.- Recorrer el arreglo y mostrar su contenido:

//3.1.- Tabla especialidad Radiología:
var tablaRadiologia =
    "<tr><th>ESPECIALIDAD</th><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
for (var i = 0; i < radiología.length; i++) {
    tablaRadiologia += `<tr>
                <td style="border: 1px dotted black;">RADIOLOGÍA</td>    
                <td style="border: 1px dotted black;">${radiología[i].hora}</td>
                <td style="border: 1px dotted black;">${radiología[i].especialista}</td>
                <td style="border: 1px dotted black;">${radiología[i].paciente}</td>
                <td style="border: 1px dotted black;">${radiología[i].rut}</td>
                <td style="border: 1px dotted black;">${radiología[i].prevision}</td>  
    `
}

document.write(`<table border="1" style="background-color: lightblue;" >${tablaRadiologia}</table> <br>`);

//Requerimiento nuevo------------------------------------------------------------------------------
//Agregar horas al array de traumatología:

traumatología.push({ hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE' },
    { hora: '09:30', especialista: 'MARÍA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE' },
    { hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA' },
);

//--------------------------------------------------------------------------------------------------

//3.2.- Tabla especialidad Traumatología:
var tablaTraumatología =
    "<tr><th>ESPECIALIDAD</th><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
for (var i = 0; i < traumatología.length; i++) {
    tablaTraumatología += `<tr>
                <td style="border: 1px dotted black;">TRAUMATOLOGÍA</td>    
                <td style="border: 1px dotted black;">${traumatología[i].hora}</td>
                <td style="border: 1px dotted black;">${traumatología[i].especialista}</td>
                <td style="border: 1px dotted black;">${traumatología[i].paciente}</td>
                <td style="border: 1px dotted black;">${traumatología[i].rut}</td>
                <td style="border: 1px dotted black;">${traumatología[i].prevision}</td>  
    `
}

document.write(`<table border="1" style="background-color: lightyellow;" >${tablaTraumatología}</table> <br>`);

//3.3.- Tabla especialidad Dental:
var tablaDental =
    "<tr><th>ESPECIALIDAD</th><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
for (var i = 0; i < dental.length; i++) {
    tablaDental += `<tr>
                <td style="border: 1px dotted black;">DENTAL</td>    
                <td style="border: 1px dotted black;">${dental[i].hora}</td>
                <td style="border: 1px dotted black;">${dental[i].especialista}</td>
                <td style="border: 1px dotted black;">${dental[i].paciente}</td>
                <td style="border: 1px dotted black;">${dental[i].rut}</td>
                <td style="border: 1px dotted black;">${dental[i].prevision}</td>  
    `
}

document.write(`<table border="1" style="background-color: lightgreen;" >${tablaDental}</table> <br>`);

//Requerimiento nuevo------------------------------------------------------------------------------
// Imprimir en la página HTML arrayDental, ocupe reduce

var dientecillos =
    dental.reduce(function (acumulador, diente) {
        return acumulador + diente.hora + ' - ' + diente.especialista + ' - ' + diente.paciente + ' - ' + diente.rut + ' - ' + diente.prevision + "<br>";
    }, '');
document.write(`${dientecillos} <br>`);

//Requerimiento nuevo------------------------------------------------------------------------------
//Imprimir un listado total de todos los pacientes que se atendieron en el centro médico

document.write("<br> Total de clientes atendidos en las 3 especialidades: <br><br>")

radiología.forEach(function (pacientes) {
    document.write(`${pacientes.paciente} <br>`);
})
traumatología.forEach(function (pacientes) {
    document.write(`${pacientes.paciente} <br>`);
})
dental.forEach(function (pacientes) {
    document.write(`${pacientes.paciente} <br>`);
})

document.write("*nota: se han descontado los clientes quitados con shift y pop <br>")

//Requerimiento nuevo------------------------------------------------------------------------------
//Filtrar pacientes de Isapre de Dental:
//identifico con filter los que cumplan el requisito de Isapre
var isapreDental =
    dental.filter(function (atendidos) {
        return atendidos.prevision === 'ISAPRE'
    });

//Luego el objeto resultante lo llevo a cadena de texto separada por guión
var isapreDentalReduce =
    isapreDental.reduce(function (acumulador, cliente) {
        return acumulador + cliente.paciente + ' - ' + cliente.prevision + "<br>";
    }, '');
document.write(`<br><br> Pacientes area Dental Isapre: <br> 
    ${isapreDentalReduce}`);

//Requerimiento nuevo------------------------------------------------------------------------------
//Filtrar pacientes de Fonasa de Traumatologá:
//identifico con filter los que cumplan el requisito de Isapre
var fonasaTraumatología =
    traumatología.filter(function (atendidos) {
        return atendidos.prevision === 'FONASA'
    });

//Luego el objeto resultante lo llevo a cadena de texto separada por guión
var fonasaTraumatologíaReduce =
    fonasaTraumatología.reduce(function (acumulador, traumado) {
        return acumulador + traumado.paciente + ' - ' + traumado.prevision + "<br>";
    }, '');
document.write(`<br><br> Pacientes area Traumatología Fonasa: <br> 
    ${fonasaTraumatologíaReduce} <br>`);