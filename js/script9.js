// Funções em Javascript

/* Existe 2 tipos de funções:
- Reservadas pela linguagem, é necessário apenas chamar a função 
para que seja executada
alert()
prompt()
console.log()

- Percenolizados
Criadas pelo usuário, é necessário que sejam construídas 
utilizando a estrutura 
function nomeDaFuncao() {

}
e em seguidas chamadas para serem executadas

Em cada função há a presença dos parênteses () que podem estar vazio ou não.
Os parênteses recebem um argumento. Quando este argumento é uma variável, dizemos que ele
recebe um parâmetro. */


// Função personalizada em argumento, já o comando 
// console.log("Olá mundo!") possui um argumento do tipo string
function saudacao() {
    console.log("Olá mundo!")
}
saudacao();


// Função personalizada com PARÂMETRO, pois se trata de uma variável
// previamente declarada e que será utilizada no bloco de código
var nome;
function despedida(nome) {
    console.log("Tchau, " + nome);
}

despedida("João");


var a, b;
function soma(a, b) {
    return a + b;
}

var resultado = soma(5, 3);
console.log(resultado); 