import { Usuario } from './usuario';
import { Produto } from './produto';
import { CarrinhoDeCompras } from './carrinhoDeCompras';
import { Pedido } from './pedido';
import { Pagamento } from './pagamento';

const usuario = new Usuario('Gustavo', 'teste@gmail.com');
console.log(`ID: ${usuario.usuarioId}, Nome: ${usuario.nome}`);
const usuario2 = new Usuario('Lucas', 'teste2@gmail.com');
console.log(`ID: ${usuario2.usuarioId}, Nome: ${usuario2.nome}`);

const produto = new Produto(1, 'Galaxy S24', 3000, 'Tem um grande display de 6.2 polegadas.');
produto.adicionarAoEstoque(20);
produto.adicionarAoCarrinho(2);
produto.removerDoEstoque(3);
console.log(`Produto ID: ${produto.produtoId}, Nome: ${produto.nome}, Estoque: ${produto.estoque}`);

const carrinho = new CarrinhoDeCompras(5);
carrinho.adicionarAoCarrinho(10);
carrinho.removerDoCarrinho(2);
console.log(`Carrinho Total: ${carrinho.carrinho}`);
console.log(`Carrinho ID: ${carrinho.carrinhoId}`);

const pedido = new Pedido(2, 'aguardando pagamento');
pedido.confirmarPedido();
console.log(`Pedido ID: ${pedido.pedidoId}, Status: ${pedido.status}`);

const pagamento = new Pagamento(2, 'Débito');
pagamento.pagar();
pagamento.cancelar();
console.log(`Método de pagamento inicial: ${pagamento.metodo}`);
pagamento.metodo = 'Credito';
console.log(`Método de pagamento atualizado: ${pagamento.metodo}`);