import React from 'react'
import { Link } from 'react-router-dom'

const HeaderButton = (props) => {
  return (
       <button 
  className="btn btn-link text-white text-decoration-none px-2" 
  style={{ fontSize: "1.1rem", cursor: "pointer" }}
>
  <Link to={props.to} className="text-white text-decoration-none">
    {props.children}
  </Link>
</button>


  )
}

export default HeaderButton