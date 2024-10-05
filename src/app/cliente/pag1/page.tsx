import Link from 'next/link';
import React from 'react';
import { Button } from '@mui/material';
import styles from './pag1.module.css';
import Image from 'next/image';
import Logo from "@/public/logo_offline.jpg";

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src={Logo} width={300} height={300} alt="Logo"></Image>
        <h1 className={styles.title}>Seja Bem Vindo!</h1>
        <Link href="http://localhost:3000/cliente/pag2">
        <Button variant="contained" color="error" className={styles.button}>
          ACESSAR
        </Button></Link>
      </div>
    </div>
  );
}