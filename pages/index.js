import Link from 'next/link'
import { useRef, useState } from 'react'

import apiData from './api/index'

import { IHomePage } from '@/interface/index'

import Chevron from '@/component/chevron'
import Header from '@/component/layout/header'
import Headding from '@/component/layout/headding'
import MegaHeadding from '@/component/layout/headdingAccent'
import PageSEO from '@/component/seo'
import Section from '@/component/layout/section'
import Card from '@/component/card'
import GridCard from '@/component/layout/gridCard'
import Portal from '@/component/portal'

export default function Home({
  sections = IHomePage.sections,
  menu,
  meta,
  author,
  repositories = {}
}) {
  const portalRef = useRef()

  const [mountPortal, setMountPortal] = useState(false)
  const [previousFocus, setPreviousFocus] = useState(null)

  const handlePortal = (id) => {
    setPreviousFocus(id)
    setMountPortal(true)
  }

  const closePortal = () => {
    previousFocus.focus()
    setMountPortal(false)
  }

  return (
    <>
      <PageSEO title={meta?.title} description={meta?.description} />

      <Header menu={menu} />

      <main className="o-main">
        <Section theme="gray">
          <MegaHeadding text={sections?.welcome?.megaHeadding} />

          <div className="o-wrapper">
            <div className="c-intro">
              <figure className="c-avatar-sprite" />
              <div>
                <Headding text={sections?.welcome} main={true} />
                <div className="c-welcome_message">
                  <h3 className="c-welcome_enfasis">
                    {sections?.welcome?.data?.author?.description}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <Chevron />
        </Section>

        <Section
          anchor={sections?.projects?.anchor}
          theme="dark"
          next-theme="dark"
          hiddenx="true"
        >
          <div className="o-wrapper">
            <Headding text={sections?.projects} />
          </div>
          <GridCard>
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 150,
                height: 150
              }}
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 150,
                height: 150
              }}
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 150,
                height: 150
              }}
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 150,
                height: 150
              }}
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 150,
                height: 150
              }}
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 150,
                height: 150
              }}
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 150,
                height: 150
              }}
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 300,
                height: 300
              }}
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 150,
                height: 150
              }}
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 150,
                height: 150
              }}
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 150,
                height: 150
              }}
            />
            <Card
              callback={handlePortal}
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg',
                alt: 'Harley Santos Garzón',
                width: 150,
                height: 150
              }}
            />
          </GridCard>
        </Section>

        <Section theme="gray" next-theme="light" hiddenx="true" compact="true">
          <GridCard
            data-foo={`${repositories.length}`}
            scroll-enable={
              repositories.length < 3 ? true : null
            }
          >
            {sections.projects.data &&
              repositories.map(({ id, ...props }) => !props.fork
                ? (
                  <Card {...props} key={id} callback={handlePortal}/>
                )
                : null)}
          </GridCard>
        </Section>

        <Section
          anchor="footer"
          theme="gold"
          wrapper="true"
          as="footer"
          style={{ '--layout-section-min-height': 'auto !important' }}
        >
          <Link href={'https://github.com/harleysg'}>
            <a target="_blank">By {author.name}</a>
          </Link>
        </Section>
      </main>

      <Portal previousFocus={previousFocus} ref={portalRef} mounted={mountPortal} callback={() => closePortal({ status: false })}>
        <p>Next Js Portal by LearnBestCoding</p>
      </Portal>

      <div className="mouse-tracker" />
    </>
  )
}

Home.propTypes = {
  menu: IHomePage.menu
}

export async function getServerSideProps() {
  const { sections, menu, meta, author, repositories } = apiData()
  const _respositories = await repositories

  const props = { sections, menu, meta, author, repositories: _respositories }

  return { props }
}
