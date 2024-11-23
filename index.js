function pegueIdade(id) {
    if(id >= 18) {
        return true
    } else {
        return false
    }
}

let verify = pegueIdade(3)
if (verify) {
    console.log(`Você é maior de idade`)
} else {
    console.log(`Você não é maior de idade`)
}