import React from 'react'
import Item from './Item'
import { useSelector } from 'react-redux'

function ContainerProduct() {
    const data = useSelector((state) => state.dataSlice.data)
    const count = data.length
    const cartItem = `Cart (${count} items)`

    return (
        <div className='md:mx-9 md:w-72  mx-32 w-7/12 shadow-xl py-10 my-14 '>
            <p className='text-gray-600 font-bold ml-10  text-xl' >{cartItem}</p>
            <div className='mx-10'>
                {data.map((data, i) => (
                    <Item data = {data} key = {i}/>
                ))}
            </div>
        </div>
    )
}

export default ContainerProduct