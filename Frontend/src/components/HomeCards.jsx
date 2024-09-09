import React from 'react'

const HomeCards = (props) => {
  return (
      <div className='w-80 h-auto rounded-3xl bg-white mt-10 ml-32 shadow-md'>
      <div>
        <img className='rounded-t-3xl h-36 w-full' src= {props.pic} alt="" />
      </div>
      <div className='p-3'>
        <h1 className='text-2xl font-bold text-black mb-2 font-nerko'>{props.content}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quibusdam iure totam eaque, voluptatem qui. Tenetur obcaecati expedita assumenda ratione praesentium, animi molestias ab i</p>
      </div>
      <button className='m-5 rounded-3xl border-green-500 border-2 bg-green-100 text-green-600 p-2 w-32'>
        DemoBtn
      </button>
      </div>

  )
}

export default HomeCards
