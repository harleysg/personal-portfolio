import Link from 'next/link'

import apiData from './api/index'

import Chevron from '@/component/chevron'
import Header from '@/component/layout/header'
import { IHomePage } from '@/interface/index'
import Headding from '@/component/layout/headding'
import MegaHeadding from '@/component/layout/headdingAccent'
import PageSEO from '@/component/seo'
import Section from '@/component/layout/section'
import Card from '@/component/card'
import GridCard from '@/component/layout/gridCard'

export default function Home({
  sections = IHomePage.sections,
  menu,
  meta,
  author
}) {
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
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
            />
            <Card
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
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
            />
            <Card
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
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
            />
            <Card
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
                width: 256,
                height: 256
              }}
            />
            <Card
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
            data-foo={`${sections.projects.data.projects.length}`}
            scroll-enable={
              sections.projects.data.projects.length < 3 ? true : null
            }
          >
            {sections.projects.data &&
              sections.projects.data.projects.map(({ id, ...props }) => (
                <Card key={id} {...props} />
              ))}
          </GridCard>
        </Section>

        <Section theme="light" next-theme="gold" hiddenx="true" compact="true">
          <GridCard>
            <Card
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
            />
            <Card
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
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
            />
            <Card
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
                width: 200,
                height: 200
              }}
            />
            <Card
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_3.jpg',
                alt: 'Harley Santos Garzón',
                width: 256,
                height: 256
              }}
            />
            <Card
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
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
            />
            <Card
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
                width: 256,
                height: 256
              }}
            />
            <Card
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

        <Section theme="gold" next-theme="gold" hiddenx="true" compact="true">
          <GridCard>
            <Card
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
            />
            <Card
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
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
            />
            <Card
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
                width: 200,
                height: 200
              }}
            />
            <Card
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
              image={{
                url: 'https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_3.jpg',
                alt: 'Harley Santos Garzón',
                width: 256,
                height: 256
              }}
            />
            <Card
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
              options={{
                max_content: true
              }}
              mail="CTO - Desarrollador frontend"
              title="Harley Santos Garzón"
              name="Harley Santos Garzón"
              description="Productor multimedia, diseñador gráfico y desarrollador Frontend, Músico empirico y bajista de corazón."
            />
            <Card
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
                width: 256,
                height: 256
              }}
            />
            <Card
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

      <div className="mouse-tracker" />
    </>
  )
}

Home.propTypes = {
  menu: IHomePage.menu
}

export async function getServerSideProps() {
  const { sections, menu, meta, author } = apiData()
  const props = { sections, menu, meta, author }

  return { props }
}
