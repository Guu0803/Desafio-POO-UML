import { Usuario } from './entidades/usuario';
import { Produto } from './entidades/produto';
import { CarrinhoDeCompras } from './entidades/carrinhoDeCompras';
import { Pedido } from './entidades/pedido';
import { Pagamento } from './entidades/pagamento';
import { ProdutoEletronico } from './subProdutos/produtoEletronico';
import { ProdutoRoupa } from './subProdutos/produtoRoupa';

const usuario = new Usuario('Gustavo', 'teste@gmail.com');
console.log(`ID: ${usuario.usuarioId}, Nome: ${usuario.nome}`);
const usuario2 = new Usuario('Lucas', 'teste2@gmail.com');
console.log(`ID: ${usuario2.usuarioId}, Nome: ${usuario2.nome}`);

const produto = new Produto(1, 'Galaxy S24', 3000, 'Tem um grande display de 6.2 polegadas.');
produto.adicionarAoEstoque(21);
produto.adicionarAoCarrinho(2);
produto.removerDoEstoque(3);
console.log(`Produto ID: ${produto.produtoId}, Nome: ${produto.nome}, Estoque: ${produto.estoque}`);

const carrinho = new CarrinhoDeCompras(5);
carrinho.adicionarAoCarrinho(10);
carrinho.removerDoCarrinho(2);
console.log(`Carrinho Total: ${carrinho.carrinho}`);
console.log(`Carrinho ID: ${carrinho.carrinhoId}`);

const pedido = new Pedido(3, 'aguardando pagamento');
pedido.confirmarPedido();
console.log(`Pedido ID: ${pedido.pedidoId}, Status: ${pedido.status}`);

const pagamento = new Pagamento(2, 'Débito');
pagamento.pagar();
pagamento.cancelar();
console.log(`Método de pagamento inicial: ${pagamento.metodo}`);
pagamento.metodo = 'Credito';
console.log(`Método de pagamento atualizado: ${pagamento.metodo}`);


console.log("----------------SUBCLASSES-----------------")


const produtoEletronico = new ProdutoEletronico(1, 'Smartphone Galaxy S24', 3000, 'Display 6.2 polegadas.', '2 anos', new Date('2026-11-25T00:00:00-03:00'));
console.log(`Produto Eletrônico: ${produtoEletronico.nome}, Garantia: ${produtoEletronico.garantia}, Expiração da Garantia: ${produtoEletronico.dataExpiracaoGarantia.toLocaleDateString()}`);
produtoEletronico.estenderGarantia(20);

produtoEletronico.adicionarAoEstoque(5);
produtoEletronico.removerDoEstoque(3);
console.log(`Novo estoque: ${produtoEletronico.estoque}`);

const produtoRoupa = new ProdutoRoupa(2, 'Camisa Polo', 150, 'Camisa Polo Manga Longa', 'M', 'Azul');
console.log(`Produto Roupa: ${produtoRoupa.nome}, Tamanho: ${produtoRoupa.tamanho}, Cor: ${produtoRoupa.cor}`);
produtoRoupa.aplicarDesconto(50);
