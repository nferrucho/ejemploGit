var ciudades = new Array();
ciudades.push("cali");
ciudades.push("lima");
ciudades.push("medellin");
ciudades.push("cucuta");
ciudades.push("bogota");

var paises = [];

//adicion de registros
paises.push("Colombia");
console.log(ciudades);

paises.push("Peru");
console.log(paises);

let cantidad = paises.length;
console.log(`tenemos ${cantidad} paises actualmente`);

//eliminando  de registros del arreglo
ciudades.splice (1,1);
console.log(ciudades);
var destino = 'lima';

var index = 0;
var disponible = false;

console.log ('destino es ', destino); 
while (index < ciudades.length) {
    if (ciudades[index] == destino) {
        disponible = true;
        break;
    }
    index++;
}
console.log ('destino disponible ', disponible); 

//recorrer e imprimir el arreglo
console.log ('lista de paises inscritos');
for( var index = 0; index < paises.length; index++){

    console.log (paises[index]);

}
