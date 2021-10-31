import OGTags from '@/component/seo/og'
import Head from '@/component/head'

export default function PageSEO ({
  title,
  description
}) {
  return (
    <>
      <Head title={title} {...description} />
      <OGTags title={title} {...description} />
    </>
  )
}
