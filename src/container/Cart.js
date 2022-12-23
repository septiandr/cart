import React from 'react'
import Header from '../components/Header'
import ContainerProduct from '../components/ContainerProduct'
import AmountCart from '../components/AmountCart'

function Cart() {
  return (
    <main className='flex flex-col h-screen'>
        <Header/>
        <div className='md:px-0 md:flex-col px-12 mt-10 flex flex-row'>
            <ContainerProduct/>
            <AmountCart/>
        </div>
    </main>
  )
}

export default Cart