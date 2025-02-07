let val = "1"

//punto 1
function convertidorTemp(C){
    return C*(9/5)+32
}
let C = 25
console.log(convertidorTemp(C))
//punto 2
function resolvedor(a,b,c,x){
    if (x == "-"){
        return (-b + Math.sqrt(b**2-4*a*c))/(2*a)
    }
    if(x == "+"){
        return (-b - Math.sqrt(b**2-4*a*c))/(2*a)
    }
}
let a = 1
let b = 5
let c = 4
let x = "-"
console.log(resolvedor(a,b,c,x))
x = "+"
console.log(resolvedor(a,b,c,x))

// punto 3
function mejorParidad(n){
    if(n % 2 == 0){
        val = "par"
        
    }else{
        val = "impar"
        
    }
    
   return val
}

let n = 77
console.log(mejorParidad(n))
n = 200
console.log(mejorParidad(n))
//punto 4
function peorParidad(number){
    if(number == 0){
        val = "cero"
        return val
    }
    if(number == 1){
        val = "impar"
        return val
    }
    if(number == 2){
        val = "par"
        return val
    }
    if(number == 3){
        val = "impar"
        return val
    }
    if(number == 4){
        val = "par"
        return val
    }
    if(number == 5){
        val = "impar"
        return val
    }
    if(number == 6){
        val = "par"
        return val
    }
    if(number == 7){
        val = "impar"
        return val
    }
    if(number == 8){
        val = "par"
        return val
    }
    if(number == 9){
        val = "impar"
        return val
    }
    if(number == 10){
        val = "impar"
        return val
    }
}
let number = 7
console.log(peorParidad(number))
