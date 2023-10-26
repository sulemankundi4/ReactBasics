import React from 'react'
import './Spinner.css';
function Spinner(props) {
  return (
    <div>
      <div className='flex flex-col items-center space-y-2'>
         <div class="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
         <p>Loading...</p>
      </div>

    </div>
  )
}



export default Spinner

