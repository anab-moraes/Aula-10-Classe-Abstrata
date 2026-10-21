export interface VeiculoProps{
    placa: string;
    modelo: string;
    marca: string;
    ano: number;
}

export interface CarroProps extends VeiculoProps{
    qntPortas: number;
}

export interface MotoProps extends VeiculoProps{
    cilindradas: number;
}

