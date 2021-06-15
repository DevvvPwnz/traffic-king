import {createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette:{
        primary:{
            main:"#ccae0f",
            contrastText:"#000"
        },
        text:{
            primary:"#0fbf93"
        }
    },
    overrides:{
        MuiFormLabel:{
          root:{
            color:"#fff",
           
          }
        },
        MuiOutlinedInput:{
            notchedOutline:{
                borderColor: "#fff",
                "&:hover": {
                    borderColor: "#fff"
                  },
                
            }
        },
        MuiFormHelperText:{
            root:{
                color: "#f44336"
            }
        },
        MuiButton:{
            root:{
                marginTop:"10px"
            }
        },
        MuiPaper:{
            root:{
                backgroundColor: "#686d6b",
                width:"300px",
                maxHeight:"500px"
            }
        },
        MuiAutocomplete: {
            option: {
              '&[data-focus="true"]': {
                backgroundColor: 'red',
              },
            },
          },
          MuiSelect:{
             icon:{
                color:"gold"
             }
          },
          MuiSvgIcon:{
              root:{
                  color:"gold"
              }
          }
    }
})

export default theme