import Link from 'next/link';
import React from 'react';
import styles from './pag16.module.css';

interface Props {
  pedido: string;
  valor: string;
  data: string;
}

export default function Page({ pedido, valor, data }: Props) {
  return (
    <div className={styles.container}>
      <p>Pedido Nº: {pedido}</p>
      <p>Data: {data}</p>
      <p className={styles.space}>Valor da Compra: R$ {valor}</p>
      <div className={styles.body}>
      <h2 className={styles.title}>Pagamento aprovado</h2>
      <div className={styles.footer}>
      <Link href="http://localhost:3000/cliente/pag17">
      <button className={styles.center}>CONCLUIR</button></Link>
      </div>
      </div>
    </div>
  );
}