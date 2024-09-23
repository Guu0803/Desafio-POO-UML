export class Produto {
    private _id: number;
    private _nome: string;
    private _preco: number;
    private _descricao: string;
    private _estoque: number;
    private carrinho: number;
  
    constructor(id: number, nome: string, preco: number, descricao: string) {
      this._id = id;
      this._nome = nome;
      this._preco = preco;
      this._descricao = descricao;
      this._estoque = 0;
      this.carrinho = 0;
    }
  
    adicionarAoCarrinho(quantidade: number): number {
      return this.carrinho += quantidade;
    }
  
    adicionarAoEstoque(quantidade: number): number {
      return this._estoque += quantidade;
    }
  
    removerDoEstoque(quantidade: number): number {
      if (this._estoque >= quantidade) {
        return this._estoque -= quantidade;
      } else {
        throw new Error("Estoque insuficiente.");
      }
    }
  
    get estoque(): number {
      return this._estoque;
    }
  
    get nome(): string {
      return this._nome;
    }
  
    set nome(nome: string) {
      if (nome.length > 0) {
        this._nome = nome;
      } else {
        throw new Error("Nome inválido.");
      }
    }
  
    get preco(): number {
      return this._preco;
    }
  
    set preco(preco: number) {
      if (preco > 0) {
        this._preco = preco;
      } else {
        throw new Error("O preço deve ser maior que zero.");
      }
    }
  
    get descricao(): string {
      return this._descricao;
    }
  
    set descricao(descricao: string) {
      if (descricao.length > 0) {
        this._descricao = descricao;
      } else {
        throw new Error("Descrição inválida.");
      }
    }
  
    get produtoId(): number {
      return this._id;
    }
  }
  