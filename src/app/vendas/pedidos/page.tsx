import Link from 'next/link';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import styles from './pedidos.module.css';
import { buscartodosPedidos, buscarClientesPorEstabelecimento } from '@/app/script';

export default async function Page({searchParams}: {searchParams:any}) {
  const page = parseInt(searchParams.page || '0'); // Pega o parâmetro 'page' da URL, default é 0
  const pedidosPerPage = 10; // Definir quantos pedidos por página
  const pedidos = await buscartodosPedidos(2); // Buscar todos os pedidos
  const clientes = await buscarClientesPorEstabelecimento(2); // Buscar todos os clientes

  const nomeCliente = (cod_cli: number) => {
    const cliente = clientes.find((cliente) => cliente?.cod === cod_cli);
    return cliente ? cliente.nome : "Cliente não encontrado";
  };

  // Calcular os pedidos que devem ser exibidos na página atual
  const startIndex = page * pedidosPerPage;
  const selectedPedidos = pedidos.slice(startIndex, startIndex + pedidosPerPage);

  // Cálculo para verificar se há páginas anteriores ou próximas
  const hasNextPage = startIndex + pedidosPerPage < pedidos.length;
  const hasPreviousPage = page > 0;

  return (
    <div>
      <section className={styles.usuario}>
        <div className={styles.messager}>
          <Link href="http://localhost:3000/vendas/chat">
            <button className={styles.message}>
              <ChatBubbleLeftEllipsisIcon className={styles.icon}></ChatBubbleLeftEllipsisIcon>
            </button>
          </Link>
        </div>
      </section>
      <h1 className={styles.h1}>Lista de Pedidos</h1>

      <div className={styles.card}>
        <div className={styles.card_content}>
          <div className={styles.activity}>
            <div className={styles.title}>
              <i className="uil uil-clock-three"></i>
            </div>

            <table className={styles.activity_data}>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nome</th>
                  <th>Status do Pedido</th>
                  <th>Data</th>
                  <th>Valor</th>
                  <th>Pagamento</th>
                  <th>Tipo de Usuário</th>
                  <th>Detalhes</th>
                </tr>
              </thead>
              <tbody>
                {selectedPedidos.map((pedido) => (
                  <tr key={pedido.cod}>
                    <td>{pedido.cod}</td>
                    <td>{nomeCliente(pedido.cod_cli)}</td>
                    <td>{pedido.statusPedido}</td>
                    <td>{new Date(pedido.datas).toLocaleDateString()}</td>
                    <td>{pedido.total.toString()}</td>
                    <td>{pedido.tipoPagamento}</td>
                    <td>
                      <select name="languages" className={styles.data_list}>
                        <option value="Andamento">Aluno</option>
                        <option value="Finalizado">Professor</option>
                        <option value="Cancelado">Outros</option>
                      </select>
                    </td>
                    <td>
                      <Link href={`http://localhost:3000/vendas/detalhesPedido/${pedido.cod}`}>
                        <button className={styles.data_detalhe}>Detalhes</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer>
        <div className={styles.card2}>
          <div className={styles.button_group}>
            <Link href={`?page=${page - 1}`} passHref>
              <button className={styles.button} disabled={!hasPreviousPage}>
                Voltar
              </button>
            </Link>
          </div>
          <div className={styles.button_group}>
            <Link href={`?page=${page + 1}`} passHref>
              <button className={styles.button} disabled={!hasNextPage}>
                Avançar
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
