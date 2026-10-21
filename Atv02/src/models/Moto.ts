import { VeiculoProps, MotoProps } from "../interfaces/VeiculoProps.js";
import { Veiculo } from "../models/Veiculo.js";


export class Moto extends Veiculo<MotoProps> {

    constructor(protected props: MotoProps) {
        super(props);
    }

    public get getCilindradas(): number { return this.props.cilindradas; }

    public set setCilindradas(novoCilindradas: number) {
        if (novoCilindradas < 0) {
            console.log("\n ERRO: O número de portas não pode ser negativo!");
            return;
        }
        this.props.cilindradas = novoCilindradas;
    }


    public exibirExtrato(): void {
        console.log(`Placa:                          ${this.getPlaca}`);
        console.log(`Modelo:                         ${this.getModelo}`);
        console.log(`Marca:                          ${this.getMarca}`);
        console.log(`Ano:                            ${this.getAno}`);
        console.log(`Cilindradas:                    ${this.getCilindradas}`);
    }


}