import React,{useState, useEffect} from 'react'
import { TrashIcon, HeartIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { addPrice } from '../redux/totalSlice'

function Item({data}) {
    const [count,setCount] = useState(0)
    const dispatch = useDispatch()
    const handleChange =(e)=>{
            setCount(e.target.value == "" ? 0 : e.target.value)
    }

    useEffect(() => {
        dispatch(addPrice(count * data.price))
    }, [count]);
  return (
    <div className='flex flex-row mt-10 md:flex-col md:px-1'>
            <img className='w-52 h-56 mr-11' src={require(`../assets/${data.img}`)}/>
            <div className=''>
                <div>
                    <p className='text-2xl font-semibold'>{data.name}</p>
                    <p className='mt-3 text-lg'>{data.description}</p>
                    <p className='mt-15 text-base'>COLOR : {data.color.toUpperCase()}</p>
                    <p className='mt-5 text-base'>SIZE : {data.size.toUpperCase()}</p>
                </div>
                <div className='md:-ml-2 flex flex-row mt-10 md:'>
                    <button className='flex flex-row'>
                        <TrashIcon className='w-10 text-gray-400 '/>
                        <label className='text-sm md:text-xs'>REMOVE ITEM</label>
                    </button>
                    <button className='flex flex-row ml-10'>
                        <HeartIcon className='w-10 text-gray-400'/>
                        <label className ='text-sm md:text-xs'>ADD TO WHISHLIST</label>
                    </button>
                </div>
            </div>
            <div>
                <div className='md:w-30 md:mx-8 flex flex-row justify-between text-center w-40 mt-8 border-2 rounded-lg border-black'>
                    <button className=' w-16 text-3xl font-bold mb-1' disabled={count> data.stock ? true : false}  onClick={()=>setCount(count + 1)}>+</button>
                    <input className='w-16 text-center border-black border-x-2 text-xl mt-1'name ="count" onChange={handleChange} value={count}></input>
                    <button className=' w-16 text-3xl font-bold mb-1' disabled ={ count ==0 ? true : false} onClick={()=>setCount(count - 1)}>-</button>
                </div>
                <div className=' md:absolute md:-mt-72 md:ml-40  text-2xl text-center mt-28'>
                    <p>${data.price * count}</p>
                </div>
            </div>
    </div>
  )
}

export default Item