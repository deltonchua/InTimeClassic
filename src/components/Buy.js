import { useState } from 'react';
import styles from './Buy.module.scss';

const Buy = () => {
  return (
    <section id='buy' className={styles['container-sm']}>
      <h1>How to Buy ITO Classic</h1>
      {steps.map((s, i) => (
        <Step i={i + 1} title={s.title} details={s.details} key={i} />
      ))}
    </section>
  );
};

const Step = ({ i = 0, title = '', details = '' }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <button onClick={() => setShowDetails((prev) => !prev)}>
        <span>Step {i}</span> {title}
      </button>
      {showDetails && <p>{details}</p>}
    </div>
  );
};

const steps = [
  {
    title: 'Create Ethereum wallet',
    details:
      'Install any wallet from above to your device. This will allow you to store, send and swap ITO Classic.',
  },
  {
    title: 'Fund your wallet with ETH',
    details:
      'Buy ETH directly from these wallets or transfer ETH from exchanges.',
  },
  {
    title: 'Connect your wallet to Uniswap',
    details:
      'Click "Connect Wallet" on the Uniswap interface and select your wallet.',
  },
  {
    title: 'Swap ETH for ITO Classic',
    details:
      'Click "Select a token" and enter the token address. Click "Swap" and you will now receive ITO Classic in exchange for your ETH.',
  },
];

export default Buy;
