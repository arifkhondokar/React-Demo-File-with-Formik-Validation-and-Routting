import React from 'react'
import './error.css'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <section className='error_section'>
        <div className='error container'>
            <h1>ERROR : 404</h1>
            <h3>OPPS! PAGE NOT FOUND</h3>
            <p>Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem. </p>
            <Button variant="contained" disableElevation>
              <NavLink className="errorPageLink" to='/'>Back to Home</NavLink>
            </Button>
        </div>
    </section>
    </>
  )
}

export default Error