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
   
      
      constructor(id:number, nome: string, preco: number, descricao:string) {
        this.id = id
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao
        this.estoque = this.verificarEstoque();
    }
      adicionarAoCarrinho():void {
        console.log("Produto adicionado ao carrinho");
      }
      adicionarAoEstoque(quantidade: number):void {
        console.log('adicionando ao estoque:', quantidade);
      }
      removerDoEstoque(quantidade: number):void {
        console.log('removendo do estoque:', quantidade);
      }
      verificarEstoque():number {
        return Math.floor(Math.random() * 1000) + 1;
     }
    }
    
    class CarrinhoDeCompras {
      id: number;
      total: number;

      constructor(id:number){
        this.id = id
        this.total = this.calcularTotal()
      }
      calcularTotal(): number { 
        return Math.floor(Math.random() * 1000) + 1;
      }
      adicionarAoCarrinho
      (quantidade: number): void {
        console.log('adicionando ao estoque:', quantidade);
      }
      removerDoCarrinho() {
        console.log('removendo do carrinho')
      }
    }
    
    class Pedido {
      id: number;
      data: Date;
      status: string;
      
      constructor(id:number, data: Date, status:string,) {
        this.id = id;
        this.data = data;
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
      
      constructor(id: number, valor: number, metodo: string) {
        this.id = id;
        this.valor = valor;
        this.metodo = metodo;
      }

      pagar():void {
        console.log('Pagamento realizado com sucesso');
      }
      cancelar(): void {
        console.log('Pagamento cancelado')
      }
}
    

console.log(Usuario, Produto, CarrinhoDeCompras, Pedido, Pagamento,)