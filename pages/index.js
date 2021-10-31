
import apiData from './api/index'

import Chevron from '@/component/chevron'
import Header from '@/component/layout/header'
import { IHomePage } from '@/interface/index'
import Headding from '@/component/layout/headding'
import MegaHeadding from '@/component/layout/headdingAccent'
import PageSEO from '@/component/seo'
import Section from '@/component/layout/section'
import Slider from '@/component/slider/customSlider'

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
        <Section id='typography' theme='dark' />
      </main>

      <div className='mouse-tracker' />
    </>
  )
}

export async function getServerSideProps () {
  const data = apiData()

  return { props: { data } }
}
