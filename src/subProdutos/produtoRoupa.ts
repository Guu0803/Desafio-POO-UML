import { Produto } from '../entidades/produto';

export class ProdutoRoupa extends Produto {
  private _tamanho: string;
  private _cor: string;

  constructor(id: number, nome: string, preco: number, descricao: string, tamanho: string, cor: string) {
    super(id, nome, preco, descricao);
    this._tamanho = tamanho;
    this._cor = cor;
  }

  public aplicarDesconto(percentual: number): void {
    if (percentual <= 0 || percentual > 100) {
      throw new Error("Percentual de desconto deve ser entre 1 e 100.");
    }
    this.preco -= this.preco * (percentual / 100);
    console.log(`Desconto de ${percentual}% aplicado. Novo preço: ${this.preco}`);
  }
  

  get tamanho(): string {
    return this._tamanho;
  }

  set tamanho(tamanho: string) {
    this._tamanho = tamanho;
  }

  get cor(): string {
    return this._cor;
  }

  set cor(cor: string) {
    this._cor = cor;
  }
}
