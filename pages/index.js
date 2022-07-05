import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { requestQuery } from '../lib/staticApi.js';
import Menu from '../components/Menu.js';


export default function Home({ categories }) {
  return (
    <>
      <h1>goooooooooooo</h1>
      <Menu categories={categories} />
    </>
  )
}

export async function getStaticProps() {

  const categoriesArray = await requestQuery('categories');

  return {
    props: {
      categories: categoriesArray
    }
  }
}