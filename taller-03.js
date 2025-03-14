let list1 = [2,7,11,15];
let list2 = [3,4,2];
function desglosarString(str, req){
    let cont = 0;
    let vocales = "aeiouáéíóúü";
    let consonantes ="bcdfghjklmnñpqrstvwxyz";
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
function twoSum(num, objt){
   

    for(let i = 0; i < num.length; i++){
        for(let j = i + 1; j < num.length; j++){
            
            if(num[i] + num[j] === objt){
                return [i, j]
            }
        }
    }

    
}
function conversionRomana(rom) {
    
    rom = rom.toUpperCase();

    
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    
    

    let resultado = 0;

    
    for (let i = 0; i < rom.length; i++) {
        
        if ( valores[rom[i]] < valores[rom[i + 1]]) {
            resultado -= valores[rom[i]];
        } else {
            
            resultado += valores[rom[i]];
        }
    }

    return resultado;
}
console.log(desglosarString("murcielagos","vocales"));
console.log(desglosarString("murcielagos","consonantes"));
console.log(twoSum(list1, 9));
console.log(twoSum(list2, 6));
console.log(conversionRomana("III"));
console.log(conversionRomana("XIV"));
console.log(conversionRomana("MMXXIV"));
console.log(conversionRomana("MXMVII"));
