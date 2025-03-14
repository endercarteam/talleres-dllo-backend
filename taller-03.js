function desglosarString(str, req){
    let cont = 0
    let vocales = "aeiouáéíóúü";
    let consonantes ="bcdfghjklmnñpqrstvwxyz"
    str = str.toLowerCase();  
    
    if(req == "vocales"){
        for(let i = 0 ; i < str.length ; i++){
            if(vocales.includes(str.slice(i,i+1))){
              cont++; 
            }
        }      
    }else if(req == "consonantes"){
        for(let i = 0 ; i < str.length ; i++){
            if(consonantes.includes(str.slice(i,i+1))){
              cont++; 
            } 
        }
    }

return cont 
}

console.log(desglosarString("murcielagos","vocales"))
console.log(desglosarString("murcielagos","consonantes"))