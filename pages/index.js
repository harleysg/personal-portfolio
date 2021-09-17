import apiData from "../pages/api/hello";

import Head from 'next/head';

import Header from 'components/layout/header';
import Headding from 'components/layout/headding';
import Chevron from 'components/chevron';
import MegaHeadding from 'components/layout/HeaddingAccent';
import Linkedin from "components/seo/linkedin";

export default function Home({ data = {} }) {

  return (
    <>
      <Head>
        <title>harleysg portfolio</title>
        <meta name='description' content='Generated by harleysg portfolio' />
        <link rel='icon' href='/favicon.ico' />
        <Linkedin />
      </Head>

      <Header menu={data?.menu}/>

      <main className={'o-main'}>
        <section className={'o-section'} data-theme='gray'>
          <div className={'o-wrapper'}>
            <Headding text={data?.sections?.one} />
          </div>
          <MegaHeadding text='CubioStudio' />
          <Chevron />
        </section>
        <section className={'o-section'} data-theme='gold'>
          <div className={'o-wrapper'}>
            <Headding text={data?.sections?.one} />
          </div>
        </section>
        <section className={'o-section'}>
          <div className={'o-wrapper'}>
            <Headding text={data?.sections?.one} />
          </div>
        </section>
        <section className={'o-section'} data-theme='dark'>
          <div className={'o-wrapper'}>
            <Headding text={data?.sections?.one} />
          </div>
        </section>
        <section className={'o-section'} data-theme='dark'>
          <div className={'o-wrapper'}>
            <Headding text={data?.sections?.one} />
          </div>
        </section>
      </main>

      <div className={'mouse-tracker'}></div>
    </>
  );
}

export async function getServerSideProps() {
  const data = apiData();

  return { props: { data } };
}