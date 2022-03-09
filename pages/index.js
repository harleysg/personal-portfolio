import Link from 'next/link'

import apiData from './api/index'

import Chevron from '@/component/chevron'
import Header from '@/component/layout/header'
import { IHomePage } from '@/interface/index'
import Headding from '@/component/layout/headding'
import MegaHeadding from '@/component/layout/headdingAccent'
import PageSEO from '@/component/seo'
import Section from '@/component/layout/section'
import Slider from '@/component/slider/customSlider'

export default function Home ({
  sections = IHomePage.sections,
  menu,
  meta,
  author
}) {
  return (
    <>
      <PageSEO
        title={meta?.title}
        description={meta?.description}
      />

      <Header menu={menu} />

      <main className='o-main'>

        <Section theme='gray'>
          <MegaHeadding text={sections?.welcome?.megaHeadding} />

          <div className='o-wrapper'>
            <div className='c-intro'>
              <figure className='c-avatar-sprite' />
              <div>
                <Headding text={sections?.welcome} main={true} />
                <div className='c-welcome_message'>
                  <h3 className='c-welcome_enfasis'>
                    {sections?.welcome?.data?.author?.description}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <Chevron />
        </Section>

        <Section anchor={sections?.projects?.anchor} theme='dark' wrapper='true' >
          <Headding text={sections?.projects} />
          <Slider
            mediaQuery={{ media: '(max-width: 576px)', label: 'isMobile' }}
            slides={sections?.projects?.data?.images}
            className='isCustom'/>
        </Section>

        <Section
          theme='gray'
          intermedian='true'
          next-theme='dark'
          wrapper='true'
        />

        <Section
          anchor='footer'
          theme='gold'
          wrapper='true'
          as='footer'
          style={{ '--layout-section-min-height': 'auto'}}>
          <Link href={'https://github.com/harleysg'}>
            <a target='_blank'>By {author.name}</a>
          </Link>
        </Section>

      </main>

      <div className='mouse-tracker' />
    </>
  )
}

Home.propTypes = {
  menu: IHomePage.menu
}

export async function getServerSideProps () {
  const {
    sections,
    menu,
    meta,
    author
  } = apiData()

  return { props: {
    sections,
    menu,
    meta,
    author
  } }
}
