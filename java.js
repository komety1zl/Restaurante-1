import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurante Delícia</title>
        <meta name="description" content="Restaurante delicioso para todos os gostos!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <img src="/images/logo.png" alt="Logo Restaurante" className={styles.logo} />
        <h1>Bem-vindo ao Restaurante Delícia!</h1>
        <p>Sabores inesquecíveis para todos os gostos.</p>
      </header>

      <main className={styles.main}>
        <h2>Nosso Menu</h2>
        <p>Explore nossos pratos deliciosos. <a href="/menu">Veja o Menu!</a></p>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Restaurante Delícia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
import Head from 'next/head';
import styles from '../styles/Menu.module.css';

export default function Menu() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Menu - Restaurante Delícia</title>
        <meta name="description" content="Conheça o menu delicioso do Restaurante Delícia!" />
      </Head>

      <header className={styles.header}>
        <h1>Nosso Menu</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.menuSection}>
          <h2>Pratos Principais</h2>
          <ul>
            <li>Feijoada Completa</li>
            <li>Arroz de Pato</li>
            <li>Frango Grelhado com Batatas</li>
          </ul>
        </section>
        <section className={styles.menuSection}>
          <h2>Sobremesas</h2>
          <ul>
            <li>Pudim de Leite Condensado</li>
            <li>Torta de Limão</li>
            <li>Brigadeiro Gourmet</li>
          </ul>
        </section>
        <p><a href="/contato">Entre em contato para pedidos!</a></p>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Restaurante Delícia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
import Head from 'next/head';
import styles from '../styles/Contact.module.css';

export default function Contato() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contato - Restaurante Delícia</title>
        <meta name="description" content="Entre em contato conosco para mais informações." />
      </Head>

      <header className={styles.header}>
        <h1>Contato</h1>
      </header>

      <main className={styles.main}>
        <h2>Tem alguma dúvida ou quer fazer um pedido?</h2>
        <p>Envie uma mensagem para nós!</p>
        <form>
          <label>
            Nome:
            <input type="text" name="nome" required />
          </label>
          <label>
            E-mail:
            <input type="email" name="email" required />
          </label>
          <label>
            Mensagem:
            <textarea name="mensagem" required></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Restaurante Delícia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
