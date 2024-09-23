export class Usuario {
    private _id: number;
    private _nome: string;
    private _email: string;
    
    constructor(nome: string, email: string) {
      this._id = this.gerarId();
      this._nome = nome;
      this._email = email;
    }
  
    private gerarId(): number {
      return Math.floor(Math.random() * 1000) + 1;
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
  
    get email(): string {
      return this._email;
    }
  
    set email(email: string) {
      if (email.includes("@")) {
        this._email = email;
      } else {
        throw new Error("Email inválido.");
      }
    }
  
    get usuarioId(): number {
      return this._id;
    }
  }
  