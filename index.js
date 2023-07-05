//Contar cuantos numeros 2 existen.
let nums= [1,2,3,4,5,2,7,2];
let t= nums.length
let i=0
let cont= 0

while (i<t){
    if (nums[i]==2){
        cont= cont+1
    }
    i=i+1
}

alert(cont)


