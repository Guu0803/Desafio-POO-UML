// classDiagram
    class Usuario {
      id: number;
      nome: string;
      email: string;
      
      constructor(nome: string, email: string) {
        this.id = this.gerarId();
        this.nome = nome;
        this.email = email;
      }

      gerarId(): number{
        return Math.floor(Math.random() * 1000) + 1;
      }
}
    class Produto {
      id: number;
      nome: string;
      preco: number;
      descricao: string;
      estoque: number;
      carrinho: number;

      constructor(id:number, nome: string, preco: number, descricao:string) {
        this.id = id
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao
        this.estoque = this.verificarEstoque();
        this.carrinho = 0;
      }
      adicionarAoCarrinho(quantidade: number):number {
        return this.carrinho = quantidade
      }
      adicionarAoEstoque(quantidade: number):number {
        return this.estoque =+ quantidade
      }
      removerDoEstoque(quantidade: number):number {
        return this.estoque =- quantidade
      }
      verificarEstoque():number {
        return this.estoque
     }
    }
    
    class CarrinhoDeCompras {
      id: number;
      total: number;
      carrinho: number;


      constructor(id:number){
        this.id = id
        this.total = this.calcularTotal()
        this.carrinho = 0
      }
      calcularTotal(): number { 
        return Math.floor(Math.random() * 1000) + 1;
      }
      adicionarAoCarrinho(quantidade: number): number {
        return this.carrinho =+ quantidade
      }
      removerDoCarrinho(quantidade: number):number {
        return this.carrinho =- quantidade
      }
    }
    
    class Pedido {
      id: number;
      data: Date;
      status: string;
      
      constructor(id:number, status:string,) {
        this.id = id;
        this.data = new Date('2024-09-18');
        this.status = status;
        }
        
      confirmarPedido():boolean {
        return true
      }
    }
    
    class Pagamento {
      id: number;
      valor: number;
      metodo: string;
      
      constructor(id: number,metodo: string) {
        this.id = id;
        this.valor = this.calcularValor();
        this.metodo = metodo;
      }
      calcularValor(): number {
        return Math.floor(Math.random() * 1000) + 1;
      }
      pagar():void {
        console.log('Pagamento realizado com sucesso');
      }
      cancelar(): void {
        console.log('Pagamento cancelado');
      }
}
    
const usario = new Usuario('Gustavo', 'teste@gmail.com');
console.log(usario)

const produto = new Produto(1,'Galaxy S24', 3000, 'Tem um grande display de 6.2 polegadas com uma resolução de 2340x1080 pixel.');
produto.adicionarAoEstoque(15)
produto.adicionarAoCarrinho(2)
produto.removerDoEstoque(3)
console.log(produto)


const carrinho = new CarrinhoDeCompras(2)
carrinho.adicionarAoCarrinho(3)
carrinho.removerDoCarrinho(1)
console.log(carrinho)

const pedido = new Pedido(2, 'aguardando pagamento')
pedido.confirmarPedido()
console.log(pedido)

const pagamento = new Pagamento(2, 'Débito')
pagamento.pagar()
pagamento.cancelar()


