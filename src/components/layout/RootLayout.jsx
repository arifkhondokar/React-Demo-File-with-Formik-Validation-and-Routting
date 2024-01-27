import { Box, Grid } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './layout.css'
import Button from '@mui/material/Button';
import LogoIcon from '../../assets/images/google.svg'
const RootLayout = () => {
  return (
    <>
    <Box>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <div className='navbar'>
                    <div className='navbarWrapper'>
                        <div className='navbarLogo'>
                            <div className='bnLogo'>
                                <img alt="logo" src={LogoIcon} />
                            </div>
                            <span>Brand Name</span>
                        </div>
                        <div className='navbarMain'>
                            <ul>
                                <li>
                                    <NavLink to='/'>home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/home001'>demo01</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/home002'>demo02</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/home003'>demo03</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/home004'>demo04</NavLink>
                                </li>
                            </ul>
                        </div>
                      
                        <div className='navbarLogin'>
                            <ul>
                                <li>
                                    <NavLink to='/login'>LOG IN</NavLink>
                                </li>
                                <li>
                                    <Button variant="outlined">Contact Us</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Outlet/>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default RootLayout