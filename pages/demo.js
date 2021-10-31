import Head from 'next/head'

import apiData from './api/demo'

import Chevron from 'components/chevron'
import Compare from 'components/layout/comparing'
import Header from 'components/layout/header'
import { IDemoPage } from '@/interface/index'
import PageSEO from '@/component/seo'

export default function DemoPage ({ data = IDemoPage }) {
  return (
    <>
      <PageSEO
        title={serverData?.meta?.title}
        description={serverData?.meta?.description}
      />

      <Header menu={data?.menu} />

      <main className='o-main'>
        <Section theme='gray'>
          {
            data?.sections?.welcome?.megaHeadding && <MegaHeadding text={data?.sections?.welcome?.megaHeadding} />
          }
          <div className='o-wrapper'>
            <div className='c-welcome_message'>
              <Headding text={data?.sections?.welcome} />
              <div className='c-welcome_details'>
                <div><strong>Industria: </strong><span>Graphic Design</span></div>
                <div><strong>Año: </strong><span>2020</span></div>
              </div>
            </div>
          </div>
          <Chevron />
        </Section>
        <Section theme='gray' intermedian='true' next-theme='gold'>
          <div className='o-wrapper'>
            <Headding text={data?.sections?.guide_gallery?.IHeading} />
            <Slider
              mediaQuery={{ media: '(max-width: 576px)', label: 'isMobile' }}
              slides={data?.sections?.guide_gallery?.data?.images}
              className='isCustom'
            />
          </div>
        </Section>
        <Section id='typography' theme='gold'>
          <div className='o-wrapper'>
            <Headding text={data?.sections?.guide_typo} />
            <Compare
              left={
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
                <div className='c-welcome_message'>
                  <h3 className='c-welcome_enfasis'>Diseño, construcción de marca y pieza promocionales.</h3>
                  <div className='c-welcome_details'>
                    <div><strong>Industria: </strong><span>Salud</span></div>
                    <div><strong>Año: </strong><span>2018</span></div>
                  </div>
                </div>
              }
            />
          </div>
        </Section>
        <Section id='form' theme='dark'>
          <div className='o-wrapper'>
            <Compare
              left={<Headding text={data?.sections?.guide_form} />}
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
              }
            />
          </div>
        </Section>
      </main>

      <div className='mouse-tracker' />
    </>
  )
}

export async function getServerSideProps () {
  const data = apiData()

  return { props: { data } }
}
