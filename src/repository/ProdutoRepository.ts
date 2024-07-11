import { Produto } from "../Model/Produto";

export interface ContaRepository {
  //Métodos do CRUD

  procurarPorId(numero: number): void;
  listarTodas(): void;
  cadastrar(produto: Produto): void;
  atualizar(produto: Produto): void;
  deletar(numero: number): void;
  procurarPorTitular(titular: string): void;
}
