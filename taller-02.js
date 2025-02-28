let max = 0;
let min = 0;
let list = [3,17,-1,4,-19];
let suma = 0;
let listac = [];
let lista2 = [7,2,4,6,3,9]
let listaf = [];
// punto 1
function findMAX(lista){
    for(let i=0 ; i <= (lista.length - 1); i++){
        if(lista[i] > max){
            max = lista[i];
        }
       
     
       
    }
    return max;
}
// punto 2
function includes(lista, num){
    for(let i=0 ; i <= (lista.length - 1); i++){
       
        if(lista[i] === num){
            return true;
        }
}
    return false;
}
// punto 3
function sum(lista){
    for(let i=0 ; i <= (lista.length - 1); i++){
       
        suma += lista[i];
}
    return suma;
}
// punto 4
function missingNumbers(lista){
    
    min = 0;
    
    
    for(let i=0 ; i <= (lista.length - 1); i++){
       
        if(i == 0){
            max = lista[i];
           
        }else if(lista[i] > max){
        max =lista[i];    
        }
        if(i == 0){
            min = lista[i];
           
        }else if(lista[i]< min){
        min =lista[i];    
        }
       
    }
    
    for(let j=min ; j <= max; j++ ){
    
     listac.push(j)
   
    }
    
    let control = 0
    for(let i=0 ; i <= (listac.length - 1 ); i++){
    
     
    
     if (includes(lista, listac[i]) === false){
         
        listaf[control] = listac[i];
       
        control++; 
     }
       
     }
      return listaf   
    }
    

console.log(findMAX(list));
console.log(includes(list, 2));
console.log(includes(list, 4));
console.log(sum(list));
console.log(missingNumbers(lista2));

