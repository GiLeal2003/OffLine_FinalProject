import Link from 'next/link';
import React from 'react';
import styles from './configuracoes.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <div className={styles.button}>
              <Link href="http://localhost:3000/gestao/atualizar"><button className={styles.help}>Atualizar dados da empresa</button></Link>
              <button className={styles.help}>Senha</button>
                <button className={styles.help}>Ajuda</button>
                <button className={styles.help}>Fale Conosco</button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}