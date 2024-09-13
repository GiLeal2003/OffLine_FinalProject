"use client";
import Link from 'next/link';
import styles from './pedidos.module.css';
import { ChatBubbleLeftEllipsisIcon} from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div>
      <section className={styles.usuario}>
        <div className={styles.messager}>
        <Link href="http://localhost:3000/pedidos/chat">
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
                <th>Cliente</th>
                <th>Detalhes</th>
                </tr>
            </thead>
            <tbody>
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

