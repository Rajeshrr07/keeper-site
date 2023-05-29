import React from 'react'
import './footer.css'

function footer() {
  const year = new Date().getFullYear();
  return (
    <div div className='footer'>
      <p>Copyright From © {year} </p>
    </div>
  )
}
export default  footer;