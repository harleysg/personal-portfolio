import previewImage from '@/images/preview.png'


export default function LinkedinMetaTag() {
  return (
    <>
      <meta property='og:title' content='Personal portfolio' />
      <meta property='og:image' content={previewImage} />
      <meta
        property='og:description'
        content='based on University project design Cudio Studio'
      />
      <meta
        property='og:url'
        content='https://github.com/harleysg/personal-portfolio'
      />
    </>
  );
}
