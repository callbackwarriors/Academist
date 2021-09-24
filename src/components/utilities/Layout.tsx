import Head from 'next/head'
import Header from './Header'

interface ILayout {
  title: string;
  keywords: string;
  description:string;
  children: any,
}

export default function Layout({ title, keywords, description, children }:ILayout) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header/>
      {children}
    </>
  )
}

Layout.defaultProps = {
  title: 'Academist | Learning management system',
  description: 'Find the trendy courses and improve your knowledge',
  keywords: 'course, teacher, student',
}
