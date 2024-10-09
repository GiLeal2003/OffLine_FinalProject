import styles from './detalhe.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { buscarItemPedido, buscartodosPedidos, buscarClientesPorEstabelecimento } from '@/app/script';

export default function DetalhePedido({ pedido, itens, clientes }: any) {
  const nomeCliente = (cod_cli: number) => {
    const cliente = clientes.find((cliente: any) => cliente?.cod === cod_cli);
    return cliente ? cliente.nome : "Cliente não encontrado";
  };

  return (
    <div className={styles.App}>
      <div className={styles.card}>
        <div className={styles.card_content}>
          <h1>Detalhes do Pedido {pedido.cod}</h1>
          <p className={styles.client}>
            Cliente: {nomeCliente(pedido.cod_cli)}
          </p>

          <div className={styles.itens}>
            <h2 className={styles.itens_title}>Itens do Pedido</h2>
            <div className={styles.itens_list}>
              {itens.map((item: any) => (
                <div key={item.Item?.cod} className={styles.iten_produtos_price}>
                  <p className={styles.iten}>{item.Item?.nome}</p>
                  <p className={styles.price}>R$ {item.Item?.preco.toFixed(2)}</p>
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

export async function getServerSideProps(context: any) {
  const { cod_ped } = context.params;
  const pedidos = await buscartodosPedidos(2);
  const pedido = pedidos.find((p) => p.cod === Number(cod_ped));
  
  const clientes = await buscarClientesPorEstabelecimento(2);
  const itens = await buscarItemPedido(2, Number(cod_ped));

  if (!pedido) {
    return {
      notFound: true, // Retorna 404 se o pedido não for encontrado
    };
  }

  return {
    props: {
      pedido,
      itens,
      clientes,
    },
  };
}
