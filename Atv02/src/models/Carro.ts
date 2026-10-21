import { VeiculoProps, CarroProps } from "../interfaces/VeiculoProps.js";
import { Veiculo } from "../models/Veiculo.js";


export class Carro extends Veiculo<CarroProps> {

    constructor(protected props: CarroProps) {
        super(props);
    }

    public get getQntPortas(): number { return this.props.qntPortas; }

    public set setQntPortas(novoQntPortas: number) {
        if (novoQntPortas < 0) {
            console.log("\n ERRO: O número de portas não pode ser negativo!");
            return;
        }
        this.props.qntPortas = novoQntPortas;
    }


    public exibirExtrato(): void {
        console.log(`Placa:                          ${this.getPlaca}`);
        console.log(`Modelo:                         ${this.getModelo}`);
        console.log(`Marca:                          ${this.getMarca}`);
        console.log(`Ano:                            ${this.getAno}`);
        console.log(`Quantidade de portas:           ${this.getQntPortas}`);
    }


}