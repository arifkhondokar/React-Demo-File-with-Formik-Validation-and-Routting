import { useFormik } from 'formik';
import React from 'react';
import { Typography } from '@mui/material';
import { validation } from './ModalFormVali';

const ModalForm = () => {
  const initialValues = {
    email: ''
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: (values, action) => {
      console.log(values);
      // You can handle form submission logic here
      action.resetForm();
    },
  });

  return (
    <>
      <Typography id="forgot-password-modal" variant="h6" component="h2">
        Forgot Password
      </Typography>

      <div>
        <form method="post" onSubmit={formik.handleSubmit}>
          <div className='modal-box'>
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              name="email"
              id="email"
              placeholder='Enter you email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error_text">{formik.errors.email}</div>
            ) : null}
          </div>
          <button type="submit" id="btn">
            SEND LINK
          </button>
        </form>
      </div>
    </>
  );
};

export default ModalForm;
