import React,{useState} from 'react'


const Pagination = ({proppage,gohead,godown}) => {

    

  return (
    <>
    <div className=' mb-4 text-2xl w-full justify-center flex'>
        <button className='p-2 border-2 border-indigo-500 text-indigo-500
         rounded-l-xl border-r-0' onClick={godown}>Previous</button>
        <button className='p-2 border-2 border-indigo-500 text-indigo-500 
        bg-gray-200'>{proppage}</button>
        <button className='p-2 border-2 border-indigo-500 text-indigo-500
          rounded-r-xl border-l-0'
          onClick={gohead}>Next</button>        


    </div>
    </>
  )
}

export default Pagination
