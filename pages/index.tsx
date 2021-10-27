import Contact from '../components/Contact'
import Jumbotron from '../components/Jumbotron'
import Script from 'next/script'
import ProductList from "../components/ProductList"
import {IProduct} from "../components/Product"
import Head from 'next/head'
import {GetStaticProps} from 'next'
import iphone from '../public/iphone.png'


interface IproductListProps {
  products: IProduct[]
}

export default function Home({products}: IproductListProps){
  return (
    <div>
      <Head>
        <title>iPhone Shop</title>
        <link rel="preconnect" href="https://app.snipcart.com"/>
        <link rel="preconnect" href="https://cdn.snipcart.com"/>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
      </Head>
      <main>
        <Jumbotron />
        <ProductList products={products} />
        <Contact />
      </main>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
      <div hidden id="snipcart" data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx"></div>
    </div>
  )
}

export const products: IProduct[] = [
  {
    id: "1",
    name : "iPhone X",
    price : 300,
    description : "Superbe iPhone X comme neuf",
    url : '/api/products/iphonex',
    image: iphone
  },
  {
    id: "2",
    name : "iPhone XR",
    price : 320,
    description : "Superbe iPhone XR comme neuf",
    url : '/api/products/iphonexr',
    image: iphone
  },
  {
    id: "3",
    name : "iPhone XS",
    price : 250,
    description : "Superbe iPhone XS comme neuf",
    url : '/api/products/iphonexs',
    image: iphone
  },
]

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products
    }
  }
}
