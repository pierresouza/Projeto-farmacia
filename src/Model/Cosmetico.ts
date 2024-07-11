import { Produto } from "./Produto";

export class Cosmetico extends Produto {
  private fragancia: string;

  constructor(id: number, nome: string, tipo: number, preco: number, fragancia: string) {
    super(id, nome, tipo, preco);
    this.fragancia = fragancia;
  }

  public get generico(): string {
    return this.fragancia;
  }
  public set generico(value: string) {
    this.fragancia = value;
  }

  public visualizar() {
    super.visualizar();
    console.log(`Fragancia: ${this.fragancia}`);
  }
}
