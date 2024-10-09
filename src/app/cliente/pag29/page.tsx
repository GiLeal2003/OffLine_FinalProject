'use client';

import Link from 'next/link';
import React from 'react';
import styles from './pag29.module.css';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import home from "@/public/home.png";
import chat from "@/public/chat.png";
import token from "@/public/token.png";
import menu from "@/public/menu_hamburguer.png";
import perfil from "@/public/perfil.png";
import logo from "@/public/logo_offline.jpg";

type Props = {};

const labels: { [index: string]: string } = {
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2.0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4.0',
  4.5: '4.5',
  5: '5.0',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function Page(){

  const [value, setValue] = React.useState<number | null>(0.5);
  const [hover, setHover] = React.useState(-1);

  return (
    <div className={styles.container}>

      <div className={styles.top}>
      <header className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image src={perfil} width={40} height={40} alt="perfil"></Image>
          </div>
          <p>Nome do Usuário</p>
        </div>
      </header>
      </div>
      
      <div className={styles.imageContainer}>
        <Image className={styles.img} src={logo} width={100} height={100} alt="logo"></Image>
      </div>
      <h1 className={styles.titulo}>Obrigado!</h1>
      <h1 className={styles.titulo}>Boa Refeição</h1>
      <div className={styles.total}>
        <span>Por gentileza, avalie sua experiência</span>
      </div>

      <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'70px', 
        marginBottom:'0px'
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>



      <input
        type="text"
        className={styles.inputText}
        placeholder="Digite sua avaliação aqui"
      />
      <Link href="http://localhost:3000/cliente/pag8">
      <button className={styles.confirmaButton}>ENVIAR</button></Link>

      <Link href="http://localhost:3000/cliente/pag8">
      <button className={styles.confirmaButton2}>PULAR</button></Link>

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
};

