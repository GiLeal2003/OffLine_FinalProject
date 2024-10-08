import styles from './detalhe.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { buscarItemPedido, buscartodosPedidos, buscarClientesPorEstabelecimento } from '@/app/script';

export default async function DetalhePedido({ params }: { params: { cod_pedido: number } }) {
  const cod_pedido = params.cod_pedido;

  // Buscando o pedido específico pelo código
  const pedidos = await buscartodosPedidos(2);
  const pedido = pedidos.find((p) => p.cod === cod_pedido);
  const clientes = await buscarClientesPorEstabelecimento(2); // Buscar todos os clientes

  // Caso o pedido não seja encontrado
  if (!pedido) {
    return <div>Pedido não encontrado.</div>;
  }

  // Buscando itens do pedido
  const itens = await buscarItemPedido(2, cod_pedido);

  // Buscando o cliente do pedido
  const nomeCliente = (cod_cli: number) => {
    const cliente = clientes.find((cliente) => cliente?.cod === cod_cli);
    return cliente ? cliente.nome : "Cliente não encontrado";
  };
  return (
    <div className={styles.App}>
      <div className={styles.card}>
        <div className={styles.card_content}>
          <h1>Detalhes do Pedido {pedido.cod}</h1>
          <p className={styles.client}>
            Cliente: {clientes.nome}
          </p>

          <div className={styles.itens}>
            <h2 className={styles.itens_title}>Itens do Pedido</h2>
            <div className={styles.itens_list}>
              {itens.map((item) => (
                <div key={item.cod} className={styles.iten_produtos_price}>
                  <p className={styles.iten}>{item.nome}</p>
                  <p className={styles.price}>R$ {item.preco.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.resumo_totais_precos}>
            <h2 className={styles.resumo_title}>Resumo do Pedido</h2>
            <div className={styles.resumo_item}>
              <p className={styles.totais}>Subtotal</p>
              <p className={styles.precos}>R$ {pedido.total.toFixed(2)}</p>
            </div>
            <div className={styles.resumo_item}>
              <p className={styles.totais}>Desconto</p>
              <p className={styles.precos}>R$ 0,00</p>
            </div>
            <div className={styles.resumo_item}>
              <p className={styles.totais}>Cupom</p>
              <p className={styles.precos}>R$ 0,00</p>
            </div>
          </div>

          <button className={styles.button}>Finalizar</button>
        </div>
      </div>
    </div>
  );
}
