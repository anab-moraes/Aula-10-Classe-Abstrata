import { ContaCorrenteProps } from "../Interfaces/ContaProps.js";
import { ContaBancaria } from "./ContaBancaria.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps>{

    constructor(protected props: ContaCorrenteProps){
        super(props);
    }

    public get getLimite(): number {return this.props.limite;}

    public set setLimite(novoLimite: number) {
        if (novoLimite < 0) {
            console.log("\n ERRO: O limite do cheque especial da conta não pode ser negativo!");
            return;
        }
        this.props.limite = novoLimite;
    }

    public exibirExtrato(): void {
        console.log(`Extrato:                          ${this.getSaldo}`);
    }



}