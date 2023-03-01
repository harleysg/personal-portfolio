import OGTags from '@/component/seo/og'
import Head from '@/component/head'

export default function PageSEO(props) {
  const { title, description } = props

  return (
    <>
      <Head title={title} {...description} />
      <OGTags
        title={title}
        description={description}
        {...props}
      />
    </>
  )
}
