
document.write('<p>Estadisticas centro médico ñuñoa</p>');

let radiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    },
    ];
    
let traumatologia =  [
    {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZpacienteradioA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "MARIA pacienteradioIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MpacienteradioE",
        rut: "16554741-K",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE",
    },
    ];
    
let dental = [
    {
        hora: "8:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA",
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE",
    },
];

/*radio = radiologia.map(function(atencion){
    console.log(atencion[0].especialista)
})*/

const pacienteradio = Object.values(radiologia);
    document.write(`<p>Primera Atención: ${pacienteradio[0].paciente} - ${pacienteradio[0].prevision} | Última Atención: ${pacienteradio[pacienteradio.length - 1].paciente} - ${pacienteradio[pacienteradio.length - 1].prevision}</p>`)

const pacientetrauma = Object.values(traumatologia);
    document.write(`<p>Primera Atención: ${pacientetrauma[0].paciente} - ${pacientetrauma[0].prevision} | Última Atención: ${pacientetrauma[pacientetrauma.length - 1].paciente} - ${pacientetrauma[pacientetrauma.length - 1].prevision}</p>`)

const pacientedental = Object.values(dental);
    document.write(`<p>Primera Atención: ${pacientedental[0].paciente} - ${pacientedental[0].prevision} | Última Atención: ${pacientedental[pacientedental.length - 1].paciente} - ${pacientedental[pacientedental.length - 1].prevision}</p>`)

document.write("<h1>PACIENTES RADIOLOGIA</h1>")
radiologia.forEach((atencion) => {
    document.write( `<table><tr><th>Hora</th>
        <td>${atencion.hora} </td>
        <th>Especialista</th>
        <td>${atencion.especialista} </td>
        </th><th>Paciente</th>
        <td>${atencion.paciente} </td>
        <th>Previsión</th>
        <td>${atencion.prevision} </td>
    </tr> </table>`
    )})

document.write("<h1>PACIENTES TRAUMATOLOGIA</h1>")
traumatologia.forEach((atencion) => {
    document.write( `<table><tr><th>Hora</th>
        <td>${atencion.hora} </td>
        <th>Especialista</th>
        <td>${atencion.especialista} </td>
        </th><th>Paciente</th>
        <td>${atencion.paciente} </td>
        <th>Previsión</th>
        <td>${atencion.prevision} </td>
    </tr> </table> `
    )})

document.write("<h1>PACIENTES DENTAL</h1>")

dental.forEach((atencion) => {
    document.write( `<table><tr><th>Hora</th>
        <td>${atencion.hora} </td>
        <th>Especialista</th>
        <td>${atencion.especialista} </td>
        </th><th>Paciente</th>
        <td>${atencion.paciente} </td>
        <th>Previsión</th>
        <td>${atencion.prevision} </td>
    </tr> </table> `
    )})
    
