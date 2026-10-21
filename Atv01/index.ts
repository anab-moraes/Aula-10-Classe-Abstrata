import { ContaBancaria } from "./src/models/ContaBancaria.js";
import { ContaProps } from "./src/Interfaces/ContaProps.js";
import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";
import readline from "readline-sync";


const ObjContaC = new ContaCorrente({
    numero: "ala",
    titular: "ata",
    agencia: "nu",
    saldo: 6,
    limite: 2
});

const ObjContaP = new ContaPoupanca({
    numero: "ala",
    titular: "ata",
    agencia: "nu",
    saldo: 6,
    taxaAniversario: 2
});
console.log("\n---- CADASTRO DE CONTA BANCÁRIA ----\n");
let escolha = readline.question("Sua conta é Poupança ou Corrente?\n");

escolha = escolha.toLowerCase().replace("ç", "c");

if (escolha == "poupanca") {

    ObjContaP.setNumero = readline.question("Qual o número da conta poupança? ");
    ObjContaP.setAgencia = readline.question("Qual a agência da conta poupança? ");
    ObjContaP.setTitular = readline.question("Qual o titular da conta poupança? ");
    ObjContaP.setSaldo = readline.questionFloat("Qual o saldo da conta poupança? ");
    ObjContaP.setTaxaAniversario = readline.questionFloat("Qual a taxa de aniversário da conta poupança? ");
    ObjContaP.sacar(readline.questionFloat("Qual o valor que você quer sacar? "));
    ObjContaP.renderJuros(readline.questionFloat("Quanto o tempo que o dinheiro está na conta? "));

    console.log("\n---- DADOS DA CONTA POUPANÇA ----\n");

    console.log(`Número da conta:                  ${ObjContaP.getNumero}`);
    console.log(`Agência:                          ${ObjContaP.getAgencia}`);
    console.log(`Titular:                          ${ObjContaP.getTitular}`);
    console.log(`Saldo:                            ${ObjContaP.getSaldo}`);
    console.log(`Taxa de Aniversário:              ${ObjContaP.getTaxaAniversario}`);
    ObjContaP.exibirExtrato();



} else if (escolha == "corrente") {
    ObjContaC.setNumero = readline.question("Qual o número da conta corrente?");
    ObjContaC.setAgencia = readline.question("Qual a agência da conta corrente?");
    ObjContaC.setTitular = readline.question("Qual o titular da conta corrente?");
    ObjContaC.setSaldo = readline.questionFloat("Qual o saldo da conta corrente?");
    ObjContaC.setLimite = readline.questionFloat("Qual o limite do cheque especial da conta corrente?");
    ObjContaC.sacar(readline.questionFloat("Qual o valor que você quer sacar? "));

    console.log("\n---- DADOS DA CONTA CORRENTE ----\n");

    console.log(`Número da conta:                  ${ObjContaC.getNumero}`);
    console.log(`Agência:                          ${ObjContaC.getAgencia}`);
    console.log(`Titular:                          ${ObjContaC.getTitular}`);
    console.log(`Saldo:                            ${ObjContaC.getSaldo}`);
    console.log(`Limite:                           ${ObjContaC.getLimite}`);
    ObjContaC.exibirExtrato();

} else {
    console.log("Resposta inválida, tente novamente")
}



