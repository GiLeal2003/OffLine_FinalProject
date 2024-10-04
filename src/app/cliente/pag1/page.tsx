import Link from 'next/link';
import React from 'react';
import { Button } from '@mui/material';
import styles from './pag1.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.img} src= "/logo_offline.png" alt="Logo" />
        <h1 className={styles.title}>Seja Bem Vindo!</h1>
        <Link href="http://localhost:3000/pedido/pag2">
        <Button variant="contained" className={styles.button}>
          ACESSAR
        </Button></Link>
      </div>
    </div>
  );
}