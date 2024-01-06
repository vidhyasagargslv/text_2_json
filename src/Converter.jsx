
import React from 'react'

export default function Converter() {
  return (
    <div className=''>
        <h1 className='font-bold text-5xl '>TEXT TO JSON</h1>
        <p className='font-semibold text-4xl text-sky-600 m-6'>Convertor</p>

        <form >
          <label className='mr-[90px] sm:my-7'> Title of the project</label>
             <input type="text" placeholder="title" className="input input-bordered input-primary w-full max-w-xs" />

          <br /><br /><br />

          <label className='my-6 mr-[35px] sm:my-7'> Description of the website</label>
             <textarea className="textarea textarea-info textarea-md w-full max-w-xs" placeholder="Description"></textarea>    

          <br /><br /><br />
          <label className='mr-[89px] sm:my-7'> link for the image</label>
             <input type="text" placeholder="image link" className="input input-bordered input-primary w-full max-w-xs" />

          <br /><br /><br />

          <label className='mr-[85px] sm:my-7'> link for the website</label>
             <input type="text" placeholder="link" className="input input-bordered input-primary w-full max-w-xs" />

          <br /><br /><br />

          <button onclick="convertToJSON()" className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                  active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
             Convert</button>

             





        </form>
        
    </div>
  )
}
