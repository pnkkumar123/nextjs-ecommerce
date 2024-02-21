"use client";

import {NextStudio} from 'next-sanity/studio';
import sanityConfig from '../../../../sanity.config';

function studio() {
  return (
    <NextStudio config={sanityConfig}/>
  )
}

export default studio