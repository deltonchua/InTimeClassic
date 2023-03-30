import Head from 'next/head';

const Meta = ({
  title = defaults.title,
  description = defaults.description,
  keywords = defaults.keywords,
}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#fff' />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

const defaults = {
  title: 'InTime Classic',
  description: 'Your description here',
  keywords: 'InTime Classic',
};

export default Meta;
