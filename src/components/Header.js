import Link from 'next/link';
import { useState } from 'react';
import { combineStyle } from '../styles/style';
import styles from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={combineStyle([
        styles['header'],
        menuOpen ? styles['active'] : '',
      ])}
      onClick={() => {
        if (menuOpen) setMenuOpen(false);
      }}
    >
      <div className={styles['top']}>
        <Link href='/'>
          <a className={styles['logo']}>
            <img src='/ito.svg' alt='ITO' />
            <h1>InTime</h1>
            <sup>Classic</sup>
          </a>
        </Link>
        <button
          className={styles['menu-btn']}
          onClick={() => setMenuOpen((prev) => !prev)}
          title='Toggle menu'
        >
          <div />
        </button>
      </div>
      <nav>
        <Link href='/#tokenomics'>
          <a>Tokenomics</a>
        </Link>
        <Link href='/#wallets'>
          <a>Wallets</a>
        </Link>
        <Link href='/#buy'>
          <a>Buy</a>
        </Link>
        <Link href='/#community'>
          <a>Community</a>
        </Link>
        <a
          href='https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x5e5bc236d024cd26be780802aaf1e0dc118fc484'
          target='_blank'
          rel='noopener noreferrer'
          className={styles['uniswap']}
        >
          <img src='/uniswap.svg' alt='' />
          Uniswap
        </a>
      </nav>
    </header>
  );
};

export default Header;
