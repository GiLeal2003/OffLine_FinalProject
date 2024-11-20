import Link from 'next/link';
import styles from './clientes.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { buscarClientesPorEstabelecimento } from '@/app/script';

export default async function Page({ searchParams }: { searchParams: any }) {
  const page = parseInt(searchParams.page || '0'); // Pega o parâmetro 'page' da URL, default é 0
  const clientesPerPage = 10; // Definir quantos clientes por página
  const clientes = await buscarClientesPorEstabelecimento(2); // Buscar todos os clientes

  // Eliminar registros duplicados com base no código do cliente
  const clientesUnicos = clientes.filter((cliente, index, self) =>
    index === self.findIndex((c) => c?.cod === cliente?.cod)
  );

  // Calcular os clientes que devem ser exibidos na página atual
  const startIndex = page * clientesPerPage;
  const selectedClientes = clientesUnicos.slice(startIndex, startIndex + clientesPerPage);

  // Cálculo para verificar se há páginas anteriores ou próximas
  const hasNextPage = startIndex + clientesPerPage < clientesUnicos.length;
  const hasPreviousPage = page > 0;

  return (
    <div>
      <section className={styles.usuario}>
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
                  <th>CPF</th>
                  <th>Tipo de Cliente</th>
                </tr>
              </thead>
              <tbody>
                {selectedClientes.map((cliente) => (
                  <tr key={cliente?.cod}>
                    <td>{cliente?.cod}</td>
                    <td>{cliente?.nome}</td>
                    <td>{cliente?.telefone}</td>
                    <td>{cliente?.CPF}</td>
                    <td>
                      <select name="tipo_usuario" className={styles.data_list}>
                        <option value="Aluno">Aluno</option>
                        <option value="Professor">Professor</option>
                        <option value="Outros">Outros</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer>
        <div className={styles.card2}>
          <div className={styles.button_group}>
            <Link href={`?page=${page - 1}`} passHref>
              <button className={styles.button} disabled={!hasPreviousPage}>
                Voltar
              </button>
            </Link>
          </div>
          <div className={styles.button_group}>
            <Link href={`?page=${page + 1}`} passHref>
              <button className={styles.button} disabled={!hasNextPage}>
                Avançar
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
