import React from 'react'
import './style.css'

const todo = () => {
  return (
    <>
      <div className="main_div">
          <div className="child_div">
            <figure>
                <img src="./images/PngItem_2456104.png" alt="Todologo"/>
                <figcaption>Add Your List Here 👍</figcaption>
            </figure>

            <div className="addItems">
                <input type="text" placeholder='Add Items'
                 className='form_control'/>
            </div>

            
          </div>
      </div>
    </>
  )
}

export default todo