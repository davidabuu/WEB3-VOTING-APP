import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/Header'
import IntroDiv from '../src/components/IntroDiv'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <div style={{backgroundColor:'#000'}}>
    <Header/>
    <IntroDiv/>
  </div>
  )
}
