import Banner from '@/components/Banner'
import {client} from '@/lib/sanityClient';
import { groq } from 'next-sanity'

const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;

const HomePage = async () => {
  const banners = await client.fetch(bannerQuery)
  console.log(banners)
  return (
   <main className='text-sm overflow-hidden min-h-screen'>
    <Banner banners={banners}/>
   </main>
  )
}

export default HomePage