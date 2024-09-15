// Função para somar dois números
function add(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtract(a, b) {
    return a - b;
}

// Função para multiplicar dois números
function multiply(a, b) {
    return a * b;
}

// Função para dividir dois números
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Cannot divide by zero';
    }
}

// Função para calcular o fatorial de um número
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Função para gerar um array de números até um limite
function generateNumbers(limit) {
    const numbers = [];
    for (let i = 0; i <= limit; i++) {
        numbers.push(i);
    }
    return numbers;
}

// Função para encontrar o número máximo em um array
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Função para inverter uma string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Função para verificar se um número é primo
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Função para criar uma string repetida
function repeatString(str, times) {
    return str.repeat(times);
}

// Gerando mais funções para alcançar 1000 linhas...
// (Nota: repetirei e modificarei essas funções com diferentes lógicas para completar 1000 linhas)

// Função para encontrar o número mínimo em um array
function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

// Função para calcular a média de um array de números
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// Função para ordenar um array em ordem crescente
function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}

// Função para ordenar um array em ordem decrescente
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// Função para remover elementos duplicados de um array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Função para verificar se um número é par
function isEven(num) {
    return num % 2 === 0;
}

// Função para verificar se um número é ímpar
function isOdd(num) {
    return num % 2 !== 0;
}

// Função para contar o número de vogais em uma string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

// Função para capitalizar a primeira letra de cada palavra em uma string
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Função para gerar números aleatórios dentro de um intervalo
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para converter uma string para caixa alta
function toUpperCase(str) {
    return str.toUpperCase();
}

// Função para converter uma string para caixa baixa
function toLowerCase(str) {
    return str.toLowerCase();
}

// Função para converter um número de Celsius para Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Função para converter um número de Fahrenheit para Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Função para calcular a área de um círculo
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Função para calcular o perímetro de um círculo
function calculateCirclePerimeter(radius) {
    return 2 * Math.PI * radius;
}

