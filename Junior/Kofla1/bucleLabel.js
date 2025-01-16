let array1 = ["Feid1", "Maluma1", "Jbalvin1"];
let array2 = [ "Shawn2", "Bruno2", array1, "Dualipa2"];

forAfuera:
for (let array in array2){
    if (array == 2){
        for (array of array1){
            document.write(array+ "<br>");
            break forAfuera; //continua / forAfuera es el label, hace referencia al ciclo externo.
        }
    }else{
        document.write(array2[array] + "<br>");
    }
}