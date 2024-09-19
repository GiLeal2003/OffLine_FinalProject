import Link from 'next/link';
import React from 'react';
import styles from './senha.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Page() {
    return (
      <section className={styles.usuario}>
        <div className={styles.swiper}>
          <div className={styles.swiperWrapper}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.name_profession}>
                  <span className={styles.name}>ESQUECI MINHA SENHA</span>
                </div>
                <div className={styles.name_profession}>
                  <span className={styles.profession}>Digite o código recebido por e-mail abaixo:</span>
                </div>
                <label htmlFor="username"></label>
                <div className={styles.input}>
                  <input
                    id="username"
                    name="username"
                    placeholder="Digite seu email"
                    type="email"
                    required
                  />
                </div>
                <div className={styles.button}>
                <Link href="http://localhost:3000/auxiliares/senhaSalva">
                  <button className={styles.exit}>Continuar</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }