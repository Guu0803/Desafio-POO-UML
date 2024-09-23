// classDiagram
class Usuario {
  private _id: number;
  public nome: string;
  public email: string;
  private _cpf: number;
  public cargo: string;

  constructor(nome: string, email: string, cpf: number) {
    this._id = this.gerarId();
    this.nome = nome;
    this.email = email;
    this._cpf = this.validarCpf(cpf);
    this.cargo = this.verificarNome();
  }

  // Validações
  private validarCpf(cpf: number): number {
    const cpfString = cpf.toString();
    if (cpfString.length !== 11) {
      throw new Error("CPF inválido. Deve conter 11 dígitos.");
    }
    return cpf;
  }

  verificarNome(): string {
    return this.nome === "Gustavo Nogueira" ? "Administrador" : "Funcionário";
  }

  private gerarId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  // Getters
  get id(): number {
    return this._id;
  }

  get cpf(): number {
    return this._cpf;
  }

  // Setters
  set cpf(cpf: number) {
    this._cpf = this.validarCpf(cpf);
  }
}

class Produto {
  private _id: number;
  public nome: string;
  public preco: number;
  public descricao: string;
  private _estoque: number;
  public carrinho: number;

  constructor(id: number, nome: string, preco: number, descricao: string) {
    this._id = id;
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this._estoque = 0; 
    this.carrinho = 0;
  }

  // Getters
  get id(): number {
    return this._id;
  }

  get estoque(): number {
    return this._estoque;
  }

  // Métodos de manipulação de estoque
  adicionarAoCarrinho(quantidade: number): void {
    this.carrinho =+ quantidade;
  }
  public adicionar(quantidade:number, cargo: string ) {
    try {
      if (cargo !== "Administrador") {
        throw new Error("Apenas administradores podem adicon do estoque.");
      }
      this.adicionarAoEstoque(quantidade)
    } catch (error) {
      alert(error)
    }
  }
  private adicionarAoEstoque(quantidade: number): void {
    this._estoque += quantidade;
  }
  public remover(quantidade: number, cargo: string) {
    try {
      if (quantidade > this._estoque) {
        throw new Error("Quantidade solicitada não está disponível no estoque.");
      }
      if (cargo !== "Administrador") {
        throw new Error("Apenas administradores podem remover do estoque.");
      }
      this.removerDoEstoque(quantidade)
    } catch (error) {
      alert(error)
    }
  }
  private removerDoEstoque(quantidade: number): void {
    this._estoque -= quantidade;
  }
}

class CarrinhoDeCompras {
  private id: number;
  public carrinho: number;

  constructor(id: number) {
    this.id = id;
    this.carrinho = 0;
  }

  // Métodos para manipular o carrinho
  adicionarAoCarrinho(quantidade: number): void {
    this.carrinho += quantidade;
  }

  removerDoCarrinho(quantidade: number): void {
    if (quantidade > this.carrinho) {
      throw new Error("Quantidade a ser removida excede o total no carrinho.");
    }
    this.carrinho -= quantidade;
  }
}

class Pedido {
  private _id: number;
  public data: Date;
  public status: string;

  constructor(id: number, status: string) {
    this._id = id;
    this.data = new Date(); 
    this.status = status;
  }

  // Getters
  get id(): number {
    return this._id;
  }

  confirmarPedido(): boolean {
    this.status = "confirmado";
    return true;
  }
}

class Pagamento {
  private _id: number;
  public valor: number;
  public metodo: string;

  constructor(id: number, metodo: string) {
    this._id = id;
    this.metodo = metodo;
    this.valor = this.calcularValor();
  }

  // Getters
  get id(): number {
    return this._id;
  }

  calcularValor(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  pagar(): void {
    console.log("Pagamento realizado com sucesso.");
  }

  cancelar(): void {
    console.log("Pagamento cancelado.");
  }
}

// Uso das classes
const usuario1 = new Usuario("Gustavo Nogueira", "teste@gmail.com", 55555555555);


const produto = new Produto(1, "Galaxy S24", 3000, "Tem um grande display de 6.2 polegadas com uma resolução de 2340x1080 pixel.");
produto.adicionar(15, usuario1.cargo);
produto.adicionarAoCarrinho(2);
produto.remover(3, usuario1.cargo);

const carrinho = new CarrinhoDeCompras(2);
carrinho.adicionarAoCarrinho(3);
carrinho.removerDoCarrinho(1);


const pedido = new Pedido(2, "aguardando pagamento");
pedido.confirmarPedido();

const pagamento = new Pagamento(2, "Débito");
pagamento.pagar();
pagamento.cancelar();