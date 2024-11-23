function calcPorcentagem(x, y) {
    const conta = (y / x) * 100
    return conta
}

let x = 30
let y = 15
let porcentagem = calcPorcentagem(x, y)
console.log(`${porcentagem}% de ${x} é ${y}`)