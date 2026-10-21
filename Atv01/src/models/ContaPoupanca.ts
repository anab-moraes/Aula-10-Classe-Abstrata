import { ContaPoupancaProps } from "../Interfaces/ContaProps.js";
import { ContaBancaria } from "./ContaBancaria.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {

    constructor(protected props: ContaPoupancaProps) {
        super(props);
    }

    public get getTaxaAniversario(): number { return this.props.taxaAniversario; }

    public set setTaxaAniversario(novoTaxaAniversario: number) {
        if (novoTaxaAniversario < 0) {
            console.log("\n ERRO: O rendimento mensal da conta não pode ser negativo!");
            return;
        }
        this.props.taxaAniversario = novoTaxaAniversario;
    }

    public renderJuros(Tempo: number): void {
        if (Tempo < 0) {
            console.log("\n ERRO: O tempo não pode ser negativo!");
            return;
        }
        this.props.saldo = this.props.saldo+(Tempo*0.02);
    }

    public exibirExtrato(): void {
        console.log(`Extrato:                          ${this.getSaldo}`);
    }


}