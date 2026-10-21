import { VeiculoProps } from "../interfaces/VeiculoProps.js"

export abstract class Veiculo<T extends VeiculoProps = VeiculoProps> {

    constructor(protected props: T) { }

    public get getPlaca(): string { return this.props.placa; }
    public get getModelo(): string { return this.props.modelo; }
    public get getMarca(): string { return this.props.marca; }
    public get getAno(): number { return this.props.ano; }

    public set setPlaca(novoPlaca: string) {
        if (novoPlaca.trim().length === 0) {
            console.log("\n ERRO: O número da conta não pode ser vazio!");
            return;
        }
        this.props.placa = novoPlaca;
    }

    public set setModelo(novoModelo: string) {
        if (novoModelo.trim().length === 0) {
            console.log("\n ERRO: A Modelo da conta não pode ser vazio!");
            return;
        }
        this.props.modelo = novoModelo;
    }

    public set setMarca(novoMarca: string) {
        if (novoMarca.trim().length === 0) {
            console.log("\n ERRO: O Marca da conta não pode ser vazio!");
            return;
        }
        this.props.marca = novoMarca;
    }

    public set setAno(novoAno: number) {
        if (novoAno < 0) {
            console.log("\n ERRO: O Ano da conta não pode ser negativo!");
            return;
        }
        this.props.ano = novoAno;
    }

    public abstract exibirExtrato(): void;

}