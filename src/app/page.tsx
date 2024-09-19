//HOMEPAGE HTML
import styles from '@/app/home.module.css';
import Link from 'next/link';

export default function Page() {
  return (
    <main className={styles.container}>
      <div className={styles.root}>
        <div className={styles.body}>
          <div className={styles.introducao}>
            <div className={styles.bemvindo}>Bem-vindo ao <span style={{ color: "#AF2020"}}>Off-Line</span></div>
            <div className={styles.apresentacao}>Nosso aplicativo foi desenvolvido para oferecer uma solução prática e eficiente para os vendedores dentro do campus Mackenzie.</div>
            <div className={styles.topicos1}>
              <div className={styles.topico1}><span style={{ color: "#AF2020"}}>Gestão Simplificada de Pedidos</span>: Receba e gerencie pedidos em tempo real, reduzindo erros e melhorando a eficiência do atendimento. Tudo em um só lugar.</div>
            </div>
            <div className={styles.topicos1}>
              <div className={styles.topico1}><span style={{ color: "#AF2020"}}>Redução de Filas</span>: Com o sistema de pedidos antecipados, você pode preparar os pedidos com antecedência, diminuindo o tempo de espera dos clientes e evitando filas no seu estabelecimento</div>
            </div>
            <div className={styles.topicos1}>
              <div className={styles.topico1}><span style={{ color: "#AF2020"}}>Análise de Vendas</span>: Acompanhe suas vendas e obtenha insights valiosos sobre os produtos mais vendidos e o comportamento dos clientes, ajudando a otimizar seu negócio.</div>
            </div>
            <div className={styles.topicos1}>
              <div className={styles.topico1}>Para acessar o aplicativo mobile clique no botão abaixo:</div>
            </div>
            <div className={styles.button}>
              <button className={styles.exit} >Acessar</button>
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
                      <input name="username" placeholder="Digite seu usuário" type="text"/>
                    </div>
                    <label htmlFor="senha"></label>
                    <div className={styles.input}>
                      <input id="senha" name="senha" placeholder="Digite sua senha" type="password"/>
                    </div>
                    <div className={styles.button}>
                    <Link href="http://localhost:3000/vendas"><button className={styles.exit} >Acessar</button></Link>
                    </div>
                    <div className={styles.links1}>
                      <div className={styles.esq}>
                      <Link href="http://localhost:3000/auxiliares/esqueciSenha"><button>Esqueci minha senha</button></Link>
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
                      <input className={styles.username} name="username" placeholder="Digite seu usuário" type="text"/>
                    </div>
                    <label htmlFor="senha"></label>
                    <div className={styles.input}>
                      <input id="senha" name="senha" placeholder="Digite sua senha" type="password"/>
                    </div>
                    <div className={styles.button}>
                      <button className={styles.exit} >Acessar</button>
                    </div>
                    <div className={styles.links1}>
                      <div className={styles.esq}>
                        <button>Esqueci minha senha</button>
                      </div>
                      <div className={styles.cad}>
                        <button>Cadastre a sua empresa</button>
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