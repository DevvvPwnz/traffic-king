import React from 'react'
import { Link}from 'react-router-dom'
import './index.scss'
import { TextField, ThemeProvider,Button, makeStyles } from "@material-ui/core";
import { UilMultiply } from '@iconscout/react-unicons'
import theme from '../SignUp/theme'

const useStyles = makeStyles({
    root: {
      marginBottom:"10px",
       
    },
    secondary:{
        '& .MuiInputBase-root':{
              
            minHeight:200,
        }
    }
  });


function SupportForm({closeIcon}) {

const classes = useStyles();

    return (
        <section className="support-page">
            {!closeIcon &&  <Link to="/" className="support-icon"> <UilMultiply size="50px" /></Link>}
            <div className="support-form">
                <form>
                <ThemeProvider theme={theme}>
                      <TextField
                      m={10}
                        fullWidth
                        id="email"
                        name="email"
                        label="Email" 
                        variant="outlined"
                        className={classes.root}
                      />

                     <TextField
                        m="10px"
                        fullWidth
                        id="message"
                        name="message"
                        label="Введите сообщение"
                        multiline
                        className={classes.secondary}
                        variant="outlined"
                      />
                      <Button
                        m="10px"
                        size="large"
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                      >
                        Отправить
                      </Button>
                    </ThemeProvider>
                </form>
          
            </div>

        </section>
    )
}

export default SupportForm
