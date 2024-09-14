function verificarImparOuPar(num) {
    if (num % 2 === 0) {
        return "par"
    }
    return "impar"
}

let d = verificarImparOuPar(0)
console.log(d)
let a = verificarImparOuPar(2)
console.log(a)
let b = verificarImparOuPar(1)
console.log(b)
let c = verificarImparOuPar(3)
console.log(c)
