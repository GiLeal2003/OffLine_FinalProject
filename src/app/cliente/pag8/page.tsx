'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag8.module.css';
import Image from 'next/image';
import perfil from "@/public/perfil.png";
import sacola from "@/public/sacola.png";
import lupa from "@/public/lupa.png";
import filtro from "@/public/filtro.png";
import estrela from "@/public/estrela.png";
import localizacao from "@/public/localizacao.png";
import home from "@/public/home.png";
import chat from "@/public/chat.png";
import token from "@/public/token.png";
import menu from "@/public/menu_hamburguer.png";


interface Estabelecimento {
  nome: string;
  localizacao: string;
  avaliacao: number;
}

const estabelecimentos: Estabelecimento[] = [
  {
    nome: 'Cafeteria',
    localizacao: 'Localização',
    avaliacao: 5.0,
  },
  {
    nome: 'Lanchonete',
    localizacao: 'Localização',
    avaliacao: 4.0,
  },
  {
    nome: 'Doceria',
    localizacao: 'Localização',
    avaliacao: 3.5,
  },
];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEstabelecimentos = estabelecimentos.filter((estabelecimento) =>
    estabelecimento.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <header className={styles.header}>
      
        <div className={styles.profile}>
          <div className={styles.avatar}>
          <Link href="http://localhost:3000/cliente/pag9">
            <Image src={perfil} width={40} height={40} alt="perfil"></Image>
          </Link>
          </div>
          <p>Usuário</p>
        </div>

        <Link href="http://localhost:3000/cliente/">
        <div className={styles.actions}>
          <div className={styles.shoppingBag}>
            <Image src={sacola} width={30} height={30} alt="sacola"></Image>
          </div>
        </div>
        </Link>
      </header>

      <div className={styles.barraBusca}>
        <div className={styles.searchIcon}>
            <Image src={lupa} width={20} height={20} alt="lupa"></Image>
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar"
        />
        <div className={styles.settings}>
            <Image src={filtro} width={30} height={30} alt="filtro"></Image>
        </div>
      </div>
      </div>
      <Link href="http://localhost:3000/cliente/">
      <div className={styles.estabelecimentoList}>
        {filteredEstabelecimentos.map((estabelecimento) => (
          <div key={estabelecimento.nome} className={styles.estabelecimentoCard}>
            <div className={styles.headerCard}>
              <div className={styles.rating}>
                <div className={styles.starIcon}>
                    <Image src={estrela} width={16} height={16} alt="estrela"></Image>
                </div>
                <p>4.8 (30 avaliações)</p>
              </div>
              <div className={styles.heartIcon}></div>
            </div>
            <div className={styles.image}>
              
            </div>
            <div className={styles.title}>
              <h2>{estabelecimento.nome}</h2>
            </div>
            <div className={styles.categories}>
              <button className={styles.buttonCategory}>Bebidas</button>
              <button className={styles.buttonCategory}>Salgados</button>
              <button className={styles.buttonCategory}>Doces</button>
            </div>
            <div className={styles.location}>
              <div className={styles.locationIcon}>
                <Image src={localizacao} width={20} height={20} alt="localizacao"></Image>
              </div>
              <p>{estabelecimento.localizacao}</p>
            </div>
          </div>
        ))}
      </div></Link>
      
      <div className={styles.footer}>
      <Link href="http://localhost:3000/cliente/">
      <button className={styles.button}>
        <Image src={home} width={30} height={30} alt="home"></Image>
      </button></Link>

        <Link href="http://localhost:3000/cliente/">
        <button className={styles.button}>
            <Image src={chat} width={30} height={30} alt="chat"></Image>
        </button></Link>

        <Link href="http://localhost:3000/cliente/">
        <button className={styles.button}>
            <Image src={token} width={40} height={40} alt="token"></Image>
        </button></Link>

        <Link href="http://localhost:3000/cliente/">
        <button className={styles.button}>
            <Image src={menu} width={30} height={30} alt="menu"></Image>
        </button></Link>
      </div>
    </div>
  );
}