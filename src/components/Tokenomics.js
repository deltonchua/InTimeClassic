import Link from 'next/link';
import { useState } from 'react';
import { showModal } from './modal/utils';
import Airdrop from './Airdrop';
import Copy from '../icons/Copy';
import Launch from '../icons/Launch';
import styles from './Tokenomics.module.scss';

const Tokenomics = () => {
  const address = '0x5e5bc236d024cd26be780802aaf1e0dc118fc484';
  const [message, setMessage] = useState('');

  return (
    <section id='tokenomics' className={styles['container-sm']}>
      <h1>Tokenomics</h1>
      <p>
        InTime Classic is deployed with a total supply of 3 trillion, 50% of
        which is sent to{' '}
        <a
          href='https://etherscan.io/tx/0xd37037dd1e927020b79af9b98fcbb089ff8587008777f2f411460a3bb4c0708e'
          target='_blank'
          rel='noopener noreferrer'
        >
          Uniswap
        </a>{' '}
        and the remaining tokens will be distributed periodically to our{' '}
        <Link href='/#community'>
          <a>community members</a>
        </Link>
        . Read more about our{' '}
        <button onClick={() => showModal('airdrop')}>airdrop campaign</button>.
      </p>
      <Airdrop />
      <h3>Contract Address</h3>
      <div className={styles['address']}>
        <span>{message ? message : address}</span>
        <button
          title='Copy address'
          onClick={async () => {
            await navigator.clipboard.writeText(address);
            setMessage('Address copied to clipboard!');
            setTimeout(() => setMessage(''), 1000);
          }}
        >
          <Copy />
        </button>
        <a
          href='https://etherscan.io/token/0x5e5bc236d024cd26be780802aaf1e0dc118fc484'
          target='_blank'
          rel='noopener noreferrer'
          title='View on Etherscan'
        >
          <Launch />
        </a>
      </div>
    </section>
  );
};

export default Tokenomics;
