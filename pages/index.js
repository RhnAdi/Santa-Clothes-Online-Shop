import Head from 'next/head'
import Navbar from "../components/Navbar";
import CardShop from "../components/CardShop";
import CaurselBanner from "../components/CaurselBanner";
import Footer from "../components/Footer";
import Banner from '../components/Banner';
import FlashSale from '../components/FlashSale';

export default function Home(){
  return (
    <>
    <Head>
      <title>Santa Clothes | Home</title>
    </Head>
    <div>
      <Navbar />
      <div id='content' className='container mx-auto pt-28 md:pt-24 px-12'>
        <Banner />
        <CaurselBanner />
        <FlashSale />
        <div className='my-12'>
          <div className='mb-2 flex justify-between'>
            <p className='font-bold font-poppins'>Recommendation</p>
            <button className='font-poppins bg-gray-200 py-1 px-4 rounded-md'>More</button>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>  
            <CardShop productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (1).jpg' />
            <CardShop productName='Black Tshirt' productPrice='$14.99' productImage='tshirt (2).jpg' />
            <CardShop productName='Black Tshirt' productPrice='$14.99' productImage='tshirt (3).jpg' />
            <CardShop productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (4).jpg' />
            <CardShop productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (5).jpg' />
          </div>
        </div>
        <div className='my-12'>
          <div className='mb-2 flex justify-between'>
            <p className='font-bold font-poppins'>Mens</p>
            <button className='font-poppins bg-gray-200 py-1 px-4 rounded-md'>More</button>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            <CardShop productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (6).jpg' />
            <CardShop productName='Black Tshirt' productPrice='$14.99' productImage='tshirt (7).jpg' />
            <CardShop productName='Black Tshirt' productPrice='$14.99' productImage='tshirt (8).jpg' />
            <CardShop productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (9).jpg' />
            <CardShop productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (10).jpg' />
          </div>
        </div>
        <div className='my-12'>
          <div className='mb-2 flex justify-between'>
            <p className='font-bold font-poppins'>Womens</p>
            <button className='font-poppins bg-gray-200 py-1 px-4 rounded-md'>More</button>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            <CardShop productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (6).jpg' />
            <CardShop productName='Black Tshirt' productPrice='$14.99' productImage='tshirt (7).jpg' />
            <CardShop productName='Black Tshirt' productPrice='$14.99' productImage='tshirt (8).jpg' />
            <CardShop productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (9).jpg' />
            <CardShop productName='Black Hoodie' productPrice='$19.99' productImage='tshirt (10).jpg' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}