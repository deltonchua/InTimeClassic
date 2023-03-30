import styles from './Community.module.scss';

const Community = () => {
  return (
    <section id='community' className={styles['container-sm']}>
      <h1>Community</h1>
      <p>Engage with our growing community and get the latest news.</p>
      <div className={styles['social']}>
        <a
          href='https://www.reddit.com/r/InTimeClassic'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='/reddit.svg' alt='' />
          <small>Reddit</small>
        </a>
        <a
          href='https://twitter.com/InTimeClassic'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='/twitter.svg' alt='' />
          <small>Twitter</small>
        </a>
        <a
          href='https://github.com/InTimeClassic'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='/github.svg' alt='' />
          <small>GitHub</small>
        </a>
      </div>
    </section>
  );
};

export default Community;
