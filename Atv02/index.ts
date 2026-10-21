
import readline from "readline-sync";
import { Moto } from "./src/models/Moto.js";
import { Carro } from "./src/models/Carro.js";


const ObjCarro = new Carro({
    placa: "env",
    modelo: "lo",
    marca: "mo",
    ano: 10,
    qntPortas: 5
});

const ObjMoto = new Moto({
    placa: "env",
    modelo: "lo",
    marca: "mo",
    ano: 10,
    cilindradas: 6
});
console.log("\n---- CADASTRO DE VEÍCULO----\n");
let escolha = readline.question("Você tem um carro ou moto?\n");

if (escolha == "carro") {

    ObjCarro.setPlaca = readline.question("Qual a placa do carro? ");
    ObjCarro.setModelo = readline.question("Qual o modelo do carro? ");
    ObjCarro.setMarca = readline.question("Qual a marca do carro? ");
    ObjCarro.setAno = readline.questionInt("Qual o ano do carro? ");
    ObjCarro.setQntPortas = readline.questionInt("Qual a quantidade de portas do carro? ");

    console.log("\n---- DADOS DO CARRO ----\n");
    ObjCarro.exibirExtrato();



} else if (escolha == "moto") {
    ObjMoto.setPlaca = readline.question("Qual a placa da moto ");
    ObjMoto.setModelo = readline.question("Qual o modelo da moto ");
    ObjMoto.setMarca = readline.question("Qual a marca da moto ");
    ObjMoto.setAno = readline.questionInt("Qual o ano da moto ");
    ObjMoto.setCilindradas = readline.questionFloat("Qual a cilindrada da moto? ");

    console.log("\n---- DADOS DA MOTO ----\n");
    ObjMoto.exibirExtrato();

} else {
    console.log("Resposta inválida, tente novamente")
}



