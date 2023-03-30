import Modal from './modal';

const GetFeatured = () => {
  return (
    <Modal id='get-featured' title='Get featured here 😍' Content={Content} />
  );
};

const Content = () => {
  return (
    <ol>
      <li>
        <strong>Create</strong> your NFT on OpenSea
      </li>
      <li>
        <strong>Post</strong> a link to your NFT on Twitter
      </li>
      <li>
        <strong>Include</strong> #InTimeClassic in your post
      </li>
      <li>We'll periodically review these NFTs and select one to feature</li>
    </ol>
  );
};

export default GetFeatured;
