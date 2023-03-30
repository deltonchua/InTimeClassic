import Link from 'next/link';
import GetFeatured from './GetFeatured';
import { showModal } from './modal/utils';
import styles from './Hero.module.scss';

const Hero = () => {
  const userName = 'SprsCarpenter';
  const userImage =
    'https://lh3.googleusercontent.com/SVOGqZOAKzbqj4OaSJFDt9_JE9r2NV7W1PsseTOEa67uE0O9yQVaM4ezZsFsGCnYdeyuWgQAAQIZbJmfGRMx6mbVkd5oLXF9uHgzHg=s0';
  const userLink = 'https://opensea.io/sprscarpenter';
  const assetName = 'Queen Elizabeth II on Time Magazine';
  const assetImage =
    'https://lh3.googleusercontent.com/vFFhISer5aOlDGIlac-3E7OJx9xNi0LynAEjgP7zK4CvoB7SXUGhAd2JzG0PKlLzOq8iYMu2ZI9cGq_Zm3EPFE49MoIC_kppUtCfag=w600';
  const assetLink =
    'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/57491526202698671451681077506473120062370923256015111049186484176062896930817';

  return (
    <section className={styles['container']}>
      <div className={styles['body']}>
        <h1>A Token for the NFT Community</h1>
        <p>Get rewarded for creating amazing NFTs!</p>
        <div className={styles['action']}>
          <Link href='/#buy'>
            <a>How to Buy</a>
          </Link>
          <Link href='/#tokenomics'>
            <a>ITO Classic</a>
          </Link>
        </div>
      </div>
      <div className={styles['featured']}>
        <a
          href={assetLink}
          target='_blank'
          rel='noopener noreferrer'
          className={styles['img']}
          title={assetName}
        >
          <img src={assetImage} alt='' />
        </a>
        <div>
          <img src={userImage} alt='' />
          <div className={styles['profile']}>
            <span>{assetName}</span>
            <a href={userLink} target='_blank' rel='noopener noreferrer'>
              {userName}
            </a>
          </div>
          <button
            title='Get featured here'
            onClick={() => showModal('get-featured')}
          >
            Featured
          </button>
        </div>
      </div>
      <GetFeatured />
    </section>
  );
};

export default Hero;
