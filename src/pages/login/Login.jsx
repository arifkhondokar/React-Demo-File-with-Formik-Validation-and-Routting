import { Box, Button, Grid, Modal } from '@mui/material'
import React, { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import AuthNavigate from '../../components/AuthNavigate'
import GoogleSvg from '../../assets/images/google.svg'
import { IoClose } from "react-icons/io5"
import { NavLink, useNavigate } from 'react-router-dom'
import { IoEye, IoEyeOffSharp } from "react-icons/io5"
import { useFormik } from 'formik'
import { validation } from "./LoginVali"
import ModalForm from '../../components/ModalForm'

const Login = () => {

  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: ''
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema : validation,
    onSubmit: (values, action) => {
        console.log(values);
        action.resetForm()
        navigate("/");
    }
  })

  let [showPassword, setShowPassword] = useState(false);
  let toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  let [openModal, setOpenModal] = useState(false);

  return (
    <>
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className='loginBox'>
            <SectionHeading style="authHeading" text="Login to your account!"/>
              <div className='loginBoxInner'>
                <div className='providerLogin'>
                  <img src={GoogleSvg} alt="goole icon" />
                  <span>Login with Google</span>  
                </div>
                <div className='formMain'>
                  <form className='form_container' method='post' 
                    onSubmit={formik.handleSubmit}>
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
                      <input type={showPassword ? 'text' : 'password'} name='password' id='password'  
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
                  <AuthNavigate style="loginAuth" text="Don’t have an account ?" link="/registration" linkText="Sign up"/>
                </div>
              <Button className='forgotText' onClick={() => setOpenModal(true)}>Forgot Password?</Button>
              </div>
          </div>
        </Grid>
      </Grid>
    </Box>

    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="forgot-password-modal"
      sx={{
        display: 'flex',
        p: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
        <Box
          sx={{
            position: 'relative',
            width: 400,
            bgcolor: '#0e95cabd',
            border: '2px solid #000',
            borderRadius: '15px',
            p: 3,
          }}
        >
          <ModalForm/>

          <div className='closeIcon'>
            <Button onClick={() => setOpenModal(false)}><IoClose /></Button>
          </div>
          <NavLink className="regText" to='/registration'>Back to Registration</NavLink>
        </Box>
    </Modal>
    </>
  )
}

export default Login


