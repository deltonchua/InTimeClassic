import React from 'react';
import styles from './Wallets.module.scss';

const Wallets = () => {
  return (
    <section id='wallets' className={styles['container-sm']}>
      <h1>Wallets</h1>
      <p>
        Select the wallet that best suits your needs. Need more options?
        <br />
        Check out how to choose a wallet on{' '}
        <a
          href='https://ethereum.org/en/wallets/find-wallet/'
          target='_blank'
          rel='noopener noreferrer'
        >
          ethereum.org
        </a>
        .
      </p>
      <div className={styles['wallets']}>
        <div>
          <img src='/mew.svg' alt='MyEtherWallet' />
          <h3>MyEtherWallet</h3>
          <span>
            A free, client-side interface helping you interact with the Ethereum
            blockchain.
          </span>
          <a
            href='https://www.myetherwallet.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Download
          </a>
        </div>
        <div>
          <img src='/metamask.svg' alt='MetaMask' />
          <h3>MetaMask</h3>
          <span>
            Start exploring blockchain applications in seconds. Trusted by over
            1 million users worldwide.
          </span>
          <a
            href='https://metamask.io'
            target='_blank'
            rel='noopener noreferrer'
          >
            Download
          </a>
        </div>
        <div>
          <img src='/trust.svg' alt='Trust' />
          <h3>Trust</h3>
          <span>
            Buy, store, collect NFTs, exchange & earn crypto. Join 10 million+
            people using Trust Wallet.
          </span>
          <a
            href='https://trustwallet.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Download
          </a>
        </div>
        {/* <div>
          <img src='/ledger.svg' alt='Ledger' />
          <h3>Ledger</h3>
          <span>
            Keep your assets safe with the highest security standards.
          </span>
          <a
            href='https://www.ledger.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Download
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Wallets;
