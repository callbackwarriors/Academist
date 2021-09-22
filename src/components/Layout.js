import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import LatestCourses from './LatestCourses'

export default function Layout({ title, keywords, description, children }) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header/>
      {children}
      <LatestCourses/>
      <Footer/>
    </>
  )
}

Layout.defaultProps = {
  title: 'Academist | Learning management system',
  description: 'Find the trendy courses and improve your knowledge',
  keywords: 'course, teacher, student',
}
