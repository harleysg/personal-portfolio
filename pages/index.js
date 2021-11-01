
import apiData from './api/index'

import Chevron from '@/component/chevron'
import Header from '@/component/layout/header'
import { IHomePage } from '@/interface/index'
import Headding from '@/component/layout/headding'
import MegaHeadding from '@/component/layout/headdingAccent'
import PageSEO from '@/component/seo'
import Section from '@/component/layout/section'
import Slider from '@/component/slider/customSlider'

export default function Home ({ indexData = IHomePage }) {
  return (
    <>
      <PageSEO
        title={indexData?.meta?.title}
        description={indexData?.meta?.description}
      />

      <Header menu={indexData?.menu} />

      <main className='o-main'>

        <Section theme='gray'>
          <MegaHeadding text={indexData?.sections?.welcome?.megaHeadding} />

          <div className='o-wrapper'>
            <Headding text={indexData?.sections?.welcome} />
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
        <Section theme='gray' intermedian='true' next-theme='dark' wrapper='true'>
          <Headding text={indexData?.sections?.projects} />
          <Slider
            mediaQuery={{ media: '(max-width: 576px)', label: 'isMobile' }}
            slides={indexData?.sections?.projects?.data?.images}
            className='isCustom'
          />
        </Section>
        <Section id='typography' theme='dark' wrapper='true' />

      </main>

      <div className='mouse-tracker' />
    </>
  )
}

export async function getServerSideProps () {
  const indexData = apiData()

  return { props: { indexData } }
}
