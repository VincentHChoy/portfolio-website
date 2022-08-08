import React from 'react'
import './Contact.css'

function Contact(props) {
  return(
   props.trigger ? 
  <div className='popup'>
    <div className='popup-inner'>
      <form action="/action_page.php">
        <label for="email">Enter your email:</label>
        <input type="email" id="email" name="email"/>
        <input type="submit"/>
      </form>
    </div>
  </div> : ""
)}

export default Contact