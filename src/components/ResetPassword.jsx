import React from "react";
import { Link}from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

import {useFormik } from "formik"
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import { UilMultiply } from '@iconscout/react-unicons'


import { TextField,ThemeProvider } from "@material-ui/core";
import theme from './SignUp/theme'




const validationSchema = yup.object({
  email: yup
    .string('Введите email')
    .email('Введите правильный email')
    .required('Email обязателен'),

});



function ResetPassword() {
  

  const { resetPassword } = useAuth()
  const [error,setError] = React.useState("")
  const [message,setMsg] = React.useState("")
 





 

  const formik = useFormik({
    initialValues: {
      email: 'yourmail@example.com',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

    handleLogin(values)
   
    },
  });

 
 const  handleLogin = async (values)=>{
    try {
        setError("")
        await resetPassword(values.email)
       setMsg("Сообщение отправлено вам на почту")
      } catch {
        setError("Не верный email")
      }
}
    
  return (
    <section className="sign-up">
      <div className="container">
     <Link to="/" className="sign-up__icon"> <UilMultiply size="50px" /></Link>
      <div className="sign-up__form">
       <div className="sign-up__title">
           Вход
            
        </div>
       

     <form  onSubmit={formik.handleSubmit} autoComplete="off">
     <ThemeProvider theme={theme}>
      {message && <div className="form-msg">{message}</div>}
     <TextField
         fullWidth
         id="email"
         name="email"
         label="Email"
         value={formik.values.email}
         onChange={formik.handleChange}
         error={formik.touched.email && Boolean(formik.errors.email)}
         helperText={formik.touched.email && formik.errors.email}
         variant="outlined"
       />
     
      
       <Button m="10px"  size="large" color="primary" variant="contained" fullWidth type="submit">
        Сбросить пароль
       </Button>
     </ThemeProvider>
      <div className="form__error">
      {error && error}
      </div>
      </form>
        <div className="sign-up__info">
          У Вас нет аккаунта ? 
         <Link  to="/sign-up" className="sign-up__link" >Регистрация</Link>
        </div>
       </div>
      </div>
    </section>
  );
}

export default ResetPassword;
