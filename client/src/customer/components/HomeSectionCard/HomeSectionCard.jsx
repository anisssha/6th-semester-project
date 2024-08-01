import React from 'react'

function HomeSectionCard() {
  
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>

<div className='h-[13rem] w-[10rem]'>
    <img className='object-cover object-top w-full h-full' src="https://saffana.pk/cdn/shop/files/aik-atelier-the-sari-edit-look-06-1_1024x1024.webp?v=1699861437" alt="" />

</div>
<div className='p-4'>
    <h3 className='text-lg font-medium text-gray-900'>Sari</h3>
    <p className='mt-2 text-sm textgry-500'>by Aik Atelier</p> 

</div>
    </div>
  )
}

export default HomeSectionCard 