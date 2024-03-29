import Banner from '@/components/Banner'
import NewArrival from '@/components/NewArrival';
import {client} from '@/lib/sanityClient';
import { log } from 'console';
import { groq } from 'next-sanity'

export const revalidate = 10;

const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;
const newarrivalQuery = groq`*[_type == 'product' && position == 'New Arrival']{
  image,
  _id
} | order(_createdAt asc)`;

const HomePage = async () => {
  const banners = await client.fetch(bannerQuery)
  console.log(banners)
  const newArrivalProducts = await client.fetch(newarrivalQuery);
 
  return (
   <main className='text-sm overflow-hidden min-h-screen'>
    <Banner banners={banners}/>
    <NewArrival products={newArrivalProducts}/>
   </main>
  )
}

export default HomePage