/*
Un joven logró ganar el premio de la lotería, quiere celebrar con una fiesta.
Compró una maquina que deja pasar solamente a:
- Mayores de edad (mayores de 18)
- La ersona que entre despues de las 2 am, no paga
*/

let gratis = false;
const validarEdad = (hora) => {
    let edad = prompt("Ingresa tu edad: ");
    if (edad >= 18){
        if(hora >= 2 && hora < 8 && gratis==false){
        alert(`No pagas, son las ${hora} y la fiesta no ha terminado!!!`)
        gratis=true
        }
    }else{
        alert("Es MENOR de edad, NOOOOO");
    }
}
let hora = prompt("Ingresa la hora a la que asistes a la fiesta: ")
if (hora <= 0 || hora >= 24){
    alert("Ingresa una hora válida")
}else if (hora >= 8){
    alert("La fiesta ya terminó mijito")
}else{
    validarEdad(hora)
}
