import Header from '../components/Header';
import Controls from '../components/Controls';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Controls />
    </>
  );
}

export default MyApp;
