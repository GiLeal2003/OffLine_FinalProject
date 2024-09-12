//HOMEPAGE HTML
import Link from 'next/link';
import styles from './home.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles.container}>
      <div className={styles.root}>
        <div className={styles.body}>
          <div className={styles.introducao}>
            <div className={styles.bemvindo}>Bem-vindo ao <span style={{ color: "#AF2020"}}>Off-Line</span></div>
            <div className={styles.apresentacao}>Nosso aplicativo foi desenvolvido para oferecer uma solução prática e eficiente para os vendedores dentro do campus Mackenzie.</div>
            <div className={styles.topicos1}>
              <div className={styles.bolinha1}>
              </div>
              <div className={styles.topico1}>Gestão Simplificada de Pedidos: Receba e gerencie pedidos em tempo real, reduzindo erros e melhorando a eficiência do atendimento. Tudo em um só lugar.</div>
            </div>
            <div className={styles.topicos1}>
              <div className={styles.bolinha1}>
              </div>
              <div className={styles.topico1}>Redução de Filas: Com o sistema de pedidos antecipados, você pode preparar os pedidos com antecedência, diminuindo o tempo de espera dos clientes e evitando filas no seu estabelecimento</div>
            </div>
            <div className={styles.topicos1}>
              <div className={styles.bolinha1}>
              </div>
              <div className={styles.topico1}>Análise de Vendas: Acompanhe suas vendas e obtenha insights valiosos sobre os produtos mais vendidos e o comportamento dos clientes, ajudando a otimizar seu negócio.</div>
            </div>
            <div className={styles.topicos1}>
              <div className={styles.bolinha1}>
              </div>
              <div className={styles.topico1}>Para acessar o aplicativo mobile clique no botão abaixo.</div>
              <div className={styles.button}>
                <Link href="http://localhost:3000/pedido/1paginaInicial"><button className={styles.exit} >Acessar</button></Link>
              </div>
            </div>
          </div>
          
          <section className={styles.usuario}>
            <div className="swiper mySwiper container">
              <div className="swiper-wrapper content">
                <div className="swiper-slide card">
                  <div className={styles.card_content}>
                    <div className={styles.name_profession}>
                      <span className={styles.name}>Login</span>
                      <span className={styles.name}>VENDAS</span>
                      <span className={styles.profession}>Informe seu usuário e senha</span>
                    </div>
                    <label htmlFor="username"></label>
                    <div className={styles.input}>
                      <img className={styles.img} src="/user.png" alt="user" />
                      <input className={styles.username} name="username" placeholder="Digite seu usuário" type="text"/>
                    </div>
                    <label htmlFor="senha"></label>
                    <div className={styles.input}>
                      <img className={styles.img} src="/lock.png" alt="lock" />
                      <input id="senha" name="senha" placeholder="Digite sua senha" type="password"/>
                    </div>
                    <div className={styles.button}>
                      <Link href="http://localhost:3000/dashboard"><button className={styles.exit} >Acessar</button></Link>
                    </div>
                    <div className={styles.links1}>
                      <div className={styles.esq}>
                      <Link href="http://localhost:3000/auxiliares/esqueciSenha">
                        <button>Esqueci minha senha</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.usuario}>
            <div className="swiper mySwiper container">
              <div className="swiper-wrapper content">
                <div className="swiper-slide card">
                  <div className={styles.card_content}>
                    <div className={styles.name_profession}>
                      <span className={styles.name}>Login</span>
                      <span className={styles.name}>GESTÃO</span>
                      <span className={styles.profession}>Informe seu usuário e senha</span>
                    </div>
                    <label htmlFor="username"></label>
                    <div className={styles.input}>
                      <img className={styles.img} src="/user.png" alt="user" />
                      <input className={styles.username} name="username" placeholder="Digite seu usuário" type="text"/>
                    </div>
                    <label htmlFor="senha"></label>
                    <div className={styles.input}>
                      <img className={styles.img} src="/lock.png" alt="lock" />
                      <input id="senha" name="senha" placeholder="Digite sua senha" type="password"/>
                    </div>
                    <div className={styles.button}>
                      <Link href="http://localhost:3000/gestaoDashboard"><button className={styles.exit} >Acessar</button></Link>
                    </div>
                    <div className={styles.links1}>
                      <div className={styles.esq}>
                      <Link href="http://localhost:3000/auxiliares/esqueciSenha">
                        <button>Esqueci minha senha</button></Link>
                      </div>
                      <div className={styles.cad}>
                      <Link href="http://localhost:3000/auxiliares/cadastroEmpresa">
                        <button>Cadastre a sua empresa</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}