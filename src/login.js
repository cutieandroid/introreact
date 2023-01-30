import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Container, Grid} from "@mui/material";
import Image from 'mui-image';
import {Paper} from "@mui/material";
//import './logincss.css';


const theme = createTheme({

    palette: {

        mytheme: {
            main: '#096C89',
            contrastText: '#ffffff'

        },
    },
});

const fonttheme = createTheme({
    typography: {
        fontFamily: ["lexend", "cursive"].join(","),
    },
});


export function cardview() {

    return (


            <Grid container>

                <Grid item  lg={6} xs={12} sm ={12} md={6} order={{lg:1,xs:2,sm:2,md:1}}
                >



                        <Box id={"leftgrid"}
                        >


                            <div id="card">

                                <Box id={"text"} textAlign={ "center"}>

                                        Welcome Back, John!


                                </Box>

                                <Box

                                >

                                    <ThemeProvider theme={fonttheme}>
                                        <typography>
                                            <TextField
                                                style={
                                                    {
                                                        width:"auto",
                                                        marginTop:"50px",
                                                        marginLeft:"80px"
                                                    }
                                                }

                                                id="emailet"
                                                label="email"
                                                margin={"normal"}
                                                variant="standard"
                                            />
                                        </typography>
                                    </ThemeProvider>

                                </Box>

                                <Box
                                >

                                    <ThemeProvider theme={fonttheme}>
                                        <typography>
                                            <TextField

                                                style={
                                                    {
                                                       width:"auto",
                                                        marginLeft:"80px"
                                                    }
                                                }
                                                id="passet"
                                                margin="normal"
                                                label="password"
                                                variant="standard">

                                            </TextField>

                                        </typography>
                                    </ThemeProvider>



                                </Box>

                                <Box

                                    >

                                    <ThemeProvider theme={fonttheme}>
                                        <typography>
                                            <Button
                                                style={{width:"auto",
                                                    marginLeft:"180px"
                                            }}
                                                id="fpbutton"
                                                variant="text"
                                                size="small"
                                            >
                                                Forgot Password ?
                                            </Button>

                                        </typography>
                                    </ThemeProvider>

                                </Box>

                                <Box


                                >

                                    <ThemeProvider theme={theme}>
                                        <Button
                                            style={{
                                                marginTop:"50PX",
                                                marginLeft:"150px"
                                            }}
                                            id="loginbtn" color="mytheme" variant="contained">
                                            Log In
                                        </Button>
                                    </ThemeProvider>
                                </Box>


                                <Box


                                    style={
                                        {
                                            marginLeft:"80px"
                                        }
                                    }




                                >

                                    <ThemeProvider theme={fonttheme} >
                                        <typography

                                        >

                                            Don't have an account?
                                            <Button

                                            variant={"text"}>

                                            SignUp

                                        </Button>

                                        </typography>
                                    </ThemeProvider>

                                </Box>

                            </div>

                        </Box>


                </Grid>

                <Grid item lg={6} xs={12} xl={6} md={6} order={{lg:2,xs:1,sm:1,md:2}}

                >


                        <Box id={"righgrid"}

                        >

                            <Box

                            >
                                <div id="logo">


                                </div>

                            </Box>

                            <Box
                            >
                                <div id="graphic1">

                                </div>

                            </Box>


                        </Box>




                </Grid>

            </Grid>






    )

}












