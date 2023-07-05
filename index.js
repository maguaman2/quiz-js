let myname = prompt("Escribe tu nombre");
let cont = 0;
let target = prompt("Que letra quieres encontrar?");
let myNameLower = myname.toLowerCase();

for (let i = 0; i< myname.length; i++){
    if (myNameLower[i]===target){
        cont+=1;
    }
}

console.log("Tu nombre es: " + myname);

console.log("Tu nombre tiene " + cont + " -> " +  target);