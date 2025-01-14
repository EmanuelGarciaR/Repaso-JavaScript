/*
3 Chicos de 23 años perfectamente normales entran a una heladeria
a comprar un helado pero hay un problema:
Los precion no están al lado de cada estante con su respectivo healdo.
Ellos quieren comprar el helado más caro que puedan con la plata que tienen

Roberto tiene 1.5 USD
Pedro tiene 1.7 USD
Kofla tiene 3 USD

Los precios de los helados son los siguientes:
palito de helado de agua: 0.6 usd
palito de helado de crema: 1 usd
bombon helado marca heladix: 1.6 usd
bombon healdo marca heladovich: 1.7 usd
bombon helado marca helardo 1.8 usd
potecido de helado con confites 2.9 usd
pote de 1/4 KG -> 2.9 USD


Crear Soluciones:
-Pedirles que ingresen el monto que tienen y mostrarles el helado más caro
-Si hay 2 o más con el mismo precio, mostrar ambos
-Kofla quiere saber cuando es el vuelto
*/

let dineroRoberto = prompt("Ingresa el dinero que tiene Roberto: ");
let dineroPedro = prompt("Ingresa el dinero que tiene Pedro: ");
let dineroKofla = prompt("Ingresa el dinero que tiene Kofla: ");

dineroKofla = parseInt(dineroKofla);

if (dineroRoberto>=0.6 && dineroRoberto<1){
    helado= "Roberto: palito de helado de agua: 0.6 usd"
    alert(helado)
}
else if (dineroRoberto>= 1 && dineroRoberto<1.6) {
    helado= "Roberto: palito de helado de crema: 1 usd"
    alert(helado)
}
else if (dineroRoberto>= 1.6 && dineroRoberto<1.7) {
    helado= "Roberto: bombon helado marca heladix: 1.6 usd"
    alert(helado)
}
else if (dineroRoberto>= 1.7 && dineroRoberto<1.8) {
    helado= "Roberto: bombon helado marca helardo 1.8 usd"
    alert(helado)
}
else if (dineroRoberto>= 2.9) {
    helado= "Roberto: helado de confites o pote 1/4"
    alert(helado)
}
else{
    alert("No te alcanza Roberto")
}
// =======Pedro====
if (dineroPedro>=0.6 && dineroPedro<1){
    helado= "Pedro: palito de helado de agua: 0.6 usd"
    alert(helado)
}
else if (dineroPedro>= 1 && dineroPedro<1.6) {
    helado= "Pedro: palito de helado de crema: 1 usd"
    alert(helado)
}
else if (dineroPedro>= 1.6 && dineroPedro<1.7) {
    helado= "Pedro: bombon helado marca heladix: 1.6 usd"
    alert(helado)
}
else if (dineroPedro>= 1.7 && dineroPedro<1.8) {
    helado= "Pedro: bombon helado marca heladovich: 1.7 usd"
    alert(helado)
}
else if (dineroPedro>= 1.8 && dineroPedro<2.9) {
    helado= "Pedro: bombon helado marca helardo 1.8 usd"
    alert(helado)
}
else if (dineroPedro>= 2.9) {
    helado= "Pedro: helado de confites o pote 1/4"
    alert(helado)
}
else{
    alert("No te alcanza, Pedro")
}

// =======KOFLA====
if (dineroKofla>=0.6 && dineroKofla<1){
    helado= "kofla: palito de helado de agua: 0.6 usd"
    vuelto = dineroKofla - 0.6
    alert(`${helado}El vuelto para Kofla es: ${vuelto}`)

}
else if (dineroKofla>= 1 && dineroKofla<1.6) {
    helado= "kofla: palito de helado de crema: 1 usd"
    vuelto = dineroKofla - 1
    alert(`${helado}El vuelto para Kofla es: ${vuelto}`)

}
else if (dineroKofla>= 1.6 && dineroKofla<1.7) {
    helado= "kofla: bombon helado marca heladix: 1.6 usd"
    vuelto = dineroKofla - 1.6
    alert(`${helado}El vuelto para Kofla es: ${vuelto}`)

}
else if (dineroKofla>= 1.7 && dineroKofla<1.8) {
    helado= "kofla: bombon helado marca helardo 1.8 usd"
    vuelto = dineroKofla - 1.8
    alert(`${helado}El vuelto para Kofla es: ${vuelto}`)
}
else if (dineroKofla>= 2.9) {
    helado= "kofla: helado de confites o pote 1/4"
    vuelto = dineroKofla - 2.9
    alert(`${helado}El vuelto para Kofla es: ${vuelto}`)
}
else{
    alert("No te alcanza, kofla")
}