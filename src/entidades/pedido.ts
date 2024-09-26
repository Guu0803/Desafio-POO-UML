export class Pedido {
    private _id: number;
    private _data: Date;
    private _status: string;
  
    constructor(id: number, status: string) {
      this._id = id;
      this._data = new Date('2024-09-18');
      this._status = status;
    }
  
    public confirmarPedido(): boolean {
      return true;
    }
  
    get status(): string {
      return this._status;
    }
  
    set status(status: string) {
      if (status.length > 0) {
        this._status = status;
      } else {
        throw new Error("Status inválido.");
      }
    }
  
    get data(): Date {
      return this._data;
    }
  
    get pedidoId(): number {
      return this._id;
    }
  }
  