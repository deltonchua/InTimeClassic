import Meta from '../components/Meta';
import Hero from '../components/Hero';
import Tokenomics from '../components/Tokenomics';
import Wallets from '../components/Wallets';
import Buy from '../components/Buy';
import Community from '../components/Community';

export default function Home() {
  return (
    <>
      <Meta />
      <main>
        <Hero />
        <Tokenomics />
        <Wallets />
        <Buy />
        <Community />
      </main>
    </>
  );
}
