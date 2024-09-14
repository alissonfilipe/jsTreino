function Reverter(Astring) {
    let revertida = ""
    let indice = 0;
    // percorrer de trás pra frent
    // pequeno detalhe para acessar os valores é -1
    for (let i = Astring.length - 1; i >= 0; i--) {

        revertida += Astring[i]; // Concatena o caractere na string

        indice++;
    }
    console.log(revertida)

}

let Frase = "O mãe só gratidão o pai só gratidão"
Reverter(Frase)

