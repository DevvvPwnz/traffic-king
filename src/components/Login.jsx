import React from "react";
import { Link,useHistory}from 'react-router-dom'
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
  password: yup
    .string('Введите пароль')
    .min(8, 'Пароль должен состоять минимум из 8 символов')
    .required('Пароль обязателен'),

});



function Login() {
  

  const { login } = useAuth()
  const [error,setError] = React.useState("")
  const history = useHistory()





 

  const formik = useFormik({
    initialValues: {
      email: 'yourmail@example.com',
      password: '1234',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

    handleLogin(values)
   
    },
  });

 
 const  handleLogin = async (values)=>{
    try {
        setError("")
        await login(values.email,values.password)
        history.push("/dashboard")
      } catch {
        setError("Не верный email или пароль")
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
     <Link to="/reset-password" className="reset__password">Забыли пароль?</Link>
       <TextField
         fullWidth
         margin="normal"
         id="password"
         name="password"
         label="Пароль"
         type="password"
         value={formik.values.password}
         onChange={formik.handleChange}
         error={formik.touched.password && Boolean(formik.errors.password)}
         helperText={formik.touched.password && formik.errors.password}
         variant="outlined"
       />
      
       <Button size="large" color="primary" variant="contained" fullWidth type="submit">
        Войти
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

export default Login;