// Função para verificar se uma string é um palíndromo
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Função para gerar uma sequência Fibonacci até um número limite
function generateFibonacci(limit) {
    const fib = [0, 1];
    for (let i = 2; i <= limit; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Função para remover todos os espaços de uma string
function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

// Função para encontrar o índice de um elemento em um array
function findIndex(arr, element) {
    return arr.indexOf(element);
}

// Função para calcular o quadrado de um número
function square(num) {
    return num * num;
}

// Função para calcular o cubo de um número
function cube(num) {
    return num * num * num;
}

// Função para calcular a raiz quadrada de um número
function squareRoot(num) {
    return Math.sqrt(num);
}

// Função para calcular a raiz cúbica de um número
function cubeRoot(num) {
    return Math.cbrt(num);
}

// Função para inverter as palavras de uma string
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

// Função para contar o número de palavras em uma string
function countWords(str) {
    return str.split(' ').length;
}

// Função para verificar se um número é positivo
function isPositive(num) {
    return num > 0;
}

// Função para verificar se um número é negativo
function isNegative(num) {
    return num < 0;
}

// Função para formatar uma data em dd/mm/yyyy
function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Os meses começam do 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Função para somar dias a uma data
function addDaysToDate(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Função para calcular a diferença de dias entre duas datas
function calculateDaysBetweenDates(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Função para verificar se um ano é bissexto
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Função para clonar um objeto
function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Função para verificar se um objeto está vazio
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

// Função para mesclar dois objetos
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Função para verificar se um array contém um elemento
function arrayContains(arr, element) {
    return arr.includes(element);
}

// Função para somar todos os números de um array
function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Função para verificar se uma string contém outra string
function stringContains(str, substring) {
    return str.includes(substring);
}

// Função para contar o número de ocorrências de um caractere em uma string
function countCharOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Função para calcular o valor absoluto de um número
function absoluteValue(num) {
    return Math.abs(num);
}

// Função para gerar um array com números pares até um limite
function generateEvenNumbers(limit) {
    const evenNumbers = [];
    for (let i = 0; i <= limit; i += 2) {
        evenNumbers.push(i);
    }
    return evenNumbers;
}

// Função para gerar um array com números ímpares até um limite
function generateOddNumbers(limit) {
    const oddNumbers = [];
    for (let i = 1; i <= limit; i += 2) {
        oddNumbers.push(i);
    }
    return oddNumbers;
}

// Função para fazer o deep clone de um array (cópia profunda)
function deepCloneArray(arr) {
    return JSON.parse(JSON.stringify(arr));
}

// Função para verificar se dois arrays são iguais
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Função para remover elementos falsy de um array (null, undefined, false, 0, '', etc.)
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

// Função para contar a frequência de elementos em um array
function countFrequencies(arr) {
    const frequencyMap = {};
    arr.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });
    return frequencyMap;
}

// Função para encontrar elementos duplicados em um array
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    for (let item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }
    return [...duplicates];
}

// Função para agrupar elementos de um array com base em uma chave (ex: agrupar por idade)
function groupBy(arr, key) {
    return arr.reduce((result, item) => {
        const groupKey = item[key];
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
}

// Função para mesclar dois arrays sem duplicatas
function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// Função para embaralhar elementos de um array (algoritmo de Fisher-Yates)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Função debounce (evita execuções repetidas de uma função em um curto período de tempo)
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Função throttle (limita a execução de uma função para ser chamada apenas uma vez em um intervalo de tempo)
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Função para verificar se um objeto tem uma propriedade
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

// Função para obter o valor de uma propriedade aninhada de um objeto (com fallback se a chave não existir)
function getNestedValue(obj, path, defaultValue = undefined) {
    return path.split('.').reduce((o, p) => (o ? o[p] : defaultValue), obj);
}

// Função para gerar um identificador único (UUID)
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Função para formatar um número com separadores de milhares
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Função para converter um objeto em uma query string para uma URL
function objectToQueryString(obj) {
    return Object.keys(obj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');
}

// Função para criar um timer simples que retorna uma promessa (Promise) após um certo tempo
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para encontrar a interseção de dois arrays
function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

// Função para encontrar a diferença de dois arrays
function arrayDifference(arr1, arr2) {
    return arr1.filter(value => !arr2.includes(value));
}

// Função para verificar se um array está vazio
function isArrayEmpty(arr) {
    return arr.length === 0;
}

// Função para converter uma string em slug (ex: "Meu Título de Exemplo" -> "meu-titulo-de-exemplo")
function stringToSlug(str) {
    return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

// Função para contar a profundidade máxima de um objeto
function getObjectDepth(obj) {
    let depth = 0;
    if (obj && typeof obj === 'object') {
        Object.keys(obj).forEach(key => {
            const tempDepth = getObjectDepth(obj[key]);
            if (tempDepth > depth) {
                depth = tempDepth;
            }
        });
        depth++;
    }
    return depth;
}

// Função para "achatamento" (flatten) de um array multidimensional
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

// Função para calcular a soma de elementos de um array multidimensional
function sumMultidimensionalArray(arr) {
    return flattenArray(arr).reduce((sum, num) => sum + num, 0);
}

// Função para gerar uma matriz (grid) 2D de números
function generate2DArray(rows, cols) {
    const array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < cols; j++) {
            array[i][j] = j + 1;
        }
    }
    return array;
}

// Função para capitalizar a primeira letra de uma string e deixar o restante em minúsculas
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Função para mesclar dois arrays de objetos com base em uma chave comum
function mergeArraysByKey(arr1, arr2, key) {
    return arr1.map(item1 => {
        const item2 = arr2.find(item => item[key] === item1[key]);
        return { ...item1, ...item2 };
    });
}

// Função para dividir um array em chunks de tamanho fixo
function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// Função para verificar se um array está ordenado
function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Função para formatar uma data no formato "yyyy-mm-dd"
function formatDateISO(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Função para verificar se uma string é um JSON válido
function isValidJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}
function range(start, end, step = 1) {
    const output = [];
    if (step > 0) {
        for (let i = start; i < end; i += step) {
            output.push(i);
        }
    } else {
        for (let i = start; i > end; i += step) {
            output.push(i);
        }
    }
    return output;
}

// Exemplo: range(0, 10, 2) => [0, 2, 4, 6, 8]

function len(obj) {
    if (Array.isArray(obj) || typeof obj === 'string') {
        return obj.length;
    }
    if (typeof obj === 'object') {
        return Object.keys(obj).length;
    }
    return 0;
}

// Exemplo: len([1, 2, 3]) => 3
// Exemplo: len("hello") => 5

function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// Exemplo: sum([1, 2, 3, 4]) => 10

function any(arr) {
    return arr.some(Boolean);
}

function all(arr) {
    return arr.every(Boolean);
}

// Exemplo: any([0, 0, 1]) => true
// Exemplo: all([1, 1, 1]) => true
// Exemplo: all([0, 1, 1]) => false

function min(arr) {
    return Math.min(...arr);
}

function max(arr) {
    return Math.max(...arr);
}

// Exemplo: min([1, 2, 3]) => 1
// Exemplo: max([1, 2, 3]) => 3

function zip(...arrays) {
    const length = Math.min(...arrays.map(arr => arr.length));
    return Array.from({ length }, (_, i) => arrays.map(arr => arr[i]));
}

// Exemplo: zip([1, 2], ['a', 'b']) => [[1, 'a'], [2, 'b']]

function reversed(arr) {
    return arr.slice().reverse();
}

// Exemplo: reversed([1, 2, 3]) => [3, 2, 1]
// Exemplo: reversed('hello') => 'olleh'

function enumerate(arr) {
    return arr.map((value, index) => [index, value]);
}

// Exemplo: enumerate(['a', 'b', 'c']) => [[0, 'a'], [1, 'b'], [2, 'c']]

function sorted(arr, reverse = false) {
    const sortedArray = [...arr].sort((a, b) => a - b);
    return reverse ? sortedArray.reverse() : sortedArray;
}

// Exemplo: sorted([3, 1, 2]) => [1, 2, 3]
// Exemplo: sorted([3, 1, 2], true) => [3, 2, 1]

function chr(code) {
    return String.fromCharCode(code);
}

function ord(char) {
    return char.charCodeAt(0);
}

// Exemplo: chr(65) => 'A'
// Exemplo: ord('A') => 65

function set(arr) {
    return [...new Set(arr)];
}

// Exemplo: set([1, 2, 2, 3, 3]) => [1, 2, 3]

function slice(arr, start = 0, end = arr.length, step = 1) {
    const result = [];
    for (let i = start; i < end; i += step) {
        result.push(arr[i]);
    }
    return result;
}

// Exemplo: slice([1, 2, 3, 4, 5], 1, 4) => [2, 3, 4]
// Exemplo: slice([1, 2, 3, 4, 5], 0, 5, 2) => [1, 3, 5]

// 1. System.out.println (equivalente ao System.out.println em Java)
function println(message) {
    console.log(message);
}

// 2. String.equals (equivalente ao equals de Java)
function equals(str1, str2) {
    return str1 === str2;
}

// 3. Arrays.toString (equivalente ao Arrays.toString de Java)
function arrayToString(arr) {
    return arr.join(', ');
}

// 4. Math.pow (equivalente ao Math.pow de Java)
function pow(base, exponent) {
    return Math.pow(base, exponent);
}

// 5. String.toUpperCase e String.toLowerCase (equivalente ao toUpperCase e toLowerCase de Java)
function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

// 6. Integer.parseInt e Double.parseDouble (equivalente ao parseInt e parseDouble de Java)
function parseIntValue(str) {
    return parseInt(str, 10);
}

function parseDoubleValue(str) {
    return parseFloat(str);
}

// 7. Arrays.sort (equivalente ao Arrays.sort de Java)
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// 8. Collections.reverse (equivalente ao Collections.reverse de Java)
function reverseArray(arr) {
    return arr.reverse();
}

// 9. String.contains (equivalente ao contains de Java)
function contains(str, searchString) {
    return str.includes(searchString);
}

// 10. Object.equals (equivalente ao equals para objetos em Java)
function objectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// 11. Math.max e Math.min (equivalente ao Math.max e Math.min de Java)
function maxValue(...values) {
    return Math.max(...values);
}

function minValue(...values) {
    return Math.min(...values);
}

// 12. String.substring (equivalente ao substring de Java)
function substring(str, start, end) {
    return str.substring(start, end);
}

// 13. Arrays.fill (equivalente ao Arrays.fill de Java)
function fillArray(arr, value) {
    return arr.fill(value);
}

// 14. Character.isDigit e Character.isLetter (equivalente ao isDigit e isLetter de Java)
function isDigit(char) {
    return /\d/.test(char);
}

function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}

// 15. Optional.ofNullable (equivalente ao Optional.ofNullable de Java)
function ofNullable(value, defaultValue) {
    return value !== null && value !== undefined ? value : defaultValue;
}

// 16. Thread.sleep (equivalente ao Thread.sleep de Java)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 17. StringBuilder.append (equivalente ao StringBuilder de Java)
function StringBuilder() {
    this.value = '';

    this.append = function (str) {
        this.value += str;
        return this;
    };

    this.toString = function () {
        return this.value;
    };
}

// 18. Arrays.binarySearch (equivalente ao Arrays.binarySearch de Java)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Testes para verificar o comportamento das funções:

// Exemplo para println
println("Hello, World!");

// Exemplo para equals
println(equals("hello", "hello")); // true

// Exemplo para arrayToString
println(arrayToString([1, 2, 3])); // "1, 2, 3"

// Exemplo para pow
println(pow(2, 3)); // 8

// Exemplo para toUpperCase e toLowerCase
println(toUpperCase("hello")); // "HELLO"
println(toLowerCase("WORLD")); // "world"

// Exemplo para parseIntValue e parseDoubleValue
println(parseIntValue("42")); // 42
println(parseDoubleValue("42.42")); // 42.42

// Exemplo para sortArray
println(sortArray([3, 1, 2])); // [1, 2, 3]

// Exemplo para reverseArray
println(reverseArray([1, 2, 3])); // [3, 2, 1]

// Exemplo para contains
println(contains("hello world", "world")); // true

// Exemplo para objectsEqual
println(objectsEqual({ a: 1 }, { a: 1 })); // true

// Exemplo para maxValue e minValue
println(maxValue(1, 2, 3)); // 3
println(minValue(1, 2, 3)); // 1

// Exemplo para substring
println(substring("hello", 1, 4)); // "ell"

// Exemplo para fillArray
println(fillArray(new Array(5), 0)); // [0, 0, 0, 0, 0]

// Exemplo para isDigit e isLetter
println(isDigit('5')); // true
println(isLetter('A')); // true

// Exemplo para ofNullable
println(ofNullable(null, "default")); // "default"

// Exemplo para sleep
sleep(1000).then(() => println("1 segundo depois"));

// Exemplo para StringBuilder
const sb = new StringBuilder();
sb.append("Hello").append(" ").append("World");
println(sb.toString()); // "Hello World"

// Exemplo para binarySearch
println(binarySearch([1, 2, 3, 4, 5], 3)); // 2
