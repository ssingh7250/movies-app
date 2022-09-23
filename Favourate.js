import React from 'react'

const Favourate = () => {
  return (
    <>
    <div className='mt-4 px=4 flex justify-center flex-wrap space-x-2'>
      
    <button className='text-lg p-1 px-2 hover:bg-blue-400 text-white m-2 rounded-xl 
    bg-gray-400 font-bold'>Geners</button>
    <button className='text-lg p-1 px-2 hover:bg-blue-400 text-white m-2 rounded-xl 
    bg-gray-400 font-bold'>action</button>
    </div>


    <div className='text-center'>
        <input  type='text'  placeholder='search' className='border border-2 p-1 m-1 text-center'/>
        <input  type="number"  placeholder='Rows' className='border border-2 p-1 m-1 text-center '/>

    </div>
    </>
  ) 
}

export default Favourate
