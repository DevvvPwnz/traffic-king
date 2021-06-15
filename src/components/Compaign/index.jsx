import React,{useMemo} from 'react'
import { TextField,ThemeProvider,Button,Select,MenuItem,InputLabel,
  Radio,RadioGroup,FormControlLabel,FormControl ,FormLabel} from "@material-ui/core";
import theme from '../SignUp/theme'
import countryList from 'react-select-country-list'
import './index.css'

function Compaign () {
    const [country,setCountry] = React.useState('')
    const [device,setDevice] = React.useState('')
    const [format,setFormat] = React.useState('')
    const options = useMemo(() => countryList().getData(), [])
  


    const handleChange = (e)=>{
       
      let name = e.target.name

       switch(name){

           case "country":
              setCountry(e.target.value)
           break

           case "format":
              setFormat(e.target.value)
           break

           case "device":
            setDevice(e.target.value)
          break

          default:
            return

       }  
      
    }

    return (

        
        <section className="compaign">
        <ThemeProvider theme={theme}>
         <form className="compaign__form" autoComplete="off" >

         <TextField
         fullWidth
         id="compaign-name"
         name="compaign-name"
         label="Название компании"
         
         variant="outlined"
       />
       
    
    
       <TextField
         fullWidth
         margin="normal"
         id="link"
         name="link"
         label="Рекламная ссылка"
         
         variant="outlined"
       />
        <div className="compaign-form__item">
        <InputLabel htmlFor="country">Выберите страну</InputLabel>
        </div>

       
        <Select
          labelId="country"
          id="country"
          value={country}
          onChange={handleChange}
          name="country"
          
        >
          {options.map((option)=>{
            return <MenuItem value={option.label}  key={option.label}>{option.label} </MenuItem>
         })}
          
        </Select>


        <div className="compaign-form__item">
        <InputLabel htmlFor="device">Устройства</InputLabel>
        </div>

        
        <Select
          labelId="device"
          id="device"
          value={device}
          onChange={handleChange}
          placeholder={device}
          name="device"
          
        >
           <MenuItem value="desktop">ПК</MenuItem>
           <MenuItem value="mobile">Мобильные</MenuItem>
           <MenuItem value="all">Все</MenuItem>
          
        </Select>

       
        <FormControl component="fieldset">
        <div className="compaign-form__item">
        <FormLabel component="legend">Формат рекламы</FormLabel>
        </div>

       
        <RadioGroup aria-label="gender" name="format" value={format} onChange={handleChange}>
          <FormControlLabel value="Push-уведомления" control={<Radio />} label="Push-уведомления" />
          <FormControlLabel value="Нативная реклама" control={<Radio />} label="Нативная реклама" />
          <FormControlLabel value="Кликандер" control={<Radio />} label="Кликандер" />
          <FormControlLabel value="Mix-трафик" control={<Radio />} label="Mix-трафик" />
        </RadioGroup>
      </FormControl>
    
       
       <Button size="large" color="primary" variant="contained" fullWidth type="submit">
         Cоздать компанию
       </Button>
         </form>
         </ThemeProvider>
        </section>
    )
}

export default React.memo(Compaign)
