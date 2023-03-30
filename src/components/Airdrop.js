import Modal from './modal';

const Airdrop = () => {
  return (
    <Modal
      id='airdrop'
      title='Participate in the airdrop 🪂'
      Content={Content}
    />
  );
};

const Content = () => {
  return (
    <ol>
      <li>
        Join our{' '}
        <a
          href='https://www.reddit.com/r/InTimeClassic'
          target='_blank'
          rel='noopener noreferrer'
        >
          Reddit
        </a>{' '}
        community
      </li>
      <li>
        Follow us on{' '}
        <a
          href='https://twitter.com/InTimeClassic'
          target='_blank'
          rel='noopener noreferrer'
        >
          Twitter
        </a>
      </li>
      <li>
        <strong>Create</strong>, <strong>collect</strong> or ❤️ some NFTs on
        OpenSea
      </li>
      <li>
        Airdrop will be conducted at multiple milestones (at 10K Twitter
        followers, 50K...) until all tokens are distributed
      </li>
    </ol>
  );
};

export default Airdrop;
