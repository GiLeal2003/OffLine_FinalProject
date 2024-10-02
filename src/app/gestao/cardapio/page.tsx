import Link from 'next/link';
import styles from './cardapio.module.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface Props {}

const Page: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <section className={styles.usuario}>
        </section>
        <h1 className={styles.h1}>Cardápio</h1>
      <div className={styles.content}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card__image}>
          <div className={styles.image}></div>
          </div>
        <div className={styles.product_card__content}>
          <h2 className={styles.product_card__title}>Pão de Queijo Grande</h2>
        </div>
        <div className={styles.product_card__price}>
          <span>R$ 26,50</span>
        </div>
        <div className={styles.product_card__button}>
          <button className={styles.aboutMe}>Editar produto</button>
        </div>
      
    </div>
  );
};

export default Page;
