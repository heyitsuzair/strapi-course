import React from 'react'
import {useRouter} from 'next/router'
const Slug = () => {

    const {query}=useRouter()
    const {slug}=query;
  return (
    <div>Slug: {slug}</div>
  )
}

export default Slug