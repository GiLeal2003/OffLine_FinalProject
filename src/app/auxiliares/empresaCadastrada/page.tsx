import Link from 'next/link';
import React from 'react';
import styles from './empresa.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Page() {
    return (
      <section className={styles.usuario}>
        <div className={styles.swiper}>
          <div className={styles.swiperWrapper}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.name_profession}>
                  <span className={styles.name}>Cadastro realizado com sucesso!</span>
                </div>
                
                <div className={styles.button}>
                <Link href="http://localhost:3000">
                  <button className={styles.exit}>Retornar à página inicial</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }