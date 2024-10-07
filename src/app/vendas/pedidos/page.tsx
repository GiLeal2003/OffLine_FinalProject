//PÁGINA DA ABA PEDIDOS
"use client";
import Link from 'next/link';
import styles from './pedidos.module.css';
import { ChatBubbleLeftEllipsisIcon} from '@heroicons/react/24/outline';
import {buscartodosPedidos} from "@/app/script";
import { buscarClientesPorEstabelecimento } from '@/app/script';

export default async function Page() {
  const pedidos = await buscartodosPedidos(2);
  const clientes = await buscarClientesPorEstabelecimento(2);
  const nomeCliente = (cod_cli: number) => {
    const cliente = clientes.find((cliente) => cliente?.cod === cod_cli);
    return cliente ? cliente.nome : "Cliente não encontrado";
  };
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
              {pedidos.map((pedido) => (
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
            <button className={styles.button}>
              Voltar
            </button>
          </div>
          <div className={styles.button_group}>
            <button className={styles.button} >
              Avançar
            </button>
          </div>
          <div className={styles.button_group}>
            <button className={styles.button} >
              Atualizar
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

