import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import AuthNavigate from '../../components/AuthNavigate'
import { IoEye, IoEyeOffSharp } from "react-icons/io5"
import { validation } from './RegVali'
import { useFormik } from 'formik'

const Registration = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema : validation,
    onSubmit: (values, action) => {
        console.log(values);
        action.resetForm()
    }
  })

  let [showPassword, setShowPassword] = useState(false);
  let toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className='loginBox'>
            <SectionHeading style="authHeading" 
            text="Get started with easily register"
            />
            <span>Free register and you can enjoy it</span>
              <div className='loginBoxInner'>
                <div className='formMain'>
                  <form className='form_container' method='post' 
                  onSubmit={formik.handleSubmit}
                  >
                    <div>
                        <label htmlFor="firstName">First Name</label> <br />
                        <input type="text" 
                        name='firstName' 
                        id='firstName'  
                        onChange={formik.handleChange}
                        value={formik.values.firstName} 
                        placeholder='Enter your firstname'
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className='error_text'>{formik.errors.firstName}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label> <br />
                        <input type="text" 
                        name='lastName' 
                        id='lastName'  
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        placeholder='Enter your lastname'
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className='error_text'>{formik.errors.lastName}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="email">Email</label> <br />
                        <input type="text" 
                        name='email' 
                        id='email'  
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder='Enter your email address'
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='error_text'>{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div  className='passIcon'>
                        <label htmlFor="password">Password</label> <br />
                        <input type={showPassword ? 'text' : 'password'} 
                        name='password' 
                        id='password'  
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder='Enter your password'
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='error_text'>{formik.errors.password}</div>
                        ) : null}
                        <div>
                          <span onClick={toggleShowPassword}>
                            {showPassword ? <IoEye /> : <IoEyeOffSharp />}
                          </span>
                        </div>
                    </div>

                    <button type="submit" id='btn'>Submit</button>
                  </form>
                </div>
                <div>
                  <AuthNavigate style="loginAuth" text="Already  have an account ?" link="/login" linkText="Sign In" />
                </div>
              </div>
          </div>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Registration