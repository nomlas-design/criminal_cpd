import '../styles/globals.scss'
import Head from "next/head";
import Layout from '../components/Layout'

import { ThemeProvider } from '../lib/themeContext';
import ThemeWrap from '../components/ThemeWrap';


function MyApp({ Component, pageProps, categories }) {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Varta:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
    <ThemeProvider>
      <ThemeWrap>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeWrap>
    </ThemeProvider>
  </>
}

export async function getServerSideProps() {

  const categoriesArray = await requestQuery('categories');

  return {
    props: {
      categories: categoriesArray
    }
  }
}

export default MyApp
