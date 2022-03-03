const input = document.getElementById("num");
const button = document.getElementById("botao");
const span = document.getElementById("resultado");

const input2 = document.getElementById("n");
const input3 = document.getElementById("x");
const button2 = document.getElementById("botao2");
const span2 = document.getElementById("resultado2");

const input4 = document.getElementById("string");
const button3 = document.getElementById("botao3");
const span3 = document.getElementById("resultado3");

button.addEventListener("click", carregarArray);
button2.addEventListener("click", carregarArray2);
button3.addEventListener("click", carregarArray3);

// Questão 01

function carregarArray() {
  let string = "";
  let array = [];
  string = input.value;
  array = string.split(",");

  if (array.length === 1) {
    alert("A lista deve conter pelo menos 3 elementos!");
    return;
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }

  if (array.length % 2 === 0) {
    alert("O total da lista deve ser de tamanho impar!");
    return;
  } else {
    ordenarArray(array);
  }
}

function ordenarArray(arr) {
  arr.sort((a, b) => a - b);
  exibirMediana(arr);
}

function exibirMediana(arr) {
  let tamanhoArray = (arr.length - 1) / 2;
  span.innerHTML = arr[tamanhoArray];
}

// Questão 2

function carregarArray2() {
  let n = 0;
  let string = "";
  let array = [];
  n = input3.value;
  string = input2.value;
  array = string.split(",");

  if (array.length === 1) {
    alert("Preencha a lista!");
    return;
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }

  array.sort((a, b) => a - b); //coloca em ordem
  array.reverse(); //inverte
  let arrayUnico = [...new Set(array)]; //retira os repetidos

  verificarPares(n, arrayUnico);
}

function verificarPares(n, arr) {
  let novoArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] == n) {
        novoArray.push(arr[i]);
        novoArray.push(arr[j]);
      }
    }
  }
  separarPares(novoArray);
}

function separarPares(arr) {
  let paresArray = [];
  for (let i = 0; i <= arr.length; i++) {
    paresArray[i] = arr.splice(0, 2);
  }
  exibirPares(paresArray);
}

function exibirPares(arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += "[" + " " + arr[i] + " " + "]";
  }
  span2.innerHTML = string;
}

// Questão 03

function carregarArray3() {
  let string = "";
  let array = [];
  string = input4.value;
  array = string.split(""); // separando string
  for (let i = 0; i < array.length; i++) {
    // removendo espaço
    if (array[i] === " ") {
      array.splice(i, 1);
    }
  }
  dividirArray(array);
}

function dividirArray(arr) {
  let n = Math.ceil(Math.sqrt(arr.length));
  separar(arr, n);
}

function separar(base, maximo) {
  let resultado = [[]];
  let grupo = 0;
  for (let indice = 0; indice < base.length; indice++) {
    if (resultado[grupo] === undefined) {
      resultado[grupo] = [];
    }
    resultado[grupo].push(base[indice]);
    if ((indice + 1) % maximo === 0) {
      grupo = grupo + 1;
    }
  }
  exibirString(transporArray(resultado));
}

function transporArray(a) {
  return Object.keys(a[0]).map(function (c) {
    return a.map(function (r) {
      return r[c];
    });
  });
}

function exibirString(arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += " " + arr[i];
  }
  let novaString = "";
  novaString = string.replace(/,/g, "");
  span3.innerHTML = novaString;
}
