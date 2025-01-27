/*
-Crear mini sistema para regristrar
presentes (P)
ausentes (A)
- Pasados 30 días, mostrar su situación final del alumno
- Máximo de 10% de ausencias
*/
let cantidadAlumnos = prompt("Cuantos alumnos son?: ");
let alumnosTotales = [];

for (let i = 0; i< cantidadAlumnos; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)), 0]
}

const tomarAsistencia = (nombre, posicion) =>{
    let presencia = prompt(nombre)
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[posicion][1]++;
    }
}
for (let i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    ---------------Asistencias: ${alumnosTotales[alumno][1]} <br>
    ---------------Ausencias: ${30- alumnosTotales[alumno][1]}`;
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado+= "<b style = 'color:red'> REPROBADO POR INASISTENCIA </b>"
    }else{
        resultado+= "<br><br>"
    }
    document.write(resultado)
}