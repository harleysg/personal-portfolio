import Head from 'next/head'

import apiData from './api/index'

import Chevron from 'components/chevron'
import Header from 'components/layout/header'
import { IHomePage } from '@/interface/index'
import PageSEO from '@/component/seo'

export default function Home ({ data = IHomePage }) {
  return (
    <>
      <PageSEO
        title={data?.meta?.title}
        description={data?.meta?.description}
      />

      <Header menu={data?.menu} />

      <main className='o-main'>
        <Section theme='gray'>
          <MegaHeadding text={data?.sections?.welcome?.megaHeadding} />
          <div className='o-wrapper'>
            <Headding text={data?.sections?.welcome} />
            <div className='c-welcome_message'>
              <div className='c-welcome_message'>
                <h3 className='c-welcome_enfasis'>
                  Soy productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón.
                </h3>
              </div>
            </div>
          </div>
          <Chevron />
        </Section>
        {/* <Section theme='gray' intermedian='true' next-theme='gray'> </Section> */}
        <Section theme='gray' intermedian='true' next-theme='dark'>
          <div className='o-wrapper'>
            <Headding text={data?.sections?.projects} />
            <Slider
              mediaQuery={{ media: '(max-width: 576px)', label: 'isMobile' }}
              slides={data?.sections?.projects?.data?.images}
              className='isCustom'
            />
          </div>
        </Section>
        <Section id='typography' theme='dark'>
          <div className='o-wrapper'> </div>
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
