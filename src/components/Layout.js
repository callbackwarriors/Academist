import Head from 'next/head'
<<<<<<< HEAD
import Header from './Header'
=======
import Footer from './Footer'


>>>>>>> develop

export default function Layout({ title, keywords, description, children }) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      {children}
      
    </>
  )
}

Layout.defaultProps = {
  title: 'Academist | Learning management system',
  description: 'Find the trendy courses and improve your knowledge',
  keywords: 'course, teacher, student',
}
