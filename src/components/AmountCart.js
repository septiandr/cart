import React from 'react'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useSelector }from 'react-redux'

function AmountCart() {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const data = useSelector((state) => state.dataSlice.data)
  const totalSlice = useSelector((state) => state.totalSlice)
  console.log("🚀 ~ AmountCart ~ totalSlice", totalSlice)
  

  const total = data.map((data)=> {return data.price * data.count})
  const totalpaid = total.reduce((partialSum, a) => partialSum + a, 0)

  return (
    <div className='flex w-96 flex-col'>
      <div className='md:w-72 md:mx-9  w-96 shadow-xl px-7 py-10 mt-14 '>
        <label className='font-bold  text-xl'>The total amount of</label>
        <div className='flex flex-row justify-between mt-3'>
          <label>Temporary amount</label>
          <p>$16</p>
        </div>
        <div className='flex flex-row justify-between mt-4'>
          <label>Shipping</label>
          <p>FREE</p>
        </div>
        <div className='flex flex-row justify-between border-t-2 mt-5'>
          <label>The total amount of (including VAT)</label>
          <p>${totalpaid}</p>
        </div>
        <button className=' md:w-56 md:mt-10 md:ml-2 mx-10 my-4 bg-blue-600 w-4/5 flex h-14 rounded-lg font-bold text-2xl text-white justify-center align'>
          <p className='text-center align-middle mt-2'>GO TO CHECKOUT</p>
        </button>
      </div>
      <div className=' w-96 shadow-xl px-11 py-15 my-14 '>
        <Fragment className='font-bold text-sm mt-8' >
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              Add discount code (optional)
            </AccordionHeader>
            <AccordionBody>
              No discount today
              Sorry 
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  )
}

export default AmountCart