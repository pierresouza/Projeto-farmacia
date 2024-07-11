export abstract class Produto {
  private _id: number;
  private _nome: string;
  private _tipo: number;
  private _preco: number;

  constructor(id: number, nome: string, tipo: number, preco: number) {
    this._id = id;
    this._nome = nome;
    this._tipo = tipo;
    this._preco = preco;
  }

  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get tipo(): number {
    return this._tipo;
  }

  public get preco(): number {
    return this._preco;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set tipo(value: number) {
    this._tipo = value;
  }

  public set preco(value: number) {
    this._preco = value;
  }

  public visualizar() {
    let tipo: string = "";
    switch (this._tipo) {
      case 1:
        tipo = "Medicamentos";
        break;

      case 2:
        tipo = "Cosmeticos";
        break;
    }

    console.log("\nDados do Produto:\n");
    console.log("*****************************************************");
    console.log(`numero do id do produto: ${this._id}`);
    console.log(`nome do produto: ${this._nome}`);
    console.log(`tipo do produto: ${tipo}`);
    console.log(`preco do produto: ${this._preco.toFixed(2)}`);
  }
}
