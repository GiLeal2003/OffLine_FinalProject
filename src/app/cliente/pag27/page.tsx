'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './pag27.module.css';
import Image from 'next/image';
import home from "@/public/home.png";
import chat from "@/public/chat.png";
import token from "@/public/token.png";
import menu from "@/public/menu_hamburguer.png";

interface TokenData {
    data: string;
    nomeEstabelecimento: string;
    pedido: number;
    status: 'Confirmado' | 'Finalizado' | 'Cancelado';
    valorCompra: number;
    token: string;
  }
  
  const tokenData: TokenData[] = [
    {
      data: 'dd/mm/ano',
      nomeEstabelecimento: 'Nome Estabelecimento',
      pedido: 12345,
      status: 'Confirmado',
      valorCompra: 27.70,
      token: 'XXXXXXXXXXXX',
    },
    {
      data: 'dd/mm/ano',
      nomeEstabelecimento: 'Nome Estabelecimento',
      pedido: 54321,
      status: 'Finalizado',
      valorCompra: 50.00,
      token: 'XXXXXXXXXXXX',
    },
    {
      data: 'dd/mm/ano',
      nomeEstabelecimento: 'Nome Estabelecimento',
      pedido: 98765,
      status: 'Cancelado',
      valorCompra: 25.00,
      token: 'XXXXXXXXXXXX',
    },
  ];
  
  export default function Page() {
    const [selectedToken, setSelectedToken] = useState<TokenData | null>(null);
  
    const handleTokenClick = (token: TokenData) => {
      setSelectedToken(token);
    };
  
    return (
      <div className={styles.container}>
        <header className={styles.header}>
        <Link href="http://localhost:3000/cliente/pag9">
        <button className={styles.back_button}>VOLTAR</button></Link>
        </header>
        <main>
        <h1 className={styles.h1}>TOKENS</h1>  
        <h2 className={styles.h2}>Clique para acessar QR Code e apresente no CAIXA do estabelecimento</h2>
          
          <section className={styles.token_list}>
            {tokenData.map((token,index) => ( 
              <Link key = {index} href="http://localhost:3000/cliente/pag28">
              <div
                key={token.pedido}
                className={styles.token_item}
                onClick={() => handleTokenClick(token)}
              >
                <div className={styles.token_info}>
                  <p>Data: {token.data}</p>
                  <p>Nome Estabelecimento: {token.nomeEstabelecimento}</p>
                  <p>Pedido Nº: {token.pedido}</p>
                  <p>Status: {token.status}</p>
                  <p>Valor da Compra: R$ {token.valorCompra.toFixed(2)}</p>
                </div>
                <div className={styles.token_actions}>
                  <h3 className={styles.h3}>Nº Token: {token.token}</h3>
                </div>
              </div></Link>
            ))}
          </section>
          {selectedToken && (
            <section className={styles.selected_token}>
              <h2>Token Selecionado</h2>
              <p>Data: {selectedToken.data}</p>
              <p>Nome Estabelecimento: {selectedToken.nomeEstabelecimento}</p>
              <p>Pedido N: {selectedToken.pedido}</p>
              <p>Status: {selectedToken.status}</p>
              <p>Valor da Compra: R$ {selectedToken.valorCompra.toFixed(2)}</p>
              <p>N° TOKEN: {selectedToken.token}</p>
              <div className={styles.token_actions}>
                  <h3 className={styles.h3}>Nº Token: {selectedToken.token}</h3>
                </div>
            </section>
          )}
        </main>

        <div className={styles.footer}>
        <Link href="http://localhost:3000/cliente/pag8">
        <button className={styles.button}>
            <Image src={home} width={30} height={30} alt="home"></Image>
        </button></Link>

          <Link href="http://localhost:3000/cliente/pag31">
          <button className={styles.button}>
            <Image src={chat} width={30} height={30} alt="chat"></Image>
          </button></Link>

          <Link href="http://localhost:3000/cliente/pag27">
          <button className={styles.button}>
            <Image src={token} width={40} height={40} alt="token"></Image>
          </button></Link>

          <Link href="http://localhost:3000/cliente/pag9">
          <button className={styles.button}>
            <Image src={menu} width={30} height={30} alt="menu"></Image>
          </button></Link>
          
        </div>
      </div>
    );
  }

