
import apiData from '../api/projects'

import Compare from '@/component/layout/comparing'
import Header from '@/component/layout/header'
import { IProjectPage } from '@/interface/index'
import Headding from '@/component/layout/headding'
import MegaHeadding from '@/component/layout/headdingAccent'
import PageSEO from '@/component/seo'
import Section from '@/component/layout/section'
import Slider from '@/component/slider/customSlider'
import Video from '@/component/video'

export default function ProjectPage({ serveData = IProjectPage }) {
  return (
    <>
      <PageSEO
        title={serveData?.meta?.title}
        description={serveData?.meta?.description}
      />

      <Header menu={serveData?.menu} />

      <main className="o-main">
        <Section theme="gray">
          <MegaHeadding text={serveData?.sections?.intro?.megaHeadding} />
          <div className="o-wrapper">
            <div className="c-welcome_message">
              <Compare
                left={
                  <Headding text={serveData?.sections?.intro} />
                }
                right={
                  <div className="c-welcome_message">
                    <h3 className="c-welcome_enfasis">
                      Rediseño de marca, estrategía comunicación, plan de social media, packaging discografía y elementos de mercadeo.
                    </h3>
                    <div className="c-welcome_details">
                      <div><strong>Industry: </strong><span>Music</span></div>
                      <div><strong>Year: </strong><span>2015</span></div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </Section>
        <Section theme="gray" intermedian="true" next-theme="gold">
          <div className="o-wrapper">
            <Slider
              mediaQuery={{ media: '(max-width: 576px)', label: 'isMobile' }}
              slides={serveData?.sections?.preview?.data?.images}
              className="isCustom"
            />
            <Video
              poster={serveData?.sections?.preview?.data?.videos[0].poster}
              sources={serveData?.sections?.preview?.data?.videos[0].sources}
            />
          </div>
        </Section>
        <Section theme="gold" />
      </main>

      <div className="mouse-tracker" />
    </>
  )
}

export async function getServerSideProps() {
  const serveData = apiData()

  return { props: { serveData } }
}
