"use client";
import styles from './clientes.module.css';

export default function Page() {
  return (
    <div>
      <section className={styles.usuario}>
        <div className={styles.messager}>
        </div>
      </section>
      <h1 className={styles.h1}>Lista de Clientes</h1>
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
                <th>Telefone</th>
                <th>Tipo de Usuário</th>
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

