import Head from 'next/head';

import apiData from "./api/hello";

import { IMenu, IMeta, ISection } from '@/interface/index'

import Header from 'components/layout/header';
import Section from 'components/layout/section';
import Headding from 'components/layout/headding';
import Chevron from 'components/chevron';
import MegaHeadding from 'components/layout/headdingAccent';
import Linkedin from "components/seo/linkedin";
import Compare from 'components/layout/comparing';

const IData = {
  meta: IMeta,
  menu: IMenu,
  sections: {
    welcome: ISection,
    guide_typo: ISection,
    guide_card: ISection,
    guide_gallery: ISection,
    guide_form: ISection,
  }
}

export default function Home({ data = IData }) {

  return (
    <>
      <Head>
        <title>{ data?.meta?.title }</title>
        <meta name='description' content={ data?.meta?.descriptions } />
        <link rel='icon' href='/favicon.ico' />
        <Linkedin />
      </Head>

      <Header menu={data?.menu}/>

      <main className={'o-main'}>
        <Section theme='gray'>
          {
            data?.sections?.welcome?.megaHeadding && <MegaHeadding text={ data?.sections?.welcome?.megaHeadding } />
          }
          <div className={'o-wrapper'}>
            <div className="c-welcome_message">
              <Headding text={data?.sections?.welcome} />
              <div className="c-welcome_details">
                <div><strong>Industria: </strong><span>Graphic Design</span></div>
                <div><strong>Año: </strong><span>2020</span></div>
              </div>
            </div>
          </div>
          <Chevron />
        </Section>
        <Section id='typography' theme='gold'>
          <div className={'o-wrapper'}>
          <Headding text={data?.sections?.guide_typo} />
            <Compare
              left= { 
                <>
                  <h1>Headding 1</h1>
                  <h2>Headding 2</h2>
                  <h3>Headding 3</h3>
                  <h4>Headding 4</h4>
                  <h5>Headding 5</h5>
                  <h6>Headding 6</h6>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </>
              }
              right={
                <div className="c-welcome_message">
                  <h3 className='c-welcome_enfasis'>Diseño, construcción de marca y pieza promocionales.</h3>
                  <div className="c-welcome_details">
                    <div><strong>Industria: </strong><span>Salud</span></div>
                    <div><strong>Año: </strong><span>2018</span></div>
                  </div>
                </div>
              }
            />
          </div>
        </Section>
        <Section id='form' theme='dark'>
          <div className={'o-wrapper'}>
            <Compare
              left={ <Headding text={data?.sections?.guide_card} /> }
              right={
                <form className='c-headding_align' onSubmit={e => e.preventDefault()}>
                  <div className='c-form_wrapper'>
                    <fieldset>
                      <legend>Inputs</legend>
                      <label>
                        text
                        <input type='text' />
                      </label>
                    </fieldset>
                    <fieldset>
                      <label>
                        option a
                        <input type='radio' name='example_2' />
                      </label>
                      <label>
                        option b
                        <input type='radio' name='example_2' />
                      </label>
                    </fieldset>
                    <fieldset>
                      <label>
                        option a
                        <input type='checkbox' name='example_3' />
                      </label>
                      <label>
                        option b
                        <input type='checkbox' name='example_3' />
                      </label>
                    </fieldset>
                  </div>
                  <div className='c-form_wrapper'>
                    <fieldset>
                      <legend>Buttons</legend>
                      <button>click me</button>
                    </fieldset>
                  </div>
                  <div className='c-form_wrapper'>
                    <fieldset>
                      <legend>Range</legend>
                      <input type='range' />
                    </fieldset>
                  </div>
                </form>
              }>
            </Compare>
          </div>
        </Section>
        <Section theme='dark'>
          <div className={'o-wrapper'}>
            <Headding text={data?.sections?.guide_form} />
          </div>
        </Section>
        <Section>
          <div className={'o-wrapper'}>
            <Headding text={data?.sections?.guide_gallery} />
          </div>
        </Section>
      </main>

      <div className={'mouse-tracker'}></div>
    </>
  );
}

export async function getServerSideProps() {
  const data = apiData();

  return { props: { data } };
}
