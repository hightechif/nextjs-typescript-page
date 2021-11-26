import type { NextPage } from 'next'
import { Meta } from '../components/Meta'
import { Hero } from '../layout/Hero'
import { Header } from '../layout/Header'
import { Product } from '../layout/Product'
import { Engagement } from '../layout/Engagement'
import { CTA } from '../layout/CTA'
import { Category } from '../layout/Category'
import { Footer } from '../layout/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Meta />

      <Header />
      <Hero />
      <Product />
      <Engagement />
      <CTA />
      <Category />
      <Footer />
      
    </>
  )
}

export default Home
