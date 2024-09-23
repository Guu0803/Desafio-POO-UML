export class Pagamento {
    private _id: number;
    private _valor: number;
    private _metodo: string;
  
    constructor(id: number, metodo: string) {
      this._id = id;
      this._valor = this.calcularValor();
      this._metodo = metodo;
    }
  
    private calcularValor(): number {
      return Math.floor(Math.random() * 1000) + 1;
    }
  
    public pagar(): void {
      console.log('Pagamento realizado com sucesso');
    }
  
    public cancelar(): void {
      console.log('Pagamento cancelado');
    }
  
    get metodo(): string {
      return this._metodo;
    }
  
    set metodo(metodo: string) {
      if (metodo.length > 0) {
        this._metodo = metodo;
      } else {
        throw new Error("Método inválido.");
      }
    }
  
    get pagamentoId(): number {
      return this._id;
    }

    get valor(): number{
        return this._valor;
    }
  }
  