import React, { useState,useEffect } from 'react';

export default function Converter() {
  const [jsonData, setJsonData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  function convertToJSON() {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const imageLink = document.getElementById('imageLink').value;
    const description = document.getElementById('description').value;
    const websiteLink = document.getElementById('websiteLink').value;
    const category = document.getElementById('category').value;

    //converting title to upper case
    const Upper_title = title.toUpperCase();

    const data = {
      title: Upper_title,
      imageLink: imageLink,
      description: description,
      websiteLink: websiteLink,
      category: category,
    };

    setJsonData(data);
  }

  function copyToClipboard() {
    const jsonOutput = document.getElementById('jsonOutput');
    const textArea = document.createElement('textarea');
    textArea.value = JSON.stringify(jsonData, null, 2);
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    // alert('JSON copied to clipboard!');
    setShowAlert(true);
  }
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 1000); // close the alert after 2 seconds

      return () => clearTimeout(timer); // cleanup on unmount
    }
  }, [showAlert]);

  return (
    <div>
      <div className="theme">
      <label className="flex cursor-pointer gap-2">
          <span className="label-text">Current</span> 
            <input type="checkbox" value="valentine" className="toggle theme-controller"/>
          <span className="label-text">valentine</span> 
      </label>
      </div>
      <h1 className='font-bold text-5xl '>TEXT TO JSON</h1>
      <p className='font-semibold text-4xl text-sky-600 m-6'>Convertor</p>

      <form onSubmit={convertToJSON}>
        <label className='mr-[90px] sm:my-7'> Title of the project</label>
        <input
          type='text'
          placeholder='title'
          id='title'
          className='input input-bordered input-primary w-full max-w-xs'
        />

        <br />
        <br />
        <br />

        <label className='my-6 mr-[35px] sm:my-7'> Description of the website</label>
        <textarea
          id='description'
          className='textarea textarea-info textarea-md w-full max-w-xs'
          placeholder='Description'
        ></textarea>

        <br />
        <br />
        <br />
        <label className='mr-[93px] sm:my-7'> Link for the image</label>
        <input
          type='text'
          id='imageLink'
          placeholder='image link'
          className='input input-bordered input-primary w-full max-w-xs'
        />

        <br />
        <br />
        <br />

        <label className='mr-[85px] sm:my-7'> Link for the website</label>
        <input
          type='text'
          id='websiteLink'
          placeholder='link'
          className='input input-bordered input-primary w-full max-w-xs'
        />

        <br />
        <br />
        <br />

        <label className='mr-[156px] sm:my-7'> Category</label>
        <input
          type='text'
          id='category'
          placeholder='free or premium'
          className='input input-bordered input-primary w-full max-w-xs'
        />

        <br />
        <br />
        <br />

        <button type='submit'
          onClick={convertToJSON}
          className='cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                  active:border-b-[2px] active:brightness-90 active:translate-y-[2px]'
        >
          Convert
        </button>

        <div id='jsonOutput' className='my-5'>
          {jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>}
        </div> <br /><br />

        {showAlert && <div>
          <div role="alert" className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Data is copied to clipboard</span>
          </div>
          
          </div>}
        
        <button onClick={copyToClipboard} className='btn btn-outline btn-primary px-8 my-6 mr-11'>
          COPY
        </button>
        

        <button type='reset' className='btn btn-warning btn-outline px-7'>RESET</button>
      </form>
    </div>
  );
}
