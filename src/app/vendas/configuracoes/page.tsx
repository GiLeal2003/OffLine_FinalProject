import Link from 'next/link';
import React from 'react';
import styles from './settings.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
        <div className={styles.card_container}>
          <div className={styles.card}>
          <div className={styles.image}>
            <img src="/homem.jpeg" alt="foto" />
          </div>
          <div className={styles.name}>
            <span className={styles.name}>Dorian Grey</span>
          </div>
            <div className={styles.card_content}>
              <div className={styles.button}>
              <button className={styles.help}>Dados Pessoais</button>
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