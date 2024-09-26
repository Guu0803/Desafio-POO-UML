export class CarrinhoDeCompras {
    private _id: number;
    private _total: number;
    private _carrinho: number;
  
    constructor(id: number) {
      this._id = id;
      this._total = 0;
      this._carrinho = 0;
    }
   
    adicionarAoCarrinho(quantidade: number): number {
      this.carrinho += quantidade;
      return this.carrinho;
    }
  
    removerDoCarrinho(quantidade: number): number {
      if (this.carrinho >= quantidade) {
        this.carrinho -= quantidade;
        return this.carrinho;
      } else {
        throw new Error("Quantidade no carrinho insuficiente.");
      }
    }

    get total(): number {
        return this._total;
      }
    
    set total(valor: number) {
        if (valor >= 0) {
          this._total = valor;
        } else {
          throw new Error("O total não pode ser negativo.");
        }
    }
    
    get carrinho(): number {
        return this._carrinho;
      }
    
    set carrinho(quantidade: number) {
        if (quantidade >= 0) {
          this._carrinho = quantidade;
        } else {
          throw new Error("Deve ser maior de que 0");
        }
    }
  
    get carrinhoId(): number {
      return this._id;
    }
  
  }
  