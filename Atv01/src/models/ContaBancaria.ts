import { ContaProps } from "../Interfaces/ContaProps.js";

export abstract class ContaBancaria<T extends ContaProps = ContaProps> {

    constructor(protected props: T) { }

    public get getNumero(): string { return this.props.numero; }
    public get getAgencia(): string { return this.props.agencia; }
    public get getTitular(): string { return this.props.titular; }
    public get getSaldo(): number { return this.props.saldo; }

    public set setNumero(novoNumero: string) {
        if (novoNumero.trim().length === 0) {
            console.log("\n ERRO: O número da conta não pode ser vazio!");
            return;
        }
        this.props.numero = novoNumero;
    }

    public set setAgencia(novoAgencia: string) {
        if (novoAgencia.trim().length === 0) {
            console.log("\n ERRO: A agencia da conta não pode ser vazio!");
            return;
        }
        this.props.agencia = novoAgencia;
    }

    public set setTitular(novoTitular: string) {
        if (novoTitular.trim().length === 0) {
            console.log("\n ERRO: O titular da conta não pode ser vazio!");
            return;
        }
        this.props.titular = novoTitular;
    }

    public set setSaldo(novoSaldo: number) {
        if (novoSaldo < 0) {
            console.log("\n ERRO: O saldo da conta não pode ser negativo!");
            return;
        }
        this.props.saldo = novoSaldo;
    }

    public sacar(novoValor: number):void{
        if(novoValor<0 && novoValor>this.getSaldo){
            console.log("ERRO: O saque não pode ser efetuado com valores negativo!");
            return;
        }
        this.props.saldo -= novoValor;
    }

     public depositar(novoValor: number):void{
        if(novoValor<0){
            console.log("ERRO: O depósito não pode ser efetuado com valores negativo!");
            return;
        }
        this.props.saldo += novoValor;
    }

    public abstract exibirExtrato(): void;

}