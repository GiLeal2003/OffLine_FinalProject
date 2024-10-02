import Link from 'next/link';
import styles from './atualizar.module.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Page() {
    return (
      <section className={styles.usuario}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.name}>
                <span>Atualizar Dados da Empresa</span>
              </div>
              <form>
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
                <div className={styles.button}>
                <Link href="http://localhost:3000/gestao/configuracoes">
                  <button type="submit" className={styles.exit}>
                    Salvar
                  </button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }