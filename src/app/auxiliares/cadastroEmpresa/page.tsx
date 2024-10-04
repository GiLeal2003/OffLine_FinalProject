import Link from 'next/link';
import React from 'react';
import styles from './cadastro.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Page() {
    return (
      <section className={styles.usuario}>
        <div className={styles.swiper}>
          <div className={styles.swiperWrapper}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.nameProfession}>
                  <span className={styles.name}>Cadastre sua Empresa</span>
                </div>
                <label htmlFor="username"></label>
                <div className={styles.input}>
                  <input
                    id="username"
                    name="username"
                    placeholder="Nome da empresa"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    id="cnpj"
                    name="cnpj"
                    placeholder="CNPJ"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    id="local"
                    name="local"
                    placeholder="Local da loja"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    id="user"
                    name="user"
                    placeholder="Usuário"
                    type="text"
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    id="password"
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required
                  />
                </div>
                <div className={styles.input}>
                  <input
                    id="password"
                    name="password"
                    placeholder="Digite novamente a senha"
                    type="password"
                    required
                  />
                </div>
                <div className={styles.button}>
                <Link href="http://localhost:3000/auxiliares/empresaCadastrada">
                  <button className={styles.exit}>Salvar</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }