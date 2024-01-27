import * as Yup from 'yup';

const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passwordRegex =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;


export const validation = Yup.object({
    email: Yup.string()
        .matches(emailRegex, "Invalid email address")
        .required('Please enter your email'),

    password: Yup.string()
        .matches(passwordRegex, "Password must minimum eight characters")
        .required('Password must Required'),
})