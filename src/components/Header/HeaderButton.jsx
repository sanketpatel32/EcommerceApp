import React from 'react'

const HeaderButton = (props) => {
  return (
        <button className="btn btn-link text-white text-decoration-none px-2" style={{fontSize: "1.1rem"}}>{props.children}</button>

  )
}

export default HeaderButton