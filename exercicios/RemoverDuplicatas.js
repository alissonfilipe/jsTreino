function removerDuplicatas(arr) {
    let novoArray = []; // Criamos um novo array vazio

    for (let i = 0; i < arr.length; i++) { // Percorremos o array original
        if (novoArray.indexOf(arr[i]) === -1) { // Se o valor não está no novoArray
            novoArray.push(arr[i]); // Adiciona o valor ao novoArray
        }
    }

    return novoArray; // Retorna o array sem duplicatas
}

let duplicatas = [1, 2, 2, 2, 3, 4, 3, 7, 8, 1, 1, 2]
duplicatas = removerDuplicatas(duplicatas)
console.log(duplicatas)
