import React from 'react'
import "./style.css"
import Logo from "../../assets/images/olxlogo.png"
import {AiOutlineSearch} from 'react-icons/ai'

const index = () => {
  return (
    <div className='container'>
      
      <div>
        <img src={Logo} className='logo'/>
      </div>

      <div>
        <label>
        <AiOutlineSearch/>
          <input
            type="text"
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="text"
            placeholder='Find Cars, Mobile Phone and more...'
            />
            <AiOutlineSearch/>
        </label>
      </div>

      <div>
        Login
      </div>

      <div>
        Sell
      </div>

    </div>
  )
}

export default index
