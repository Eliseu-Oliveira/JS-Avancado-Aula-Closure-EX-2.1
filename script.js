function criarContador(numeroInicial) {
    let contador = numeroInicial;
  
    function proximoNumero() {
      contador++;
      return contador;
    }
  
    return proximoNumero;
  }

  const proximoAluno = criarContador(0);

console.log(proximoAluno()); // 1
console.log(proximoAluno()); // 2
console.log(proximoAluno()); // 3
console.log(proximoAluno()); // 4
console.log(proximoAluno()); // 5
console.log(proximoAluno()); // 6
console.log(proximoAluno()); // 7
console.log(proximoAluno()); // 8

