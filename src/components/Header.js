import React from 'react';
// Importação da logo conforme o caminho da sua árvore de pastas
import Logo from '../assets/img/header/logo.svg'

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Lado Esquerdo: Logo */}
        <div style={styles.logoContainer}>
          <img src={Logo} alt="Gymme Logo" style={styles.logo} />
        </div>

        {/* Centro: Navegação */}
        <nav style={styles.nav}>
          <a href="#workouts" style={styles.navLink}>Funcionalidades</a>
          <a href="#pricing" style={styles.navLink}>Preços</a>
          <a href="#about" style={styles.navLink}>Sobre</a>
        </nav>

        {/* Lado Direito: Call to Action (CTA) */}
        <div style={styles.ctaContainer}>
          <button style={styles.loginBtn}>Entrar</button>
          <button style={styles.registerBtn}>Começar Agora</button>
        </div>
      </div>
    </header>
  );
};

// Estilização inline para facilitar (recomendo mover para um arquivo .css ou Styled Components depois)
const styles = {
  header: {
    width: '100%',
    backgroundColor: '#0a0a0a', // Fundo escuro premium
    padding: '20px 0',
    borderBottom: '1px solid #222',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  logo: {
    height: '35px', // Tamanho ideal para header
    display: 'block',
  },
  nav: {
    display: 'flex',
    gap: '30px',
  },
  navLink: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  ctaContainer: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  },
  registerBtn: {
    backgroundColor: '#4ade80', // Verde vibrante para combinar com "fitness"
    color: '#000',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'transform 0.2s',
  },
};

export default Header;
