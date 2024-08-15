import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';

function CartItem() {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' 
                src='https://idaho-o.com/wp-content/uploads/2024/04/IMG_5594.jpeg'/>
            </div>

            <div className='ml-5 space-y-1'>
              <p className='font-semibold'>Sari for ladies black</p>
              <p className='opacity-70'>Size:l,Black</p>
              <p className='opacity-70 mt-2'>Seller:Cristan 2fashion</p>

              <div className="flex space-x-5 items-center text-gray-900 pt-6">
                <p className="font-semibold">Rs.500</p>
                <p className="opacity-50 line-through">Rs.500</p>
                <p className="text-green-600 font-semibold">5% Off</p>
              </div>
                 
            </div>

           

        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
              <div className='flex items-center space-x-2'>
                <IconButton >
                <RemoveCircleOutlineIcon/>
                </IconButton>
<span className='py-1 px-7 border rounded-sm '> 3</span>
<IconButton sx={{color:"RGB(145 85 253)"}} >
               <AddCircleOutlineIcon/>
                </IconButton>
               
              </div>
              <div>
                <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
              </div>

            </div>

    </div>
  )
}

export default CartItem;