import React from 'react'
import logo from '@/assets/logoLight.png';
import Image from 'next/image';
import Link from 'next/link';


const StudioHeader = (props:any) => {
  return (
    <div>
        <div className='p-5 bg-black'>
            
           <Image src={logo} alt="logo" className='w-24'/>
            
      
        </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioHeader