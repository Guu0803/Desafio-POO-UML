import { Produto } from '../entidades/produto';

export class ProdutoEletronico extends Produto {
  private _garantia: string;
  private _dataExpiracaoGarantia: Date;

  constructor(id: number, nome: string, preco: number, descricao: string, garantia: string, dataExpiracaoGarantia: Date) {
    super(id, nome, preco, descricao);
    this._garantia = garantia;
    this._dataExpiracaoGarantia = dataExpiracaoGarantia;
  }

  
  public estenderGarantia(meses: number): void {
    this._dataExpiracaoGarantia.setMonth(this._dataExpiracaoGarantia.getMonth() + meses);
    console.log(`Garantia estendida por ${meses} meses. Nova data de expiração: ${this._dataExpiracaoGarantia.toLocaleDateString()}`);
  }
  

  get garantia(): string {
    return this._garantia;
  }

  set garantia(garantia: string) {
    this._garantia = garantia;
  }

  get dataExpiracaoGarantia(): Date {
    return this._dataExpiracaoGarantia;
  }

  set dataExpiracaoGarantia(data: Date) {
    this._dataExpiracaoGarantia = data;
  }
}
